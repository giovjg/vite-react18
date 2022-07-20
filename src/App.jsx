//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import React from "react"
import NavBar from './components/NavBar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'


export default function App() {
  //const [count, setCount] = useState(0)
  return (
    <div className = "container">
       <NavBar />
       <MainContent />
       <Footer />
    </div>
  );
}
