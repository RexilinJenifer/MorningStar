import React, { memo, useState } from 'react'
import { FaGreaterThan } from "react-icons/fa";
import { Col, Row } from 'react-bootstrap';
import { Dropdown } from 'primereact/dropdown';
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";
import carbw from "../../Assets/Images/carbw.jpeg";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { TfiViewListAlt, TfiLayoutGrid2Alt } from "react-icons/tfi";
import { BsCarFrontFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { MdSpeed } from "react-icons/md";
import car from "../../Assets/Images/about-car.png";
import Pagination from 'react-bootstrap/Pagination';



interface ICartypes {

}

const Contact: React.FC<ICartypes> = (props) => {
    const [selectedBrand, setSelectedBrand] = useState(null);
    const brands = [
        { name: 'Toyota', code: 'NY' },
        { name: 'Nissan', code: 'RM' },
        { name: 'Mercedes', code: 'LDN' },
    ];
    const [selectedModel, setSelectedModel] = useState(null);
    const model = [
        { name: 'Toyota', code: 'NY' },
        { name: 'Nissan', code: 'RM' },
        { name: 'Mercedes', code: 'LDN' },
    ];
    const [selectedFuel, setSelectedFuel] = useState(null);
    const fuel = [
        { name: 'Petrol', code: 'NY' },
        { name: 'Diesel', code: 'RM' },
        { name: 'Hybrid', code: 'LDN' },
    ];
    const [selectedTransmission, setSelectedTransmission] = useState(null);
    const transmission = [
        { name: 'Automatic', code: 'NY' },
        { name: 'Manual', code: 'RM' },
        { name: 'Semi-Auto', code: 'LDN' },
    ];
    const [selectedCondition, setSelectedCondition] = useState(null);
    const condition = [
        { name: 'New', code: 'NY' },
        { name: 'Used', code: 'RM' },
        { name: 'Driver', code: 'LDN' },
        { name: 'Non-Driver', code: 'LDN' },
    ];
    const [selectedResults, setSelectedResults] = useState(null);
    const results = [
        { name: 'New', code: 'NY' },
        { name: 'Used', code: 'RM' },
        { name: 'Driver', code: 'LDN' },
        { name: 'Non-Driver', code: 'LDN' },
    ];
    const data = [
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2s.jpg',
            alt: 'Description for Image 2',
            title: 'Title 2'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3s.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4s.jpg',
            alt: 'Description for Image 4',
            title: 'Title 4'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5s.jpg',
            alt: 'Description for Image 5',
            title: 'Title 5'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria6.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria6s.jpg',
            alt: 'Description for Image 6',
            title: 'Title 6'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7s.jpg',
            alt: 'Description for Image 7',
            title: 'Title 7'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria8.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria8s.jpg',
            alt: 'Description for Image 8',
            title: 'Title 8'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria9.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria9s.jpg',
            alt: 'Description for Image 9',
            title: 'Title 9'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria10s.jpg',
            alt: 'Description for Image 10',
            title: 'Title 10'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria11.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria11s.jpg',
            alt: 'Description for Image 11',
            title: 'Title 11'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria12s.jpg',
            alt: 'Description for Image 12',
            title: 'Title 12'
        },
    ];
    const [value, setValue] = useState<any>([20, 80]);
    return (
        <div className='cartype-main'>
            <div className='cartype-home'>
                <h1>CAR RENTAL</h1>

                <h3>Home <FaGreaterThan /> <span>Car Rental</span></h3>
            </div>
            <Row className='row-carrental'>
                <Col md={4}>
                    <div className='search-car'>
                        <div className='car-head'>
                            <h3>SEARCH A CAR</h3>
                        </div>

                        <h4>BY MAKE</h4>
                        <div className='car-make'>
                            <Dropdown value={selectedBrand} onChange={(e) => setSelectedBrand(e.value)} options={brands} optionLabel="name"
                                placeholder="All Makes" />
                        </div>
                        <div className='car-model'>
                            <Dropdown value={selectedModel} onChange={(e) => setSelectedModel(e.value)} options={model} optionLabel="name"
                                placeholder="All Models" />
                        </div>

                        <div className='price-range'>
                            <h3>PRICE RANGE</h3>
                            <div className="set-range">
                                <Slider color='red' value={value} onChange={(e: any) => setValue(e.value)} className="w-14rem" range />
                            </div>
                            <div className='range-aed'>
                                <InputText type="text" placeholder="0 AED" />
                                <span>-</span>
                                <InputText type="text" placeholder="9999 AED" />
                            </div>

                            <div className='vehicle-type'>
                                <h3>VEHICLE BODY TYPE</h3>

                                <Row className='car-type'>
                                    <Col xl={4}>
                                        <Card>
                                            <Card.Img variant="top" src={carbw} />
                                            <Card.Body>
                                                <Card.Title className='h5'>CONVERTIBLE</Card.Title>
                                            </Card.Body>
                                        </Card>
                                        <Card>
                                            <Card.Img variant="top" src={carbw} />
                                            <Card.Body>
                                                <Card.Title className='h5'>COUPE</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={4}>
                                        <Card>
                                            <Card.Img variant="top" src={carbw} />
                                            <Card.Body>
                                                <Card.Title className='h5'>MINI CAR</Card.Title>
                                            </Card.Body>
                                        </Card>
                                        <Card>
                                            <Card.Img variant="top" src={carbw} />
                                            <Card.Body>
                                                <Card.Title className='h5'>PICK UP</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={4}>
                                        <Card>
                                            <Card.Img variant="top" src={carbw} />
                                            <Card.Body>
                                                <Card.Title className='h5'>SEDAN</Card.Title>
                                            </Card.Body>
                                        </Card>
                                        <Card>
                                            <Card.Img variant="top" src={carbw} />
                                            <Card.Body>
                                                <Card.Title className='h5'>SUPER CAR</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                            <div className='fuel-type'>
                                <h3>FUEL TYPE</h3>
                                <div className='fuel-drop'>
                                    <Dropdown value={selectedFuel} onChange={(e) => setSelectedFuel(e.value)} options={fuel} optionLabel="name"
                                        placeholder="Petrol/Diesel/Hybrid/Electric" />
                                </div>
                            </div>
                            <div className='transmission'>
                                <h3>TRANSMISSION RANGE</h3>
                                <div className='transmission-drop'>
                                    <Dropdown value={selectedTransmission} onChange={(e) => setSelectedTransmission(e.value)} options={transmission} optionLabel="name"
                                        placeholder="Automatic/Manual/Semi-Auto" />
                                </div>
                            </div>

                            <div className='mileage'>
                                <h3>MILEAGE RANGE</h3>
                                <div className='mileage-set'>
                                    <Slider color='red' value={value} onChange={(e: any) => setValue(e.value)} className="w-14rem" range />
                                </div>
                                <div className='range-km'>
                                    <InputText type="text" placeholder="0 Km" />
                                    <span>-</span>
                                    <InputText type="text" placeholder="50 Km" />
                                </div>
                            </div>
                            <div className='condition'>
                                <h3>CONDITION</h3>
                                <div className='condition-drop'>
                                    <Dropdown value={selectedCondition} onChange={(e) => setSelectedCondition(e.value)} options={condition} optionLabel="name"
                                        placeholder="New/Used/Driver/Non-Driver" />
                                </div>
                            </div>
                            <div className='filter-button'>
                                <Button>Reset Filter</Button>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={8}>
                    <div className='list-main'>
                        <div className='results'>
                            <span><TfiViewListAlt /></span>
                            <span><TfiLayoutGrid2Alt /></span>
                            <span className='search-results'>1-10 to 25 results</span>

                            <Dropdown value={selectedResults} onChange={(e) => setSelectedResults(e.value)} options={results} optionLabel="name"
                                placeholder="Default" />
                        </div>
                        <div className='car-list'>
                            <Row className='car-rows'>
                                {data?.map((item, key) => (
                                    <Col key={key} sm={4} className='gallery-cols'>
                                        <Card>
                                            <Card.Img variant="top" src={car} />
                                            <Card.Body>
                                                <Card.Title className='h5'>Toyota Alphard</Card.Title>
                                                <Card.Text>
                                                    <div className='icar-details'>
                                                        <span>< BsCarFrontFill />Model:2017</span>
                                                        <span>< AiFillSetting />Brand:Nissan</span>
                                                        <span>< MdSpeed />20 kmph</span>
                                                    </div>
                                                </Card.Text>
                                               
                                                {/* <Card.Title>2500 AED <span>/Day</span></Card.Title> */}
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                                }
                            </Row>

                        </div>
                        <div className='car-pagination'>
                            <Pagination>
                                <Pagination.Item active>1</Pagination.Item>
                                <Pagination.Item >2</Pagination.Item>
                            </Pagination>
                        </div>
                    </div>
                </Col>

            </Row>
        </div>

    )
}

export default memo(Contact)