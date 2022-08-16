import React, { Fragment } from 'react'
import "./Asked.css"

const Asked = () => {
  return (
    <Fragment>
        <div className='asked'>
            <h2 className='text-center py-5'>Frequently Asked Questions</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='text1 mb-5'>
                            <h3>~ Is Foodera Bread really baked fresh each day?</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div className='text1'>
                            <h3>~ Can I order your products online?</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='text2'>
                            <h3>~ Do you bake breads containing animal fats or products?</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div className='text2'>
                            <h3>~ When are you opening a shop near me?</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Asked