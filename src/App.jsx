import React from 'react'
import SmoothScroll from './SmoothScroll'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Marquee from './components/layout/Marquee'
import Categories from './components/sections/Categories'
import Footer from './components/layout/Footer'


const App = () => {
  return (
    <SmoothScroll>
      <Header />
      <Hero />
      <Marquee />
      <Categories />
      <Footer />
    </SmoothScroll>
  )
}

export default App