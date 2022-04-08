import React from 'react';
import {DateRangePicker} from 'rsuite';
import  'rsuite/dist/rsuite.min.css' ; 
function App() {
    const styles = { width: 460, display: 'block', marginBottom: 10 };
return (
    <>
    <div className="field">
    {/* <p>Date Time Range</p> */}
    <DateRangePicker size="lg" placeholder="Please Select..." style={styles} format="EEE dd-MM-yyyy HH:mm:ss" />
    </div>
    </>
)                                                                                                               
}
export default App;