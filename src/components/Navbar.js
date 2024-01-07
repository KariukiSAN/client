import React from 'react'
import {Link} from 'react-router-dom'

const NavBar =()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid py-2">  
                <div className="d-flex">
                    <Link className="navbar-brand me-auto" to="/" href="#">
                        <img src="https://qph.cf2.poecdn.net/main-sdxl_1370e56c2bfe9df1358e50027a7ac5bfada6eb097d133e413a4b8674b7a0961b.png?w=1024&h=1024" alt="" className="mr-2" style={{height: '30px'}} /> {/* Add your logo image */}
                        CodingForKids
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/courses">Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mentors">Mentors</Link> {/* Update link */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">About Us</Link> {/* Update link */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/signup">SignUp</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/login">Login</Link>
                        </li>

                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar