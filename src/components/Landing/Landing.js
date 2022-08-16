import React, { Fragment } from 'react'
import "./Landing.css"

const Landing = () => {
  return (
    <Fragment>
        <header className='landing'>
            <div className='container'>
                <div className='col-md-6 text-landing'>
                    <h1>Good food choices are good investments.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                    <button className='one'>Order Now </button>
                    <button className='two'> Learn More </button>
                </div>
                <div className='col-md-6'>
                </div>
            </div>
        </header>
    </Fragment>
  )
}

export default Landing