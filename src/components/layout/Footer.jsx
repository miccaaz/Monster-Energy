import React from 'react'
import Logo from '../../assets/logo.png'
import Monster from '../../assets/monster.png'
import Can from '../../assets/original.png'

const Footer = () => {
  return (
    <footer className='overflow-hidden bg-black'>
      <img src="/images/moto.png" />
      <div className='w-screen grid grid-cols-4  justify-between h-60 py-7'>
          <div className='flex flex-col h-60 justify-between ml-16'>
            <img src={Logo} alt="" className='w-70' />
            <p className='text-white/70 mb-10' >© Miguel Castro Loureiro</p>
          </div>
          <div className='relative col-span-2 flex justify-center'>
            <div
              className='absolute inset-0 bg-no-repeat bg-center bg-contain opacity-20 scale-180 -translate-y-3'
              style={{ backgroundImage: `url(${Monster})` }}
            />
            <h2 className='mt-10 z-10'>UNLEASH THE <b className='text-[#00FF1E]'>BEAST</b></h2>
          </div>
          <div className='relative h-60'>
            <img src="/images/cans/original.png" alt=""
              className='absolute -rotate-12 scale-70 -bottom-60 ' 
            />
          </div>
      </div>
    </footer>
  )
}

export default Footer