import React from 'react'
import { Container, Row } from 'react-bootstrap'
import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
    const nerdherdDescription = (
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
    )
    const capstoneDescription = (
        <p className='m-auto px-2'>
            This project features the utilization of deep learning models to perform steganographic operations on images, embedding one image within
            another image with a 100% hiding capacity. Our web application used to feature this technology allows users to upload images to be hidden
            within another image, extract an image from a previously embedded 'Stego Image', hide text within an image, and more!
        </p>
    )
    const attendanceTrackerDescription = (
        <p className='m-auto px-2'>
            In the wake of Covid, a quick, easy, and contactless solution to attendance tracking was a necessity that lecturers 
            did not have access to. My Software Engineering course team solved this problem with an Android application that 
            can do everything from generating unique QR codes for a given student, organize classes by semester and class, scan 
            QR codes to track attendance day-by-day, and reporting to the professor the attendance results.
        </p>
    )
    const portfolioDescription = (
        <>
            <p className='m-auto px-2'>
                It might be weird to include the portfolio as part of the portfolio, but I figured that if I take the time to create
                this portfolio from the ground up, learning new skills along the way, then why shouldn't I include it? Click this 
                card to be navigated to my resume.
            </p>
            <p>
                From this portfolio, I am learning some basic frontend skills such as:
                <ul>
                    <li>React</li>
                    <li>React-Bootstrap</li>
                    <li>Sass</li>
                    <li>React DOM</li>
                </ul>
            </p>
        </>
    )

    return (
        <Container fluid className='d-flex row bg-main m-0 p-3'>
            <Row className='port-container d-flex justify-content-around w-100'>
                <PortfolioItem
                    title="Capstone Project: StegoSource"
                    link="/portfolio/capstone"
                    image="/StegoSource/StegoDemo.gif"
                    summary={["Team Leader", "First Place: 27th Research and Creative Endeavor Symposium", "'Best Team Presentation' award - Sigma Xi"]}
                    description={capstoneDescription}
                />

                <PortfolioItem
                    title="Nerd-Herd"
                    link="/portfolio/nerd-herd"
                    image="/NerdHerd/nerdherd_eventcreate.gif"
                    summary={["Web application to gamify table-top game night organization", "Developed RESTful API and MongoDB database", "Contributed to front-end development and routing"]}
                    description={nerdherdDescription}
                />

                <PortfolioItem 
                    title="Attendance Tracker" 
                    link="/portfolio/attendancetracker"
                    image="AttendanceTracker/at_demo.gif"
                    summary={["Android application for quick, easy, and no-contact attendance tracking", "Uses QR generation and scanning technology", "Actively being used to this day"]}
                    description={attendanceTrackerDescription} 
                />

                <PortfolioItem 
                    title="My Portfolio" 
                    link="/"
                    summary={["Made from the ground up using React", "Wanted to train my Web Development skills", "Uses React for the frontend framework and Sass for the styling", "Purposefully not using templates to facilitate learning"]}
                    description={portfolioDescription} 
                />
            </Row>
        </Container>
    )
}

export default Portfolio