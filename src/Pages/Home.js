import React from 'react'
import './home.css'
import BGVideo from '../Component/images/homeBgVideo.mp4'
import { Link } from 'react-router-dom'
import expertIMG from '../Component/images/expertSMImg.webp'
import nutritionIMG from '../Component/images/NUTRITIONsmBanner.jpg'
import stretchingIMG from '../Component/images/stratchingSMBanner.jpg'
import bmiIMG from '../Component/images/bmiSMImg.webp'
function Home(props) {
  return (
    <div className="home">
      <section className='main border'>

        <section className='sloganSection border'>
          <div className='sloganDiv'>
            <h4>Daily Burnout</h4>
            <h1>YOUR JOURNEY, YOUR VICTORY <p className='fade'>OUR GUIDANCE</p></h1>
          </div>
          <video src={BGVideo} autoPlay muted loop className='bgVideo border'></video>
        </section>

        <section className='aboutSection'>
          <div className='aboutDiv border spacing' >
            <div className='aboutContent border'>
              <h1>OUR FITNESS PHILOSOOPHY</h1>
              <p>We believe that fitness is more than just a routine; it's a lifestyle. Our mission is to empower you to take control of your own health and well-being, one workout at a time.</p>
              <button className="btn"> <Link className='link' to='/About'> ABOUT US</Link></button>
            </div>
          </div>
        </section>



        <section className='servicesSection'>
          <div className='ServicesDiv spacing'>
            <h1 className='serviceHeading'>
              Ready to transform your life?
            </h1>
            <ul className='servicesList'>
              <li className='service'>
                <img className='smBanner' src={expertIMG}/>
                <h3>EXPERT TRAINING</h3>
              </li>
              <li className='service'>
                <h3>NUTRITION CONSULTATION</h3>
                <img className='smBanner' src={nutritionIMG}/>
              </li>
              <li className='service'>
                <img className='smBanner' src={stretchingIMG}/>
                <h3>RECOVERY ZONE</h3>
              </li>
              <li className='service'>
                <h3>BMI CALCULATOR</h3>
                <img className='smBanner' src={bmiIMG}/>
              </li>
            </ul>
          </div>
        </section>




      <section className='gymSection spacing'>
          <h1 className='gymHeading head'>OUR GYMS</h1>
        <div className='gymDiv ' > 

          <div className='gym border'  style={{backgroundImage:`url(${props.gymImg1})`}} >
            <h2>{props.gymName1}</h2>
          </div>
          <div className='gym border' style={{backgroundImage:`url(${props.gymImg2})`}}>
            <h2>{props.gymName2}</h2>
          </div>
          <div className='gym border' style={{backgroundImage:`url(${props.gymImg3})`}}>
            <h2>{props.gymName3}</h2>
          </div>

        </div>
          <button className='gymbtn btn'><Link className='link' to="/Gyms">OTHER GYMS</Link></button>
      </section>


      <section className='expertSection'>
      <h1 className='expertHeading head'>EXPERTS</h1>
        <div className='expertDiv spacing'>
        <div className='expert border' style={{backgroundImage:`url(${props.expert1Img})`}}>
            <h2>{props.expert1}</h2>
          </div>
        <div className='expert border' style={{backgroundImage:`url(${props.expert2Img})`}}>
            <h2>{props.expert2}</h2>
          </div>
        </div>
      </section>
      </section>
    </div>
  )
};

export default Home