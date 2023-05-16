import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap';



interface IBooking {

}

const Booking: React.FC<IBooking> = (props) => {
    return (
        <div className='main-booking'>

            <div className='booking-header'>
                <h4>Features</h4>
                <h2>Our Booking Process</h2>
            </div>

            <div className='row-booking-process'>

                <Row className='process-details'>

                    <Col xl={3} className='process-content'>
                        <div className='process-features'>
                            <h1 className="dotted-line">01</h1>
                            <h4>Search Our Inventory</h4>
                            <p>Our inventory of cars is updated regularly, so you can always find the perfect ride for your needs. Search by type, make, and model to find your ideal car.</p>
                        </div>
                    </Col>

                    <Col xl={3} className='process-content'>
                        <div className='process-features'>
                            <h1 className="dotted-line">02</h1>
                            <h4>Search Location</h4>
                            <p>Choose from our various locations in Dubai to pick up or drop off your rental car. Our knowledgeable representatives will be ready to assist you throughout the process.</p>
                        </div>
                    </Col>

                    <Col xl={3} className='process-content'>
                        <div className='process-features'>
                            <h1 className="dotted-line">03</h1>
                            <h4>Select Date and Time</h4>
                            <p>Pick the date and time that works best for you when it comes to renting a car. We have flexible schedules for pickup and drop-off times, so you don't have to worry about any delays.</p>
                        </div>
                    </Col>

                    <Col xl={3} className='process-content'>
                        <div className='process-features'>
                            <h1>04</h1>
                            <h4>Make Your Ride</h4>
                            <p>Booking a car with us is easy and fast. Simply enter your details on our website or call us directly to get started on renting a car today!</p>
                        </div>
                    </Col>

                </Row>
            </div>


        </div>
    )
}
export default memo(Booking)
