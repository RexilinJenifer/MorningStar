import React, { memo, useEffect, useState, useLayoutEffect } from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link, useLocation } from 'react-router-dom'
import { Sidebar } from 'primereact/sidebar';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from 'react-icons/md';

interface IMenubar {

}

const Menubar: React.FC<IMenubar> = (props) => {
  const location = useLocation();
  const [key, setKey] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setKey(location.pathname)
  }, [location])

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = () => {
    const header: any = document.querySelector('.menu');
    const scrollTop = window.scrollY;
    scrollTop >= 188 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  };

  useLayoutEffect(() => {
    isSticky();
  }, [visible])

  const menus = (
    <Nav as="ul" activeKey={key} className={visible ? 'mob-menu' : 'desk-menu'}>
      <Nav.Item as="li" >
        <Nav.Link href="/home" className='menus' eventKey="/Home">
          <Link to={'/Home'} className={`link ${key === "/Home" ? 'active' : 'none'}`}>HOME</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/Aboutus" className='menus' eventKey="/Aboutus">
          <Link to={'/Aboutus'} className={`link ${key === "/Aboutus" ? 'active' : 'none'}`}>ABOUT US</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/Fleets" className='menus' eventKey="/Fleets">
          <Link to={'/Fleets'} className={`link ${key === "/Fleets" ? 'active' : 'none'}`}>OUR FLEETS</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/Team" className='menus' eventKey="/Team">
          <Link to={'/Team'} className={`link ${key === "/Team" ? 'active' : 'none'}`}>OUR TEAM</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/Gallery" className='menus' eventKey="/Gallery">
          <Link to={'/Gallery'} className={`link ${key === "/Gallery" ? 'active' : 'none'}`}>GALLERY</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/Blogs" className='menus' eventKey="/Blogs">
          <Link to={'/Blogs'} className={`link ${key === "/Blogs" ? 'active' : 'none'}`}>BLOGS</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/Contactus" className='menus' eventKey="/Contactus">
          <Link to={'/Contactus'} className={`link ${key === "/Contactus" ? 'active' : 'none'}`}>CONTACT US</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
  return (
    <div className={`menu ${visible ? 'expanded' : ''}`}>
      <div className='mobile-menu' >
        {visible ?
          <span onClick={() => setVisible(false)} >
            <MdClose />
          </span> :
          <span onClick={() => setVisible(true)}>
            <GiHamburgerMenu />
          </span>
        }

        {visible ? menus : null}
      </div>
      <div className='desktop-menu'>
        {menus}
      </div>

    </div>
  )
}

export default memo(Menubar)