import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Image } from 'react-bootstrap'

const PortfolioItem = ({link, image, title, summary, description}) => {
    return (
        <Col sm={12} xl={5} style={{minHeight: '275px'}}
                className='border border-4 border-secondary p-0 m-0 my-4 d-flex justify-content-around'>
            <Link to={link}>
                <div style={{height:'100%'}} className='m-0 p-0'>
                    <div className='row p-0 m-0 justify-content-between'>
                        <div className='port-intro col-xs-12 col-md-8 pt-2'>
                            <h4>{title}</h4>
                            <ul>
                                {summary.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })}
                            </ul>
                        </div>
                        {image ? (
                            <Col xs={4} className='image-container d-none d-lg-block p-0'>
                                <Image src={image} alt={image} className='cropped'/>
                            </Col>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className='row m-0 mt-2 p-2'>
                        {description}
                    </div>
                </div>
            </Link>
        </Col>
    )
}

export default PortfolioItem