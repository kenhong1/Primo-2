import React from "react";
import Footer from "../Components/Footer"
import {Image, Container, Row, Col} from "react-bootstrap";
import WhiteonBlacklogo from "../Images/WhiteonBlack.png";
import Video from "../Images/Jumbotron.mp4"; 
import StockPhotoOne from "../Images/Stock Photo 1.jpeg"; 
import StockPhotoTwo from "../Images/Stock Photo 2.jpeg"; 
import StockPhotoThree from "../Images/Stock Photo 3.jpeg"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faFacebook, faInstagram, faEnvelope)

const home = () => {
   return(
      <div className="homeBox">
         <div className="box">
      <svg width="100%" viewBox="0 0 10 1"><polygon stroke="none" strokeWidth="0" fill="#ffffff" points="0,0.6 0,1 10,1 10,0"></polygon></svg> 
         <div className="colorRow">
            <Image className="mainLogo" src={WhiteonBlacklogo}/> 
         </div>
         </div>
      <svg width="100%" viewBox="0 0 10 1"><polygon stroke="none" strokeWidth="0" fill="#ffffff" points="0,0 10,0 10,0.3 0,1"></polygon></svg>
         <div className="imageBox">
         <div className="jumbotron">
            <video className="video-background" preload="true" muted="true" autoplay="true" loop="true">
               <source src={Video} type="video/mp4" />
            </video>
            <Image className="StockPhoto" src={StockPhotoOne} /> 
            <Image className="StockPhoto" src={StockPhotoTwo} /> 
            <Image className="StockPhoto" src={StockPhotoThree}  /> 
            <Container>
               <Row>
                  <h2> Connect With Us </h2>
                  <Col>
                     <a href="https://www.facebook.com/primosuits/"><FontAwesomeIcon className="fontAwe" size="4x" icon={['fab', "facebook"]} /></a>
                     {" "}
                     <a href="https://www.facebook.com/primosuits/"><FontAwesomeIcon className="fontAwe" size="4x" icon={['fab', "instagram"]} /></a>
                     {" "}
                     <a href="https://primo.business/"><FontAwesomeIcon className="fontAwe" size="4x" icon="envelope" />  </a>
                  </Col>
               </Row>
            </Container>
         </div>
         </div>
   <Footer /> 
      </div>
      
   )
}

export default home; 