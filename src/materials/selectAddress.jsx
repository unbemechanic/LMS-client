import * as React from 'react';
import styled from 'styled-components';

//style
const Select = styled.select`
  border: none;
  appearance: none;
  /* background-color: red; */
  padding: 10px;
  width: 200px;
  cursor: pointer;
  color: #6053B9;
  font-weight: 500;
  font-family: "Public Sans";
  font-size: 14px;
  &:focus{
    outline: none;
    border: none;
  }
`
const Options = styled.option`
  /* background-color: #00aaff; */
  padding: 10px;
  width: 200px;
  padding: 10px;
  cursor: pointer;
  &:hover{
    background-color: #E8E8E8;
  }

  &:focus{
    outline: none;
    border: none;
  }
`


export default function SelectAddress() {
  

  return (
    <div>
      <Select className='selection' name="" id="">
        <Options className='options' value="Andijan">Andijan</Options>
        <option value="Bukhara">Bukhara</option>
        <option value="Jizzah">Jizzah</option>
        <option value="Qashqadaryo">Qashqadaryo</option>
        <option value="Namangan">Namangan</option>
        <option value="Karakalpastan">Karakalpastan</option>
        <option value="Samarqand">Samarqand</option>
        <option value="Surkhandarya">Surkhandarya</option>
        <option value="Sirdaryo">Sirdaryo</option>
        <option value="Toshkent">Toshkent</option>
        <option value="Farghona">Farghona</option>
        <option value="Kharazm">Kharazm</option>
      </Select>
    </div>
  );
}
