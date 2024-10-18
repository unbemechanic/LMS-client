import React, { useState } from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  display: flex;
`;

const Select = styled.select`
 width: 36px;
    height: 24px;
    -webkit-appearance: none; /* Hide the default arrow icon */
    appearance: none;
    border-radius: 5px;
    display: flex;
    text-align: center;
    outline: none;
    /* border: none; */
    cursor: pointer;
    color: #ffffff;
    color: var(--50, var(--Color-7, #FFF));
text-align: center;
font-family: Inter;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: 16px; /* 228.571% */
letter-spacing: 0.42px;
`;

const Present = styled.option`
  background-color: #0AB711;
`;

const Absent = styled.option`
  background-color: #B7140A;
`;

const Reason = styled.option`
  background-color: #E5B334;
`;

const SelectComponent = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    // Additional logic for handling the selected value
  };

  return (
    <SelectWrapper>
      <Select 
      style={{backgroundColor: selectedValue === 'present' ? '#0AB711': selectedValue === 'absent' ? '#B7140A': selectedValue === 'reason' ? '#E5B334':'', border: selectedValue !== '' ?"none":''}}
      onChange={handleSelectChange}>
        <option value=""></option>
        <Present isSelected={selectedValue === 'present'} value="present">
          Pres
        </Present>
        <Absent isSelected={selectedValue === 'absent'} value="absent">
          Abs
        </Absent>
        <Reason value="reason">Reas</Reason>
        {/* Add more reason options as needed */}
      </Select>
    </SelectWrapper>
  );
};

export default SelectComponent;
