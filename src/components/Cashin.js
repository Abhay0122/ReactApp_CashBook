import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BookData } from "../context/Datacontext"

const Cashin = () => {
  const Navigate = useNavigate();
  const { cashin, setcashin, Books } = useContext(BookData);

  const cashinHandler = (e) => {
    e.preventDefault();
    Navigate('/Cashbook/' + Books)
  }

  return (
    <div>
      <form onSubmit={cashinHandler}
        style={{ width: "500px" }}
        className='container shadow-lg mt-5 p-3'
      >
        <div className="mb-3">
          <div className='d-flex align-items-center justify-content-between mb-3'>
            <h6 className='text-success'>ADD CASH IN ENTRY</h6>
            <Link className='text-decoration-none text-dark fs-5' to='/Cashbook/ + Books'>
              ✗
            </Link>
          </div>
          <input
            className='form-control'
            type="text"
            name='cashin'
            value={cashin}
            onChange={(e) => setcashin(e.target.value)}
          />
        </div>
        <button className='w-25 btn btn-success'>Save</button>
      </form>
    </div>
  )
}

export default Cashin