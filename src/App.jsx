import { useState } from 'react'
import React from "react"
import ReactDOM from "react-dom/client"
import ReactLogo from './assets/react.svg'
import './App.css'

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

const MainContent = () => {
  return (
    <div className='main-content'>
      <h1 className='content-header'>Fun facts about React</h1>
      <ul className='lists'>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Navigation />
      <MainContent />
    </div>
  )
}

export default App