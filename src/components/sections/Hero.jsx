import React, { useState, useRef } from 'react'
import Monster from '../../assets/monster.png'
import Apple from '../../assets/images/logos/bad-apple-logo.png'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { flavors, getFlavorByIndex } from '../../data/flavors'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const currentFlavor = getFlavorByIndex(currentIndex) || flavors[0];

  const scrollToIndex = (index) => {
    const boundedIndex = Math.max(0, Math.min(index, flavors.length - 1));
    setCurrentIndex(boundedIndex);

    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth;
      container.scrollTo({ left: boundedIndex * cardWidth, behavior: 'smooth' });
    }

    return getFlavorByIndex(boundedIndex);
  }

  const nextSlide = () => {
    const newIndex = Math.min(currentIndex + 1, flavors.length - 1);
    return scrollToIndex(newIndex);
  }

  const prevSlide = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    return scrollToIndex(newIndex);
  }

  return (
    <section>
      <div className='min-h-[calc(100vh-5.5rem)] min-w-screen bg-[linear-gradient(125deg,#111111_10%,#73191A_75%,#D52124_100%)] items-center grid grid-cols-2'>

        {/* Infos */}
        <div>
          <div className='flex flex-col'>
            <img src={Apple} />
            <div>
              <h1 className='text-8xl'>{currentFlavor.name}</h1>
              <div className='text-xl opacity-75'>
                <p>
                  FLAVOR PROFILE :
                </p>
                <p>
                  {currentFlavor.description || 'Classic flavor description goes here.'}
                </p>
              </div>
            </div>
            <button className='bg-white w-44 h-16 text-black rounded-xl'>
              VER NA LOJA
            </button>
          </div>

          {/* Navigation */}
          <nav className='flex '>
            {flavors.length && (
              <div className='flex items-center justify-center gap-2 mt-8'>
                {Array.from({ length: Math.max(0, flavors.length) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`transition-all duration-300 rounded-full ${index === currentIndex
                      ? 'bg-white w-8 h-4' : 'bg-white/30 w-4 h-4 hover:bg-white/50'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}

            <div className='flex gap-12'>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className='flex items-center justify-center w-16 h-16 bg-white/50 border border-white opacity-50 rounded-full cursor-pointer'
                aria-label='Previous flavor'
              >
                <ChevronLeft className='w-6 h-6 text-black' />
              </button>

              <button
                onClick={nextSlide}
                disabled={currentIndex >= flavors.length - 1}
                className='flex items-center justify-center w-16 h-16 bg-white border border-white opacity-50 rounded-full cursor-pointer'
                aria-label='Next flavor'
              >
                <ChevronRight className='w-6 h-6 text-black' />
              </button>
            </div>
          </nav>
        </div>

        {/* Images */}
        <div className='w-screen' >

          {/* Foreground content */}
          <div className="relative z-10">

            <img src={currentFlavor.img} alt="" />

          </div>
        </div>

      </div>

      <div className="bg-black text-white overflow-hidden w-full" role="region" aria-label="mensagem rolante">
        <div className="inline-block whitespace-nowrap animate-[marquee_5s_linear_infinite] will-change-transform py-3">
          <span className="inline-block font-bold tracking-[0.12em] text-6xl px-4">Unleash The Beast! -</span>
          <span className="inline-block font-bold tracking-[0.12em] text-6xl px-4">Unleash The Beast! -</span>
          <span className="inline-block font-bold tracking-[0.12em] text-6xl px-4">Unleash The Beast! -</span>
          <span className="inline-block font-bold tracking-[0.12em] text-6xl px-4">Unleash The Beast! -</span>
          <span className="inline-block font-bold tracking-[0.12em] text-6xl px-4">Unleash The Beast! -</span>
          <span className="inline-block font-bold tracking-[0.12em] text-6xl px-4">Unleash The Beast! -</span>
        </div>
      </div>
    </section>
  )
}

export default Hero