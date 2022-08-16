import React, { Fragment} from 'react'
import "./Order.css"

const Order = ({close}) => {

  return (
    <Fragment>
        <div className='theorder'>
            <div className='overlay'>
                
                <div className='validetion'>
                <div className='clsse' onClick={()=>close()}>x</div>
                    <h2 className='text-center'>Make Your Order Now!</h2>
                    <form>
                        <div className='formgroub'>
                            <input placeholder='Your Name'></input>
                            <input placeholder='Email Address' className='ms-5'></input>
                        </div>
                        <input placeholder='Address' className='w-100'></input>
                        <input type="number" placeholder="Zip Code" className='w-100'></input>
                        <input placeholder="Number No."  className='w-100'></input>
                        <input className='w-100'></input>
                        <button  className='submit'  >  Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Order