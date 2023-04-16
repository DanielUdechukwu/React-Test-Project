import React from 'react'
import ReactLogo from '../assets/react.svg'

const Navigation = () => {
  return (
    <header className='header-content'>
      <nav className='nav-content'>
        <div className='app-ID'>
          <img className='logo' src={ReactLogo} />
          <h2 className='nav-title'>ReactFacts</h2>
        </div>
        <div className='project-ID'>
          <h2 className='project-title'>React Course - Project 1</h2>
        </div>
      </nav>
    </header>
  )
}

export default Navigation