import '../App.css'
import React from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export default function LandingPage() {


  return(
    <div className="landing" >
      <Link to="/home">
        <div className="welcome">
          <h1  data-aos="fade-up" data-aos-duration="3000" style={{ fontWeight: 'bold', color: 'rgba(69, 182, 144, 1)', fontSize: '4em' }} >Welcome to WorldSounds</h1>
          <h3 data-aos="fade-up" data-aos-duration="3000" style={{ color: 'white' }} >explore, search, & play</h3>
        </div>
      </Link>
      <div className="number d-flex col">
        <div className="m-5"  data-aos="fade-up" data-aos-duration="3000">
          <h2>1,427</h2>
          <h4>genres</h4>
        </div>
        <div className="m-5" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="200">
          <h2>2,342</h2>
          <h4>artists</h4>
        </div>
        <div className="m-5" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="400">
          <h2>10,393</h2>
          <h4>songs</h4>
        </div>
      </div>
      
      <div id="bg">
        <img  src="concert.jpg" alt="concert" data-aos="fade-up" data-aos-duration="2000" />
      </div>
      
      <div className="content"  data-aos="zoom-in"  data-aos-duration="1000" style={{ backgroundColor: 'rgba(14, 18, 66, 1)', padding: '20px', height: '500px' }}>
        <div>
            <img  className= "earth" src="earth.png" alt="earth"  />
        </div>
        <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" className="content-1">
            <div>
              <h1 >Brings you new experience </h1>
              <h1 >to listen all music genres </h1>
              <h1 >from all over the world</h1>
            </div>
        </div>
        
      </div>
        <div className="gradient" style={{ height: '1680px', background: 'linear-gradient( rgba(14, 18, 66, 1), rgba(69, 182, 144, 1))', fontFamily: 'Exo' }}>
          <div className="d-flex justify-content-start mt-5" style={{ color: 'white', textAlign: 'left' }}>
            <img className="kaset " src="kaset.jpg"  data-aos="slide-right" data-aos-duration="1000"  style={{ width: '300px', marginLeft: '60px', marginTop: '50px', border: '10px solid white' }} />
            <div  data-aos="fade-up" data-aos-duration="2000" style={{ margin: '50px' }} >
              <h1 style={{  fontSize: '50px' }}>Thousands genres</h1>
              <h1 style={{  fontSize: '50px' }}>in one web</h1>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-5" style={{ color: 'white', textAlign: 'right' }}>
            <div  data-aos="fade-up" data-aos-duration="2000" style={{ margin: '50px' }} >
              <h1 style={{  fontSize: '50px' }}>Play the songs</h1>
              <h1 style={{  fontSize: '50px' }}>in just one</h1>
              <h1 style={{  fontSize: '50px' }}>click</h1>
            </div>
            <img className="kaset " src="austin.jpg" data-aos="slide-left" data-aos-duration="1000" style={{ width: '300px', marginRight: '60px', marginTop: '50px', border: '10px solid white' }} />
          </div>
          <div style={{ position: "relative" }} >
            <div className="" data-aos="fade" data-aos-delay="500"  data-aos-duration="1000" style={{ position: 'absolute', top: '20%', left: '38%', margin: '-100px 20 -10 -170px',  zIndex: '1',  }}>
              <Link to="/home"><img className="logo" src="WS logo.png" alt="spotify" /></Link>
              <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}><h1 style={{fontFamily: 'Exo', fontSize: '45px',  textShadow: '1px 1px 1px rgb(30, 30, 34)', fontWeight: 'bold'}}> Come to our world</h1></Link>
            </div>
            <div className="nav d-flex col mt-5" style={{ zIndex: '-1' }}>
              <div data-aos="slide-right" data-aos-duration="1000" style={{ backgroundColor: 'rgba(69, 182, 144, 1)', width: '50%', height: '600px' }}>
              </div>
              <div data-aos="slide-left" data-aos-duration="1000" style={{ backgroundColor: 'rgba(69, 182, 144, 1)', width: '50%',height: '600px'}}>  
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}