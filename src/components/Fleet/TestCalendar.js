import React from 'react';
import {DateRangePicker} from 'rsuite';
import  'rsuite/dist/rsuite.min.css' ; 
import { startOfDay, endOfDay, addDays, subDays } from 'date-fns';
function TestCalendar(props) {
    const {
        allowedDays,
        allowedRange,
        combine,
        beforeToday
    } = DateRangePicker;
    const styles = { width: 150, display: 'block', marginBottom: 10 };
return (
    <>
    <div className="field">
    {/* <p>Date Time Range</p> */}
    {/* <DateRangePicker size="lg" placeholder="Please Select..." style={styles} format="EEE dd-MM-yyyy HH:mm:ss" /> */}
    <DateRangePicker {...props} name="test" placeholder="Please Select..."  style={styles} format="EEE dd-MM-yy HH:mm:ss"    //disabledDate={ beforeToday()}
      ranges={[
        {
          label: 'Yesterday',
          value: [startOfDay(addDays(new Date(), -1)), endOfDay(addDays(new Date(),-1))]
        },
        {
          label: 'Today',
          value: [new Date(), new Date()],
          
        },
        {
          label: 'Tomorrow',
          value: [startOfDay(addDays(new Date(), 1)), endOfDay(addDays(new Date(), 1))]
        },
        {
          label: 'Last 7 days',
          value: [startOfDay(subDays(new Date(), 6)), endOfDay(new Date())]
        },

        
      ]}

      
    />
    
    </div>
    </>
)                                                                                                               
}
export default TestCalendar;