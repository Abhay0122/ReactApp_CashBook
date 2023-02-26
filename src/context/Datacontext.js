import React, { createContext, useState } from 'react';

export const BookData = createContext(null);

const Datacontext = (props) => {
    // console.log(props.children);
    const [Books, setBooks] = useState("ENTER NEW BOOK...");
    const [Tasks, setTasks] = useState([]);
    const [cashin, setcashin] = useState("0");
    const [cashout, setcashout] = useState("0");
    const [Cashtasks, setCashtasks] = useState([]);

    return (
        <BookData.Provider value={{ Books: Books, setBooks: setBooks, Tasks: Tasks, setTasks: setTasks, cashin: cashin, setcashin: setcashin, cashout: cashout, setcashout: setcashout, Cashtasks: Cashtasks, setCashtasks: setCashtasks }}>
            {props.children}
        </BookData.Provider>
    )
}

export default Datacontext