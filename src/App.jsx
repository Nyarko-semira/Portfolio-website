import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Section1 from './Components/Section1container/Section1'
import Section2 from './Components/Section2Container/Section2'
import Contact from './Contact'
import Section3 from './Components/Section3/Section3'
import Section4 from './Components/Section4/Section4'
import Section5 from './Components/Section5/Section5'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
       <Section1/>
       <Section2/>
       <Section3/>
       <Section4/>
       <Section5/>
       <Footer/>
    </div>
  )
}

export default App

