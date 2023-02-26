import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BookData } from '../context/Datacontext';

const Cashout = () => {
  const Navigate = useNavigate();
  const { Books, cashout, setcashout, outcashtasks, setoutcashtasks, Time } = useContext(BookData);

  const cashoutHandler = (e) => {
    e.preventDefault();
    let outcashtask = { cashout, Time };
    setoutcashtasks([...outcashtasks, outcashtask]);
    // console.log(cashout);
    Navigate('/Cashbook/Transaction')
  }

  return (
    <div>
      <form
        onSubmit={cashoutHandler}
        style={{ width: "500px", marginTop: "5vmax" }}
        className='container shadow-lg mt-5 p-3'
      >
        <div className="mb-4">
          <div className='d-flex align-items-center justify-content-between mb-3'>
            <h6 className='text-danger'>ADD CASH OUT ENTRY</h6>
            <Link className='text-decoration-none text-dark fs-5' to='/Cashbook/ + Books'>
              ✗
            </Link>
          </div>
          <input
            className="form-control"
            type="text"
            name='cashout'
            value={cashout}
            onChange={(e) => setcashout(e.target.value)}
          />
        </div>
        <button className="w-25 btn btn-danger">Save</button>
      </form>
    </div>
  )
}

export default Cashout