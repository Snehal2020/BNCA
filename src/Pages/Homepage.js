import React from 'react'
import Layout from '../Components/Layout1/Layout';
import img1 from '../img/left.jpeg';
import img2 from '../img/right.jpeg'
function Homepage() {
  
  return (
   <Layout>
       <div className="main">
        <div className="left">
          <img src={img1} height={'454px'} filter={'brightness(50%)'} width={'720px'}  alt="error" />
           <text className='text1'>FA</text>
           <div className="arc">
            <p className='arct'>ARCHITECTURE</p>
            <a className='learnmore' href="#">Learn More</a>
           </div>
        </div>
        <div className="right">
        <div className="left">
          <img src={img2} height={'454px'} width={'720px'} alt="error" />
          <text className='text2'>FD</text>
          <div className="arc">
            <p className='arct'>DESIGN</p>
            <a className='learnmore' href="#">Learn More</a>
           </div>
        </div>
        </div>
       </div>
   </Layout>
  )
}

export default Homepage
