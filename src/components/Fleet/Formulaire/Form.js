import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import FormCalendar from './FormCalendar';
import SettingInitialDateAndTimeValues from './FormTime';
import Select from "react-select";
import data from "../data.json";


let priceValues = '';
let stationsValues = '';


const Form = () => {



    const [price, setPrice] = useState(null);

    const [stations, setStations] = useState(null);

    const [stationsList, setStationsList] = useState([]);
    const [link, setLink] = useState("");

    // handle change event of the prices dropdown
    const handlePriceChange = (obj) => {
        
        console.log(obj);
        setPrice(obj);
        
        setStationsList(obj.stations);
        // setLang(null);
        setStations(null);
        priceValues = obj.price



    };

    // handle change event of the stations dropdown
    const handleStationChange = (obj) => {
       
        setStations(obj);
        stationsValues = obj.name
    }

  

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
        console.log(priceValues);
        console.log(stationsValues);

        const response = await fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                typeOfCharging: event.target.Type.value,
                chargingStation: stationsValues,
                price: priceValues,
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


    const onFocusChange = ({ focused }) => {
        setFocused(focused);
    };
    const onSubmit = (data) => alert(JSON.stringify(data));

    const [selected, setSelected] = React.useState('');


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





                                        <div className='flex items-center space-x-2'>
                                            <input
                                                name="Type"
                                                style={{ zIndex: 99999999 }}
                                                type="radio"
                                                className={`w-6 h-6 ${errors.Type && "focus:border-red-500 focus:ring-red-500 border-red-500"
                                                    }`}
                                                value='Rapid'

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

                                            <Select
                                                name='stations'
                                                placeholder="Select Stations"
                                                value={stations}
                                                options={stationsList}
                                                onChange={handleStationChange}
                                                getOptionLabel={(x) => x.name}
                                                getOptionValue={(x) => x.code}
                                            >
                                            </Select>
                                        </div>
                                        <div>{errors.stations && <span className="text-sm text-red-500">{errors.stations.message}</span>}</div>
                                    </div>
                                </div>


                                <div>
                                    <div>
                                        <div className="relative">
                                            <p className="font-bold text-xl uppercase"> Price </p>


                                            <Select
                                                name='prices'
                                                placeholder="Select Price"
                                                value={price}
                                                options={data}
                                                onChange={handlePriceChange}
                                                getOptionLabel={(x) => x.price}
                                                getOptionValue={(x) => x.country_code}
                                            />


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

