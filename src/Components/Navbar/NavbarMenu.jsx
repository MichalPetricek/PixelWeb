import {Navbar,Nav} from 'react-bootstrap';
import logo from '../../Images/logo-navbar.png';
import "./Navbar.css";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import {LinkContainer} from 'react-router-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PixelButton from '../Buttons/PixelButton';
import {RiArrowDropDownLine} from "react-icons/ri";

function NavbarMenu() {
  const [show,setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const controlNavbar = () =>{
    if(window.scrollY > 100 && window.innerWidth > 1200)
    {
      setShow(false)
    }
    else{
      if(window.innerWidth > 1200){
        setShow(true)
      }
      if(window.innerWidth < 1200){
        setShow(false)
      }
    }
    if(window.location.pathname !== "/"){
      setShow(false)
    }
  }
  const location = useLocation();
  useEffect(() => {
    window.addEventListener("scroll",controlNavbar)
    window.addEventListener("resize",controlNavbar)
    window.addEventListener("load",controlNavbar)
    window.addEventListener('popstate', controlNavbar);
    return () =>{
      window.removeEventListener("scroll",controlNavbar)
      window.removeEventListener("resize",controlNavbar)
      window.removeEventListener("load",controlNavbar)
      window.removeEventListener('popstate', controlNavbar);
    }
  },[])
  useEffect(() => {
    controlNavbar();
  }, [location]);

  return (
    <>
      <Navbar collapseOnSelect expand="xl" fixed="top" className={`navbar ${show && !open && "navbar-transparent"}`} bg="custom">
          <Navbar.Brand href="#home">
            <img
              className={`img-navbar ${show && !open && "img-navbar-none"}`}
              src={logo}
              width= "auto"
              height="60"
              alt="PixelWeb"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll">
                <span className="toggler-icon top-bar" />
                <span className="toggler-icon middle-bar" />
                <span className="toggler-icon bottom-bar" />
          </Navbar.Toggle>
          
          <NavbarCollapse id="navbarScroll" className="justify-content-end">
            <Nav id='active' navbarScroll>
              <LinkContainer  to="/">
              <Nav.Link className={location.pathname === "/" ? "blueline" : ""}>PIXEL WEB</Nav.Link>
              </LinkContainer>
              <NavItem>
                <DropdownMenu></DropdownMenu>
              </NavItem>
              {/*
              <LinkContainer to="/technologie">
              <Nav.Link className={location.pathname === "/technologie" ? "blueline" : ""}>TECHNOLOGIE</Nav.Link>
              </LinkContainer>
              */}
              <LinkContainer to="/kontakt">
              <Nav.Link  className={location.pathname === "/kontakt" ? "blueline" : ""}>KONTAKT</Nav.Link>
              </LinkContainer>
              <LinkContainer className='projekt' to="/projekt">
              <Nav.Link id='button-np' ><PixelButton></PixelButton></Nav.Link>
              </LinkContainer>
            </Nav>
          </NavbarCollapse>
      </Navbar>
    </>
  );
  function NavItem(props){
    
    return(<>
          <li sclassName="nav-item" onMouseOver={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onClick={() => setOpen(!open)}>
            <div id='drop' className="nav-link">
              SLUŽBY<RiArrowDropDownLine className='dropdown-icon'></RiArrowDropDownLine>
            </div>
            {open && props.children}
      </li>
    </>);
  }
  function DropdownMenu(){
  
    return(<>
      <div className={`dropdown ${!open && "dropdown-bg"}`}>
        <LinkContainer activeStyle={{color: "#004aab",textDecoration:"none"}} to="/weby">
          <Nav.Link id='drop-item' className='dropdown-item'>
            WEBY
          </Nav.Link>
        </LinkContainer>
        <LinkContainer activeStyle={{color: "#004aab",textDecoration:"none"}} to="/eshopy">
          <Nav.Link id='drop-item' className='dropdown-item'>
            ESHOPY
          </Nav.Link>
        </LinkContainer>
        <LinkContainer activeStyle={{color: "#004aab",textDecoration:"none"}} to="/marketing">
          <Nav.Link id='drop-item' className='dropdown-item'>
            MARKETING
          </Nav.Link>
        </LinkContainer>
      </div>
    </>);
  }
  
}



export default NavbarMenu;