import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS styles
import styled from 'styled-components';
import './mui.css'

const MonthPicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <DateStyle
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MMMM,yyyy" // Display format for month and year
        showMonthYearPicker // Show only month and year
      />
    </div>
  );
};

export default MonthPicker;

const DateStyle = styled(DatePicker)`
    border: none;
    width: 97%;
    height: 28px;
    flex-shrink: 0;
    border-radius: 99px;
    padding: 10px;
    padding-left: 20px;
    box-sizing: border-box;
    text-align: center;
    color: var(--600, #2C2669);
    /* text-align: right; */
    font-family: "Public Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 133.333% */
    &:hover{
        outline: none;
    }
    &:focus{
        outline: none;
    }
`