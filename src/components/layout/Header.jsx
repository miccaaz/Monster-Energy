import React from 'react'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <>
    <header className='sticky top-0 z-20 flex justify-center items-center gap-5 max-w-screen border-b border-gray-600'>
      <div className='bg-black-grey fixed top-0 left-0 py-4 px-8 rounded-br-4xl'>
        <img src={Logo} alt="Monster Logo" className='max-h-24'/>
      </div>
      <nav className='flex justify-center items-center h-22 min-w-screen bg-black'>
        <ul className='flex flex-row uppercase font-extrabold text-2xl gap-16 transition-all'>
          <li className='hover:scale-120 cursor-pointer'>Energéticos</li>
          <li className='hover:scale-120 cursor-pointer'>Novidades</li>
          <li className='hover:scale-120 cursor-pointer'>Promoções</li>
          <li className='hover:scale-120 cursor-pointer'>Contatos</li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header