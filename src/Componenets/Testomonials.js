
import React from 'react'
import '../../src/App.css';
import Arrows from '../../src/Images/Arrows.png'
import Ellipsemen from '../../src/Images/Ellipsemen.png'
import Ellipsegirl from '../../src/Images/Ellipsegirl.png'
import  Ellipsecap from '../../src/Images/Ellipsecap.png'


import { Card, Col, Row } from 'react-bootstrap';

function Testomonials() {
  return (
    <div className='testomonial-bg '>
        <div className='d-flex '>
        <div>
                <h2 className='p-5 h2'>Unlock the secrets of satisfied <br></br> customers.</h2>
            </div>
            <div>
          <img className='p-5 mt-5 img-test' src={Arrows}></img>
            </div>
           
        </div>
        <div className='container'>
        <Row className="p-5">
      <Col xs={12} md={4}>
        <Card>
          <p className='p-sec'>"Never going back to waiting in lines! Shop smarter, get it delivered with QuickPik. It's that simple."</p> 
            <div className='d-flex m-3'>
                <img width="50px" height='50px' src={Ellipsegirl}></img>
                <div>
                  <h6 className='ms-3 mt-2'>Albus stella</h6> 
                  <p className='ms-3 mt-2'>Manager @ Howarts</p> 
                </div>
                </div>  
        </Card>
      </Col>
      <Col xs={12} md={4}>
      <Card>
          
          <p className='p-sec'>"Wide selection, even in my small town! Found everything I needed for my birthday party with just a few clicks. Thanks, QuickPik!"</p>  
          <div className='d-flex m-3'>
                <img width="50px" height='50px'  src={Ellipsemen}></img>
                <div>
                  <h6 className='ms-3 mt-2'> Severus Snape</h6> 
                  <p className='ms-3 mt-2'>Manager @ Slytherin</p> 
                </div>
                </div>  
            </Card>

      </Col>
      <Col xs={12} md={4}>
        <Card>
          <p className='p-sec'>"Lifesaver for busy families! Fresh groceries delivered in a flash - dinner's on the table, thanks QuickPik!”</p>  
          <div className='d-flex m-3'>
                <img width="50px" height='50px'  src={Ellipsecap}></img>
                <div>
                  <h6 className='ms-3 mt-2'>Harry brige</h6> 
                  <p className='ms-3 mt-2'>Team Leader @ Gryffindor</p> 
                </div>
                </div>  
        
        </Card>
      </Col>
    </Row>
    </div>
    </div>
  )
}

export default Testomonials