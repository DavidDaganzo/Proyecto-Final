import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import './BookingCalendar.css'
import bookingService from "../../services/Booking.service";
import { useParams } from "react-router-dom";





const BookingCalendar = ({ state, setState }) => {
    const [bookedDates, setBookedDates] = useState([])
    const { property_id } = useParams()
    const getBookedDate = () => {
        bookingService
            .propertyBooking(property_id)
            .then(({ data }) => {
                const startDate = new Date(data[0].startDate).getTime()
                const endDate = new Date(data[0].endDate).getTime()





                setBookedDates([...bookedDates, startDate, endDate])
                console.log('actualizacion del estado weeeeeeeeeeeeeeeeeeeeeeee', bookedDates)

            })
            .catch(err => console.error(err))
    }
    useEffect(() => {
        getBookedDate()
    }, [])

    return (
        <DateRangePicker
            onChange={item => setState([item.selection])}
            showSelectionPreview={true}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            months={1}
            disabledDates={[new Date('2022-12-12'), new Date('2022-12-14')]}
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