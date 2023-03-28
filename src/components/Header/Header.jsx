import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    return (
        <>
            <nav className="navbar mb-3 navbar-expand-lg bg-dark py-3"  >
                <div className="container">
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=" text-white"><FontAwesomeIcon icon={faList} /></span>
                    </button>
                    <img src="../../../public/Logo.svg" alt="" className="img-fluid" />
                    <div className="collapse  navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
                            <li className="nav-item me-4">
                                <a className="nav-link active text-white " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item me-4 position-relative">
                                <a className="nav-link active text-white " aria-current="page" href="#">Order Review
                                    
                            </a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link active text-white " aria-current="page" href="#">Manage Inventory</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link active text-white " aria-current="page" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Header;