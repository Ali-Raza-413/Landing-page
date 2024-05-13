import React from 'react'
import '../../src/App.css';
import Ellipset from '../../src/Images/Ellipset.png'
import { Card, Row, Col } from 'react-bootstrap';
import pack from  '../../src/Images/pack.png'
import clock from  '../../src/Images/clock.png'
import googlehome from  '../../src/Images/googlehome.png'
import Mobile from  '../../src/Images/Mobile.png'
import Shoes from  '../../src/Images/Shoes.png'
import minutes from  '../../src/Images/minutes.png'
import days from  '../../src/Images/days.png'
import hours from  '../../src/Images/hours.png'
import seconds from  '../../src/Images/seconds.png'
function Products() {
  return (
    <div className='p-5'>
     <p className='p-tend'>Trending Products<img className='mt-3' src={Ellipset}></img></p>
      <div>
      <Row xs={1} md={5} className="g-2 p-5">
        <Col>
          <Card className='card-style'>
            <Card.Img src={pack}/>
              
          </Card>
          <p className='text-center'>Grocery</p>
        </Col>
        <Col>
          <Card className='card-style'>
            <Card.Img  src={Shoes}  />
          </Card>
          <p className='text-center'>Shoes</p>
        </Col>
        <Col>
          <Card className='card-style'>
            <Card.Img  src={Mobile}  />
          </Card>
          <p className='text-center'>Mobile</p>
        </Col>
        <Col>
          <Card className='card-style'>
            <Card.Img  src={googlehome} />
          </Card>
          <p className='text-center'>googlehome</p>
        </Col>
        <Col>
          <Card className='card-style'>
            <Card.Img  src={clock}  />
          </Card>
          <p className='text-center'>clock</p>
        </Col>
      </Row>
      </div>
      <div className='d-flex gap-2 justify-content-center flex-wrap'>
      <div>
        <p className=' m-2 p-deal'>Deal of the week</p>
      </div>
      <div className='d-flex gap-1'>
        <img src={days}></img>
        <img src={hours}></img>
        <img src={minutes}></img>
        <img src={seconds}></img>
      </div>
      </div>
    </div>
  )
}
export default Products