import React, { memo } from 'react'
import { FaGreaterThan } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Blog1 from "../../Assets/Images/blog1.jpeg";
import tag1 from "../../Assets/Images/tag1.jpg";
import Pagination from 'react-bootstrap/Pagination';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Row } from 'react-bootstrap';
import { FiPhoneCall } from "react-icons/fi";
import { BsFillAlarmFill, BsInstagram, BsYoutube } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";


interface IBlogs {

}
const Blogs: React.FC<IBlogs> = (props) => {

    const paginationData = []
    return (
        <div className='Blog-main'>
            <div className='Blog-home'>
                <h1>Blogs</h1>

                <h3>Home <FaGreaterThan /> <span>Blogs</span></h3>
            </div>
            <Row className='row-blog'>
                <Col xl={6}>
                    <div className='Blogs-content'>
                        <Card className='blog-card'>
                            <Card.Img variant="top" src={Blog1} />
                            <Card.Body>
                                <Card.Title className='blog-title'>The Best fastest and Most Powerful Road Car</Card.Title>
                                <Card.Text className='blog-text1'>APRIL 25,2020 JOSEPH KANE</Card.Text>
                                <Card.Text className='blog-text'>
                                    Qui nulla animi quae quis sapiente dicta nisi culpa libero at, reiciendis non ratione ipsum excepturi similique. Voluptatem, autem ipsam placeat earum ut ipsa ab eligendi, laborum at tenetur a fuga quidem!
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                        <Card className='blog-card'>
                            <Card.Img variant="top" src={Blog1} />
                            <Card.Body>
                                <Card.Title className='blog-title'>The Best fastest and Most Powerful Road Car</Card.Title>
                                <Card.Text className='blog-text1'>APRIL 25,2020 JOSEPH KANE</Card.Text>
                                <Card.Text className='blog-text'>
                                    Qui nulla animi quae quis sapiente dicta nisi culpa libero at, reiciendis non ratione ipsum excepturi similique. Voluptatem, autem ipsam placeat earum ut ipsa ab eligendi, laborum at tenetur a fuga quidem!
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                        <Card className='blog-card'>
                            <Card.Img variant="top" src={Blog1} />
                            <Card.Body>
                                <Card.Title className='blog-title'>The Best fastest and Most Powerful Road Car</Card.Title>
                                <Card.Text className='blog-text1'>APRIL 25,2020 JOSEPH KANE</Card.Text>
                                <Card.Text className='blog-text'>
                                    Qui nulla animi quae quis sapiente dicta nisi culpa libero at, reiciendis non ratione ipsum excepturi similique. Voluptatem, autem ipsam placeat earum ut ipsa ab eligendi, laborum at tenetur a fuga quidem!
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                        <Card className='blog-card'>
                            <Card.Img variant="top" src={Blog1} />
                            <Card.Body>
                                <Card.Title className='blog-title'>The Best fastest and Most Powerful Road Car</Card.Title>
                                <Card.Text className='blog-text1'>APRIL 25,2020 JOSEPH KANE</Card.Text>
                                <Card.Text className='blog-text'>
                                    Qui nulla animi quae quis sapiente dicta nisi culpa libero at, reiciendis non ratione ipsum excepturi similique. Voluptatem, autem ipsam placeat earum ut ipsa ab eligendi, laborum at tenetur a fuga quidem!
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='blog-pagination'>
                        <Pagination>
                            <Pagination.Item  active>1</Pagination.Item>
                            <Pagination.Item >2</Pagination.Item>
                            <Pagination.Item >3</Pagination.Item>
                            <Pagination.Item >4</Pagination.Item>
                        </Pagination>
                    </div>
                </Col>
                <Col xl={6}>
                    <div className='category'>
                        <h2>By Category</h2>
                        <ListGroup as="ul" className='list-category'>
                            <ListGroup.Item as="li" className='active'>All Brands(2376)</ListGroup.Item>
                            <ListGroup.Item as="li">Toyota(237)</ListGroup.Item>
                            <ListGroup.Item as="li">Nissan(123)</ListGroup.Item>
                            <ListGroup.Item as="li">Mercedes(23)</ListGroup.Item>
                            <ListGroup.Item as="li">Hyundai(467)</ListGroup.Item>
                            <ListGroup.Item as="li">Audi(123)</ListGroup.Item>
                            <ListGroup.Item as="li">Datsun(23)</ListGroup.Item>
                            <ListGroup.Item as="li">Mitsubishi(223)</ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className='tags'>
                        <h2>By Tags</h2>
                        <ListGroup as="ul" className='list-tags'>
                            <ListGroup.Item as="li">
                                <div className='tag-img'><img src={tag1} alt="" /></div>
                                <div className='tag-text'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, exercitationem.
                                    <span>APRIL 25,2020 JOSEPH KANE</span>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <div className='tag-img'><img src={tag1} alt="" /></div>
                                <div className='tag-text'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, exercitationem.
                                    <span>APRIL 25,2020 JOSEPH KANE</span>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <div className='tag-img'><img src={tag1} alt="" /></div>
                                <div className='tag-text'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, exercitationem.
                                    <span>APRIL 25,2020 JOSEPH KANE</span>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <div className='tag-img'><img src={tag1} alt="" /></div>
                                <div className='tag-text'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, exercitationem.
                                    <span>APRIL 25,2020 JOSEPH KANE</span>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>

                    <div className='information'>
                        <h2>For More Informations</h2>
                        <hr />
                        <div className='phone'><span><FiPhoneCall /></span>+971 123 456 7899</div>
                        <div className='clock'><span><BsFillAlarmFill /></span> Monday To Friday- 9.00am - 6.00pm</div>
                    </div>
                    <div className='connect'>
                        <h2>Connect with Us</h2>
                        <hr />
                        <div className='icons'>
                            <span><ImFacebook /></span>
                            <span><IoLogoWhatsapp /></span>
                            <span><BsInstagram /></span>
                            <span><FaTwitter /></span>
                            <span><BsYoutube /></span>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default memo(Blogs)
