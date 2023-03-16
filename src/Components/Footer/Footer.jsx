import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "./Footer.css";
import { BiHome,BiPhoneCall,BiMailSend } from "react-icons/bi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Imgfooter from "../../Images/bg2.png";
import Logofooter from "../../Images/logo.png"

export default function Footer() {
  return (
    <>
    <div className='footer-img'>
      <img  src={Imgfooter} alt="footer" />
    </div>
     <MDBFooter bgColor='dark' color='white' className='text-center text-lg-start text-muted'>
      <section className='footer-margin'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <img className='footer-logo' src={Logofooter} alt="footer-logo"></img>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase text-white fw-bold mb-4'>Služby</h6>
              <p className='text-white'>
                <Link to={"/weby"} className='text-reset'>
                  Weby
                </Link>
              </p>
              <p className='text-white'>
                <Link to={"/eshopy"} className='text-reset'>
                  E-shopy
                </Link>
              </p>
              <p className='text-white'>
                <Link to={"/marketing"} className='text-reset'>
                  Marketing
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase text-white fw-bold mb-4'>Sociální sítě</h6>
              {/*
              <p className='text-white'>
                <a href='https://www.facebook.com/' className='text-reset'>
                <BsFacebook icon="phone" className="me-2" />Facebook
                </a>
              </p>*/}
              <p className='text-white'>
                <a href='https://www.instagram.com/pixelweb.cz/' className='text-reset'>
                <BsInstagram icon="phone" className="me-2" />Instagram
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase text-white fw-bold mb-4'>Kontakt</h6>
              {/*<p className='text-white'>
                <a href= "https://goo.gl/maps/ks3mixiJtBj4r7WDA" className='text-reset'>
                    <BiHome icon="home" className="me-2" />Lužická 3364/2, 466 01 Jablonec nad Nisou
                </a>
              </p>*/}
              <p  className='text-white'>
                <a href = "mailto: michal.petricek@pixelweb.cz" className='text-reset'>
                    <BiMailSend icon="envelope" className="me-2" />michal.petricek@pixelweb.cz
                </a>
              </p>
              <p  className='text-white'>
                <BiPhoneCall icon="phone" className="me-2" />+420 792 219 454
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: &nbsp;
        <a className='text-white fw-bold' href='https://pixelweb.cz/'>
          pixelweb.cz
        </a>
      </div>
    </MDBFooter>
    </>
  );
}