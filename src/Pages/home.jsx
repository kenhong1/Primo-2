import React from "react";
import {Image, Container, Row, Col} from "react-bootstrap";
import WhiteonBlacklogo from "../Images/WhiteonBlack.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons"
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faFacebook)

const home = () => {
   return(
      <div className="homeBox">
         <h1> This Is Your Home Page </h1>
         <Image className="mainLogo" src={WhiteonBlacklogo} /> 
   <br /> 
   { }
         <Container>
            <Row>
               <Col>
               <a href="https://www.facebook.com/matthewparkracing/"><FontAwesomeIcon className="fontAwe" size="4x" icon={['fab', "facebook"]} /></a>
               </Col>
            </Row>
         </Container>


      </div>
   )
}

export default home; 