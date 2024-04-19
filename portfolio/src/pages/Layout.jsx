import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Layout = () => {
    const [navHeight, setNavHeight] = useState(80) 

    useEffect(() => {
        const handleResize = () => {
            setNavHeight(window.innerHeight * 0.1)
        }

        window.addEventListener('resize', handleResize)
        return
    }, [])

    return (
        <>
            <Navbar className='bg-light border-bottom' style={{ height: `${navHeight}px` }} expand="lg">
                <Navbar.Brand as={Link} to="/" className='ms-5'>Eric Bradshaw</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-3'/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='bg-light w-50 float-end mt-1 p-3 me-3 border border-dark border-1 d-sm-none'>
                        <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                        <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                        <NavDropdown title='Portfolio'>
                            <NavDropdown.Item as={Link} to="/portfolio">Portfolio</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Header>Most recent</NavDropdown.Header>
                            <NavDropdown.Item as={Link} to="/portfolio#capstone">Capstone Project</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/portfolio#nerd-herd">Nerd-Herd</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/portfolio#attendancetracker">Attendance Tracker</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className='bg-light w-25 float-end mt-1 p-3 me-3 d-none d-sm-flex'>
                        <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                        <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                        <NavDropdown title='Portfolio'>
                            <NavDropdown.Item as={Link} to="/portfolio">Portfolio</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Header>Most recent</NavDropdown.Header>
                            <NavDropdown.Item as={Link} to="/portfolio#capstone">Capstone Project</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/portfolio#nerd-herd">Nerd-Herd</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/portfolio#attendancetracker">Attendance Tracker</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Outlet />
        </>
    )
}

export default Layout