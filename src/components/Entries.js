import React, { useContext } from 'react'
import { BookData } from '../context/Datacontext'

const Entries = () => {
  // const {  } = useContext(BookData);

  return (
    <div
      style={{ minHeight: "fit-content", width: "500px" }}
      className='container p-4 shadow-lg mt-4 border rounded d-flex flex-column align-items-center justify-content-start'
    >
      Entries
    </div>
  )
}

export default Entries