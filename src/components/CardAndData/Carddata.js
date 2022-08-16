
import React, { Fragment } from 'react'
import  { Card, Button }  from 'react-bootstrap'
import explore1 from '../../images/explore1.jpg'
import explore2 from '../../images/explore2.jpg'
import explore3 from '../../images/explore3.jpg'

const Carddata = ({go}) => {
    let data=[
        {id:"1", photo:explore1, text:"Rainbow Vegetable Sandwich" , time:"time:15-20"  , price:"$10.5" , desprice:"$11.5" },
        {id:"2",  photo:explore2, text:"Vegetarian Burger And tometo" , time:"time:30-45"  , price:"$9.20" , desprice:"$10.5" },
        {id:"3",  photo:explore3, text:"Raspberry Stuffed French Toast" , time:"time:10-15"  , price:"$12.5" , desprice:"$13.5" },
    ]
    return (
        <Fragment>
            
                <div className='box-card'>
                <div className='container'>
                    <div className='row  '  >
                            {data.map((e)=>{
                                return (
                                <div key={e.id} className='col-lg-4 my-3'>
                                <Card>
                                <Card.Img variant="top" src={e.photo} />
                                <Card.Body>
                                    <Card.Title style={{color:"brown"}}>{e.text}</Card.Title> 
                                    <Card.Text>
                                    {e.time}
                                    </Card.Text>
                                    <h2 style={{color:"brown"}}> {e.price} <span style={{textDecoration: "line-through" , color:"black"}}> {e.desprice}</span></h2>
                                    <hr/>
                                    <Button onClick={()=>go()}> Order Now </Button>
                                </Card.Body>
                                </Card>
                                </div>
                                )
                            })}
                            
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Carddata