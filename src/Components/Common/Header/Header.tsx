import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
//icons
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
//images
import flag from "../../../Assets/Images/Flag.png"
import header from "../../Assets/Svg/Header.svg"


interface IHeader {

}
const Header: React.FC<IHeader> = (props) => {
    return (
        <div className='main-header'>
            <Row className='row-header'>
                <Col md={6} sm={0} className='col-header-one'>
                    <div className='header-top-left'>
                        <p>Need Help ? : Call: +97112345978</p>
                    </div>
                    {/* <div className='help-desk'>
                        <img src={header} alt="" />
                    </div> */}
                </Col>
                <Col md={6} sm={12} className='col-header-two'>
                    <Row className='content'>
                        {/* <Col lg={4} md={6} sm={4}  className='sub-content'>
                            <a href="#" className='mail'>support@domain.com</a>
                        </Col>
                        <Col lg={4} md={6} sm={4}  className='sub-content'>
                            <img src={flag} alt="Flag" />
                            <div className='region'>
                                <span>DUBAI, UAE</span>
                                <span>Qud Metha, Dubai</span>
                            </div>
                        </Col>
                        <Col lg={4} md={0} sm={4} {4} className='sub-content icons'>
                            <a href="https://www.facebook.com/"><FaFacebookF /></a>
                            <a href="#" >< IoLogoWhatsapp /></a>
                            <a href="http://www.instagram.com/"><AiOutlineInstagram /></a>
                            <a href="https://wwww.twitter.com"><BsTwitter /></a>
                            <a href="https://www.youtube.com/">< AiFillYoutube /></a>
                        </Col> */}
                         <Col  className='sub-content'>
                            <a href="#" className='mail'>support@domain.com</a>
                        </Col>
                        <Col  className='sub-content'>
                            <img src={flag} alt="Flag" />
                            <div className='region'>
                                <span>DUBAI, UAE</span>
                                <span>Qud Metha, Dubai</span>
                            </div>
                        </Col>
                        <Col className='sub-content icons'>
                            <a href="https://www.facebook.com/"><FaFacebookF /></a>
                            <a href="#" >< IoLogoWhatsapp /></a>
                            <a href="http://www.instagram.com/"><AiOutlineInstagram /></a>
                            <a href="https://wwww.twitter.com"><BsTwitter /></a>
                            <a href="https://www.youtube.com/">< AiFillYoutube /></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default memo(Header)