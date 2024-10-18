import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { teachers } from "../../../data/teachers";
import {
  ClassStat,
  IndividualPageIconAttendance,
} from "../../../materials/popper";
import SelectComponent from "../../../materials/selectAttendance";
import DateRangeIcon from "@mui/icons-material/DateRange";
import MonthPicker from "../../../materials/DatePicker";
// import Example from '../../../materials/dateExample';
// import DatePickerViews from '../../../materials/DatePicker';

const Price = () => {
  const fakeData = teachers;
  const [presence, setPresence] = useState();
  const [lessonStat, setLessonStat] = useState(false);
  const month = new Date().getMonth();
  const currentMonthName = new Intl.DateTimeFormat("en-US", {
    month: "short",
  }).format(new Date());

  useEffect(() => {
    console.log(currentMonthName, "current month name");
  });

  const handleClassStat = () => {
    setLessonStat(!lessonStat);
  };

  return (
    <TableContainer>
      <FilterWrapper>
        <DateTable>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M3.59942 10.5003C3.83965 9.82063 4.48788 9.33366 5.24984 9.33366C6.01179 9.33366 6.66005 9.82063 6.90026 10.5003H12.8332V11.667H6.90026C6.66005 12.3467 6.01179 12.8337 5.24984 12.8337C4.48788 12.8337 3.83965 12.3467 3.59942 11.667H1.1665V10.5003H3.59942ZM7.09941 6.41699C7.33963 5.7373 7.98789 5.25033 8.74984 5.25033C9.51179 5.25033 10.16 5.7373 10.4003 6.41699H12.8332V7.58366H10.4003C10.16 8.26336 9.51179 8.75033 8.74984 8.75033C7.98789 8.75033 7.33963 8.26336 7.09941 7.58366H1.1665V6.41699H7.09941ZM3.59942 2.33366C3.83965 1.65396 4.48788 1.16699 5.24984 1.16699C6.01179 1.16699 6.66005 1.65396 6.90026 2.33366H12.8332V3.50033H6.90026C6.66005 4.18002 6.01179 4.66699 5.24984 4.66699C4.48788 4.66699 3.83965 4.18002 3.59942 3.50033H1.1665V2.33366H3.59942ZM5.24984 3.50033C5.572 3.50033 5.83317 3.23916 5.83317 2.91699C5.83317 2.59483 5.572 2.33366 5.24984 2.33366C4.92767 2.33366 4.6665 2.59483 4.6665 2.91699C4.6665 3.23916 4.92767 3.50033 5.24984 3.50033ZM8.74984 7.58366C9.07201 7.58366 9.33317 7.3225 9.33317 7.00033C9.33317 6.67815 9.07201 6.41699 8.74984 6.41699C8.42766 6.41699 8.1665 6.67815 8.1665 7.00033C8.1665 7.3225 8.42766 7.58366 8.74984 7.58366ZM5.24984 11.667C5.572 11.667 5.83317 11.4058 5.83317 11.0837C5.83317 10.7615 5.572 10.5003 5.24984 10.5003C4.92767 10.5003 4.6665 10.7615 4.6665 11.0837C4.6665 11.4058 4.92767 11.667 5.24984 11.667Z"
              fill="#2C2669"
            />
            <path
              d="M3.59942 10.5003C3.83965 9.82063 4.48788 9.33366 5.24984 9.33366C6.01179 9.33366 6.66005 9.82063 6.90026 10.5003H12.8332V11.667H6.90026C6.66005 12.3467 6.01179 12.8337 5.24984 12.8337C4.48788 12.8337 3.83965 12.3467 3.59942 11.667H1.1665V10.5003H3.59942ZM7.09941 6.41699C7.33963 5.7373 7.98789 5.25033 8.74984 5.25033C9.51179 5.25033 10.16 5.7373 10.4003 6.41699H12.8332V7.58366H10.4003C10.16 8.26336 9.51179 8.75033 8.74984 8.75033C7.98789 8.75033 7.33963 8.26336 7.09941 7.58366H1.1665V6.41699H7.09941ZM3.59942 2.33366C3.83965 1.65396 4.48788 1.16699 5.24984 1.16699C6.01179 1.16699 6.66005 1.65396 6.90026 2.33366H12.8332V3.50033H6.90026C6.66005 4.18002 6.01179 4.66699 5.24984 4.66699C4.48788 4.66699 3.83965 4.18002 3.59942 3.50033H1.1665V2.33366H3.59942ZM5.24984 3.50033C5.572 3.50033 5.83317 3.23916 5.83317 2.91699C5.83317 2.59483 5.572 2.33366 5.24984 2.33366C4.92767 2.33366 4.6665 2.59483 4.6665 2.91699C4.6665 3.23916 4.92767 3.50033 5.24984 3.50033ZM8.74984 7.58366C9.07201 7.58366 9.33317 7.3225 9.33317 7.00033C9.33317 6.67815 9.07201 6.41699 8.74984 6.41699C8.42766 6.41699 8.1665 6.67815 8.1665 7.00033C8.1665 7.3225 8.42766 7.58366 8.74984 7.58366ZM5.24984 11.667C5.572 11.667 5.83317 11.4058 5.83317 11.0837C5.83317 10.7615 5.572 10.5003 5.24984 10.5003C4.92767 10.5003 4.6665 10.7615 4.6665 11.0837C4.6665 11.4058 4.92767 11.667 5.24984 11.667Z"
              fill="black"
              fill-opacity="0.2"
            />
          </svg>
          Show all
        </DateTable>
      </FilterWrapper>
      <TableContent>
        <TR>
          <Th>FULL NAMES</Th>
          <Th>PHONE NUMBER</Th>
          <Th>INDIVIDUAL DISCOUNT</Th>
          <Th>COMMENT</Th>
        </TR>
        {fakeData.map((value, index) => {
          return (
            <Tr key={index}>
              <Th style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: "15px" }}>
                  {index + 1}
                </div>
                <NameSection>
                  {value.name}
                  <StatusButton>Status</StatusButton>
                </NameSection>
              </Th>
              <Th>
                99 2345676
              </Th>
              <Th style={{gap:'10px'}}>
               <PriceDiv>100.000</PriceDiv>
               <DiscountPrice>+50%</DiscountPrice>
              </Th>
              <Th>
                Because he mastered it
              </Th>
            </Tr>
          );
        })}
      </TableContent>
    </TableContainer>
  );
};

export default Price;

export const PriceDiv = styled.div`
  border-radius: 4px;
  background: var(--100, #EFEEF8);
  display: flex;
padding: 4px 12px;
justify-content: center;
align-items: center;
gap: 10px;
color: var(--500, #6053B9);
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 16px; /* 133.333% */
`
export const DiscountPrice = styled.div`
  display: flex;
padding: 4px 12px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 4px;
background: var(--500, #6053B9);
color: var(--100, #EFEEF8);
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 16px; /* 133.333% */
`
export const TableContainer = styled.div`
  background-color: white;
  width: 100%;
  min-height: 300px;
  border-radius: 15px;
  box-shadow: 0px 3px 8px 0px rgba(50, 50, 71, 0.05),
    0px 0px 1px 0px rgba(12, 26, 75, 0.24);
  overflow-y: scroll;
  height: 600px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const TableContent = styled.table`
  width: 100%;
`;
export const Th = styled.th`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  /* &:hover{
    background: var(--100, #EFEEF8);
    box-shadow: 0px -1px 0px 0px #EDF2F7 inset;
    cursor: pointer;
    box-sizing: border-box;
  } */
`;
export const TR = styled.tr`
  display: grid;
  grid-template-columns:  1fr 1fr 1fr 1fr;
  align-items: flex-start;
  gap: 4px;
  background: var(--Table-Head-Background, #fafafb);
  box-shadow: 0px -1px 0px 0px #edf2f7 inset;
  height: 52px;
  position: sticky;
  top: 60px;
  z-index: 98;

  //typography
  color: var(--400, #a098d5);
  font-family: "Public Sans";
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 160% */
  letter-spacing: 0.6px;
  text-transform: uppercase;
  justify-content: center;
`;
export const Tr = styled.tr`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: flex-start;
  gap: 4px;
  background: white;
  box-shadow: 0px -1px 0px 0px #edf2f7 inset;
  height: 52px;
  padding-bottom: 5px;

  //typography
  color: #2c2669;
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 160% */
  justify-content: center;
`;
export const FilterWrapper = styled.div`
  display: flex;
  height: 60px;
  /* padding-top: 60px; */
  justify-content: left;
  gap: 20px;
  padding-left: 50px;
  align-items: center;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 99;
`;
export const NameSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;
export const StatusButton = styled.button`
  width: 100px;
  border: none;
  text-transform: uppercase;
  border-radius: 4px;
  background: var(--100, #efeef8);
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--500, #6053b9);
  cursor: pointer;

  /* Regular/12px -> 16px */
  font-family: "Public Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
`;

export const X = styled.div`
  color: red;
`;
export const DateTable = styled.div`
  width: 200px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 99px;
  border: 1px solid var(--600, #2c2669);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
  gap: 20px;
`;
