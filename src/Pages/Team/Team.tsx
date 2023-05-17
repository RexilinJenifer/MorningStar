import React, { memo, useEffect } from 'react'
import { FaGreaterThan } from "react-icons/fa";
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import emp1 from '../../Assets/Images/emp1.jpeg'
import Button from 'react-bootstrap/Button';

interface ITeam {

}

const Team: React.FC<ITeam> = (props) => {

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    
    return (
        <div className='team-main'>
            <div className='team-home'>
                <h1>Our Team</h1>

                <h3>Home <FaGreaterThan /> <span>Contact Us</span></h3>
            </div>

            <div className='emp-card'>
                <Row>
                    <h3>Experts</h3>
                    <h2>OUR MEMBERS</h2>
                    <Col xl={4}>
                        <Card >
                            <Card.Img variant="top" src={emp1} />
                            <Card.Body>
                                <Card.Title>WILLIAM BENSON</Card.Title>
                                <Card.Text>OWNER & CEO</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={4}>
                        <Card >
                            <Card.Img variant="top" src={emp1} />
                            <Card.Body>
                                <Card.Title>WILLIAM BENSON</Card.Title>
                                <Card.Text>OWNER & CEO</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={4}>
                        <Card >
                            <Card.Img variant="top" src={emp1} />
                            <Card.Body>
                                <Card.Title>WILLIAM BENSON</Card.Title>
                                <Card.Text>OWNER & CEO</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xl={4}>
                        <Card >
                            <Card.Img variant="top" src={emp1} />
                            <Card.Body>
                                <Card.Title>WILLIAM BENSON</Card.Title>
                                <Card.Text>OWNER & CEO</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={4}>
                        <Card >
                            <Card.Img variant="top" src={emp1} />
                            <Card.Body>
                                <Card.Title>WILLIAM BENSON</Card.Title>
                                <Card.Text>OWNER & CEO</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={4}>
                        <Card >
                            <Card.Img variant="top" src={emp1} />
                            <Card.Body>
                                <Card.Title>WILLIAM BENSON</Card.Title>
                                <Card.Text>OWNER & CEO</Card.Text>
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
export default memo(Team)