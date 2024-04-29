import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

const About = () => {
    return (
        <Row className='bg-main m-0 p-3' style={{height: 'fit-content'}}>
            <Row className='col-12 d-flex justify-content-around' style={{height: 'fit-content'}}>
                <Col xs={12} className='about-card py-2 px-3' style={{height: 'fit-content'}}>
                    <h2 className='text-center'>Hello!</h2>
                    <h5 className='text-center'>
                        My name is Eric Bradshaw, welcome to my about page! I will be obtaining my Bachelor's degree in Computer Science in 
                        May of 2024. I am excited to be graduating, as it has been a long road of hard work and dedication. Resulting from 12 years of 
                        experience in the Food and Beverage Industry, I am entering this new industry with already matured skills in adaptability,
                        problem-solving, an almost annoying attention to detail, teamwork, time management, and leadership. 
                    </h5>
                    <h5 className='text-center'>
                        Raised by some of the hardest working people I know, namely Mom and Dad, I also bring with me commitment,
                        drive, passion for everything I do, and a fantastic work ethic.
                    </h5>
                </Col>
            </Row>
            <Row className='col-12 d-flex justify-content-around' style={{height: 'fit-content'}}>
                <Container className='about-card py-2 px-3'>
                    <h2>Active Learner, Always Learning</h2>
                    <p>Graduating does not mean I am done learning. I have projects planned, books to read, and topics to study. I understand that getting
                        a degree in Computer Science means a lifetime of learning, and nothing excites me more than that.
                    </p>
                    <div className='p-2 row'>
                        <h5 className='col-12'>Learning, for me, is hands on:</h5>
                        <Col xs={12} lg={3}>
                            <Image src={'./GH_Cal.png'} alt={'My GitHub Calendar'} className='cropped'/>
                        </Col>
                        <Col xs={12} lg={8} className='ms-3'>
                            <ul>
                                <li>Making small projects along the way is the best way to learn.</li>
                                <li>Even when I am only reading, taking notes facilitates the reading process.</li>
                                <li>This is why I am using this portfolio as an opportunity to learn more.</li>
                            </ul>
                        </Col>
                    </div>
                </Container>
            </Row>
            <Container className='col-12 col-lg-6 row mx-auto justify-space-between p-2 ms-0' style={{height: 'fit-content'}}>
                <Col xs={12} className='about-card'>
                    <h2 className='my-3 col-12' style={{height: 'fit-content'}}>Skills</h2>
                    <Row className='d-flex justify-content-around'>
                        <Col xs={4} style={{height: 'fit-content'}}>
                            <h4 className='text-center'>Languages</h4>
                            <ul>
                                <li>Python</li>
                                <li>JavaScript, HTML, CSS</li>
                                <li>C and C++</li>
                                <li>Java</li>
                                <li>SQL</li>
                                <li>NoSQL (MongoDB)</li>
                            </ul>
                        </Col>
                        <Col xs={4} style={{height: 'fit-content'}}>
                            <h4 className='text-center'>Concepts</h4>
                            <ul>
                                <li>Data Structures</li>
                                <li>Human-Computer Interaction</li>
                                <li>Time Complexity Analysis</li>
                                <li>Computer Security</li>
                                <li>Network Security</li>
                                <li>Database Administration</li>
                            </ul>
                        </Col>
                        <Col xs={4} style={{height: 'fit-content'}}>
                            <h4 className='text-center'>Frameworks/Libraries</h4>
                            <ul>
                                <li>React.js</li>
                                <li>Node.js/Express.js</li>
                                <li>Flask</li>
                                <li>Bootstrap</li>
                                <li>React-Bootstrap</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Container>
            <Container className='col-12 col-lg-5 row mx-auto justify-space-between p-2 ms-0' style={{height: 'fit-content'}}>
                <Col xs={12} className='about-card'>
                    <h4 className='my-3 col-12' style={{height: 'fit-content'}}>Currently Interested In Learning/Researching: </h4>
                    <ul>
                        <li>Machine Learning</li>
                        <li>Human-Computer Interaction</li>
                        <li>New Web Frameworks/Languages such as:</li>
                        <ul>
                            <li>Django</li>
                            <li>Ruby On Rails</li>
                            <li>PHP</li>
                            <li>Meteor.js</li>
                        </ul>
                        <li>Modern/Best Practices</li>
                    </ul>
                </Col>
            </Container>
        </Row>
    )
}

export default About