import React, { memo, useEffect, useRef, useState } from 'react'
import { FaGreaterThan } from "react-icons/fa";
import { Galleria } from 'primereact/galleria';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
//images
import img1 from "../../Assets/Images/Morningstarimages/1.jpg";
import img2 from "../../Assets/Images/Morningstarimages/2.jpg";
import img3 from "../../Assets/Images/Morningstarimages/3.jpg";
import img4 from "../../Assets/Images/Morningstarimages/4.jpg";
import img5 from "../../Assets/Images/Morningstarimages/5.jpg";
import img6 from "../../Assets/Images/Morningstarimages/6.jpg";
import img7 from "../../Assets/Images/Morningstarimages/7.jpg";
import img8 from "../../Assets/Images/Morningstarimages/8.jpg";
import img9 from "../../Assets/Images/Morningstarimages/9.jpg";
import img10 from "../../Assets/Images/Morningstarimages/10.jpg";
import img11 from "../../Assets/Images/Morningstarimages/11.jpg";
import img12 from "../../Assets/Images/Morningstarimages/12.jpg";
import img13 from "../../Assets/Images/Morningstarimages/13.jpg";
import img14 from "../../Assets/Images/Morningstarimages/14.jpg";
import img15 from "../../Assets/Images/Morningstarimages/15.jpg";
import img16 from "../../Assets/Images/Morningstarimages/16.jpg";
import img17 from "../../Assets/Images/Morningstarimages/17.jpg";
import img18 from "../../Assets/Images/Morningstarimages/18.jpg";
import img19 from "../../Assets/Images/Morningstarimages/19.jpg";
import img20 from "../../Assets/Images/Morningstarimages/20.jpg";
import img21 from "../../Assets/Images/Morningstarimages/21.jpg";
import img22 from "../../Assets/Images/Morningstarimages/22.jpg";
import img23 from "../../Assets/Images/Morningstarimages/23.jpg";
import img24 from "../../Assets/Images/Morningstarimages/24.jpg";
import img25 from "../../Assets/Images/Morningstarimages/25.jpg";
import img26 from "../../Assets/Images/Morningstarimages/26.jpg";
import img27 from "../../Assets/Images/Morningstarimages/27.jpg";
import img28 from "../../Assets/Images/Morningstarimages/28.jpg";
import img29 from "../../Assets/Images/Morningstarimages/29.jpg";
import img30 from "../../Assets/Images/Morningstarimages/30.jpg";
import img31 from "../../Assets/Images/Morningstarimages/31.jpg";
import img32 from "../../Assets/Images/Morningstarimages/32.jpg";
import img33 from "../../Assets/Images/Morningstarimages/33.jpg";
import img34 from "../../Assets/Images/Morningstarimages/34.jpg";
import img35 from "../../Assets/Images/Morningstarimages/35.jpg";
import img36 from "../../Assets/Images/Morningstarimages/36.jpg";
import img37 from "../../Assets/Images/Morningstarimages/37.jpg";
import img38 from "../../Assets/Images/Morningstarimages/38.jpg";
import img39 from "../../Assets/Images/Morningstarimages/39.jpg";
import img40 from "../../Assets/Images/Morningstarimages/40.jpg";
import img41 from "../../Assets/Images/Morningstarimages/41.jpg";
import img42 from "../../Assets/Images/Morningstarimages/42.jpg";
import img43 from "../../Assets/Images/Morningstarimages/43.jpg";
import img44 from "../../Assets/Images/Morningstarimages/44.jpg";
import img45 from "../../Assets/Images/Morningstarimages/45.jpg";
import img46 from "../../Assets/Images/Morningstarimages/46.jpg";
import img47 from "../../Assets/Images/Morningstarimages/47.jpg";
import img48 from "../../Assets/Images/Morningstarimages/48.jpg";
import img49 from "../../Assets/Images/Morningstarimages/49.jpg";
import img50 from "../../Assets/Images/Morningstarimages/50.jpg";



interface IGallery {

}

const Contact: React.FC<IGallery> = (props) => {
    const data: any = [
        {
            itemImageSrc: img1,
            thumbnailImageSrc: img1,
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: img2,
            thumbnailImageSrc: img2,
            alt: 'Description for Image 2',
            title: 'Title 2'
        },
        {
            itemImageSrc: img3,
            thumbnailImageSrc: img3,
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: img4,
            thumbnailImageSrc: img4,
            alt: 'Description for Image 4',
            title: 'Title 4'
        },
        {
            itemImageSrc:img5,
            thumbnailImageSrc: img5,
            alt: 'Description for Image 5',
            title: 'Title 5'
        },
        {
            itemImageSrc: img6,
            thumbnailImageSrc: img6,
            alt: 'Description for Image 6',
            title: 'Title 6'
        },
        {
            itemImageSrc: img7,
            thumbnailImageSrc: img7,
            alt: 'Description for Image 7',
            title: 'Title 7'
        },
        {
            itemImageSrc: img8,
            thumbnailImageSrc:img8,
            alt: 'Description for Image 8',
            title: 'Title 8'
        },
        {
            itemImageSrc: img9,
            thumbnailImageSrc:img9,
            alt: 'Description for Image 9',
            title: 'Title 9'
        },
        {
            itemImageSrc: img10,
            thumbnailImageSrc: img10,
            alt: 'Description for Image 10',
            title: 'Title 10'
        },
        {
            itemImageSrc: img11,
            thumbnailImageSrc: img11,
            alt: 'Description for Image 11',
            title: 'Title 11'
        },
        {
            itemImageSrc: img12,
            thumbnailImageSrc: img12,
            alt: 'Description for Image 12',
            title: 'Title 12'
        },
        {
            itemImageSrc: img13,
            thumbnailImageSrc: img13,
            alt: 'Description for Image 13',
            title: 'Title 13'
        },
        {
            itemImageSrc: img14,
            thumbnailImageSrc: img14,
            alt: 'Description for Image 14',
            title: 'Title 14'
        },
        {
            itemImageSrc: img15,
            thumbnailImageSrc: img15,
            alt: 'Description for Image 15',
            title: 'Title 15'
        },
        {
            itemImageSrc: img16,
            thumbnailImageSrc: img16,
            alt: 'Description for Image 16',
            title: 'Title 16'
        },
        {
            itemImageSrc: img17,
            thumbnailImageSrc: img17,
            alt: 'Description for Image 17',
            title: 'Title 17'
        },
        {
            itemImageSrc: img18,
            thumbnailImageSrc: img18,
            alt: 'Description for Image 18',
            title: 'Title 18'
        },
        {
            itemImageSrc: img19,
            thumbnailImageSrc: img19,
            alt: 'Description for Image 19',
            title: 'Title 19'
        },
        {
            itemImageSrc:img20,
            thumbnailImageSrc: img20,
            alt: 'Description for Image 20',
            title: 'Title 20'
        },
        {
            itemImageSrc: img21,
            thumbnailImageSrc: img21,
            alt: 'Description for Image 21',
            title: 'Title 21'
        },
        {
            itemImageSrc: img22,
            thumbnailImageSrc: img22,
            alt: 'Description for Image 22',
            title: 'Title 22'
        },
        {
            itemImageSrc: img23,
            thumbnailImageSrc:img23,
            alt: 'Description for Image 23',
            title: 'Title 23'
        },
        {
            itemImageSrc: img24,
            thumbnailImageSrc:img24,
            alt: 'Description for Image 24',
            title: 'Title 24'
        },
        {
            itemImageSrc: img25,
            thumbnailImageSrc: img25,
            alt: 'Description for Image 25',
            title: 'Title 25'
        },
        {
            itemImageSrc: img26,
            thumbnailImageSrc: img26,
            alt: 'Description for Image 26',
            title: 'Title 26'
        },
        {
            itemImageSrc: img27,
            thumbnailImageSrc: img27,
            alt: 'Description for Image 27',
            title: 'Title 27'
        },
        {
            itemImageSrc: img28,
            thumbnailImageSrc: img28,
            alt: 'Description for Image 28',
            title: 'Title 28'
        },
        {
            itemImageSrc: img29,
            thumbnailImageSrc: img29,
            alt: 'Description for Image 29',
            title: 'Title 29'
        },
        {
            itemImageSrc: img30,
            thumbnailImageSrc: img30,
            alt: 'Description for Image 30',
            title: 'Title 30'
        },
        {
            itemImageSrc: img31,
            thumbnailImageSrc: img31,
            alt: 'Description for Image 31',
            title: 'Title 31'
        },
        {
            itemImageSrc: img32,
            thumbnailImageSrc: img32,
            alt: 'Description for Image 32',
            title: 'Title 32'
        },
        {
            itemImageSrc: img33,
            thumbnailImageSrc: img33,
            alt: 'Description for Image 33',
            title: 'Title 33'
        },
        {
            itemImageSrc: img34,
            thumbnailImageSrc: img34,
            alt: 'Description for Image 34',
            title: 'Title 34'
        },
        {
            itemImageSrc:img35,
            thumbnailImageSrc: img35,
            alt: 'Description for Image 35',
            title: 'Title 35'
        },
        {
            itemImageSrc: img36,
            thumbnailImageSrc: img36,
            alt: 'Description for Image 36',
            title: 'Title 36'
        },
        {
            itemImageSrc: img37,
            thumbnailImageSrc: img37,
            alt: 'Description for Image 37',
            title: 'Title 37'
        },
        {
            itemImageSrc: img38,
            thumbnailImageSrc:img38,
            alt: 'Description for Image 38',
            title: 'Title 38'
        },
        {
            itemImageSrc: img39,
            thumbnailImageSrc:img39,
            alt: 'Description for Image 39',
            title: 'Title 39'
        },
        {
            itemImageSrc: img40,
            thumbnailImageSrc: img40,
            alt: 'Description for Image 40',
            title: 'Title 40'
        },
        {
            itemImageSrc: img41,
            thumbnailImageSrc: img41,
            alt: 'Description for Image 41',
            title: 'Title 41'
        },
        {
            itemImageSrc: img42,
            thumbnailImageSrc: img42,
            alt: 'Description for Image 42',
            title: 'Title 42'
        },
        {
            itemImageSrc: img43,
            thumbnailImageSrc: img43,
            alt: 'Description for Image 43',
            title: 'Title 43'
        },
        {
            itemImageSrc: img44,
            thumbnailImageSrc: img44,
            alt: 'Description for Image 44',
            title: 'Title 44'
        },
        {
            itemImageSrc: img45,
            thumbnailImageSrc: img45,
            alt: 'Description for Image 45',
            title: 'Title 45'
        },
        {
            itemImageSrc: img46,
            thumbnailImageSrc: img46,
            alt: 'Description for Image 46',
            title: 'Title 46'
        },
        {
            itemImageSrc: img47,
            thumbnailImageSrc: img47,
            alt: 'Description for Image 47',
            title: 'Title 47'
        },
        {
            itemImageSrc: img48,
            thumbnailImageSrc: img48,
            alt: 'Description for Image 48',
            title: 'Title 48'
        },
        {
            itemImageSrc: img49,
            thumbnailImageSrc: img49,
            alt: 'Description for Image 49',
            title: 'Title 49'
        },
        {
            itemImageSrc:img50,
            thumbnailImageSrc: img50,
            alt: 'Description for Image 50',
            title: 'Title 50'
        },
    ];

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    

    return (
        <div className='gallery-main'>
            <div className='gallery-home'>
                <h1>Gallery</h1>
                <h3>Home <FaGreaterThan /> <span>Gallery</span></h3>
            </div>
            <div className='gallery-content'>
                <Row className='gallery-rows'>
                    {data?.map((item: any, key: any) => (
                        <Col key={key} sm={4} className='gallery-cols'>
                            <img src={item?.itemImageSrc} />
                        </Col>
                    ))
                    }
                    <Col sm={12} className='gallery-cols'>
                        <div className='button'>
                            <Button>More Pictures</Button>
                        </div>
                    </Col>
                </Row>

            </div>

        </div>

    )
}

export default memo(Contact)