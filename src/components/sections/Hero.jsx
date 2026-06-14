import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Monster from '../../assets/monster.png'
import { flavors, getFlavorByIndex } from '../../data/flavors'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentFlavor = getFlavorByIndex(currentIndex) || flavors[0];

  const wrapIndex = (index) => {
    if (flavors.length === 0) return 0;
    return ((index % flavors.length) + flavors.length) % flavors.length;
  }

  const scrollToIndex = (index) => {
    const wrappedIndex = wrapIndex(index);
    setCurrentIndex(wrappedIndex);
    return getFlavorByIndex(wrappedIndex);
  }

  const nextSlide = () => scrollToIndex(currentIndex + 1);
  const prevSlide = () => scrollToIndex(currentIndex - 1);

  const nextFlavor = getFlavorByIndex(wrapIndex(currentIndex + 1)) || flavors[0];

  return (
    <section>
      <div
        className='min-h-[calc(100vh-5.5rem)] min-w-screen items-center grid grid-cols-2 px-32'
        style={{ background: currentFlavor.background }}
      >

        {/* Infos */}
        <div>
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
                className='flex items-center justify-center w-16 h-16 bg-white/50 border border-white rounded-full cursor-pointer transition-opacity duration-200 hover:opacity-100'
                aria-label='Previous flavor'
              >
                <ChevronLeft className='w-6 h-6 text-black' />
              </button>

              <button
                onClick={nextSlide}
                className='flex items-center justify-center w-16 h-16 bg-white border border-white rounded-full cursor-pointer transition-opacity duration-200 hover:opacity-100'
                aria-label='Next flavor'
              >
                <ChevronRight className='w-6 h-6 text-black' />
              </button>
            </div>
          </nav>
        </div>

        {/* Images */}
        <div className='w-screen/2 relative overflow-hidden'>
          <div
            className='absolute inset-0 bg-no-repeat bg-center bg-contain opacity-20 scale-118 -bottom-15 -left-5'
            style={{backgroundImage: `url(${Monster})`}}
          />

          <div className="relative z-10 flex items-center gap-5 justify-end -translate-x-10 py-12">
            <div className='flex flex-col items-center gap-4'>
              <img src={currentFlavor.imgCan} alt={currentFlavor.name} className='max-w-50' />
            </div>

            <div className='flex flex-col items-center gap-4 opacity-80'>
              <img src={nextFlavor.imgCan} alt={nextFlavor.name} className='max-w-35' />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero