import React, {useState} from 'react'
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Info from '../components/Info'
import { homeObjOne, homeObjTwo, homeObjThree,homeObjFour} from '../components/Info/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Services2 from '../components/Services2';
import Sidebar from '../components/SideBar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <Info {...homeObjOne}/>
      <Services />
      <Services2 />
      {/* <Info {...homeObjTwo}/>       */}
      <Info {...homeObjThree}/>
      <Info {...homeObjFour}/>
      <Footer />
    </>
  )
}

export default Home
