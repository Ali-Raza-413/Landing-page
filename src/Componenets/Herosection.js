import React from 'react'
import '../../src/App.css';
import smiilling from '../../src/Images/smiilling.png'
import Ellipse from '../../src/Images/Ellipse.png'
import 'animate.css';

function Herosection() {
  return (
    <div className='container'>
    <div className='Layout-text'>
    <p className='text'>30% Off on groceries</p>
    </div>
     <div className='d-flex justify-content-between flex-wrap'>
       <div className='text2-Layout'>
        <h1 className='text-size'>Shop smarter, not harder.</h1>
        <h1 className='text-2 animate__animated animate__backInUp'>Get it ordered.</h1>
        <p className='p-text'>Save time, skip the lines. We've got you covered.</p>
        <button className='btn-shop'>ShopNow</button>
        </div> 
        <div className='bg-img  flex-wrap'>
        <img className='img-mob' width="600px" height="380px" src={smiilling} alt=''></img>
        <div className='d-flex gap-3 bg-text'>
         <img src={Ellipse} alt=''></img>
         <div>
         <h6>Ashely Daniels</h6>
         <p className='p-text-1'>"Saved me tons of time - never going back to grocery shopping!"</p>
         </div>
        </div>
        </div>
     </div>
    </div>
  )
}

export default Herosection