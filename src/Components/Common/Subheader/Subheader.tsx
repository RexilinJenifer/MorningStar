import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { BsFillAlarmFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import logo from '../../../Assets/Svg/Logo.svg'

interface ISubheader {

}
const Subheader: React.FC<ISubheader> = (props) => {
  return (
    <div className='Subheader'>
      <Row className='row-subheader'>
        <Col className='content'>
          <div className='content-logo'>
            <img src={logo} alt="morning star" />
          </div>
        </Col>
        <Col className='content details'>
          <div className='sub-content'>
            <BsFillAlarmFill />
            <div className='content-details'>
              <span>Monday to Friday</span>
              <span>9:00 am - 6:00 pm</span>
            </div>
          </div>
          <div className='sub-content'>
            <ImLocation />
            <div className='content-details'>
              <span>Address</span>
              <span>Melbourne City, UAE</span>
            </div>
          </div>
        </Col>
        <Col  className='booked'>
          <div className='car-book'>
            <span className='offer-btn-1'>Book a Car</span>
            <span className='offer-btn-1'>Resume Call</span>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default memo(Subheader)