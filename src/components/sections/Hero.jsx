import React, { useState, useRef } from 'react'
import Monster from '../../assets/monster.png'
import Apple from '../../assets/images/logos/bad-apple-logo.png'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { flavors } from '../../data/flavors'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth;
      container.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    }
  }
  const nextSlide = () => {
    const maxIndex = Math.max(0, flavors.length);
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    scrollToIndex(newIndex);
  }

  const prevSlide = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    scrollToIndex(newIndex);
  }

  return (
    <section>
      <div className='min-h-[calc(100vh-5.5rem)] min-w-screen bg-[linear-gradient(125deg,#111111_10%,#73191A_75%,#D52124_100%)] flex items-center'>
        
        <div>
          {/* Infos */}
          <div className='flex flex-col'>
            <img src={Apple} />
            <div>
              <h1>BAD APPLE</h1>
              <p>
                FLAVOR PROFILE :
                Classic fuji apple flavor that's crisp, dry and not too sweet
              </p>
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