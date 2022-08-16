import React, { Fragment } from 'react'
import "./parallax.css"

const Parallax = () => {
  return (
    <Fragment>
        <div className='parallax'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <h2>Baked fresh daily by bakers with passion.</h2>
                    </div>
                    <div className='col-lg-4'>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Parallax