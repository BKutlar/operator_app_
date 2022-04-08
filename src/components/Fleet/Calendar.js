import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, Button, Page, localeFr } from '@mobiscroll/react';

function App({props}) {
    const [openPicker, setOpenPicker] = React.useState(false);
    const [date, setDate] = React.useState(new Date());
    const [myWeek, setMyWeek] = React.useState(null);
    var day = date.getDay();
    const pickerChage= (ev) => {
        setMyWeek(ev.value);
    }
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
    const [start, setStart] = React.useState(null);
const [end, setEnd] = React.useState(null);
const now = new Date();
const [invalid, setInvalid] = React.useState([
    {
        recurring: {
            repeat: 'weekly',
            weekDays: 'TU,TH'
        },
    },
    new Date(now.getFullYear(), now.getMonth(), 25)
]);

    return (
        
        <>
        <Page>
        {/* <Button onClick={setInvalid}>Click */}
    <Datepicker
    // theme='ios'
    controls={['calendar', 'timegrid']}
    select="range"
    touchUi={true}
    locale={localeFr}
    dateFormat="DDD D MMM, YYYY"
    timeForma="H:mm"
    dateWheels="|DDD D MMM, YYYY|"
    inputComponent="input"
    inputProps={boxInputProps}
    // boxInputProps={boxInputProps}
    // invalid={invalid}
    position= {"vertical"}
    // inRangeInvalid={true}
    
  />
    {/* </Button>   */}
     

  
  </Page>

  
    </>
    ); 
}


export default App;