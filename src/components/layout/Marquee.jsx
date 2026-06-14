import React from 'react'

const Marquee = () => {
  return (
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
  )
}

export default Marquee