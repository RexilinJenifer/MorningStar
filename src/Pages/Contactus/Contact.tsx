import React, { memo } from 'react'
import { FaGreaterThan } from "react-icons/fa";
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MdLocationPin, MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsappSquare, FaInstagramSquare } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrMap } from "react-icons/gr";


interface IContact {

}

const Contact: React.FC<IContact> = (props) => {
    return (
        <div className='Contact-main'>
            <div className='Contact-home'>
                <h1>Contact Us</h1>

                <h3>Home <FaGreaterThan /> <span>Contact Us</span></h3>
            </div>

            <div className='map'>


                <Row>
                    <h4>Locations</h4>
                    <Col xl={4}>
                        <iframe className='lc-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14435.248124709353!2d55.29898773082912!3d25.243255291994764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42d746882aa7%3A0xc8ebc181dc902bef!2sAl+Ansari+Exchange%2C+Karama+Branch!5e0!3m2!1sen!2sin!4v1476883323631"></iframe>
                        <div className='location'>
                            <span><GrMap />Al Karama Branch</span>                        
                            <p>Al Arti Building,</p>
                            <p>Behind Civil Defence,</p>
                            <p>Al Karama</p>
                        </div>
                    </Col>

                    <Col xl={4}>
                        <iframe className='lc-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.6632527793618!2d55.395868500899105!3d25.281911084382642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c2612635b29%3A0x623324569a15ce4!2sMadina+Mall!5e0!3m2!1sen!2sin!4v1476875157324"></iframe>
                        <div className='location'>
                            <span><GrMap />Madina Mall Branch</span>
                     
                            <p>Shop.No.G19,</p>

                            <p>Madina Mall,</p>

                            <p>Al Al Quasis</p>
                            
                            <p>Phone:04 238 0632</p>
                        </div>
                    </Col>

                    <Col xl={4}>
                        <iframe className='lc-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.371653086571!2d55.219960315008!3d25.123122983930653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bde5ee3671d%3A0x6a30793595d4a2d2!2sAl+Quoz+Mall+Visa+Medical+Centre!5e0!3m2!1sen!2sin!4v1490796244144"></iframe>
                        <div className='location'>
                            <span><GrMap />Al Quoz Mall</span>
                          
                            <p>Al Quos Mall,</p>

                            <p>Near Medical Fitness Centre,</p>

                            <p>Phone:04 321 6396</p>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='contact-row-main'>
                <Row className='contact-row'>

                    <Col md={6} className='contact-details'>

                        <h2>Get In Touch</h2>
                        <div className='col-1'>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="form-input" controlId="exampleForm.ControlInput1">
                                            <Form.Control type="text" placeholder="Enter Your Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="form-input" controlId="exampleForm.ControlInput1">
                                            <Form.Control type="email" placeholder="Enter Your Mail" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="form-input" controlId="exampleForm.ControlInput1">
                                            <Form.Control type="text" placeholder="Enter the Subject" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="form-input" controlId="exampleForm.ControlInput1">
                                            <Form.Control type="number" placeholder="Enter Your Phone number" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <Form.Group className="text-area" controlId="exampleForm.ControlTextarea1">
                                            <Form.Control as="textarea" rows={5} placeholder="Your Message" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                            <div className='button'>
                                <Button variant="primary" size="lg">
                                    Send Message
                                </Button>{' '}
                            </div>
                        </div>


                    </Col>
                    <Col md={6} className='contact-information'>
                        <h3>Contact Information</h3>

                        <div className='location'>
                            < MdLocationPin /> 125,Big Fella st.road,New York,Hi 564755
                        </div>

                        <div className='email-contact'>
                            <Row>
                                <Col sm={4} className='contact-us'>
                                    <span>< MdEmail /> Email Us</span>
                                    <Button variant="primary" size="lg">info@exmple.com </Button>{' '}
                                </Col>

                                <Col sm={4} className='contact-us'>
                                    <span>< IoIosCall /> Call Us</span>
                                    <Button variant="primary" size="lg">+(971) 123-456-789 </Button>{' '}
                                </Col>

                                <Col sm={4}>
                                </Col>
                            </Row>

                        </div>


                        <div className='social-icons'>
                            <h3>Follow Us</h3>
                            <a href=""><FaFacebookF /></a>
                            <a href="">< AiOutlineTwitter /></a>
                            <a href=""><FaLinkedinIn /></a>
                            <a href=""><FaWhatsappSquare /></a>
                            <a href=""><FaInstagramSquare /></a>
                            <a href=""><FaYoutube /></a>

                        </div>
                    </Col>

                </Row>

            </div>



        </div>

    )
}

export default memo(Contact)