import React from 'react';
import '../../src/App.css';

import  menbook from '../../src/Images/menbook.png'

function Footersection1() {
  return (
    <div>
        <div className='footer-1 d-flex'>
            <div className='ms-5'>
                <img className='footer1-img' src={menbook}></img>
            </div>
            <div>
                <h1 className='h-footer'>SignUp For Exclusive Offers<br></br> And Discounts</h1>
                <button className='btn-signup'>Sign Up</button>
            </div>
        </div>

    </div>
  )
}

export default Footersection1