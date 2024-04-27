import React from 'react'
import { Row, Col } from 'react-bootstrap'

const About = () => {
    return (
        <Row className='bg-main m-0 p-3'>
            <Col xs={4} lg={2} className='about-card' style={{height: 'auto'}}>
                <h2 className='my-3 text-center'>Skills</h2>
                <h4 className='text-center'>Languages</h4>
                <ul>
                    <li>Python</li>
                    <li>JavaScript, HTML, CSS</li>
                    <li>C and C++</li>
                    <li>Java</li>
                    <li>SQL</li>
                    <li>NoSQL (MongoDB)</li>
                </ul>
                <h4 className='text-center'>Concepts</h4>
                <ul>
                    <li>Data Structures</li>
                    <li>Time Complexity Analysis</li>
                    <li>Computer Security</li>
                    <li>Network Security</li>
                    <li>Database Administration</li>
                </ul>
                <h4 className='text-center'>Frameworks/Libraries</h4>
                <ul>
                    <li>React.js</li>
                    <li>Node.js/Express.js</li>
                    <li>Flask</li>
                    <li>Bootstrap</li>
                    <li>React-Bootstrap</li>
                </ul>
                <h4 className='text-center'>Currently Interested In</h4>
                <ul>
                    <li>Machine Learning</li>
                    <li>New Web Frameworks/Languages such as:</li>
                    <ul>
                        <li>Django</li>
                        <li>Ruby On Rails</li>
                        <li>PHP</li>
                        <li>Meteor.js</li>
                    </ul>
                </ul>
                <p className='text-center'>I am looking forward to the opportunity to grow this list!</p>
            </Col>
            <Row className='col-8 col-lg-10 d-flex justify-content-around'>
                <Col xs={12} lg={11} className='about-card py-2 px-3' style={{height: 'fit-content'}}>
                    <h2 className='text-center'>Summary</h2>
                    <h5>
                        Hello! My name is Eric Bradshaw, welcome to my about page! I will be obtaining my Bachelor's degree in Computer Science in 
                        May of 2024. I am excited to be graduating, as it has been a long road of hard work and dedication. Resulting from 12 years of 
                        experience in the Food and Beverage Industry, I am entering this new industry with already matured skills in adaptability,
                        problem-solving, an almost annoying attention to detail, teamwork, time management, and leadership. 
                    </h5>
                    <h5>
                        Raised by some of the hardest working people I know, namely Mom and Dad, I also bring with me commitment,
                        drive, passion for everything I do, and a fantastic work ethic.
                    </h5>
                </Col>
                <Col xs={12} lg={11} className='about-card py-2 px-3' style={{height: 'fit-content'}}>

                </Col>
                <Col xs={12} lg={11} className='about-card py-2 px-3' style={{height: 'fit-content'}}>

                </Col>
            </Row>
        </Row>
    )
}

export default About