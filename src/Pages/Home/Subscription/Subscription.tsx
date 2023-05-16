import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import subcar from "../../../Assets/Images/carlist2.png"


interface ISubscription {

}

const Subscription: React.FC<ISubscription> = (props) => {

  return (
    <div className='subscribe-main'>
      <Row className='row-subscribe'>
        <Col xl={6} className='col-sub-content'>
          {/* <div className='col-sub-content'> */}
          <h4>NEWSLETTER</h4>
          <h3>Subscribe  To Our Newsletter</h3>
          <h3>For New Updates</h3>
          <div className="input-text-content">
            <div className="p-inputgroup">
              <InputText className='text-label' placeholder="Your Email Address.." />
              <Button className='button-text' label="Subscribe Now" severity="danger" />
            </div>
          </div>
          {/* </div> */}
        </Col>

        <Col xl={6} className='col-sub-image'>
          {/* <div className='col-sub-image'> */}
          <img src={subcar} alt="" />
          {/* </div> */}
        </Col>

      </Row>


    </div>
  )
}
export default memo(Subscription)
