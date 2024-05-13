import React from 'react'
import '../../src/App.css';
import { Col, Row } from 'react-bootstrap'
import youtube from '../../src/Images/youtube.png'
import instagram from '../../src/Images/instagram.png'
import cross from '../../src/Images/cross.png'
import facebook from '../../src/Images/facebook.png'
import onlineshopiing from '../../src/Images/onlineshopiing.png'

function Footer() {
  return (
    <div className='main-footer mt-4'>
        <div>
            <div className='container p-5'> 
            <Row>
                <Col xs={12} md={4}>
                    <div>
                       <h2 className='text-white'>Quick<span className='t-span'>Pik</span></h2> 
                       <h3 className='text-white mt-2'>Shop smarter, not harder.<br></br> 
                        Get it delivered</h3>
                        <div className='d-flex gap-1 mt-3 '>
                            <img src={instagram} alt=''></img>
                            <img src={cross} alt=''></img>
                            <img src={youtube} alt=''></img>
                            <img src={facebook} alt=''></img>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={2} className='ms-5'>
                   <p><a href='/Home' className='text-white'>Quick Links</a></p>
                   <p><a href='/Home' className='text-white'>Home</a></p> 
                   <p><a  href='/Home' className='text-white'>AboutUs</a></p> 
                   <p><a  href='/Home'  className='text-white'>Services</a></p> 
                    <p><a  href='/Home' className='text-white'>Products</a></p>
                    <p><a  href='/Home' className='text-white'>Contact Us</a></p>
                </Col>
                <Col xs={6} md={2} className='footer-col'>
                <p><a  href='/Home' className='text-white'>Locations</a></p>
                   <p><a  href='/Home' className='text-white'>Mumbai</a></p> 
                   <p><a  href='/Home'  className='text-white'>Pune</a></p> 
                   <p><a href='/Home'  className='text-white'>Nagpur</a></p> 
                    <p><a href='/Home'  className='text-white'>Banglore</a></p>
                    <p><a  href='/Home' className='text-white'>Goa</a></p>
                </Col>
                <Col xs={12} md={3}>
                    <div>
                    <img className='img-shop' src={onlineshopiing} alt=''></img>
                    </div>
                </Col>
            </Row>
            <h4 className='text-white text-center mt-5'>@All Rights Reserved QuickPik</h4>
            </div>
        </div>
    </div>
  )
}

export default Footer