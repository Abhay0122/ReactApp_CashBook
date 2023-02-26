import React, { Fragment, useContext, useEffect } from 'react'
import { Link, Outlet } from "react-router-dom"
import { BookData } from '../context/Datacontext'

const Home = () => {
    const { Tasks } = useContext(BookData);

    let tasklist = <h5>No task found!</h5>;
    if (Tasks.length > 0) {
        tasklist = Tasks.map((task, indx) => {
            return (
                <li key={indx}>{task.Books}</li>
            )
        })
    }

    return (
        <Fragment>
            <div
                style={{ minHeight: "fit-content", width: "500px" }}
                className='container p-4 shadow-lg mt-4 border rounded d-flex flex-column align-items-center justify-content-start'
            >
                {tasklist}
            </div>
            <div
                style={{ width: "500px" }}
                className='mt-3 container d-flex justify-content-end'
            >
                <Link to="/newBook" className='btn btn-primary shadow-lg'>
                    Add New Book
                </Link>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Home