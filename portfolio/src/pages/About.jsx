import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <h4>Still working on this. Check out my <Link to={'/portfolio'}>in-progress portfolio!</Link></h4>
            <h5>Last updated: 04/23/2024</h5>
        </>
    )
}

export default About