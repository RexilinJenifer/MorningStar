import React, { memo } from 'react'
import { FaGreaterThan } from "react-icons/fa";
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import car from '../../Assets/Images/white.png'

interface IFleets {

}

const Fleets: React.FC<IFleets> = (props) => {
    return (
        <div className='fleet-main'>
            <div className='fleet-home'>
                <h1>Our Fleets</h1>

                <h3>Home <FaGreaterThan /><span>Our Fleets</span></h3>
            </div>

            <div className='fleet-card'>
                <div className='list-options'>
                    <h3>Brands</h3>
                    <h2>OUR FLEETS</h2>
                    <ul className='carlist-ul'>
                        <li className='carlist-li'>
                            <span className='link'>Economy</span>
                        </li>
                        <li className='carlist-li'>
                            <span className='link'>Luxury </span>
                        </li>
                        <li className='carlist-li'>
                            <span className='link'>Family</span>
                        </li>
                    </ul>
                </div>
                <Row>

                    <Col xl={4}>
                        <Card >
                            <Card.Img variant="top" src={car} />

                            <Card.Body>
                                {/* <Card.Title>WILLIAM BENSON</Card.Title>
                                <Card.Text>OWNER & CEO</Card.Text> */}
                            </Card.Body>

                        </Card>
                    </Col>

                    <Col xl={4}>
                        <Card >
                            <Card.Img variant="top" src={car} />
                            <Card.Body>
                                {/* <Card.Title>WILLIAM BENSON</Card.Title>
                                <Card.Text>OWNER & CEO</Card.Text> */}
                            </Card.Body>

                        </Card>
                    </Col>

                    <Col xl={4}>
                        <Card >
                            <Card.Img variant="top" src={car} />
                            <Card.Body>
                                {/* <Card.Title>WILLIAM BENSON</Card.Title>
                                <Card.Text>OWNER & CEO</Card.Text> */}
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xl={4}>
                        <Card >
                            <Card.Img variant="top" src={car} />
                            <Card.Body>
                                {/* <Card.Title>WILLIAM BENSON</Card.Title>
                                <Card.Text>OWNER & CEO</Card.Text> */}
                            </Card.Body>

                        </Card>
                    </Col>

                    <Col xl={4}>
                        <Card >
                            <Card.Img variant="top" src={car} />
                            <Card.Body>
                                {/* <Card.Title>WILLIAM BENSON</Card.Title>
                                <Card.Text>OWNER & CEO</Card.Text> */}
                            </Card.Body>

                        </Card>
                    </Col>

                    <Col xl={4}>
                        <Card >
                            <Card.Img variant="top" src={car} />
                            <Card.Body>
                                {/* <Card.Title>WILLIAM BENSON</Card.Title>
                                <Card.Text>OWNER & CEO</Card.Text> */}
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
                <div className='button'>
                    <Button variant="primary">More Pictures</Button>
                </div>
            </div>

        </div>

    )
}
export default memo(Fleets)