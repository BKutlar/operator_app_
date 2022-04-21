import React, { useState } from 'react';
import TestCalendar from '../Fleet/TestCalendar';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker, SingleDatePicker } from "react-dates";
import FormCalendar from './FormCalendar';
import { Timeit } from "react-timeit";
import SettingInitialDateAndTimeValues from './FormTime';
// import TimePicker from './FormTime';
// import "react-timeit/dist/index.css";


const Form = () => {

    // const CreateGroupEvent = (props) => {
    //     const [dob, setDob] = useState(null);
    //     const [focused, setFocused] = useState(false);
    //     const setDate = (date) => {
    //       setDob(date);
    //       setFocused(false);
    //     };
    // const [time, setTime] = useState();
    const [dob, setDob] = useState(null);
    const [dob2, setDob2] = useState(null);
    const [focused, setFocused] = useState(false);
    const [focused2, setFocused2] = useState(false);
    const setDate = (date) => {
        setDob(date);
        setFocused(false);
    };
    const setDate2 = (date) => {
        setDob2(date);
        setFocused2(false);
    }

    const time = {
        startHour: '',
        startMinute: '',
        endHour: '',
        endMinute: '',

    }

    function onStartChange([hour, minute]) {
        time.startHour = hour;
        time.startMinute = minute;
    }

    function onEndChange([hour, minute]) {
        time.endHour = hour;
        time.endMinute = minute;
    }

    const [startDate, setStartDate] = React.useState();
    const [endDate, setEndDate] = React.useState();
    const [focusedInput, setFocusedInput] = React.useState();

    //disable weekends 
    const disableWeekdays = current => {
        return current.day() !== 0 && current.day() !== 6;
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();




    async function Test(event) {

        event.preventDefault();


        let startDate = new Date(event.target.startDate.value);
        startDate.setHours(time.startHour);
        startDate.setMinutes(time.startMinute);
        // startDate = startDate.getUTCDate();

        let endDate = new Date(event.target.endDate.value);
        endDate.setHours(time.endHour);
        endDate.setMinutes(time.endMinute);
        // endDate = endDate.getUTCDate();

        const response = await fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                typeOfCharging: event.target.Type.value,
                chargingStation: event.target.stations.value,
                price: event.target.prices.value,
                startDate,
                endDate,
                // timestart: event.target.timestart.value,

            }),
        })
        const data = await response.json()
        console.log(data)
        if (data.status === 'ok') {
            // alert('Reserved')
        } else {
            alert('Reserved')

        }
    }

    // const station = {
    //     if(price === "1")
    // }
    const onFocusChange = ({ focused }) => {
        setFocused(focused);
    };
    const onSubmit = (data) => alert(JSON.stringify(data));

    const [selected, setSelected] = React.useState('');

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
    };

    const stationsP3 = [
        "BK",
    ];

    const stationsP1 = [
        "MK"
    ];

    const station = [
        "--Select---",
        "BK",
        "MK"
    ]
    let type = null;

    let options = null;

    if (selected === '3€') {
        type = stationsP3;
    }
    else if (selected === '1€') {
        type = stationsP1;
    }

    else if (selected === 'Select') {
        type = station
    }

    if (type) {
        options = type.map((el) => <option key={el}>{el}</option>);
    }
    return (

        <React.Fragment>
            <section className="body">
                <form /*onSubmit={(e) => {
                    e.preventDefault();
                    console.log( e.target.Type.value);
                }} */onSubmit={Test} to='/'>
                    <div className="bg-white-300 w-auto h-auto pb-10 mt-5 mx-5 px-5 rounded-lg">
                        {/*header* section*/}
                        <div className="h-24 flex justify-center items-center shadow">
                            <p className='uppercase font-bold text-xl text-center'>charging stations reservations</p>
                        </div>

                        {/*body sections*/}
                        <div>
                            <div className="grid justify-center space-y-5 bg-white-300 pb-10">
                                <div>
                                    <div className="flex space-x-8 mt-5">

                                        <div className="flex items-center space-x-2">
                                            <input name="Type" type="radio" style={{ zIndex: 99999999 }} className={`w-6 h-6 ${errors.Type &&
                                                "focus:border-red-500 focus:ring-red-500 border-red-500"}`} value="Slow"/*{...register("Type", {
                                                    required: {
                                                        value: true,
                                                        message: 'Type is required'
                                                    }
                                                })} */
                                            />
                                            <p className="text-xl font-bold uppercase">Slow</p>
                                        </div>

                                        {/* <div className='flex items-center space-x-2'>
                                            <input
                                                name="Type"
                                                type="radio"
                                                className={`w-6 h-6 ${errors.Type && "focus:border-red-500 focus:ring-red-500 border-red-500"
                                                    }`}
                                                value='Fast'
                                                // {...register('Type', {
                                                //     required: {
                                                //         value: true,
                                                //         message: "Type is required"
                                                //     },
                                                // })}
                                            />
                                            <p className="text-xl font-bold uppercase">Fast</p>
                                        </div> */}



                                        <div className='flex items-center space-x-2'>
                                            <input
                                                name="Type"
                                                style={{ zIndex: 99999999 }}
                                                type="radio"
                                                className={`w-6 h-6 ${errors.Type && "focus:border-red-500 focus:ring-red-500 border-red-500"
                                                    }`}
                                                value='Rapid'
                                            // {...register('Type', {
                                            //     required: {
                                            //         value: true,
                                            //         message: 'Type is required'
                                            //     },
                                            // })}
                                            />

                                            <p className="text-xl font-bold uppercase">Rapid</p>
                                        </div>


                                        <div className='flex items-center space-x-2'>
                                            <input
                                                name="Type"
                                                type="radio" style={{ zIndex: 99999999 }}
                                                className={`w-6 h-6 ${errors.Type && "focus:border-red-500 focus:ring-red-500 border-red-500"
                                                    }`}
                                                value='Fast'
                                            // {...register('Type', {
                                            //     required: {
                                            //         value: true,
                                            //         message: "Type is required"
                                            //     },
                                            // })}
                                            />
                                            <p className="text-xl font-bold uppercase">Fast</p>
                                        </div>


                                        <div className='flex items-center space-x-2'>
                                            <input
                                                name="Type"
                                                style={{ zIndex: 99999999 }}
                                                type="radio"
                                                className={`w-6 h-6 ${errors.Type && "focus:border-red-500 focus:ring-red-500 border-red-500"
                                                    }`}
                                                value='Mobile Charger'
                                            // {...register('Type', {
                                            //     required: {
                                            //         value: true,
                                            //         message: 'Type is required'
                                            //     },
                                            // })}
                                            />

                                            <p className="text-xl font-bold uppercase">Mobile Charger</p>
                                        </div>



                                    </div>
                                    <div>{errors.Type && <span className="text-sm text-red-500">{errors.Type.message}</span>}</div>
                                </div>

                                {/*start section */}
                                <div>
                                    <div>
                                        <div className="relative">
                                            <p className="font-bold text-xl uppercase"> Search </p>
                                            <select defaultValue=""
                                                className="w-auto h-auto rounded-lg text-xl pl-5"
                                                {...register("stations", {
                                                    required: {
                                                        value: true,
                                                        message: "Stations is required"
                                                    }
                                                })}
                                            >
                                                <option value="" >--Select Charging Stations--</option>
                                                <option value="Midas Hotem Ankara">Midas Hotem Ankara</option>
                                                <option value="Başkent Kule">Başkent Kule</option>
                                            </select>
                                        </div>
                                        <div>{errors.stations && <span className="text-sm text-red-500">{errors.stations.message}</span>}</div>
                                    </div>
                                </div>


                                <div>
                                    <div>
                                        <div className="relative">
                                            <p className="font-bold text-xl uppercase"> Price </p>
                                            <select defaultValue=""
                                                className="w-auto h-auto rounded-lg text-xl pl-5"
                                                {...register("prices", {
                                                    required: {
                                                        value: true,
                                                        message: "Price is required"
                                                    }
                                                })}
                                            >
                                                <option value="" >--All Prices--</option>
                                                <option value="1€">1€</option>
                                                <option value="3€">3€</option>
                                            </select>

                                            {/* <div>
                                                <select onChange={changeSelectOptionHandler}
                                                >
                                                    <option>Choose</option>
                                                    <option>3€</option>
                                                    <option>1€</option>
                                                    <option>Select</option>
                                                </select>
                                            </div>
                                            <div>
                                                <select>
                                                    {
                                                        /** This is where we have used our options variable */
                                                        options
                                                    }
                                                {/* </select> */}
                                            {/* </div>  */}
                                        </div>
                                        <div>{errors.prices && <span className="text-sm text-red-500">{errors.prices.message}</span>}</div>
                                    </div>
                                </div>


                                <div>
                                    {/* date section */}
                                    <div className="flex space-x-2">
                                        {/* departure section */}
                                        <div>
                                            <div>
                                                <div className="relative">
                                                    <p className="font-bold text-xl uppercase">
                                                        date
                                                    </p>
                                                    
                                                    <FormCalendar
                                                        // type="dateTime"
                                                        className={`w-full h-16 text-2xl rounded-lg ${errors.departureDate &&
                                                            " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                                                        {...register("startDate", {
                                                            required: {
                                                                value: true,
                                                                message: "Departure date is required",
                                                            },
                                                        })}
                                                    />

                                                    {/* <Timeit  defaultValue='06:10'
                                                    className={`w-full h-16 text-2xl rounded-lg ${errors.departureDate &&
                                                        " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                                                    {...register("timestart", {
                                                        required: {
                                                            value: true,
                                                            message: "Departure date is required",
                                                        },
                                                    })} /> */}

                                                    <SettingInitialDateAndTimeValues

                                                        name="timestart"
                                                        onDateChange={(time) => onStartChange(time)}

                                                    />

                                                    <SettingInitialDateAndTimeValues

                                                        name="timestart"
                                                        onDateChange={(time) => onEndChange(time)}

                                                    />
                                                </div>
                                                <div>
                                                    {errors.departureDate && (
                                                        <span className="text-sm text-red-500">
                                                            {errors.startDate.message}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* return section */}
                                        {/* <div>
                                            <div>
                                                <div className="relative">
                                                    <p className="font-bold text-xl uppercase">
                                                        end date
                                                    </p>
                                                    {/* <input
                                                        type="datetime-local"
                                                        className={`w-full h-16 text-2xl rounded-lg ${errors.returnDate &&
                                                            " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                                                        {...register("endDate", {
                                                            required: {
                                                                value: true,
                                                                message: "Return date is required",
                                                            },
                                                        })}
                                                    /> */}

                                        {/* <SingleDatePicker
                                                        date={dob2}
                                                        // {...input}
                                                        onOutsideClick={true}
                                                        numberOfMonths={1}
                                                        onDateChange={setDate2}
                                                        focused={focused2}
                                                        onFocusChange={setFocused2}
                                                        id="dob2"
                                                        className={`w-full h-16 text-2xl rounded-lg ${errors.returnDate &&
                                                            " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                                                        {...register("endDate", {
                                                            // required: {
                                                            //     value: true,
                                                            //     message: "Return date is required",
                                                            // },
                                                        })}
                                                    />
                                                </div>
                                                <div>
                                                    {errors.returnDate && (
                                                        <span className="text-sm text-red-500">
                                                            {errors.endDate.message}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <button type="submit" to='/' className="w-auto h-16 font-bold text-xl uppercase rounded-lg bg-green-400 hover:bg-green-200 items-center justify-center relative">Submit</button>

                        </div>
                    </div>
                    {/* </div> */}

                </form>
            </section>
        </React.Fragment>
    )
}

export default Form;

