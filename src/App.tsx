import { Routes, Route, Navigate } from 'react-router-dom'
import "./App.scss";
//common componnts
import Footer from "./Components/Common/Footer/Footer";
import Header from "./Components/Common/Header/Header";
import Menubar from "./Components/Common/Menubar/Menubar";
import Subheader from "./Components/Common/Subheader/Subheader";
import Gallery from "./Pages/Gallery/Gallery";
//Pages
import Home from "./Pages/Home/Home";
import Contact from './Pages/Contactus/Contact';
import Blogs from './Pages/Blogs/Blogs';
import Fleets from './Pages/Fleets/Fleets';
import Team from './Pages/Team/Team';

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <Subheader />
      <Menubar />
      <Routes>
        <Route path='/' element={<Navigate to={'/Home'} replace />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Aboutus' element={<Home />} />
        <Route path='/Fleets' element={<Fleets />} />
        <Route path='/Team' element={<Team />} />
        <Route path='/Brands' element={<Home />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/Contactus' element={<Contact />} />
      </Routes>
      {/* <Gallery /> */}
      <Footer />
    </div>
  );
}

export default App;
