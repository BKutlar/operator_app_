// import React from 'react';
// import '@mobiscroll/react/dist/css/mobiscroll.min.css';
// import { Page, Input, Popup, Select, Datepicker, Button, formatDate, setOptions, options, localeFr } from '@mobiscroll/react';
// setOptions({
//     locale: localeFr,
//     theme: 'windows',
//     themeVariant: 'light'
// });
// const startDate = '2022-04-11T00:00';
// const endDate = '2022-04-17T00:00';
// function App({ props }) {


//     const [inputValue, setInputValue] = React.useState();
//     const [selectedDate, setSelectedDate] = React.useState([startDate, endDate]);
//     const [isOpen, setOpen] = React.useState(false);
//     const [openPicker, setOpenPicker] = React.useState(false);
//     const [date, setDate] = React.useState(new Date());
//     const [myWeek, setMyWeek] = React.useState(null);
//     const [disabledInput, setDisabledInput] = React.useState(false);
//     const [selected, setSelected] = React.useState('custom');

//     const changeInputValue = React.useCallback((start, end) => {
//         const locale = options.locale || {};
//         const dateFormat = locale.dateFormat || 'DD/MM/YYYY';

//         setInputValue(formatDate(dateFormat, new Date(start)) + ' - ' + formatDate(dateFormat, new Date(end)));
//     }, []);

//     const respPopup = {
//         xsmall: {
//             display: 'bottom',
//             touchUi: true,
//             buttons: [{
//                 text: 'Apply',
//                 handler: () => {
//                     const date = selectedDate;

//                     changeInputValue(date[0], date[1] || date[0]);
//                     setOpen(false);
//                 }
//             },
//                 'cancel']
//         },
//         custom: {
//             breakpoint: 559,
//             buttons: [],
//             display: 'anchored',
//             anchor: document.querySelector('.date-filter-input'),
//             anchorAlign: 'start',
//             touchUi: false,
//             scrollLock: false,
//             showArrow: false,
//             maxWidth: 920
//         }
//     };

//     const onDateChange = React.useCallback((event) => {
//         const date = event.value;

//         setDisabledInput(false);
//         setSelected('custom');
//         setSelectedDate(date);
//     }, []);
//     var day = date.getDay();
//     const pickerChage = (ev) => {
//         setMyWeek(ev.value);
//     }
//     const show = () => {
//         setOpenPicker(true);
//     };

//     // const onClose = () => {
//     //     setOpenPicker(false);
//     // };

//     const onClose = React.useCallback(() => {
//         setOpen(false);
//     }, []);
//     const inputClick = React.useCallback(() => {
//         setOpen(true);
//     }, []);

//     const inputProps = {
//         className: 'md-mobile-picker-input',
//         placeholder: 'Please Select...'
//     };

//     const boxInputProps = {
//         className: 'md-mobile-picker-box-label',
//         inputStyle: 'box',
//         placeholder: 'Please Select...'
//     };
//     const [start, setStart] = React.useState(null);
//     const [end, setEnd] = React.useState(null);
//     const now = new Date();
//     const [invalid, setInvalid] = React.useState([
//         {
//             recurring: {
//                 repeat: 'weekly',
//                 // weekStart: 'MO',
//                 // interval: 1,
//                 weekDays: 'TU,WE,TH,FR,SA,SU',

//             },
//         },
//         new Date(now.getFullYear(), now.getMonth())
//     ]);



//     return (

//         <>
//             <Page>
//                 <div className="mbsc-form-group">
//                     <Input inputStyle="box" onClick={inputClick} defaultValue={inputValue} className="date-filter-input" readOnly></Input>
//                 </div>
//                 <Popup
//                     isOpen={isOpen}
//                     onClose={onClose}
//                     responsive={respPopup}
//                     cssClass="demo-date-filter-popup" >

//                     <div className="mbsc-grid mbsc-no-padding">
//                         <div className="mbsc-row">
//                             <div className='mbsc-col-sm-4 mbsc-push-sm-8 demo-date-filtering-dates'>
//                                 <div className='demo-date-filtering-inputs'>
//                                     <Select 
//                                         data={""}
//                                         label="Data range"
//                                         inputProps={{
//                                             labelStyle: 'stacked',
//                                             inputStyle: 'box'
//                                         }}
//                                         responsive={"respSelect"}
//                                         value={selected}
//                                         onChange={onChange}
//                                     />
//                             <div className="demo-date-filtering-desktop-buttons mbsc-button-group-justified">
//                                 {/* <Button onClick={setInvalid}>Click</Button> */}
//                             </div>
//                             <div className="mbsc-col-sm-8 mbsc-pull-sm-4">
//                                 <Datepicker
//                                     controls={['calendar', 'timegrid']}
//                                     select="range"
//                                     display="inline"
//                                     showRangeLabels={false}
//                                     pages='auto'
//                                     startInput={start}
//                                     endInput={end}
//                                     showOnClick={false}
//                                     showOnFocus={false}
//                                     value={selectedDate}
//                                     onChange={onDateChange}
//                                     touchUi={true}
//                                     locale={localeFr}
//                                     dateFormat="DDD D MMM, YYYY"
//                                     timeForma="H:mm"
//                                     dateWheels="|DDD D MMM, YYYY|"
//                                     inputComponent="input"
//                                     inputProps={boxInputProps}
//                                     // boxInputProps={boxInputProps}
//                                     invalid={invalid}
//                                     inRangeInvalid={true}
//                                     valid={[

//                                     ]}

//                                 />


//                             </div>
//                         </div>
//                     </div>
//                 </Popup>
//             </Page>


//         </>
//     );
// }


// export default App;


import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, localeFr } from '@mobiscroll/react';

function App() {
     const invalids = React.useMemo(() => {
        return [
            
         {
            recurring: {
                repeat: 'weekly',
                // repeat: 'weakly',
                weekDays: 'TU,WE,TH,FR,SA,SU'
                // weekDays: 'SA', // comma separated list of the week days, possible values: 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'
                // interval: 2 // the time interval for the rule (every 2 weeks in this example)
            }
        }, 
        ];
    }, []);

    return (
        <Datepicker
           
            locale={localeFr}
            theme="windows" 
            themeVariant="light"
            controls={['calendar']}
            select="range"
            display="inline"
            invalid={invalids}
       />
    ); 
}



export default App;