import React from 'react'
import {Link} from 'react-router-dom'

const HomePage=()=>{
    return (
        <div className="home container">
            <h1 className='heading'>Welcome to CodingForKids!</h1>
            <Link to="/signup" className='btn btn-primary-lg'>Get Started</Link>



        </div>
    )
}


export default HomePage

