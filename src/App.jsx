import React, { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'

function App() {
  const hamburgerIcon = () => {
    return <GiHamburgerMenu className='text-xl' />
  }
  const crossIcon = () => {
    return <RxCross2 className='text-xl' />
  }
  const [showSidebar, setShowSidebar] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
    setClicked(!clicked)
  }

  // Function to check if the device is mobile or tablet
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 450) // Assuming tablets have a maximum width of 768px
  }

  // Check device width on initial load and on resize
  useEffect(() => {
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  return (
    <>
      <div className='flex justify-center w-screen h-screen '>
        {isMobile ? (
          <>
            <button
              className='absolute top-2 left-2'
              onClick={toggleSidebar}
            >
              {clicked ? crossIcon() : hamburgerIcon()}
            </button>
            {showSidebar ? <Sidebar /> : <Hero />}
          </>
        ) : (
          <div className='flex justify-center h-screen p-2 '>
            {!showSidebar && <Sidebar />}
            <Hero />
          </div>
        )}
      </div>
    </>
  )
}

export default App
