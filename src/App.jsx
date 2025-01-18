import React from 'react'
import About from './components/About'
import Hero from './components/Hero'
import NavBar from './components/Navbar'
import Features from './components/Feature'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App() {
  // overflow-x-hidden removes those ugly scrollbars
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      {/* <NavBar /> */}
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <Features /> */}
      {/* <Story /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      <h1>Navbar</h1>
      <h1>Hero</h1>
      <h1>About</h1>
      <h1>Features</h1>
      <h1>Story</h1>
      <h1>Contact</h1>
      <h1>Footer</h1>
    </main>
  )
}
