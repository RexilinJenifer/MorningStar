import React, { memo } from 'react'
import Card from 'react-bootstrap/Card';
import { AiFillStar } from "react-icons/ai";
import { Carousel } from 'primereact/carousel';
import customer from '../../../Assets/Images/customer1.jpeg'
import { Avatar } from 'primereact/avatar';
import { ImQuotesLeft} from "react-icons/im";
import { BsDashLg } from "react-icons/bs";


interface IReview {

}

const Review: React.FC<IReview> = (props) => {


  const responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const products = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1001',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1002',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1003',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1004',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1005',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
  ]

  const getSeverity = (product: any) => {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };

  const productTemplate = (product: any) => {
    return (


      <Card style={{ width: '100%' }}>

        <Card.Body>
          <Card.Text>
            <div className='review-content'>
              <div className='rating-star'>
                <span>< AiFillStar /></span>
                <span>< AiFillStar /></span>
                <span>< AiFillStar /></span>
                <span>< AiFillStar /></span>
                <span>< AiFillStar /></span>
              </div>

              <div className='para-content'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit totam sed quasi placeat et consequatur! Omnis natus quos consequuntur rerum.</p>
                <h4>Carol Reynolds</h4>
                <h4>CUSTOMER</h4>
              </div>

            </div>
          </Card.Text>
        </Card.Body>
        <div className='avatar-parent'>
          <Avatar label="U" className='avatar-circle' image={customer} shape="circle" />
        </div>

      </Card>


    );
  };


  return (
    <div className='review-main'>
      <div className='review-content'>
        <div className='header'>
          <h4>HELPS YOU TO FIND A PERFECT CAR</h4>
          <h2>Customer <span>Reviews</span></h2>
          <div className='header-icon'>
          <span><BsDashLg/></span>
          <span><ImQuotesLeft/></span>
          <span><BsDashLg/></span>
          </div>
        </div>
        <div className='carousel-parent'>
          <Carousel
            className='carousel-main'
            value={products}
            numVisible={3}
            numScroll={3}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate} />
        </div>


      </div>
    </div>
  )
}
export default memo(Review)
