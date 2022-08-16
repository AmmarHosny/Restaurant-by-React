import React, { Fragment } from 'react'
import "./Number.css"

const Number = () => {
  return (
    <Fragment>
        <div className='main-number'>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-3 col-md-6">
                        <h2>1287+</h2>
                        <h6>SAVINGS</h6>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h2>5786+</h2>
                        <h6>PHOTOS</h6>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h2>1440</h2>
                        <h6>ROCKETS</h6>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h2>7110+</h2>
                        <h6>GLOBES</h6>
                    </div>
                </div>
            </div>
        </div>
        <section>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-lg-7 '>
                        <img src='1.png' alt=''></img>
                    </div>
                    <div className='col-lg-5 '>
                        <h2>We pride ourselves on making real food from the best ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <button>Learn More</button>
                    </div>

                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Number