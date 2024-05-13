import React from 'react'
import '../../src/App.css';
import { Card, Col, Row } from 'react-bootstrap'
import bottle from '../../src/Images/bottle.png'
import shampoo from '../../src/Images/shampoo.png'
import listarrow from '../../src/Images/listarrow.png'
import mask from '../../src/Images/mask.png'
import Polygon from '../../src/Images/Polygon.png'



function Productinfo() {
  return (
    <>
    <div className='main-info p-5'>
         <Row>
      <Col xs={12} md={6} className='mt-2'>
        <Card className='cardpad'>
           <div className='d-flex gap-4 mob'> 
            <Card.Img className='img-bottle' src={bottle} alt=''/>
            <div>
            <Card.Text className='p-2 mt-3'>  
                <h4>Elegant Perfumes </h4>
                <h5>1$16.00 </h5>
                <div className='d-flex gap-2'>
                <img width='10px' src={listarrow} alt=''></img>
                <p>Long Lasting</p>
                </div>
                <div className='d-flex gap-2'>
                <img src={listarrow} alt=''></img>
                
                <p>Affordable price</p>
                </div>
                <div className='d-flex gap-2'>
                <img src={listarrow} alt=''></img>
                <p>Best Perfume</p>
                </div>
                <button className="buttonWithIcon">
                <img src={mask} alt="Mask Icon"  className="icon" />
                  Buy Now
                </button>
            </Card.Text>
            </div>
            </div>
        </Card>
      </Col>
      <Col xs={12} md={6} className='mt-2'>
        <Card className='cardpad'>
          <div className='d-flex gap-4 mob'>
          <Card.Img  className='img-bottle' src={shampoo}/>
          <Card.Text className='p-2 mt-3'>
                <h4>Strawberry Shampoo </h4>
                <h5>$18.88  </h5>
                <div className='d-flex gap-2'>
                <img src={listarrow} alt=''></img>
                <p>Allergy free</p>
                </div>
                <div className='d-flex gap-2'>
                <img src={listarrow} alt=''></img>
                
                <p>Best Product</p>
                </div>
                <div className='d-flex gap-2'>
                <img src={listarrow} alt=''></img>
                <p>Affordable price</p>
                </div>
                <button className="buttonWithIcon">
                <img src={mask} alt="Mask Icon" className="icon" />
                  Buy Now
                </button>
            </Card.Text>
          </div>
        </Card>
      </Col>
    </Row>
    </div>
    <div className='container'>
    <h3 className='h3'>Medical Products</h3>
    <Row>
        <Col xs={12} md={6}  className='pad-left'>
        <card>
       <div  className='medical mt-4'>

        <button className='medical-butn m-5'>From $0.99</button>
         <h4 className='h4 ms-5'>Breathable<br></br>
              Face Mask</h4>
              <button className='shop-btn ms-5'>Shop now</button>
       </div>
        </card>
        </Col>
        <Col xs={12} md={6} className='pad-left'>
        <card>
       <div  className='medicard mt-4'>
 
           <h4 className='head ps-5'>Medicine pack<br></br>
            Get it now 45% Off </h4>
              <button className='shop-btn ms-5'>Shop now</button>
       </div>
        </card>
        </Col>
    </Row>
    <div className='d-flex jusify-content-between gap-5 mt-5 flex-wrap'>
        <div>
            <img className='polygon' src={Polygon} alt=''></img>
        </div>
        <div>
            <h1 className='big-text m-5'>Big city savings, <br></br>delivered to <br></br>your<span className='text-color'> doorstep.</span></h1>
        </div>
    </div>
    <h5 className='mt-5 text-center'>Our Actions speaks louder than WORDS</h5>
    </div>
    </>
  )
}

export default Productinfo;