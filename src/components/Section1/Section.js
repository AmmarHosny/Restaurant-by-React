import React, { Fragment } from 'react'
import "./Sction.css"
import photo2 from "../../images/2.png"

const Section = () => {
  return (
    <Fragment>
        <div className='section1'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-lg-5'>
                        <h2>We make everything by hand with the best possible ingredients.</h2>
                        <p className='one'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className='rate'>
                            <p>Etiam sed dolor ac diam volutpat.</p>
                            <p>Erat volutpat aliquet imperdiet.</p>
                            <p>purus a odio finibus bibendum.</p>
                        </div>
                        <button>Learn More</button>
                    </div>
                    <div className='col-lg-7'>
                        <img src={photo2} alt=''></img>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Section