import React from 'react'
import { Image, Row, Col } from 'react-bootstrap'

const Nerdherd = () => {
    return (
        <>
            <h1>Nerdherd</h1>
            <h3>Page in progress.</h3>
            <Row>
                <Col xs={12} lg={6}>
                    <h5>Create a Herd:</h5>
                    <Image src='/NerdHerd/nerdherd_createherd.gif' alt='Demonstration GIF of Nerd-Herd' className='col-12 p-0'/>
                </Col>
                <Col xs={12} lg={6}>
                    <h5>Create a Gathering</h5>
                    <Image src='/NerdHerd/nerdherd_eventcreate.gif' alt='Demonstration GIF of Nerd-Herd' className='col-12 p-0'/>
                </Col>
                <Col xs={12} lg={6}>
                    <h5>Register and log in:</h5>
                    <Image src='/NerdHerd/nerdherd_login.gif' alt='Demonstration GIF of Nerd-Herd' className='col-12 p-0'/>
                </Col>
            </Row>
            <h5>Last updated: 04/23/2024</h5>
        </>
    )
}

export default Nerdherd