import React, { useState } from 'react'
import { categories } from '../../data/categories'

const Categories = () => {
  const [focusedIndex, setFocusedIndex] = useState(null)

  return (
    <section className='bg-black min-h-[calc(100vh-5.5rem)] min-w-screen flex items-center justify-center flex-col'>
      <h2>MONSTER ENERGY <b className='text-[#00FF1E]'>DRINKS</b></h2>

      <div className='flex gap-8'>
        {categories.map((item, index) => (
          <a
            key={index}
            className={`flex flex-col items-center justify-center hover:scale-110 transition-opacity duration-300 cursor-pointer 
              ${focusedIndex !== null && focusedIndex !== index ? 'opacity-30' : 'opacity-100'}`}
            onMouseEnter={() => setFocusedIndex(index)}
            onMouseLeave={() => setFocusedIndex(null)}
            href=''
          >
            <h3 className='text-3xl'>{item.name}</h3>
            <p style={{ color: item.color }}>{item.category}</p>
            <img src={item.imgCan} alt={item.name} className='w-32' />
          </a>
        ))}
      </div>
    </section>
  )
}

export default Categories