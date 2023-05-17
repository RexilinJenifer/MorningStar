import React, { memo ,useEffect} from 'react'
//components
import Aboutus from './Aboutus/Aboutus'
import Article from './Article/Article'
import Booking from './Booking/Booking'
import Enquiry from './Enquiry/Enquiry'
import Carcontent from './Carcontent/Carcontent'
import Review from './Review/Review'
import Slide from './Slide/Slide'
import Subscription from './Subscription/Subscription'


interface IHome {

}
const Home: React.FC<IHome> = () => {

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return (
        <>
            <Slide />
            <Aboutus />
            <Carcontent />
            <Enquiry />
            <Booking />
            <Review />
            <Subscription />
            <Article />
           
        </>
    )
}

export default memo(Home)