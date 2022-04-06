import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, Button, Page, localeFr } from '@mobiscroll/react';

function App() {
    const [openPicker, setOpenPicker] = React.useState(false);
    const [date, setDate] = React.useState(new Date());
    
    const show = () => {
        setOpenPicker(true);
    };
    
    const onClose = () => {
        setOpenPicker(false);
    };
    
    const inputProps = {
        className: 'md-mobile-picker-input',
        placeholder: 'Please Select...'
    };
    
    const boxInputProps = {
        className: 'md-mobile-picker-box-label',
        inputStyle: 'box',
        placeholder: 'Please Select...'
    };
    
    return (
        <>
        
    <Datepicker
    controls={['calendar', 'timegrid']}
    select="range"
    touchUi={true}
    locale={localeFr}
    dateFormat="DDD D MMM, YYYY"
    timeForma="H:mm"
    dateWheels="|DDD D MMM, YYYY|"
    inputComponent="input"
    inputProps={boxInputProps}
  />
    </>
    ); 
}


export default App;