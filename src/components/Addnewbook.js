import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BookData } from "../context/Datacontext";

const Addnewbook = () => {
    const { Books, setBooks, Tasks, setTasks, cashin } = useContext(BookData);
    const navigate = useNavigate();

    const bookSubmitHandler = (e) => {
        e.preventDefault();
        const task = { Books, cashin };
        setTasks([...Tasks, task]);
        setBooks("");
        // console.log(task);
        navigate('/Cashbook/' +  Books);
    }

    return (
        <form
            onSubmit={bookSubmitHandler}
            style={{ width: "500px" }}
            className='container shadow-lg mt-4 p-3'
        >
            <div className="mb-3">
                <div className='d-flex align-items-center justify-content-between mb-3'>
                    <h6>ADD NEW BOOK</h6>
                    <Link className='text-decoration-none text-dark fs-5' to='/'>
                        ✗
                    </Link>
                </div>
                <input
                    name='book'
                    type="text"
                    value={Books}
                    onChange={(e) => setBooks(e.target.value)}
                    className="form-control"
                />
            </div>
            <button className="btn btn-primary">ADD NEW BOOK</button>
        </form>
    )
}

export default Addnewbook;