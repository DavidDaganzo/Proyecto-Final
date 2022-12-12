import React, { useState } from "react";
import PropTypes from "prop-types";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import './BookingCalendar.css'

const BookingCalendar = ({ onChange, state, setState }) => {


    // const handleOnChange = (ranges) => {
    //     const { selection } = ranges;
    //     onChange(selection);
    //     setState([selection]);
    // };

    return (
        <DateRangePicker
            onChange={item => setState([item.selection])}
            showSelectionPreview={true}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={state}
            direction="horizontal"
            preventSnapRefocus={true}
            calendarFocus="backwards"
        />
    );
};

BookingCalendar.propTypes = {
    onChange: PropTypes.func
};


export default BookingCalendar;