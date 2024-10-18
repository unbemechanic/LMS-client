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

const Branches = () => {
  const [active, setActive] = useState(true);
  const handleActive = () => {
    if(!active){
        setActive(true)
    }else{setActive(false)}
  };
  return (
    <div>
      <AddNewBranchModal />
      <table style={{ ...tableStyle, borderRadius: "15px", width: "98%" }}>
        <tr style={{ ...theader }}>
          <th style={{ borderRadius: "15px 0 0 0 " }}></th>
          <th style={{ textAlign: "start" }}>Branch name</th>
          <th style={thead}>Status</th>
          <th style={thead}>Balance</th>
          <th>More</th>
          <th style={{ borderRadius: " 0 15px 0 0 " }}></th>
        </tr>
        <tr style={tdataContainer}>
          <td style={{ ...tdata, width: "80px" }}>1</td>
          <td style={{ ...tdata, width: "40%", textAlign: "start" }}>Angor</td>
          <td>{active ? "Active" : "Archived"}</td>
          <td>
            <Balance>1,200,000 UZS</Balance>
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
            <IconWrapper $edit>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 15 12"
                fill="none"
              >
                5
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.10983 0.109835C9.25628 -0.0366117 9.49371 -0.0366117 9.64016 0.109835L11.8902 2.35984C12.0366 2.50628 12.0366 2.74372 11.8902 2.89016L4.39016 10.3902C4.35425 10.4261 4.31142 10.4543 4.26427 10.4732L0.514267 11.9732C0.374986 12.0289 0.215904 11.9962 0.109831 11.8902C0.00375716 11.7841 -0.0288956 11.625 0.0268169 11.4857L1.52682 7.73573C1.54568 7.68858 1.57392 7.64575 1.60983 7.60983L9.10983 0.109835ZM8.40533 1.875L10.125 3.59467L11.0947 2.625L9.375 0.90533L8.40533 1.875ZM9.59466 4.125L7.875 2.40533L3 7.28033V7.5H3.375C3.5821 7.5 3.75 7.66789 3.75 7.875V8.25H4.125C4.3321 8.25 4.5 8.41789 4.5 8.625V9H4.71967L9.59466 4.125ZM2.27373 8.00659L2.19459 8.08574L1.04814 10.9519L3.91426 9.80541L3.9934 9.72626C3.85121 9.67297 3.75 9.5358 3.75 9.375V9H3.375C3.16789 9 3 8.83211 3 8.625V8.25H2.625C2.46419 8.25 2.32703 8.14879 2.27373 8.00659Z"
                  fill="black"
                />
              </svg>
            </IconWrapper>
            {active ? (
              <IconWrapper onClick={handleActive} style={{ border: "1px solid #2C2669" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M6 5H8V19H6V5ZM16 5H18V19H16V5Z" fill="#2C2669" />
                  <path
                    d="M6 5H8V19H6V5ZM16 5H18V19H16V5Z"
                    fill="black"
                    fill-opacity="0.2"
                  />
                </svg>
              </IconWrapper>
            ) : (
              <IconWrapper onClick={handleActive} style={{ border: "1px solid #2C2669" }}>
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
            )}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Branches;

const thead = {
  textAlign: "start",
  width: "200px",
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
