import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Navbar></Navbar>
    <Banner></Banner>
    </>
  )
}

export default App
