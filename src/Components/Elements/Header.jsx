import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { useHistory ,Link } from 'react-router-dom'
import {FaDiscord} from 'react-icons/fa'
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs'



export default function Header() {
    const history = useHistory();
    return (
        <>
            <Navbar  expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand ><a href="index.html"><img className="header-logo" src={'assets/img/r-logo.gif'} style={{width:'90px',height:'90px'}} alt=""/></a></Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="col d-flex justify-content-between align-items-lg-center ">
                            <div className='navbar-nav mx-3 ms-lg-auto me-lg-5 pe-lg-5'>
                                <a href="#home" className='nav-link px-lg-3 hover-underline-animation' >Home</a>
                                <a href='#investors'  className='nav-link px-lg-3 hover-underline-animation'   >Investors</a>
                                <a href='#road'  className='nav-link  px-lg-3 hover-underline-animation'   >Road</a>
                                <a href='#about' className='nav-link px-lg-3 hover-underline-animation'   >About </a>
                                <a href='#contact'  className='nav-link px-lg-3 hover-underline-animation'   >Contact</a>
                            </div>
                            <ul className="navbar-nav" data-wow-duration="2s">
        <div className="d-flex gap-3 ms-lg-2">
          <a  href="https://discord.gg/8kbQmQMVck"><FaDiscord className='greeno fa-2x'/></a>
          <a href="https://www.facebook.com/thinkyblinkymonsters/"><BsFacebook className='blueo fa-2x '/></a>
          <a href="https://www.instagram.com/thinkyblinkymonstersnft/"><BsInstagram className='pinko fa-2x'/></a>
          <a href="https://twitter.com/Thinkyblinky_mo"><BsTwitter className='orango fa-2x'/></a>
        </div>
      </ul>                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <img src={process.env.PUBLIC_URL + "assets/images/bg.png"} class='bg-image' alt="" />
        </>
    )
}
