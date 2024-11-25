import './App.css'
import {Button} from "@nextui-org/react";
import NavbarArea from './components/NavbarArea';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Offer from './components/Offer';
import Card from './components/Card';
import Find from './components/Find';
import Review from './components/Review';
import Accordian from './components/Accordian';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <NavbarArea/>
      <Hero/>
      <Vision/>
      <Offer/>
      <Card/>
      <Find/>
      <Review/>
      <Accordian />
      <Footer/>
    </>
  )
}

export default App
