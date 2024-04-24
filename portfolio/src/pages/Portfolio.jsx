import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'

const Portfolio = () => {
    return (
        <Container fluid className='d-flex row bg-main m-0 p-3'>
            <Row className='port-container d-flex justify-content-around w-100'>
                <Col sm={12} xl={5} style={{minHeight: '275px'}}
                    className='border border-4 border-secondary p-0 m-0 my-4'>
                    <Link to="/portfolio/capstone">
                        <div style={{height:'100%'}} className='bg-card brd-card'>
                            <div className='row p-0 m-0 justify-content-between'>
                                <div className='port-intro col-xs-12 col-md-8 pt-2'>
                                    <h4>StegoSource</h4>
                                    <ul>
                                        <li>Team Leader</li>
                                        <li>First Place: 27th Research and Creative Endeavor Symposium</li>
                                        <li>'Best Team Presentation' award - Sigma Xi</li>
                                    </ul>
                                </div>
                                <Image src='/StegoSource/StegoDemo.gif' alt='Demonstration GIF of StegoSource' className='d-none d-md-block col-4 p-0'/>
                            </div>
                            <div className='row m-0 mt-2 p-0'>
                                <p className='m-auto px-2'>
                                    This project features the utilization of deep learning models to perform steganographic operations on images, embedding one image within
                                    another image with a 100% hiding capacity. Our web application used to feature this technology allows users to upload images to be hidden
                                    within another image, extract an image from a previously embedded 'Stego Image', hide text within an image, and more!
                                </p>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col sm={12} xl={5} style={{minHeight: '275px'}}
                        className='border border-4 border-secondary p-0 m-0 my-4'>
                    <Link to="/portfolio/nerd-herd">
                        <div style={{height:'100%'}} className='bg-card brd-card'>
                            <div className='row p-0 m-0 justify-content-between'>
                                <div className='port-intro col-xs-12 col-md-8 pt-2'>
                                    <h4>Nerd-Herd</h4>
                                    <ul>
                                        <li>Web application to gamify table-top game night organization</li>
                                        <li>Developed RESTful API and MongoDB database</li>
                                        <li>Contributed to front-end development and routing</li>
                                    </ul>
                                </div>
                                <Image src='/NerdHerd/nerdherd_eventcreate.gif' alt='Demonstration GIF of Nerd-Herd' className='d-none d-md-block col-4 p-0'/>
                            </div>
                            <div className='row m-0 mt-2 p-0'>
                                <p className='m-auto px-2'>
                                    Nerd-Herd is a web application that facilitates the scheduling and planning of game nights. Users (the Nerds) create groups (the Herd),
                                    and Gatherings can be created, which are game-night instances. Currently, the web application features two gamification modules:
                                    <ul>
                                        <li>Rolling: Users roll a 20-sided dice to determine the outcome of a prompt.</li>
                                        <li>Polling: Users vote on different possible outcomes of a prompt.</li>
                                    </ul>
                                    When being created, Nerds can choose to make their Gathering private or public. Private Gatherings will only be visible to members of the
                                    hosting Herd. On the other hand, public Gatherings will be visible to Nerds located within some radius of the Gathering location.
                                </p>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col sm={12} xl={5} style={{minHeight: '275px'}}
                        className='border border-4 border-secondary p-0 m-0 my-4 d-flex justify-content-around'>
                    <Link to="/portfolio/attendancetracker" className='row m-auto p-0'>
                        <div style={{height:'100%'}} className='col-12 col-lg-8 row bg-card brd-card m-0 p-0'>
                            <div className='row p-0 m-0 justify-content-between'>
                                <div className='port-intro pt-2'>
                                    <h4>Attendance Tracker</h4>
                                    <ul>
                                        <li>Android application for quick, easy, and no-contact attendance tracking</li>
                                        <li>Uses QR generation and scanning technology</li>
                                        <li>Actively being used to this day</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='row m-0 mt-2 p-0'>
                                <p className='m-auto px-2'>
                                    In the wake of Covid, a quick, easy, and contactless solution to attendance tracking was a necessity that lecturers 
                                    did not have access to. My Software Engineering course team solved this problem with an Android application that 
                                    can do everything from generating unique QR codes for a given student, organize classes by semester and class, scan 
                                    QR codes to track attendance day-by-day, and reporting to the professor the attendance results. 
                                </p>
                            </div>
                        </div>
                        <Image src='/AttendanceTracker/at_demo.gif' alt='Demonstration GIF of Attendance Tracker' className='d-none d-lg-block col-3 p-0'/>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Portfolio