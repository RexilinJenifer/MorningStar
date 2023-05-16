import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap';
//image
import logo from "../../../Assets/Svg/Logo_White.svg"
import fb from "../../../Assets/Svg/facebook.svg"
import linked from "../../../Assets/Svg/linkedin.svg"
import insta from "../../../Assets/Svg/instagram.svg"
import whats from "../../../Assets/Svg/whatsapp.svg"
import youtube from "../../../Assets/Svg/youtube.svg"
import google from "../../../Assets/Images/googleplay.png"
import appstore from "../../../Assets/Images/appstore.png"

//icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";



interface IFooter {

}

const Footer: React.FC<IFooter> = (props) => {


  return (
    <div className='footer-main'>

      <div className='logo'>
        <img src={logo} alt="" />
      </div>

      <div className='image-footer'>
        <span><img src={fb} alt="" /></span>
        <span><img src={linked} alt="" /></span>
        <span><img src={insta} alt="" /></span>
        <span><img src={ whats} alt="" /></span>
        <span><img src={youtube} alt="" /></span>
      </div>

      <Row className='row-footer'>
        <Col xl={4}>
          <div className='col-footer'>
            <div className='content-footer'>
              <h2>About us</h2>
              <p>At Morning Star Car Rental Dubai, we make renting a car easy and affordable. With a wide selection of quality vehicles and flexible pickup and drop-off options, we strive to provide a hassle-free rental experience for all our customers. Book with us today and create unforgettable memories on the road!</p>
            </div>
            <div className='footer-address'>
              <p><span><MdLocationOn /></span>3135,Oliver St,Fort Worth TX 76134</p>
              <p><span><AiOutlineMail /></span>Support@domain.com</p>
              <p><span><BsFillTelephoneFill /></span>Phone: +(971) 756747003</p>
            </div>
          </div>
        </Col>
        <Col xl={4}>
          <div className='col-footer-links'>
            <h2>Customer Links</h2>
            <div className='footer-links'>
              <ul>
                <li>Latest Cars</li>
                <li>Services</li>
                <li>Featured Cars</li>
                <li>About Us</li>
                <li>Sell Your Car</li>
                <li>Inventory</li>
                <li>Buy a Car</li>
                <li>Parts Shop</li>
                <li>Reviews</li>
                <li>Contacts</li>
                <li>Latest Cars</li>
              </ul>
            </div>
          </div>

        </Col>
        <Col xl={4}>
          <div className='col-footer-sub'>
            <h2>Subscribe NewsLetter</h2>
            <p>Get our weekly newsletter for latest new cars exclusive offers and deals and more</p>
            <div className='app-image'>
              <span className='google-image'><img src={google}  alt="" /></span>
              <span className='appstore-image'><img src={appstore} alt="" /></span>
            </div>
          </div>

        </Col>
      </Row>
      <div className='copyrights-footer'>
        <p>2022 GAMS,All Rights Reserved..All Rights Reserved.</p>
      </div>
    </div>
  )
}
export default memo(Footer)