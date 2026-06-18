import React, { useState } from 'react'
import { categories } from '../../data/categories'

const Categories = () => {
  const [focusedIndex, setFocusedIndex] = useState(null)

  return (
    <section className='bg-black h-screen w-screen flex items-center justify-center flex-col'>
      <h2 className='text-6xl'>MONSTER ENERGY <b className='text-[#00FF1E]'>DRINKS</b></h2>

      <a 
        className='flex border border-l-green-500 border-l-4 p-2 my-6 hover:px-3'
        href='https://www.monsterenergy.com/en-us/energy-drinks/'
      >
        TODOS OS PRODUTOS
      </a>

      <div className='flex gap-8'>
        {categories.map((item, index) => (
          <a
            key={index}
            className={`flex flex-col items-center justify-center w-60 hover:scale-105 transition-opacity duration-300 cursor-pointer 
              ${focusedIndex !== null && focusedIndex !== index ? 'opacity-30' : 'opacity-100'}`}
            onMouseEnter={() => setFocusedIndex(index)}
            onMouseLeave={() => setFocusedIndex(null)}
            href={item.url}
          >
            <h3 className='text-3xl'>{item.name}</h3>
            <p style={{ color: item.color }}>{item.category}</p>
            <img src={item.imgCan} alt={item.name} className='w-30' />
          </a>
        ))}
      </div>
    </section>
  )
}

export default Categories