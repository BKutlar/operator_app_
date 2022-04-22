// // // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time#JavaScript

// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import PropTypes from 'prop-types';
// // const _supportsTimeInput = () => {
// //     const timeInput = document.createElement('input')
// //     timeInput.type = 'time'
// //     return timeInput.type === 'time'
// // }

// // const _getMilitaryTime = isoFormat => {
// //     const [ hours, minutes ] = isoFormat.split(':')
// //     return `${hours}:${minutes}`
// // }

// // const _getAttr = ({ max, min, name, supportsTimeInput, value }) => {
// //     return supportsTimeInput 
// //             ? { 
// //                 max,
// //                 min,
// //                 type: 'time',
// //             } 
// //             : { 
// //                 name,
// //                 type: 'text',
// //                 value,
// //             }    
// // }
 
// // class TimePicker extends React.Component {
// //     state = {
// //         showButton: false,
// //         supportsTimeInput: false,
// //         value: '',
// //     }

// //     componentDidMount() {
// //         const supportsTimeInput = _supportsTimeInput()
        
// //         // This seems like you should only have to use
// //         // one value to keep track of the true/false state,
// //         // however this helps because both start (and can 
// //         // stay) false, but only one can ever be true
// //         this.setState({
// //             showButton: !supportsTimeInput,
// //             supportsTimeInput,
// //         })
// //     }

// //     handleOnInput = e => {
// //         const { value: targetValue } = e.target
// //         console.log(targetValue)
// //         this.setState(({ supportsTimeInput }) => ({
// //             // If the browser supports time inputs, then 
// //             // the value we get will be in 24-time, so 
// //             // we need to convert it to mm/dd/yyy
// //             value: !supportsTimeInput && targetValue ? _getMilitaryTime(targetValue) : targetValue,
// //         }))
// //     }
    
// //     handleButtonClick = () => {
// //         alert('A beautiful, accessible timepicker appears before your eyes!')
// //     }

// //     render() {
// //         const { buttonText, hint, inputId, label, labelId, max, min, name } = this.props
// //         const { showButton, supportsTimeInput, value } = this.state

// //         const attr = _getAttr({ max, min, name, supportsTimeInput, value })

// //         return (

// //             <label className="timepicker" htmlFor={inputId}>
                
// //                 <header className="timepicker__header" id={labelId}>
// //                     <span className="timepicker__label">{label}</span>
// //                     <small className="timepicker__hint">{hint}</small>
// //                 </header>
                
// //                 <input 
// //                     aria-labelledby={labelId}
// //                     autoCapitalize="on" 
// //                     autoComplete="off" 
// //                     autoCorrect="off"
// //                     className="timepicker__input"
// //                     id={inputId}
// //                     maxLength="10" 
// //                     onInput={this.handleOnInput}
// //                     spellCheck="false" 
// //                     { ...attr }
// //                 />

// //                 {
// //                     // If the time input is supported, we still probably want 
// //                     // to submit the time value to the server-side in a consistent 
// //                     // format, so we'll use a hidden input to do so.
// //                 }
                
// //                 { supportsTimeInput && (
// //                     <input name={name} type="hidden" value={value} />
// //                 )}
// //             </label>
// //         )
// //     }
// // }

// // TimePicker.defaultProps = {
// //     buttonText: '📅',
// //     max: null,
// //     // This line defaults to the current day 
// //     // (may be useful) for preventing user 
// //     // from scheduling an event in the past
// //     min: new Date(Date.now()).toISOString().split('T')[0],
// // }

// // TimePicker.propTypes = {
// //     buttonText: PropTypes.string,
// //     hint: PropTypes.string.isRequired,
// //     inputId: PropTypes.string.isRequired,
// //     label: PropTypes.string.isRequired,
// //     labelId: PropTypes.string.isRequired,
// //     max: PropTypes.string,
// //     min: PropTypes.string,
// //     name: PropTypes.string.isRequired,
// // }

// // ReactDOM.render(
// //     <TimePicker 
// //         hint="mm/dd/yyyy"
// //         inputId="timepicker-input"
// //         label="Start Time"
// //         labelId="timepicker-label"
// //         name="start-time"
// //     />,

// // )

// // const mockFormSubmit = e => {
// //     e.preventDefault()
// //     const inputs = Array.from(e.target.getElementsByTagName('input'))
// //     const formData = inputs.reduce((acc, input) =>  ({
// //         ...acc,
// //         ...input.name && input.value && { [input.name]: input.value },
// //     }), {})
    
// //     alert(JSON.stringify(formData))
// // }

// // export default TimePicker;

// import React, { Fragment, useState } from 'react';

// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles(theme => ({
//   textField: { margin: theme.spacing(1) }
// }));

// const TimePicker = ({ time, ...props }) => (
//   <TextField
//     value={time}
//     type="time"
//     InputLabelProps={{
//       shrink: true
//     }}
//     inputProps={{
//       step: 300
//     }}
//     {...props}
//   />
// );

// export default function UsingTimePickers() {
//   const classes = useStyles();
//   const [time, setTime] = useState('');

//   const onChange = e => {
//     setTime(e.target.value);
//   };

//   return (
//     <Fragment>
//       <TimePicker
//         time={time}
//         onChange={onChange}
//         label="My Time"
//         className={classes.textField}
//       />
//       <TextField
//         value={time}
//         label="Updated Time Value"
//         className={classes.textField}
//         InputLabelProps={{
//           shrink: true
//         }}
//         InputProps={{ readOnly: true }}
//       />
//     </Fragment>
//   );
// }

import React, { Fragment, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: { margin: theme.spacing.unit }
}));

function formatDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [
    year,
    month < 10 ? `0${month}` : month,
    day < 10 ? `0${day}` : day
  ].join('-');
}

function formatTime(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return [
    hours < 10 ? `0${hours}` : hours,
    minutes < 10 ? `0${minutes}` : minutes
  ].join(':');
}

const DatePicker = ({ date, ...props }) => (
  <TextField
    value={date instanceof Date ? formatDate(date) : date}
    type="date"
    InputLabelProps={{
      shrink: true
    }}
    {...props}
  />
);

const TimePicker = ({ time, ...props }) => (
  <TextField
    value={time instanceof Date ? formatTime(time) : time}
    type="time"
    InputLabelProps={{
      shrink: true
    }}
    inputProps={{
      step: 300
    }}
    {...props}
  />
);

export default function SettingInitialDateAndTimeValues(props) {
  const classes = useStyles();
  const [datetime, setDatetime] = useState(new Date());

  const onChangeDate = e => {
    if (!e.target.value) {
      return;
    }

    const [year, month, day] = e.target.value
      .split('-')
      .map(n => Number(n));

    const newDatetime = new Date(datetime);
    newDatetime.setYear(year);
    newDatetime.setMonth(month - 1);
    newDatetime.setDate(day);

    setDatetime(newDatetime);
  };

  const onChangeTime = e => {
    const [hours, minutes] = e.target.value
      .split(':')
      .map(n => Number(n));
    console.log(hours, minutes);
    const newDatetime = new Date(datetime);
    newDatetime.setHours(hours);
    newDatetime.setMinutes(minutes);

    setDatetime(newDatetime);
console.log(props.onDateChange);
    props.onDateChange([hours, minutes]);

  };

  return (
    <Fragment>
      {/* <DatePicker
        date={datetime}
        onChange={onChangeDate}
        label="My Date"
        className={classes.textField}
      /> */}
      <TimePicker
        time={datetime}
        onChange={onChangeTime}
        // label="My Time"
        className={classes.textField}
      />
    </Fragment>
  );
}