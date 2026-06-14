import React from 'react'
import SmoothScroll from './SmoothScroll'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Marquee from './components/layout/Marquee'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <SmoothScroll>
      <Header />
      <Hero />
      <Marquee />
      <Footer />
    </SmoothScroll>
  )
}

export default App