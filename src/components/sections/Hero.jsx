import React from 'react'

const Hero = () => {
  return (
    <>
      <div className='min-h-[calc(100vh-5.5rem)] min-w-screen bg-amber-500'>
        Hero
      </div>

      <div className="bg-black text-white overflow-hidden w-full" role="region" aria-label="mensagem rolante">
        <div className="inline-block whitespace-nowrap animate-[marquee_10s_linear_infinite] will-change-transform">
          <span className="inline-block font-bold tracking-[0.12em] text-8xl px-5">Unleash The Beast! -</span>
          <span className="inline-block font-bold tracking-[0.12em] text-8xl px-5">Unleash The Beast! -</span>
          <span className="inline-block font-bold tracking-[0.12em] text-8xl px-5">Unleash The Beast! -</span>
          <span className="inline-block font-bold tracking-[0.12em] text-8xl px-5">Unleash The Beast! -</span>
        </div>
      </div>
    </>
  )
}

export default Hero