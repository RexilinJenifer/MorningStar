import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap';
import car from "../../../Assets/Images/carlist3.png"
import { IoIosCall } from "react-icons/io";
import Button from 'react-bootstrap/Button';

interface IEnquiry {

}

const Enquiry: React.FC<IEnquiry> = (props) => {
    return (
        <div className='enquiry-main'>
            <div className='enquiry-row'>
                <Row>
                    <Col sm={6}>
                        <Row className='row-background'>
                            <Col xl={8}>
                                <div className='enquiry-car'>
                                    <img src={car} alt="" />
                                </div>
                            </Col>
                            <Col xl={4}>

                            </Col>
                        </Row>


                    </Col>


                    <Col sm={6}>
                        <div className='enquiry-content'>
                            <h2>We <span>Know</span></h2>
                            <p>At Morning Star Rental Cars Dubai, we know that renting a car can be stressful and time-consuming. That's why we strive to provide a hassle-free car rental experience that's both convenient and affordable. Our team of experienced professionals is dedicated to making every step of your rental process seamless and stress-free, from booking to drop-off. With a wide range of quality vehicles to choose from, you can find the perfect car for your needs, whether you're looking for a compact car for a solo trip or a spacious SUV for a family vacation. We believe that every mile should be a memory, and we're committed to helping you create unforgettable experiences on the road.</p>
                            <hr />
                            <div className='enquiry-details'>
                                <Row>
                                    <Col xl={6} className='enquiry-contact'>
                                        <Row>
                                            <Col sm={2} className='icon'>
                                                <span><IoIosCall /></span>
                                            </Col>
                                            <Col sm={10} className='contact'>
                                                <h4>Need Any Help?</h4>
                                                <h3>(971) 529 2093</h3>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xl={6} className='enquiry-quote'>
                                        <Button>REQUEST A QUOTE</Button>
                                    </Col>
                                </Row>

                            </div>
                        </div>
                    </Col>
                </Row>

            </div>

        </div>
    )
}
export default memo(Enquiry)