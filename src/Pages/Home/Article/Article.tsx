import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import art1 from "../../../Assets/Images/art1-image.jpg"
import art2 from "../../../Assets/Images/art2-image.jpg"
import art3 from "../../../Assets/Images/art3-image.jpg"

interface IArticle {

}

const Article: React.FC<IArticle> = (props) => {

    return (
        <div className='article-main'>
            <h4>HELPS YOU TO FIND A PERFECT CAR</h4>
            <h3>NEWS & <span>ARTICLE</span></h3>
            <Row className='row-article'>
                <Col xl={3}>
                    <div className='content-article'>
                        <Card>
                            <Card.Img variant="top"  src={art1} />
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
    )
}
export default memo(Article)

