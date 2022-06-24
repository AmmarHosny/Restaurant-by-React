import React, { Fragment } from 'react'
import "./Subscribe.css"

const Subscribe = () => {
  return (
    <Fragment>
        <div className='subscribe'>
            <div className='container text-center py-5'>
                <h2>Hurry up! Subscribe our newsletter
                <br/>
                and get 25% Off</h2>
                <p>Limited time offer for this month. No credit card required.</p>
                <form>
                    <input placeholder='Email Address Here'></input>
                    <input type="submit" value="Subscribe"></input>
                </form>
            </div>
        </div>
    </Fragment>
  )
}

export default Subscribe