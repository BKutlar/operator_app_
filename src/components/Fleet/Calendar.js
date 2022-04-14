import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Page, Input, Popup, Select, Datepicker, Button, formatDate, setOptions, options, localeFr } from '@mobiscroll/react';
setOptions({
    locale: localeFr,
    theme: 'windows',
    themeVariant: 'light'
});

const startDate = '2022-04-11T00:00';
const endDate = '2022-04-17T00:00';
const now = new Date();
const day = now.getDay();
const monday = now.getDate() - day + (day === 0 ? -6 : 1);

const respSelect = {
    xsmall: {
        touchUi: true
    },
    small: {
        touchUi: false
    }
};

const myData = [{
    value: 'custom',
    text: 'Custom'
}, {
    value: 'today',
    text: 'Today'
}, {
    value: 'yesterday',
    text: 'Yesterday'
}, {
    value: 'last-week',
    text: 'Last week'
}, {
    value: 'last-month',
    text: 'Last month'
}, {
    value: 'last-7-days',
    text: 'Last 7 days'
}, {
    value: 'last-30-days',
    text: 'Last 30 days'
}, {
    value: 'only-monday',
    text: 'Only Monday'
}

];
function App({ props }) {
    //     const [openPicker, setOpenPicker] = React.useState(false);
    //     const [date, setDate] = React.useState(new Date());
    //     const [myWeek, setMyWeek] = React.useState(null);
    //     var day = date.getDay();
    //     const pickerChage= (ev) => {
    //         setMyWeek(ev.value);
    //     }
    //     const show = () => {
    //         setOpenPicker(true);
    //     };

    //     const onClose = () => {
    //         setOpenPicker(false);
    //     };

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
    // const [end, setEnd] = React.useState(null);
    // const now = new Date();
    // const [invalid, setInvalid] = React.useState([
    //     {
    //         recurring: {
    //             repeat: 'weekly',
    //             // weekStart: 'MO',
    //             // interval: 1,
    //             weekDays: 'TU,WE,TH,FR,SA,SU',

    //         },
    //     },
    //     new Date(now.getFullYear(), now.getMonth())
    // ]);
    const [isOpen, setOpen] = React.useState(false);
    const [start, startRef] = React.useState(null);
    const [end, endRef] = React.useState(null);
    const [selected, setSelected] = React.useState('custom');
    const [selectedDate, setSelectedDate] = React.useState([startDate, endDate]);
    const [inputValue, setInputValue] = React.useState();
    const [disabledInput, setDisabledInput] = React.useState(false);
    const invalid = React.useState([
        {
            recurring: {
                repeat: 'weakly',
                weekDays: 'TU,WE,TH,FR,SA,SU'
            },
        },

        new Date(now.getFullYear(), now.getMonth())
    ]);
    const respPopup = {
        xsmall: {
            display: 'bottom',
            touchUi: true,
            buttons: [{
                text: 'Apply',
                handler: () => {
                    const date = selectedDate;

                    changeInputValue(date[0], date[1] || date[0]);
                    setOpen(false);
                }
            },
                'cancel']
        },
        custom: {
            breakpoint: 559,
            buttons: [],
            display: 'anchored',
            anchor: document.querySelector('.date-filter-input'),
            anchorAlign: 'start',
            touchUi: false,
            scrollLock: false,
            showArrow: false,
            maxWidth: 920
        }
    };

    const inputClick = React.useCallback(() => {
        setOpen(true);
    }, []);

    const changeInputValue = React.useCallback((start, end) => {
        const locale = options.locale || {};
        const dateFormat = locale.dateFormat || 'DD/MM/YYYY';

        setInputValue(formatDate(dateFormat, new Date(start)) + ' - ' + formatDate(dateFormat, new Date(end)));
    }, []);

    const applyClick = React.useCallback(() => {
        const date = selectedDate;

        changeInputValue(date[0], date[1] || date[0]);
        setOpen(false);
    }, [selectedDate, changeInputValue]);

    const cancelClick = React.useCallback(() => {
        setOpen(false);
    }, []);

    const onChange = React.useCallback((event) => {
        const s = event.value;

        if (s === 'custom') {
            setDisabledInput(false);
        } else {
            setDisabledInput(true);

            switch (s) {
                case 'today':
                    setSelectedDate(['2022-04-11T00:00', '2022-04-11T00:00']);
                    break;
                case 'yesterday':
                    setSelectedDate(['2022-04-10T00:00', '2022-04-10T00:00']);
                    break;
                case 'last-week':
                    setSelectedDate([new Date(now.getFullYear(), now.getMonth(), monday - 7), new Date(now.getFullYear(), now.getMonth(), monday - 1)]);
                    break;
                case 'last-month':
                    setSelectedDate(['2022-03-01T00:00', '2022-03-31T00:00']);
                    break;
                case 'last-7-days':
                    setSelectedDate(['2022-04-05T00:00', '2022-04-11T00:00']);
                    break;
                case 'last-30-days':
                    setSelectedDate(['2022-03-13T00:00', '2022-04-11T00:00']);
                    break;
                case 'only-monday':
                    setSelectedDate([
                        new Date(now.getFullYear(), now.getMonth(), monday + 7)
            ]);
                    break;
                default:
                    break;
            }
        }
        setSelected(s);
    }, []);

    const onDateChange = React.useCallback((ev) => {
        const date = ev.value;

        setDisabledInput(false);
        setSelected('custom');
        setSelectedDate(date);
    }, []);

    const onClose = React.useCallback(() => {
        setOpen(false);
    }, []);

    React.useEffect(() => {
        changeInputValue(startDate, endDate, 'DD/MM/YYYY');
    });


    return (

        <>
            {/* <Page>
        {/* <Button onClick={setInvalid}>Click */}
            {/* <Datepicker
    controls={['calendar', 'timegrid']}
    select="range"
    selectRange=""
    touchUi={true}
    locale={localeFr}
    dateFormat="DDD D MMM, YYYY"
    timeForma="H:mm"
    dateWheels="|DDD D MMM, YYYY|"
    inputComponent="input"
    inputProps={boxInputProps}
    // boxInputProps={boxInputProps}
    invalid={invalid}
    inRangeInvalid={true}
    valid={[

    ]}
    
  /> */}
            {/* </Button>   
     

  
  </Page> */}

            <Page>
                <div className="mbsc-form-group">
                    <Input inputStyle="box" onClick={inputClick} defaultValue={inputValue} className="date-filter-input" readOnly></Input>
                </div>
                <Popup
                    isOpen={isOpen}
                    onClose={onClose}
                    responsive={respPopup}
                    cssClass="demo-date-filtering-popup"
                >
                    <div className="mbsc-grid mbsc-no-padding">
                        <div className="mbsc-row">
                            <div className="mbsc-col-sm-4 mbsc-push-sm-8 demo-date-filtering-dates">
                                <div className="demo-date-filtering-inputs">
                                    <Select
                                        data={myData}
                                        label="Date range"
                                        inputProps={{
                                            labelStyle: 'stacked',
                                            inputStyle: 'box'
                                        }}
                                        responsive={respSelect}
                                        value={selected}
                                        onChange={onChange}
                                    />
                                    <Input
                                        ref={startRef}
                                        disabled={disabledInput}
                                        label="Start"
                                        labelStyle="stacked"
                                        inputStyle="box"
                                        className="demo-date-filtering-range-input"
                                        placeholder="Please Select...">
                                    </Input>
                                    <Input
                                        ref={endRef}
                                        disabled={disabledInput}
                                        label="End"
                                        labelStyle="stacked"
                                        inputStyle="box"
                                        className="demo-date-filtering-range-input"
                                        placeholder="Please Select...">
                                    </Input>
                                </div>
                                <div className="demo-date-filtering-desktop-buttons mbsc-button-group-justified">
                                    <Button className="apply-button" onClick={applyClick}>Apply</Button>
                                    <Button className="cancel-button" onClick={cancelClick}>Cancel</Button>
                                </div>
                            </div>
                            <div className="mbsc-col-sm-8 mbsc-pull-sm-4">
                                {/* <Datepicker
                                    controls={['calendar']}
                                    select="range"
                                    display="inline"
                                    showRangeLabels={false}
                                    pages="auto"
                                    startInput={start}
                                    endInput={end}
                                    returnFormat="iso8601"
                                    showOnClick={false}
                                    showOnFocus={false}
                                    value={selectedDate}
                                    onChange={onDateChange}>
                                </Datepicker> */}

                                <Datepicker
                                    controls={['calendar']}
                                    select="range"
                                    // selectRange=""
                                    touchUi={false}
                                    locale={localeFr}
                                    // dateFormat="DDD D MMM, YYYY"
                                    // timeForma="H:mm"
                                    // dateWheels="|DDD D MMM, YYYY|"
                                    inputComponent="input"
                                    // inputProps={boxInputProps}
                                    // boxInputProps={boxInputProps}
                                    // invalid={invalid}                                   
                                    display="inline"
                                    showRangeLabels={false}
                                    pages="auto"
                                    startInput={start}
                                    endInput={end}
                                    returnFormat="windows"
                                    showOnClick={false}
                                    showOnFocus={false}
                                    value={selectedDate}
                                    onChange={onDateChange} />
                            </div>
                        </div>
                    </div>
                </Popup>
            </Page>

        </>
    );
}


export default App;