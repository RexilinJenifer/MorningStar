import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { TbSteeringWheel } from "react-icons/tb";
import { BsFillPostcardFill } from "react-icons/bs";
import { IoIosCar } from "react-icons/io";
import arrow from '../../../Assets/Svg/Arrow.svg'

interface ICarcontent {

}

const Carcontent: React.FC<ICarcontent> = (props) => {
  return (
    <div className='car-content-main'>
      <div className='car-content-header'>
        <h3>Book Your</h3>
        <h2>Rental Cars Now!</h2>
      </div>

      <Row className='car-content-row'>
        <Col xl={4} className="car-content-col">

          <div className='content'>
            <div className='m-icon'>
              <span><TbSteeringWheel /></span>
            </div>

            <div className='a-icon'>
              <img src={arrow} alt="" />
            </div>

            <div className='content-area'>
              <h3>Choose your favorite car</h3>
              <p>Our selection of cars is second to none. We have everything from luxury sedans to SUVs, so you can find the perfect car to fit your needs.</p>
            </div>
          </div>
        </Col>

        <Col xl={4} className="car-content-col">


          <div className='content'>
            <div className='m-icon'>
              <span><BsFillPostcardFill /></span>
            </div>

            <div className='a-icon'>
              <img src={arrow} alt="" />
            </div>

            <div className='content-area'>
              <h3>Easy booking process</h3>
              <p>Booking your rental car with us is simple and straightforward. Just select your preferred vehicle, enter your travel dates and location, and you're good to go!</p>
            </div>

          </div>
        </Col>

        <Col xl={4} className="car-content-col">

          <div className='content'>
            <div className='m-icon'>
              <span><IoIosCar /></span>
            </div>

            <div className='a-icon'>
              <img src={arrow} alt="" />
            </div>

            <div className='content-area'>
              <h3>Car delivery and pickup</h3>
              <p>We offer free delivery and pickup on all rentals, saving you time and hassle. So no matter where you stay in Dubai, we'll make sure your rental car arrives right on time!</p>
            </div>
          </div>
        </Col >
      </Row >

    </div >
  )
}

export default memo(Carcontent)