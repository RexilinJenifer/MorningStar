import React, { memo } from 'react'
import img from "../../../Assets/Images/about-car.png"
import sign from "../../../Assets/Images/signature.png"
import { IoMdCheckboxOutline } from "react-icons/io";
import { Col, Row } from 'react-bootstrap';

interface IAboutus {

}

const Aboutus: React.FC<IAboutus> = (props) => {
    return (
        <div className='container-main'>
            <Row className='row-main'>
                <Col xl={6}>
                    <div className='about-left'>
                        <h4>About Us</h4>
                        <h2>Welcome to Car Rent</h2>
                        <p className='para-content'>Welcome to Morning Star Rental Cars Dubai, where every mile is a memory!
                            Morning Star Rental Cars is a UAE-based rental car company that offers car rental and hire services throughout the country. Established in 2000, we have steadily grown over the years and have become one of the most sought-after rental car companies in the UAE. Our success is attributed to our ease of service and flexibility, which are tailored to meet our customers' demands. Our budgeted rates are another highlight, and we always strive to provide our customers with the best value for their money. With Morning Star Rental Cars, you can experience Dubai differently and create unforgettable memories. Come and experience the Morning Star difference today!
                        </p>

                        <div className='about-list'>
                            <ul>
                                <li><span className='icon-check'><IoMdCheckboxOutline /></span>Convenience at its best</li>
                                <li><span className='icon-check'><IoMdCheckboxOutline /></span>Experience the comfort of driving</li>
                                <li><span className='icon-check'><IoMdCheckboxOutline /></span>Friendly & Professional Staff</li>
                                <li><span className='icon-check'><IoMdCheckboxOutline /></span>Affordable rates for all budgets</li>
                            </ul>

                        </div>

                        <div className='about-signature'>
                            {/* <div className='signature-left'>

                                <img src={sign} alt="" />

                             </div> */}
                            <div className='signature-right'>

                                <h3><b>John Mathew</b></h3>
                                <p>CEO/FOUNDER</p>
                            </div>

                        </div>

                    </div>
                </Col>
                <Col xl={6}>
                    <div className='about-right'>
                        <img src={img} alt="" />
                    </div>
                </Col>

            </Row>

        </div>

    )
}

export default memo(Aboutus)