import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    propTypes = {
        from: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    }

    handleDayClick = (day) => {
        const { from, to, onChange } = this.props;
        onChange(DateUtils.addDayToRange(day, { from, to }))
    }

    render() {
        const { from, to } = this.props
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        )
    }

}

export default DateRange