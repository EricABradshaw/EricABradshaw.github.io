import React from 'react'
import { Image, Row, Col } from 'react-bootstrap'

const Capstone = () => {
    return (
        <>
            <h1>Capstone</h1>
            <h3>Page in progress.</h3>
            <p>You can check it out on <a href='https://github.com/EricABradshaw/SeniorCapstone_Team8'>GitHub</a>.</p>
            <Row className='p-3'>
                <Col xs={12} lg={6}>
                    <h5>Hide an image:</h5>
                    <Image src='/StegoSource/StegoHideFinal.gif' alt='Demo: Image Hiding' className='col-12 p-0'/>
                </Col>
                <Col xs={12} lg={6}>
                    <h5>Hide text:</h5>
                    <Image src='/StegoSource/StegoTextFinal.gif' alt='Demo: Text Hiding' className='col-12 p-0'/>
                </Col>
                <Col xs={12} lg={6}>
                    <h5>Extract data from Stego images</h5>
                    <Image src='/StegoSource/StegoExtractFinal2.gif' alt='Demo: Extract' className='col-12 p-0'/>
                </Col>
                <Col xs={12} lg={6}>
                    <h5>Get recommended Stego images</h5>
                    <Image src='/StegoSource/StegoRecFinal.gif' alt='Demo: Extract' className='col-12 p-0'/>
                </Col>
            </Row>
        </>
    )
}

export default Capstone