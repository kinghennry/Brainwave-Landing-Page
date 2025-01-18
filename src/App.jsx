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
      <h1>Navbarss</h1>
      <p>Remove navbar</p>
      <h1>Hero</h1>
      <p>Remove Hero</p>
      <h1>About</h1>
      <p>Remove About</p>
      <h1>Features</h1>
      <p>Remove Features</p>
      <h1>Story</h1>
      <p>Remove this Story</p>
      <h1>Contact</h1>
      <p>Remove Contact</p>
      <Footer />
    </main>
  )
}
