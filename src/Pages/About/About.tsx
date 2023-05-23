import React, { memo, useEffect, useState } from 'react'
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
import emp1 from '../../Assets/Images/emp1.jpeg'


interface IAbout {

}

const Booking: React.FC<IAbout> = (props) => {

    const [aboutActiveKey, setAboutActiveKey] = useState("OUR_MISSION");
    const [yearsKey, setYearsKey] = useState("2000-2005")

    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const products = [
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1001',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1002',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1003',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1004',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1005',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
    ]

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    const productTemplate = (product: any) => {
        return (
            <div className='about-team'>
                <Card >
                    <Card.Img variant="top" src={emp1} />
                    <Card.Body>
                        <Card.Title>Member Name</Card.Title>
                        <Card.Text>Specialization</Card.Text>
                    </Card.Body>
                </Card>
            </div>

        );
    };


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
                        <h2>Explore Dubai with Morning Star- Ride in Luxury and Style!</h2>
                        <p className='para'>We are Morning Star, a UAE-based car rental company that provides services throughout the country. Since our establishment in 2000, there has been a steady growth and we are one of the well-known car rental companies in the UAE.

                            We offer our customers a wide range of vehicles at competitive rates and with efficient customer service. Our aim is to provide quality, safe and reliable vehicles to our customers at an affordable price.

                            Our team consists of highly trained professionals who are committed to providing excellent customer service every time you call us. We strive to make your travels hassle free and enjoyable, which is why we provide you with a wide range of vehicles at competitive rates.

                        </p>

                        <div className='about-list'>
                            <ul>
                                <li><span className='icon-check'><IoMdCheckboxOutline /></span>High Quality, Low Prices</li>
                                <li><span className='icon-check'><IoMdCheckboxOutline /></span>Wide selection of cars</li>
                                <li><span className='icon-check'><IoMdCheckboxOutline /></span>Excellent customer service</li>
                                <li><span className='icon-check'><IoMdCheckboxOutline /></span>Trusted rental company</li>
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
                                            At Morning Star, we strive to provide our customers with the most dependable and safe rental cars at an unbeatable price. We believe in a fast and hassle-free process that’s tailored to your needs and preferences.

                                        </Card.Text>
                                    </>
                                ) :
                                aboutActiveKey === "OUR_VISSION" ?
                                    (
                                        <>
                                            <Card.Title>Our Vission</Card.Title>
                                            <Card.Text>
                                                We want to be the go-to car rental company in Dubai, providing quality service and unbeatable value for our customers. We are committed to providing a stress-free rental experience that’s easy, secure, and fast.

                                            </Card.Text>
                                        </>
                                    ) : (
                                        <>
                                            <Card.Title>Values</Card.Title>
                                            <Card.Text>
                                                At Morning Star, we value safety, reliability, convenience, and affordability above all else. We guarantee a smooth customer experience that is always tailored to your needs.

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

                <div className='carousel-parent'>
                    <Carousel
                        className='carousel-main'
                        value={products}
                        numVisible={3}
                        numScroll={3}
                        responsiveOptions={responsiveOptions}
                        itemTemplate={productTemplate} />
                </div>
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
                    <Col xl={4}>
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
                    <Col xl={4}>
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
                    <Col xl={4}>
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
