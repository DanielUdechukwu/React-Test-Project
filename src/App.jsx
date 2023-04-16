import { useState } from 'react'
import React from "react"
import ReactDOM from "react-dom/client"
import Navigation from './components/Nav'
import MainContent from './components/Main'
import './App.css'

const App = () => {
  return (
    <div>
      <Navigation />
      <MainContent />
    </div>
  )
}

export default App