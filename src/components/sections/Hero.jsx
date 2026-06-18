import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ChevronLeft, ChevronRight, Divide } from 'lucide-react';
import Monster from '../../assets/monster.png'
import { flavors, getFlavorByIndex } from '../../data/flavors'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayCurrentIndex, setDisplayCurrentIndex] = useState(0);
  const [displayTargetIndex, setDisplayTargetIndex] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isButtonLocked, setIsButtonLocked] = useState(false);

  const currentCanRef = useRef(null);
  const nextCanRef = useRef(null);
  const currentIndexRef = useRef(0);

  const currentFlavor = getFlavorByIndex(displayCurrentIndex) || flavors[0];

  const wrapIndex = (index) => {
    if (flavors.length === 0) return 0;
    return ((index % flavors.length) + flavors.length) % flavors.length;
  }

  const animateCanChange = (direction, callback) => {
    const tl = gsap.timeline({
      onComplete: callback
    });

    if (direction === 'next') {
      tl.to(nextCanRef.current, {
        x: -220,
        scale: 1.33,
        opacity: 1,
        duration: 0.4,
        ease: 'back.in'
      }, 0);

      tl.to(currentCanRef.current, {
        opacity: 0,
        duration: 0.3
      }, 0);

    } else {
      tl.to(currentCanRef.current, {
        x: 220,
        scale: 0.75,
        opacity: 0.8,
        duration: 0.4,
        ease: 'back.in'
      }, 0);

      tl.to(nextCanRef.current, {
        opacity: 0,
        duration: 0.3
      }, 0);

    }
  };

  const scrollToIndex = (index, direction = 'next') => {
    if (isButtonLocked) return;
    setIsButtonLocked(true);

    const wrappedIndex = wrapIndex(index);
    setDisplayTargetIndex(wrappedIndex);

    animateCanChange(direction, () => {
      gsap.set([currentCanRef.current, nextCanRef.current], {
        x: 0,
        scale: 1,
        opacity: 1,
        clearProps: 'all'
      });

      setCurrentIndex(wrappedIndex);
      setDisplayCurrentIndex(wrappedIndex);
      setDisplayTargetIndex(wrapIndex(wrappedIndex + 1));
      setTimeout(() => setIsButtonLocked(false), 500);
    });

    return getFlavorByIndex(wrappedIndex);
  }

  const nextSlide = () => scrollToIndex(currentIndex + 1, 'next');
  const prevSlide = () => scrollToIndex(currentIndex - 1, 'prev');

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      scrollToIndex(currentIndexRef.current + 1, 'next');
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextFlavor = getFlavorByIndex(displayTargetIndex) || flavors[0];

  return (
    <section
      className='h-[calc(100vh-5.5rem)] w-screen items-center grid grid-cols-2 px-32'
      style={{ background: currentFlavor.background }}
    >
      {/* Infos */}
      <div>
        {/* Main Infos */}
        <div className='flex flex-col gap-4'>
          <img src={currentFlavor.imgLogo} alt='Logo do Sabor da Monster' className='h-32 max-w-64' />
          <div>
            <h1 className='text-8xl'>{currentFlavor.name}</h1>
            <div className='opacity-75 mb-8'>
              <p>
                SOBRE O SABOR:
              </p>
              <p>
                {currentFlavor.description}
              </p>
            </div>
          </div>
          <button className='bg-white w-42 h-14 text-black rounded-xl'>
            VER NA LOJA
          </button>
        </div>

        {/* Navigation */}
        <nav className='flex justify-between items-end w-100'>
          {flavors.length && (
            <div className='flex items-center justify-center gap-2 mt-8'>
              {Array.from({ length: Math.max(0, flavors.length) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  disabled={isButtonLocked}
                  className={`transition-all duration-300 rounded-full ${index === currentIndex
                    ? 'bg-white w-8 h-4' : 'bg-white/30 w-4 h-4 hover:bg-white/50'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          <div className='flex gap-1'>
            <button
              onClick={prevSlide}
              disabled={isButtonLocked}
              className={'flex items-center justify-center w-16 h-16 bg-white/50 border border-white rounded-full transition-opacity duration-200 hover:opacity-100 cursor-pointer'}
              aria-label='Previous flavor'
            >
              <ChevronLeft className='w-6 h-6 text-black' />
            </button>

            <button
              onClick={nextSlide}
              disabled={isButtonLocked}
              className={'flex items-center justify-center w-16 h-16 bg-white border border-white rounded-full transition-opacity duration-200 hover:opacity-100 cursor-pointer'}
              aria-label='Next flavor'
            >
              <ChevronRight className='w-6 h-6 text-black' />
            </button>
          </div>
        </nav>
      </div>

      {/* Images */}
      <div className='w-screen/2 h-[calc(100vh-5.5rem)] relative overflow-hidden flex items-center justify-end'>
        <div
          className='absolute inset-0 bg-no-repeat bg-center bg-contain opacity-20 scale-120 -bottom-15 -left-5'
          style={{ backgroundImage: `url(${Monster})` }}
        />

        <div className="relative z-10 flex items-center gap-5 py-12">
          <div
            ref={currentCanRef}
            className='flex flex-col items-center gap-4'
            style={{ opacity: 1 }}
          >
            <img src={currentFlavor.imgCan} alt={currentFlavor.name} className='max-w-50' />
          </div>

          <div
            ref={nextCanRef}
            className='flex flex-col items-center gap-4'
            style={{ opacity: 0.8 }}
          >
            <img src={nextFlavor.imgCan} alt={nextFlavor.name} className='max-w-50 scale-75' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero