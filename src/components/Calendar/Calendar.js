import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import {AiOutlineClose} from 'react-icons/ai'
function MyApp() {
  const [value, onChange] = useState(new Date());
  const  [close, setClose] = useState(false);
  const Closed = () => setClose(!close);

  return (
    <div> 
        <button onClick={() => setClose(true)}>
       {/* <AiOutlineClose /> */}X
       
      <Calendar onChange={onChange} value={value} />
      </button>
    </div>
  );
}

export default MyApp;