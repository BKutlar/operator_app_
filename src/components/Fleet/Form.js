import React, { useState } from 'react';
import TestCalendar from '../Fleet/TestCalendar';
import { useForm } from 'react-hook-form';

const Form = () => {
    const [state, setState] = useState(null);
    let startDate;
    //handle event 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    //handle submit
    const onSubmit = data => alert(JSON.stringify(data));
    return (
        <React.Fragment>
            <section className="body">
                <form /*onSubmit={(e) => {
                    console.log(startDate, e.target.charging.value);
                }} */onSubmit={handleSubmit(onSubmit)}>
                    <div className="bg-white-300 w-auto h-auto pb-10 mt-5 mx-5 px-5 rounded-lg">
                        {/*header* section*/}
                        <div className="h-24 flex justify-center items-center shadow">
                            <p className='uppercase font-bold text-xl text-center'>charging stations reservations</p>
                        </div>

                        {/*body sections*/}
                        <div>
                            <div className="grid justify-center space-y-5 bg-white-300 pb-10">
                                <div >
                                    <div className="flex space-x-8 mt-5">

                                        <div className="flex items-center space-x-2">
                                            <input type="radio" className={`w-6 h-6 ${errors.Type &&
                                                "focus:border-red-500 focus:ring-red-500 border-red-500"}`} value="charging"{...register("Type", {
                                                    required: {
                                                        value: true,
                                                        message: 'Type is required'
                                                    }
                                                })} />
                                            <p className="text-xl font-bold uppercase">Slow</p>
                                        </div>

                                        <div className='flex items-center space-x-2'>
                                            <input
                                                type="radio"
                                                className={`w-6 h-6 ${errors.tripType && "focus:border-red-500 focus:ring-red-500 border-red-500"
                                                    }`}
                                                value='Rapid'
                                                {...register('tripType', {
                                                    required: {
                                                        value: true,
                                                        message: 'Type il required'
                                                    },
                                                })}
                                            />

                                            <p className="text-xl font-bold uppercase">Rapid</p>
                                        </div>


                                        <div className='flex items-center space-x-2'>
                                            <input
                                                type="radio"
                                                className={`w-6 h-6 ${errors.tripType && "focus:border-red-500 focus:ring-red-500 border-red-500"
                                                    }`}
                                                value='Fast'
                                                {...register('tripType', {
                                                    required: {
                                                        value: true,
                                                        message: "Type is required"
                                                    }
                                                })}
                                            />
                                            <p className="text-xl font-bold uppercase">Fast</p>
                                        </div>


                                    </div>
                                    <div>{errors.Type && <span className="text-sm text-red-500">{errors.Type.message}</span>}</div>
                                </div>

                                {/*departure section */}
                                <div>
                                    <div>
                                        <div className="relative">
                                            <p className="font-bold text-xl uppercase"> Search </p>
                                            <select
                                                className="w-auto h-auto rounded-lg text-xl pl-5"
                                                {...register("stations", {
                                                    required: {
                                                        value: true,
                                                        message: "Stations is required"
                                                    }
                                                })}
                                            >
                                                <option value="" selected disabled hidden>--Select Charging Stations--</option>
                                                <option value="MHA">Midas Hotem Ankara</option>
                                                <option value="BK">Başkent Kule</option>
                                            </select>
                                        </div>
                                        <div>{errors.stations && <span className="text-sm text-red-500">{errors.stations.message}</span>}</div>
                                    </div>
                                </div>

                                {/* price section */}
                                <div className="w-full">
                                    <div>
                                        <div>
                                            <p className="font-bold text-xl uppercase">price</p>
                                            <select className="w-auto h-auto rounded-lg text-xl pl-5"
                                                {...register('price', {
                                                    required: {
                                                        value: true,
                                                        message: 'Price is required'
                                                    }
                                                })}
                                            >
                                                <option>--All Prices--</option>
                                                <option>1€</option>
                                                <option>3€</option>
                                                <option>5€</option>
                                            </select>
                                        </div>
                                        {/* <div>{errors.start && <span className="text-sm text-red-500">{errors.start.message2}</span>}</div> */}
                                    </div>
                                </div>

                                {/*date section */}
                                <div className="flex space-x-2">
                                    {/* start section */}
                                    <div>
                                        <div>
                                            <div className="index">
                                                <p className="font-bold text-xl uppercase"> start date </p>
                                                <TestCalendar onChange={(v) => {
                                                    setState(v);
                                                }} className="w-auto h-auto rounded-lg text-2xl "
                                                // {...register("start", {
                                                //     required: {
                                                //         value: true,
                                                //         message: "Date is required",
                                                //         // message2:"Price is required"
                                                //     }
                                                // })}

                                                />
                                            </div>
                                            {/* <div>{errors.start && <span className="text-sm text-red-500">{errors.start.message}</span>}</div> */}
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="w-auto h-16 font-bold text-xl uppercase rounded-lg bg-green-400 hover:bg-green-200 items-center justify-center relative">Submit</button>

                            </div>
                        </div>
                    </div>

                </form>
            </section>
        </React.Fragment>
    )
}

export default Form;

