import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Gallery from './components/Gallery/Gallery'
import Services from './components/Services/Services'
import Partner from './components/Partner/Partner'
import Blog from './components/Blog/Blog'
import Location from './components/Location/Location'
import Footer from './components/Footer/Footer'
import Footercopy from './components/Footercopy/Footercopy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Banner></Banner>
      <Gallery></Gallery>
      <Services></Services>
      <Partner></Partner>
      <Blog></Blog>
      <Location></Location>
      <Footer></Footer>
      <Footercopy></Footercopy>
    </>
  )
}

export default App
