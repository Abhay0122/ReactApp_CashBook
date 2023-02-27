import React, { useContext } from 'react'
import { Link, useParams, useLocation } from "react-router-dom"
import { BookData } from "../context/Datacontext";
import Reports from './Reports';
import Entries from "./Entries";

const Cashbook = () => {
    const { Bookname } = useContext(BookData);
    const params = useParams();
    const location = useLocation();
    // console.log(params, location);

    return (
        <div className='container p-5'>
            <header className='nav d-flex align-itesm-center border-bottom'>
                <Link className='text-decoration-none text-danger' to='/'>
                    <h4 className='me-5 fs-4'> &#10094;</h4>
                </Link>
                <h4 className='text-uppercase'>{params.Bookname}</h4>
            </header>
            <div>
                <Reports />
            </div>
            <div>
                <Entries />
            </div>
            <div
                style={{ width: "500px" }}
                className='mt-4 container d-flex justify-content-between align-items-center'
            >
                <Link to="/Cashin" className='btn btn-success shadow-lg'>
                    + CASH IN
                </Link>
                <Link to="/Cashout" className='btn btn-danger shadow-lg'>
                    - CASH OUT
                </Link>
            </div>
        </div>
    )
}

export default Cashbook