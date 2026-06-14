import React from 'react'
import SmoothScroll from './SmoothScroll'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Marquee from './components/layout/Marquee'
import Taste from './components/sections/Taste'
import Quality from './components/sections/Quality'
import Parallax from './components/sections/Parallax'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <SmoothScroll>
      <Header />
      <Hero />
      <Marquee />
      <Taste />
      <Quality />
      <Parallax />
      <Footer />
    </SmoothScroll>
  )
}

export default App