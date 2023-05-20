import React, { memo, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Carousel } from 'primereact/carousel';
import { FaGreaterThan } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import Card from 'react-bootstrap/Card';
import steer from "../../Assets/Images/steering.jpg"
import car from "../../Assets/Images/carblack.jpeg"

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import subcar from "../../Assets/Images/carlist2.png"

import art1 from "../../Assets/Images/art1-image.jpg"
import art2 from "../../Assets/Images/art2-image.jpg"
import art3 from "../../Assets/Images/art3-image.jpg"


interface IAbout {

}

const Booking: React.FC<IAbout> = (props) => {

    const [aboutActiveKey, setAboutActiveKey] = useState("OUR_MISSION");
    const [yearsKey, setYearsKey] = useState("2000-2005")


    return (
        <div className='about-main'>
            <div className='about-home'>
                <h1>ABOUT US</h1>

                <h3>Home <FaGreaterThan /><span>About Us</span></h3>
            </div>

            <Row className='about-row'>
                <Col xl={6}>
                    <div className='about-content'>
                        <h4>About Us</h4>
                        <h2>We Are Committed To Provide Safe Ride Solutions</h2>
                        <p className='para'>Welcome to Morning Star Rental Cars Dubai, where every mile is a memory!
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

                    </div>
                </Col>

                <Col xl={6}>
                    <Card className='mission-card'>
                        <Card.Img variant="top" src={steer} />
                        <Card.Body>
                            <div className='vision-mission'>
                                <div className={`mission ${aboutActiveKey === "OUR_MISSION" ? 'active' : ''}`} onClick={() => setAboutActiveKey("OUR_MISSION")}><a >OUR MISSION</a> </div>
                                <span className={`vision ${aboutActiveKey === "OUR_VISSION" ? 'active' : ''}`} onClick={() => setAboutActiveKey("OUR_VISSION")}><a >OUR VISION</a> </span>
                                <span className={`values ${aboutActiveKey === "VALUES" ? 'active' : ''}`} onClick={() => setAboutActiveKey("VALUES")}><a >VALUES</a> </span>
                            </div>
                            {aboutActiveKey === "OUR_MISSION" ?
                                (
                                    <>
                                        <Card.Title>Our Mission</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus aperiam minima repellendus. Numquam neque reiciendis ullam mollitia. Quod, inventore placeat!
                                        </Card.Text>
                                    </>
                                ) :
                                aboutActiveKey === "OUR_VISSION" ?
                                    (
                                        <>
                                            <Card.Title>Our Vission</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus aperiam minima repellendus. Numquam neque reiciendis ullam mollitia. Quod, inventore placeat!
                                            </Card.Text>
                                        </>
                                    ) : (
                                        <>
                                            <Card.Title>Values</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus aperiam minima repellendus. Numquam neque reiciendis ullam mollitia. Quod, inventore placeat!
                                            </Card.Text>
                                        </>
                                    )
                            }

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className='history-row'>
                <Col xl={8}>
                    <div className='history-header'>
                        <h4>Our History</h4>
                        <h2>About Our Journey</h2>

                        <ul className='year-ul'>
                            <li className='year-li' onClick={() => setYearsKey("2000-2005")}>
                                <span className={`link ${yearsKey === "2000-2005" ? 'active' : ''}`}>2000-2005</span>
                            </li>
                            <li className='year-li' onClick={() => setYearsKey("2005-2010")}>
                                <span className={`link ${yearsKey === "2005-2010" ? 'active' : ''}`}>2005-2010 </span>
                            </li>
                            <li className='year-li' onClick={() => setYearsKey("2010-2015")}>
                                <span className={`link ${yearsKey === "2010-2015" ? 'active' : ''}`}>2010-2015</span>
                            </li>
                            <li className='year-li' onClick={() => setYearsKey("2015-2022")}>
                                <span className={`link ${yearsKey === "2015-2022" ? 'active' : ''}`}>2015-2022</span>
                            </li>
                        </ul>

                        <div className='year-content'>
                            {yearsKey === "2000-2005" ?
                                (
                                    <>
                                        <h2>2000-2005</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo magnam aliquam beatae laboriosam incidunt? Aliquid omnis accusantium ullam praesentium voluptates qui velit tenetur molestias neque dolor, temporibus enim debitis corrupti aperiam consequuntur quo autem nisi animi esse possimus perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorum excepturi, ipsum sapiente porro recusandae possimus a accusamus rem ducimus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo consequatur, amet voluptatum nostrum ratione quo libero minima aspernatur temporibus laudantium.</p>
                                    </>
                                ) : yearsKey === "2005-2010" ?
                                    (
                                        <>
                                            <h2>2005-2010</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo magnam aliquam beatae laboriosam incidunt? Aliquid omnis accusantium ullam praesentium voluptates qui velit tenetur molestias neque dolor, temporibus enim debitis corrupti aperiam consequuntur quo autem nisi animi esse possimus perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorum excepturi, ipsum sapiente porro recusandae possimus a accusamus rem ducimus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo consequatur, amet voluptatum nostrum ratione quo libero minima aspernatur temporibus laudantium.</p>
                                        </>
                                    ) : yearsKey === "2010-2015" ?
                                        (
                                            <>
                                                <h2>2010-2015</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo magnam aliquam beatae laboriosam incidunt? Aliquid omnis accusantium ullam praesentium voluptates qui velit tenetur molestias neque dolor, temporibus enim debitis corrupti aperiam consequuntur quo autem nisi animi esse possimus perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorum excepturi, ipsum sapiente porro recusandae possimus a accusamus rem ducimus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo consequatur, amet voluptatum nostrum ratione quo libero minima aspernatur temporibus laudantium.</p>
                                            </>
                                        ) : (
                                            <>
                                                <h2>2015-2022</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo magnam aliquam beatae laboriosam incidunt? Aliquid omnis accusantium ullam praesentium voluptates qui velit tenetur molestias neque dolor, temporibus enim debitis corrupti aperiam consequuntur quo autem nisi animi esse possimus perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorum excepturi, ipsum sapiente porro recusandae possimus a accusamus rem ducimus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo consequatur, amet voluptatum nostrum ratione quo libero minima aspernatur temporibus laudantium.</p>
                                            </>
                                        )
                            }

                        </div>

                    </div>
                </Col>

                <Col xl={4}>
                    <div className='year-image'>
                        <img src={car} alt="" />
                    </div>
                </Col>
            </Row>

            <div className='team-experts'>
                <h4>Experts</h4>
                <h2>Our Members</h2>
            </div>

            <div className='about-subscribe-main'>
                <Row className='row-subscribe'>
                    <Col xl={6} className='col-sub-content'>
                        <h4>NEWSLETTER</h4>
                        <h3>Subscribe  To Our Newsletter</h3>
                        <h3>For New Updates</h3>
                        <div className="input-text-content">
                            <div className="p-inputgroup">
                                <InputText className='text-label' placeholder="Your Email Address.." />
                                <Button className='button-text' label="Subscribe Now" severity="danger" />
                            </div>
                        </div>
                    </Col>

                    <Col xl={6} className='col-sub-image'>
                        <img src={subcar} alt="" />
                    </Col>

                </Row>
            </div>

            <div className='about-article-main'>
                <h4>HELPS YOU TO FIND A PERFECT CAR</h4>
                <h3>NEWS & <span>ARTICLE</span></h3>
                <Row className='row-article'>
                    <Col xl={3}>
                        <div className='content-article'>
                            <Card>
                                <Card.Img variant="top" src={art1} />
                                <Card.Body>
                                    <Card.Text className='article-text'>
                                        APRIL 25,2020 BY JOSEPH KANE
                                    </Card.Text>
                                    <Card.Title className='article-title'>The Best Fastest And Most Powerful Road Car</Card.Title>
                                    <Card.Text className='article-text'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, facere. Ullam nesciunt reiciendis ducimus, quaerat facilis quod delectus nemo eos!
                                    </Card.Text>
                                    <a href="#" className='article-link'>Read Article</a>
                                </Card.Body>
                            </Card>
                        </div>

                    </Col>
                    <Col xl={3}>
                        <div className='content-article'>
                            <Card>
                                <Card.Img variant="top" src={art2} />
                                <Card.Body>
                                    <Card.Text className='article-text'>
                                        APRIL 25,2020 BY JOSEPH KANE
                                    </Card.Text>
                                    <Card.Title className='article-title'>The Best Fastest And Most Powerful Road Car</Card.Title>
                                    <Card.Text className='article-text'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, facere. Ullam nesciunt reiciendis ducimus, quaerat facilis quod delectus nemo eos!
                                    </Card.Text>
                                    <a href="#" className='article-link'>Read Article</a>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col xl={3}>
                        <div className='content-article'>
                            <Card>
                                <Card.Img variant="top" src={art3} />
                                <Card.Body>
                                    <Card.Text className='article-text'>
                                        APRIL 25,2020 BY JOSEPH KANE
                                    </Card.Text>
                                    <Card.Title className='article-title'>The Best Fastest And Most Powerful Road Car</Card.Title>
                                    <Card.Text className='article-text'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, facere. Ullam nesciunt reiciendis ducimus, quaerat facilis quod delectus nemo eos!
                                    </Card.Text>
                                    <a href="#" className='article-link'>Read Article</a>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                </Row>

            </div>
        </div>

    )
}
export default memo(Booking)
