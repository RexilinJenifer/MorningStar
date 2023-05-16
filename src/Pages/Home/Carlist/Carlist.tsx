import React, { memo } from 'react'
import { Col, Row, Button } from 'react-bootstrap';
//images
import Ncar from '../../../Assets/Images/carlist1.png';
import Ocar from '../../../Assets/Images/carlist2.png';
import Pcar from '../../../Assets/Images/carlist3.png';
//icons
import { BsCarFrontFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { MdSpeed } from "react-icons/md";
import Card from 'react-bootstrap/Card';


interface ICarlist {

}

const Carlist: React.FC<ICarlist> = (props) => {
    return (
        <div className='main-list'>
            <h2>What a Kind of car you want</h2>
            <div className='list-options'>
                <ul className='carlist-ul'>
                    <li className='carlist-li'>
                        <span className='link'>Deals & Offers</span>
                    </li>
                    <li className='carlist-li'>
                        <span className='link'>Luxury & Sports</span>
                    </li>
                    <li className='carlist-li'>
                        <span className='link'>SUV & Sedan Fans</span>
                    </li>
                    <li className='carlist-li'>
                        <span className='link'>Monthly & Daily </span>
                    </li>
                </ul>
            </div>
            <div className='row-car-list'>
                <Card>
                    <Card.Img variant="top" src={Ncar} />
                    <Card.Body>
                        <Card.Title>Toyota Alphard</Card.Title>
                        <Card.Title>2500 AED <span>/Day</span></Card.Title>
                        <Card.Text>
                            <div className='icar-details'>
                                <span>< BsCarFrontFill />Model:2017</span>
                                <span>< AiFillSetting />Brand:Nissan</span>
                                <span>< MdSpeed />20 kmph</span>
                            </div>
                            <div className="offer-action">
                                <span className='offer-btn-1'>Rent Car</span>
                                <span className='offer-btn-1'>Details</span>
                            </div>
                            {/* <div className='car-rent'>
                                <img src={black} alt="" />
                            </div>
                            <div className='car-details'>
                                <img src={red} alt="" />
                            </div> */}

                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Ocar} />
                    <Card.Body>
                        <Card.Title>Toyota Alphard</Card.Title>
                        <Card.Title>2500 AED <span>/Day</span></Card.Title>
                        <Card.Text>
                            <div className='icar-details'>
                                <span>< BsCarFrontFill />Model:2017</span>
                                <span>< AiFillSetting />Brand:Nissan</span>
                                <span>< MdSpeed />20 kmph</span>
                            </div>
                            <div className="offer-action">
                                <span className='offer-btn-1'>Rent Car</span>
                                <span className='offer-btn-1'>Details</span>
                            </div>
                            {/* <div className='car-rent'>
                                <img src={black} alt="" />
                            </div>
                            <div className='car-details'>
                                <img src={red} alt="" />
                            </div> */}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Pcar} />
                    <Card.Body>
                        <Card.Title>Toyota Alphard</Card.Title>
                        <Card.Title>2500 AED <span>/Day</span></Card.Title>
                        <Card.Text>
                            <div className='icar-details'>
                                <span>< BsCarFrontFill />Model:2017</span>
                                <span>< AiFillSetting />Brand:Nissan</span>
                                <span>< MdSpeed />20 kmph</span>
                            </div>
                            <div className="offer-action">
                                <span className='offer-btn-1'>Rent Car</span>
                                <span className='offer-btn-1'>Details</span>
                            </div>
                            {/* <div className='car-rent'>
                                <img src={black} alt="" />
                            </div>
                            <div className='car-details'>
                                <img src={red} alt="" />
                            </div> */}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="action-btn">
                <Button className='btn' size="lg"> Become More Easier</Button>
            </div>


        </div>
    )
}
export default memo(Carlist)