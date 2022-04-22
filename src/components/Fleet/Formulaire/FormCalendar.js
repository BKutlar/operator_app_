import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
// import {DateRangePicker} from 'react-dates';
import * as Moment from "moment";
import { extendMoment } from 'moment-range';

import axios from 'axios';

import { DateRangePicker, SingleDatePicker } from 'react-dates';
const Monday = 1
function onlyFridays(date) {
    return date.day() !== Monday
}


// let bookings;

// const isBlocked = date => {
//     let bookedRanges = [];
//     let blocked;
//     bookings.map(booking => {
//       bookedRanges = [...bookedRanges, 
//       moment.range(booking.startDate, booking.endDate)] // for one booking
//      }
//     );

    
//   blocked = bookedRanges.find(range => range.contains(date));
//   return blocked;
//   };

// function Bookings() {
//     const [book, setBook] = useState();
//     const [bookE, setBookE] = useState([]);
//     useEffect(() => {
//         axios.get('http://localhost:5000/booking', {


//         })
//             // .then(date => {
//             //     console.log(date);
//             //     const StartDate = date.data.booking.map(start=>start.startDate);
//             //     setBook(StartDate);
//             //     const EndDate = date.data.booking.map(end=>end.endDate);
//             //     setBookE(EndDate);
//             // })

//             .then((date) => {
//                 console.log(date);
//                 const BookArray = date.data.booking[0];
//                 setBookE(BookArray)
//                 return BookArray;

//             })


//     })

// }




const moment = extendMoment(Moment)


// const Booking = Bookings()
class FormCalendar extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    startDate: null,
                    endDate: null,
                    focusedInput: null,
                    bookings:[],
                };
            }

            componentDidMount(){
                    axios.get('http://localhost:5000/booking', {

                    })
                    .then(result => {
                        // console.log(result);
                        this.setState({bookings: result.data.booking})
                    })
            }

             isDayBlock = (date) => {

                // console.log(this.state)
                if(this.state.bookings.length <= 0) {
                    return false 
                } 
                const allRanges = []
                this.state.bookings.forEach(booking => {
                    let start = new Date(booking.startDate)
                    start.setHours(0)
                    start.setMinutes(0)
                    start.setSeconds(0)
                    start.setMilliseconds(0)
                    let end = new Date(booking.endDate)
                    end.setHours(23)
                    end.setMinutes(59)
                    end.setSeconds(59)
                    allRanges.push(moment.range(start, end))
                    // moment.range(booking.startDate, booking.endDate).
                })
                
                console.log(allRanges)
                // const dayBlock = moment.range(this.state.bookings[0].startDate, this.state.bookings[0].endDate);
                // console.log(dayBlock)
                return !!allRanges.find(range => range.contains(date));
                
                // return dayBlock.contains(date)
                
            }

            //   isBlocked = date => {
            //     let bookedRanges = [];
            //     let blocked;
            //     bookings.forEach( booking => {
            //       bookedRanges = [...bookedRanges, 
            //       moment.range(booking.startDate, booking.endDate)]
            //      }

            //     );
            //   blocked = bookedRanges.find(range => range.contains(date));
            //   return blocked;
            //   };


            render() {
                return (
                    <div className="App">
                        <DateRangePicker
                            displayFormat="YYYY/MM/DD"
                            startDateId="startDate"
                            endDateId="endDate"
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }) }}
                            focusedInput={this.state.focusedInput}
                            isDayBlocked={this.isDayBlock}
                            hideKeyboardShortcutsPanel
                            //   isOutsideRange={(day) => day.isAfter(moment()) || day.isBefore(moment().subtract(30, 'days'))} Past Date selection

                            onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}
                        />
                    </div>
                );
            }
        }

export default FormCalendar;