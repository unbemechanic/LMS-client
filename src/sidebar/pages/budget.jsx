import React, { useState } from "react";
import { teachers } from "./../../data/teachers";
import { TabContainer, TabButton } from "./teacher/teacherInfo";
import styled from "styled-components";
import { AddNewCategoryModal, AddNewExpenceModal } from "../../materials/leads/modal";
import './sidebar.css'
import { BudgetExpenseMenuDots } from "../../materials/popper";

const Budget = () => {
  const [currentTabs, setCurrentTabs] = useState("Income");
  function handleClick(e) {
    setCurrentTabs(e.target.name);
  }
  const teacherSalary = [
    {
      name: "Income",
      content: <Income />,
    },
    {
      name: "Category",
      content: <Category />,
    },
    {
      name: "Expenses",
      content: <Expence />,
    },
  ];
  return (
    <div style={{ paddingTop: "30px", marginLeft: "330px" }}>
      {/* <DateRangePicker/> */}
      <TabContainer $budget className="tab">
        {teacherSalary.map((tab, i) => (
          <TabButton
            className="buttons"
            key={i}
            name={tab.name}
            disabled={currentTabs === `${tab.name}`}
            onClick={handleClick}
          >
            {tab.name}
          </TabButton>
        ))}
      </TabContainer>
      
      <div className="teacher-content" style={{ width: "97%" }}>
        {teacherSalary.map((tab, i) => (
          <div key={i}>{currentTabs === `${tab.name}` && tab.content}</div>
        ))}
      </div>
    </div>
  );
};

export default Budget;

export const IncomeSelect = styled.select`
  background-color: inherit;
  color: var(--600, #2c2669);

  /* Bold/34px -> 42px */
  font-family: "Public Sans";
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px; /* 123.529% */
  border: none;
  &:focus {
    outline: none;
  }
`;
export const tableStyle = {
  width: "100%",
  innerHeight: "500px",
  backgroundColor: "white",
  borderRadius: "15px 0 0 0",
  marginTop: "50px",
  borderCollapse: "collapse",
};
export const theader = {
  height: "50px",
  backgroundColor: "#FAFAFB",
  width: "100%",
  // borderBottom:'1px solid black',
  boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
  fontFamily: "Public Sans",
  color: "#A098D5",
  fontSize: "12px",
};
export const trows = {
  innerHeight: 50,
  // backgroundColor:'red',
  outerHeight: "50px",
  display: "flex",
  alignItems: "center",
  height: "50px",
  gap: "20px",
  paddingLeft: "20px",
  color: "#2C2669",
  fontSize: "14px",
  fontWeight: "700",
  boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
  textAlign: "center",
};
export const tdata = {
  // display:'flex',
  justifyContent: "center",
  // backgroundColor:'red',
  textAlign: "center",
  color: "#6053B9",
  fontSize: "14px",
  fontFamily: "Public Sans",
  fontWeight: "400",
  height: "50px",
  boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
};
export const tdataContainer = {
  boxShadow: "0px -1px 0px 0px #EDF2F7 inset",
  cursor: "pointer",
  color: "#6053b9",
  fontFamily: "Public Sans",
  fontSize: "14px",
  fontWeight: "700",
};
export const IconWrapper = styled.div`
  border-radius: 6px;
  border: ${(props) => props.$edit ? '1px solid #2C2669':'1px solid #FF2E00'};
  display: inline-block;
  padding: 10px;
  margin-left: 10px;
`

const Income = () => {
  const data = teachers;
  return (
    <div>
      <IncomeSelect
        style={{ display: "inline-block" }}
        name="income"
        id="income"
      >
        <option value="total">Total Income</option>
        <option value="elementary">New elementary</option>
        <option value="test group">Test group</option>
      </IncomeSelect>
      <p
        style={{
          display: "inline-block",
          marginLeft: "50px",
          fontSize: "30px",
          fontWeight: "700",
          color: "#6053B9",
          marginBottom: "0px",
        }}
      >
        70.000 UZS
      </p>
      <table style={tableStyle}>
        <tr style={theader}>
          <th style={{ borderRadius: "15px 0 0 0 " }}>Full name</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Group</th>
          <th>Payer</th>
          <th>Payment method</th>
        </tr>
        {data.map((value) => {
          return (
            <tr style={tdataContainer} key={value.id}>
              <td style={trows}>{value.name}</td>
              <td style={tdata}>2023.03.01</td>
              <td style={tdata}>200.000 UZS</td>
              <td style={tdata}>New elementary</td>
              <td style={tdata}>Mark Jelio</td>
              <td style={tdata}>Cash</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
const Category = () => {
  const data = teachers;
  return (
    <div>
      <AddNewCategoryModal />
      <table style={{ ...tableStyle }}>
        <tr style={theader}>
          <th style={{ borderRadius: "15px 0 0 0 ", width: "90px" }}></th>
          <th style={{ textAlign: "start" }}>Category</th>
          <th></th>
        </tr>
        {data.map((value, index) => {
          return (
            <tr style={tdataContainer} key={value.id}>
              <td style={trows}>{index + 1}</td>
              <td style={{ ...tdata, textAlign: "start" }}>
                Office ishlari uchun
              </td>
              <td style={{...tdata}}>
                <IconWrapper $edit>
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 12"
                  fill="none"
                >5
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.10983 0.109835C9.25628 -0.0366117 9.49371 -0.0366117 9.64016 0.109835L11.8902 2.35984C12.0366 2.50628 12.0366 2.74372 11.8902 2.89016L4.39016 10.3902C4.35425 10.4261 4.31142 10.4543 4.26427 10.4732L0.514267 11.9732C0.374986 12.0289 0.215904 11.9962 0.109831 11.8902C0.00375716 11.7841 -0.0288956 11.625 0.0268169 11.4857L1.52682 7.73573C1.54568 7.68858 1.57392 7.64575 1.60983 7.60983L9.10983 0.109835ZM8.40533 1.875L10.125 3.59467L11.0947 2.625L9.375 0.90533L8.40533 1.875ZM9.59466 4.125L7.875 2.40533L3 7.28033V7.5H3.375C3.5821 7.5 3.75 7.66789 3.75 7.875V8.25H4.125C4.3321 8.25 4.5 8.41789 4.5 8.625V9H4.71967L9.59466 4.125ZM2.27373 8.00659L2.19459 8.08574L1.04814 10.9519L3.91426 9.80541L3.9934 9.72626C3.85121 9.67297 3.75 9.5358 3.75 9.375V9H3.375C3.16789 9 3 8.83211 3 8.625V8.25H2.625C2.46419 8.25 2.32703 8.14879 2.27373 8.00659Z"
                    fill="black"
                  />
                </svg>
                </IconWrapper>
                <IconWrapper>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 12"
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
          );
        })}
      </table>
    </div>
  );
};
const Expence = () => {
  const data = teachers;
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      <AddNewExpenceModal />
      <IncomeSelect
        style={{ display: "inline-block" }}
        name="income"
        id="income"
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="total" className={selectedValue === 'total' ? 'selected-option' : ''}>Total Expense</option>
        <option value="office" className={selectedValue === 'office' ? 'selected-option' : ''}>Office</option>
        <option value="others" className={selectedValue === 'others' ? 'selected-option' : ''}>Others</option>
      </IncomeSelect>
      <p
        style={{
          display: "inline-block",
          marginLeft: "50px",
          fontSize: "30px",
          fontWeight: "700",
          color: "#6053B9",
          marginBottom: "0px",
        }}
      >
        900.000 UZS
      </p>
      <table style={tableStyle}>
        <tr style={theader}>
          <th style={{ borderRadius: "15px 0 0 0 " }}>Date</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Description</th>
          <th>Payer</th>
          <th>Payment method</th>
          <td></td>
        </tr>
        {data.map((value) => {
          return (
            <tr style={tdataContainer} key={value.id}>
              <td style={tdata}>2023.03.01</td>
              <td style={tdata}>200.000 UZS</td>
              <td style={tdata}>Office expense</td>
              <td style={tdata}>Materials</td>
              <td style={tdata}>Mark Jelio</td>
              <td style={tdata}>Cash</td>
              <td style={tdata}><BudgetExpenseMenuDots/></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
