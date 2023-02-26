import React, { useContext } from 'react'
import { BookData } from '../context/Datacontext'

const Entries = () => {
  const { Cashtasks, outcashtasks } = useContext(BookData);

  let cashTaskList = <h5></h5>;
  let outCashTaskList = <h5></h5>;
  if (Cashtasks.length > 0) {
    cashTaskList = Cashtasks.map((cashtask, indx) => {
      return (
        <div className='w-100 mb-3 p-3 border border-success rounded' key={indx}>
          <div className='d-flex justify-content-between align-items-center'>
            <h6 className='bg-info rounded py-1 px-2 text-primary'>Cash</h6>
            <h6 className='text-success'>{cashtask.cashin}</h6>
          </div>
          <hr />
          <div>
            <span className='me-2 text-success'>Entry by You</span>
            <span>at {cashtask.Time}</span>
          </div>
        </div>
      );
    })
  }

  if (outcashtasks.length > 0) {
    outCashTaskList = outcashtasks.map((outcashtask, indx) => {
      return (
        <div className='w-100 mb-3 p-3 border border-danger rounded' key={indx}>
          <div className='d-flex justify-content-between align-items-center'>
            <h6 className='bg-info rounded py-1 px-2 text-primary'>Cash</h6>
            <h6 className='text-danger'>{outcashtask.cashout}</h6>
          </div>
          <hr />
          <div>
            <span className='me-2 text-success'>Entry by You</span>
            <span>at {outcashtask.Time}</span>
          </div>
        </div>
      );
    })
  }

  return (
    <div
      style={{ minHeight: "fit-content", width: "500px" }}
      className='container p-4 shadow-lg mt-4 border rounded d-flex flex-column align-items-center justify-content-start'
    >
      {cashTaskList}
      {outCashTaskList}
    </div>
  )
}

export default Entries