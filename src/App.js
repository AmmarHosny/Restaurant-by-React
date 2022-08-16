import React, { Fragment, useState } from 'react'
import Carddata from './components/CardAndData/Carddata'
import Explore from './components/ExploreData/Explore'
import Footer from './components/Footer/Footer'
import Asked from './components/Frequently Asked/Asked'
import Number from './components/InfoNumber/Number'
import Landing from './components/Landing/Landing'
import Navbar1 from './components/NavBar/Navbar1'
import Order from './components/OrderNow/Order'
import Parallax from './components/parallax/Parallax'
import Section from './components/Section1/Section'
import Slider from './components/Slieder/Slider'
import Subscribe from './components/Subscribe/Subscribe'
import Video from './components/Vidoe/Video'

const App = () => {
  
    let [order , setorder] = useState(false)

    let now =()=>{
        setorder(!order)
        
    }
  return (
    <Fragment>
      <Navbar1/>
      <Landing/>
      <Number/>
      <Section/>
      <Video/>
      <Explore/>
      <Carddata go={now}/>
      <Slider/>
      <Asked/>
      <Parallax/>
      <Subscribe/>
      <Footer/>
      {order?
        <Order close={now}/>:""
      }
    </Fragment>
    // <Fragment>
    // <Order/>
    // </Fragment>
  )
}

export default App