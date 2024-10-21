import { useState } from 'react'
import './App.css'
import Body from './Components/Body'
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className='home'>
      <NavBar />
      <Body title="Computer And Laptop" 
      subtitle="Accessories"
      text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or "/>
    </div>
  )
}

export default App
