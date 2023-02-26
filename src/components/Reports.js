import React, { useContext } from 'react'
import { BookData } from "../context/Datacontext"

const Reports = () => {
  const { cashin, cashout } = useContext(BookData);

  return (
    <div
      style={{ minHeight: "fit-content", width: "500px" }}
      className='container p-4 shadow-lg mt-4 border rounded d-flex flex-column align-items-center justify-content-start'
    >
      <header className='nav w-100 d-flex justify-content-between align-itesm-center border-bottom'>
        <h5>Net Balance</h5>
        <h5>{cashin - cashout}</h5>
      </header>

      <div className='mt-4 w-100 d-flex justify-content-between align-itesm-center'>
        <h6>Total In (+)</h6>
        <h6 className='text-success'>{cashin}</h6>
      </div>

      <div className='mt-4 w-100 d-flex justify-content-between align-itesm-center'>
        <h6>Total Out (-)</h6>
        <h6 className='text-danger'>{cashout}</h6>
      </div>

    </div>
  )
}

export default Reports