import React from 'react'
import './App.css'
import Footer from './Components/Footer/footer'
import Home from './Components/Home/home'
import Main from './Components/Main/main'
import Navbar from './Components/Navbar/navbar'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </div>
  )
}

export default App
