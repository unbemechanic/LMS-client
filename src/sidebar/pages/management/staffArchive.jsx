import React, { useState } from "react";
import {
  IconWrapper,
  tableStyle,
  tdata,
  tdataContainer,
  theader,
} from "../budget";
import { AddNewBranchModal } from "../../../materials/leads/modal";
import styled from "styled-components";
import { colors } from "@mui/material";

const StaffArchive = () => {
  return (
    <div>
      {/* <AddNewBranchModal /> */}
      <table style={{ ...tableStyle, borderRadius: "15px", width: "98%" }}>
        <tr style={{ ...theader }}>
          <th style={{ borderRadius: "15px 0 0 0 " }}></th>
          <th style={{ textAlign: "start" }}>Name</th>
          <th style={thead}>Phone number</th>
          <th style={thead}>Role</th>
          <th>Action</th>
          <th style={{ borderRadius: " 0 15px 0 0 " }}></th>
        </tr>
        <tr style={tdataContainer}>
          <td style={{ ...tdata, width: "80px" }}>1</td>
          <td style={{ ...tdata, textAlign: "start", ...groupName }}>Angor group</td>
          <td>Basic English</td>
          <td>
            Teacher
          </td>
          <td
            style={{
              ...tdata,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "30px",
            }}
          >
            <IconWrapper style={{ border: "1px solid #2C2669" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.99998 2.66732C6.16761 2.66732 4.55003 3.59149 3.5896 5.00065H5.33331V6.33398H1.33331V2.33398H2.66665V4.00022C3.88252 2.38176 5.81841 1.33398 7.99998 1.33398C11.6818 1.33398 14.6666 4.31875 14.6666 8.00065H13.3333C13.3333 5.05513 10.9455 2.66732 7.99998 2.66732ZM2.66665 8.00065C2.66665 10.9462 5.05446 13.334 7.99998 13.334C9.83238 13.334 11.4499 12.4098 12.4104 11.0007H10.6666V9.66732H14.6666V13.6673H13.3333V12.0011C12.1174 13.6195 10.1816 14.6673 7.99998 14.6673C4.31808 14.6673 1.33331 11.6825 1.33331 8.00065H2.66665Z"
                  fill="#2C2669"
                />
                <path
                  d="M7.99998 2.66732C6.16761 2.66732 4.55003 3.59149 3.5896 5.00065H5.33331V6.33398H1.33331V2.33398H2.66665V4.00022C3.88252 2.38176 5.81841 1.33398 7.99998 1.33398C11.6818 1.33398 14.6666 4.31875 14.6666 8.00065H13.3333C13.3333 5.05513 10.9455 2.66732 7.99998 2.66732ZM2.66665 8.00065C2.66665 10.9462 5.05446 13.334 7.99998 13.334C9.83238 13.334 11.4499 12.4098 12.4104 11.0007H10.6666V9.66732H14.6666V13.6673H13.3333V12.0011C12.1174 13.6195 10.1816 14.6673 7.99998 14.6673C4.31808 14.6673 1.33331 11.6825 1.33331 8.00065H2.66665Z"
                  fill="black"
                  fill-opacity="0.2"
                />
              </svg>
            </IconWrapper>
            <IconWrapper>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M3.98077 4.4C4.20381 4.4 4.38462 4.57909 4.38462 4.8V9.6C4.38461 9.82091 4.20381 10 3.98077 10C3.75773 10 3.57692 9.82091 3.57692 9.6V4.8C3.57692 4.57909 3.75773 4.4 3.98077 4.4Z"
                  fill="#EE0707"
                />
                <path
                  d="M6 4.4C6.22304 4.4 6.40385 4.57909 6.40385 4.8V9.6C6.40385 9.82091 6.22304 10 6 10C5.77696 10 5.59615 9.82091 5.59615 9.6V4.8C5.59615 4.57909 5.77696 4.4 6 4.4Z"
                  fill="#EE0707"
                />
                <path
                  d="M8.42308 4.8C8.42308 4.57909 8.24227 4.4 8.01923 4.4C7.79619 4.4 7.61538 4.57909 7.61538 4.8V9.6C7.61538 9.82091 7.79619 10 8.01923 10C8.24227 10 8.42308 9.82091 8.42308 9.6V4.8Z"
                  fill="#EE0707"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.25 2.4C11.25 2.84183 10.8884 3.2 10.4423 3.2H10.0385V10.4C10.0385 11.2837 9.31523 12 8.42308 12H3.57692C2.68477 12 1.96154 11.2837 1.96154 10.4V3.2H1.55769C1.11162 3.2 0.75 2.84183 0.75 2.4V1.6C0.75 1.15817 1.11162 0.8 1.55769 0.8H4.38462C4.38462 0.358172 4.74623 0 5.19231 0H6.80769C7.25377 0 7.61538 0.358172 7.61538 0.8H10.4423C10.8884 0.8 11.25 1.15817 11.25 1.6V2.4ZM2.86457 3.2L2.76923 3.24721V10.4C2.76923 10.8418 3.13085 11.2 3.57692 11.2H8.42308C8.86915 11.2 9.23077 10.8418 9.23077 10.4V3.24721L9.13543 3.2H2.86457ZM1.55769 2.4V1.6H10.4423V2.4H1.55769Z"
                  fill="#EE0707"
                />
              </svg>
            </IconWrapper>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default StaffArchive;

const thead = {
  textAlign: "start",
};

const Balance = styled.div`
  background-color: #2c2669;
  display: flex;
  height: 22px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: 70%;
  color: white;
`;
const groupName = {
    color:'#2C2669',
    fontSize:'14px',
    fontWeight:'700',
    
}