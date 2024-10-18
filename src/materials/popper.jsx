import * as React from "react";

import { css } from "@mui/system";
import { MenuIcon } from "../sidebar/pages/teacher/teaches";
import Edit from "../svg/edit";
import MessageIcon from "../svg/message";
import DeleteIcon from "../svg/delete";
import styled from "styled-components";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import InfoIcon from "../svg/attention";
import { SendSmsModal } from "./leads/modal";
import { Popper } from "@mui/material";
import Sms from "../sidebar/components/message";

//styles
export const PopperSec = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  gap: 10px;
  color: var(--500, #6053b9);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  display: ${(props) => (props.$contactInfo ? "flex" : "")};
  justify-content: ${(props) => (props.$contactInfo ? "space-between" : "")};
  align-items: ${(props) => (props.$contactInfo ? "center" : "")};
  padding: ${(props) => (props.$contactInfo ? "0" : "")};
  cursor: pointer;
`;
const PopperCover = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 130px;
  box-shadow: 0px 0px 10px 2px rgba(66, 84, 102, 0.2);
`;
const PopperCovers = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 130px;
  box-shadow: 0px 0px 10px 2px rgba(66, 84, 102, 0.2);
  position: ${(props) => props.$budget ? '':'absolute'};
  left: 90px;
  width: ${(props) => (props.$contactInfo ? "340px" : "")};
  /* height: ${(props) => (props.$contactInfo ? "150px" : "")}; */
  padding: ${(props) => (props.$contactInfo ? "20px" : "")};
  box-sizing: ${(props) => (props.$contactInfo ? "border-box" : "")};
`;

export default function MenuDots() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClickOutside = (event) => {
    if (anchorRef.current && !anchorRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <div
        aria-describedby={id}
        type="button"
        ref={anchorRef}
        onClick={handleClick}
      >
        <MenuIcon fontSize="large" />
      </div>
      <Popper id={id} open={open} anchorEl={anchorRef.current}>
        <PopperCover>
          <PopperSec>
            <Edit /> Edit
          </PopperSec>
          <PopperSec>
            <MessageIcon />
            SMS
          </PopperSec>
          <PopperSec>
            <DeleteIcon />
            Delete
          </PopperSec>
        </PopperCover>
      </Popper>
    </div>
  );
}
export function LeadMenuDots() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
    console.log("horizontal is clicked");
  };

  const handleClickOutside = (event) => {
    if (anchorRef.current && !anchorRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <div
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        ref={anchorRef}
      >
        <MenuIcon $leads fontSize="small" fill="#BFBAE3" />
      </div>
      <Popper id={id} open={open} anchorEl={anchorRef.current}>
        <PopperCover>
          <PopperSec>
            <Edit /> Edit
          </PopperSec>
          <PopperSec>
            <MessageIcon />
            <SendSmsModal />
          </PopperSec>
          <PopperSec>
            <DeleteIcon />
            Delete
          </PopperSec>
          <PopperSec>+ Add to Modal</PopperSec>
        </PopperCover>
      </Popper>
    </div>
  );
}
export function StudentsMenuDots() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
    console.log("horizontal is clicked");
  };

  const handleClickOutside = (event) => {
    if (anchorRef.current && !anchorRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <div
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        ref={anchorRef}
      >
        <MenuIcon $leads fontSize="small" fill="#BFBAE3" />
      </div>
      <Popper id={id} open={open} anchorEl={anchorRef.current}>
        <PopperCover>
          <PopperSec>
            <MessageIcon />
            <SendSmsModal />
          </PopperSec>
          <PopperSec>+ Add Payment</PopperSec>
        </PopperCover>
      </Popper>
    </div>
  );
}
export function StudentsCommentMenuDots() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
    console.log("dot is clicked - vertical");
  };

  const handleClickOutside = (event) => {
    if (anchorRef.current && !anchorRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const id = open ? "simple-popper" : undefined;
  return (
    <div>
      <div
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        ref={anchorRef}
      >
        <MenuIcon $vertical fontSize="large" fill="#230ccf" />
      </div>
      <Popper
        style={{ position: "absolute", top: "10px", left: "-20px" }}
        id={id}
        open={open}
        anchorEl={anchorRef.current}
      >
        <PopperCovers>
          <PopperSec>
            <Edit /> Edit
          </PopperSec>
          <PopperSec>
            <DeleteIcon />
            Delete
          </PopperSec>
        </PopperCovers>
      </Popper>
    </div>
  );
}
export function LeadMenuVerticalDots() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
    console.log("dot is clicked - vertical");
  };

  const handleClickOutside = (event) => {
    if (anchorRef.current && !anchorRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const id = open ? "simple-popper" : undefined;
  return (
    <div>
      <div
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        ref={anchorRef}
      >
        <MenuIcon $vertical fontSize="small" fill="#BFBAE3" />
      </div>
      <Popper
        style={{ position: "absolute", top: "10px", left: "-20px" }}
        id={id}
        open={open}
        anchorEl={anchorRef.current}
      >
        <PopperCovers>
          <PopperSec>
            <Edit /> Edit
          </PopperSec>
          <PopperSec>
            <DeleteIcon />
            Delete
          </PopperSec>
        </PopperCovers>
      </Popper>
    </div>
  );
}
export function LeadMenuVerticalDotsContact() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClickOutside = (event) => {
    if (anchorRef.current && !anchorRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <div
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        ref={anchorRef}
      >
        <MenuIcon $section fontSize="small" fill="#BFBAE3" />
      </div>
      <Popper
        style={{ position: "absolute", left: "10px", width: "200px" }}
        id={id}
        open={open}
        anchorEl={anchorRef.current}
      >
        <PopperCovers style={{ width: "150px" }}>
          <PopperSec>
            <Edit /> Edit
          </PopperSec>
          <PopperSec>
            <DeleteIcon />
            Delete
          </PopperSec>
          <PopperSec>
            <MessageIcon />
            Sms
          </PopperSec>
          <PopperSec>
            <AddRoundedIcon /> Create group
          </PopperSec>
        </PopperCovers>
      </Popper>
    </div>
  );
}
export function LeadMenuVerticalDotsContacts() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClickOutside = (event) => {
    if (anchorRef.current && !anchorRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const id = open ? "simple-popper" : undefined;
  return (
    <div>
      <div
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        ref={anchorRef}
      >
        <MenuIcon $group fontSize="small" fill="#BFBAE3" />
      </div>
      <Popper
        style={{ position: "absolute", left: "10px", width: "200px" }}
        id={id}
        open={open}
        anchorEl={anchorRef.current}
      >
        <PopperCovers style={{ width: "150px" }}>
          <PopperSec>
            <Edit /> Edit
          </PopperSec>
          <PopperSec>
            <DeleteIcon />
            Delete
          </PopperSec>
          <PopperSec>
            <MessageIcon />
            Sms
          </PopperSec>
          <PopperSec>
            <AddRoundedIcon /> Add to group
          </PopperSec>
        </PopperCovers>
      </Popper>
    </div>
  );
}
export function IndividualPageIcon() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClickOutside = (event) => {
    if (anchorRef.current && !anchorRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const id = open ? "simple-popper" : undefined;
  return (
    <div>
      <div
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        ref={anchorRef}
      >
        <MenuIcon
          fontSize="large"
          fill="#000000"
          sx={{ position: "absolute", right: "30px", top: "30px" }}
        />
      </div>
      <Popper
        style={{ position: "absolute", left: "" }}
        id={id}
        open={open}
        anchorEl={anchorRef.current}
      >
        <PopperCovers
          style={{
            width: "150px",
            position: "absolute",
            top: "45px",
            left: "140px",
          }}
        >
          <PopperSec>
            <Edit /> Edit
          </PopperSec>
          <PopperSec>
            <DeleteIcon />
            Delete
          </PopperSec>
          <PopperSec>
            <MessageIcon />
            Sms
          </PopperSec>
          <PopperSec>
            <AddRoundedIcon /> Add to group
          </PopperSec>
        </PopperCovers>
      </Popper>
    </div>
  );
}
export function BudgetExpenseMenuDots() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClickOutside = (event) => {
    if (anchorRef.current && !anchorRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const id = open ? "simple-popper" : undefined;
  return (
    <div>
      <div
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        ref={anchorRef}
      >
        <MenuIcon
          fontSize="small"
          fill="#7d7b7bb8"
        />
      </div>
      <Popper
        // style={{ position: "absolute", left: "" }}
        id={id}
        open={open}
        anchorEl={anchorRef.current}
      >
        <PopperCovers $budget
          style={{
            width: "150px",
            // position: "absolute",
            
          }}
        >
          <PopperSec>
            <Edit /> Edit
          </PopperSec>
          <PopperSec>
            <DeleteIcon />
            Delete
          </PopperSec>
        </PopperCovers>
      </Popper>
    </div>
  );
}
export function CeoStaffMenuDots() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClickOutside = (event) => {
    if (anchorRef.current && !anchorRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const id = open ? "simple-popper" : undefined;
  return (
    <div>
      <div
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        ref={anchorRef}
      >
        <MenuIcon
          fontSize="small"
          fill="#7d7b7bb8"
        />
      </div>
      <Popper
        // style={{ position: "absolute", left: "" }}
        id={id}
        open={open}
        anchorEl={anchorRef.current}
      >
        <PopperCovers $budget
          style={{
            width: "150px",
            // position: "absolute",
            
          }}
        >
          <PopperSec>
            <Edit /> Edit
          </PopperSec>
          <PopperSec>
          <MessageIcon /> SMS
          </PopperSec>
          <PopperSec>
            <DeleteIcon />
            Delete
          </PopperSec>
        </PopperCovers>
      </Popper>
    </div>
  );
}
export function IndividualPageIconAttendance() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClickOutside = (event) => {
    if (anchorRef.current && !anchorRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const id = open ? "simple-popper" : undefined;
  return (
    <div>
      <div
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        ref={anchorRef}
      >
        <MenuIcon fontSize="small" fill="#6053B9" />
      </div>
      <Popper
        style={{ position: "absolute", left: "" }}
        id={id}
        open={open}
        anchorEl={anchorRef.current}
      >
        <PopperCovers
          style={{ width: "180px", position: "absolute", left: "-70px" }}
        >
          <PopperSec>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.33341 9.50166V10.8946C8.91635 10.7472 8.46761 10.667 8.00008 10.667C5.79094 10.667 4.00008 12.4579 4.00008 14.667H2.66675C2.66675 11.7215 5.05456 9.33366 8.00008 9.33366C8.46048 9.33366 8.90728 9.39199 9.33341 9.50166ZM8.00008 8.66699C5.79008 8.66699 4.00008 6.87699 4.00008 4.66699C4.00008 2.45699 5.79008 0.666992 8.00008 0.666992C10.2101 0.666992 12.0001 2.45699 12.0001 4.66699C12.0001 6.87699 10.2101 8.66699 8.00008 8.66699ZM8.00008 7.33366C9.47341 7.33366 10.6667 6.14033 10.6667 4.66699C10.6667 3.19366 9.47341 2.00033 8.00008 2.00033C6.52675 2.00033 5.33341 3.19366 5.33341 4.66699C5.33341 6.14033 6.52675 7.33366 8.00008 7.33366ZM12.6667 11.7242L14.0809 10.31L15.0237 11.2528L13.6095 12.667L15.0237 14.0812L14.0809 15.024L12.6667 13.6098L11.2525 15.024L10.3097 14.0812L11.7239 12.667L10.3097 11.2528L11.2525 10.31L12.6667 11.7242Z"
                fill="#2C2669"
              />
              <path
                d="M9.33341 9.50166V10.8946C8.91635 10.7472 8.46761 10.667 8.00008 10.667C5.79094 10.667 4.00008 12.4579 4.00008 14.667H2.66675C2.66675 11.7215 5.05456 9.33366 8.00008 9.33366C8.46048 9.33366 8.90728 9.39199 9.33341 9.50166ZM8.00008 8.66699C5.79008 8.66699 4.00008 6.87699 4.00008 4.66699C4.00008 2.45699 5.79008 0.666992 8.00008 0.666992C10.2101 0.666992 12.0001 2.45699 12.0001 4.66699C12.0001 6.87699 10.2101 8.66699 8.00008 8.66699ZM8.00008 7.33366C9.47341 7.33366 10.6667 6.14033 10.6667 4.66699C10.6667 3.19366 9.47341 2.00033 8.00008 2.00033C6.52675 2.00033 5.33341 3.19366 5.33341 4.66699C5.33341 6.14033 6.52675 7.33366 8.00008 7.33366ZM12.6667 11.7242L14.0809 10.31L15.0237 11.2528L13.6095 12.667L15.0237 14.0812L14.0809 15.024L12.6667 13.6098L11.2525 15.024L10.3097 14.0812L11.7239 12.667L10.3097 11.2528L11.2525 10.31L12.6667 11.7242Z"
                fill="black"
                fill-opacity="0.2"
              />
            </svg>
            Expel from group
          </PopperSec>
          <PopperSec>
            <DeleteIcon />
            Freeze
          </PopperSec>
        </PopperCovers>
      </Popper>
    </div>
  );
}
export function ClassStat({ handleClassStat, lessonStat, setLessonStat }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClickOutside = (event) => {
    if (anchorRef.current && !anchorRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const id = open ? "simple-popper" : undefined;
  return (
    <div>
      <div
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        ref={anchorRef}
      >
        sep 1
      </div>
      <Popper
        style={{ position: "absolute", left: "" }}
        id={id}
        open={open}
        anchorEl={anchorRef.current}
      >
        <PopperCovers
          style={{
            width: "180px",
            position: "absolute",
            left: "-100px",
            top: "40px",
          }}
        >
          {lessonStat ? (
            <div>
              <PopperSec onClick={handleClassStat}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M7.00003 6.11114L10.1111 3L11 3.88889L7.88891 7.00003L11 10.1111L10.1111 11L7.00003 7.88891L3.88889 11L3 10.1111L6.11114 7.00003L3 3.88889L3.88889 3L7.00003 6.11114Z"
                    fill="#2C2669"
                  />
                  <path
                    d="M7.00003 6.11114L10.1111 3L11 3.88889L7.88891 7.00003L11 10.1111L10.1111 11L7.00003 7.88891L3.88889 11L3 10.1111L6.11114 7.00003L3 3.88889L3.88889 3L7.00003 6.11114Z"
                    fill="black"
                    fill-opacity="0.2"
                  />
                </svg>
                Cancel lesson
              </PopperSec>
              <PopperSec>
                <div
                  style={{
                    border: "1px solid black",
                    borderRadius: "50%",
                    width: "10px",
                    height: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.1998 4.00007C1.1998 4.22099 1.3565 4.40007 1.5498 4.40007H5.60482L4.10231 6.11723C3.96563 6.27344 3.96563 6.52671 4.10231 6.68292C4.23899 6.83913 4.4606 6.83913 4.59729 6.68292L6.69729 4.28292C6.83397 4.12671 6.83397 3.87344 6.69729 3.71723L4.59729 1.31723C4.4606 1.16102 4.23899 1.16102 4.10231 1.31723C3.96563 1.47344 3.96563 1.72671 4.10231 1.88292L5.60482 3.60007L1.5498 3.60007C1.3565 3.60007 1.1998 3.77916 1.1998 4.00007Z"
                      fill="#2C2669"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.1998 4.00007C1.1998 4.22099 1.3565 4.40007 1.5498 4.40007H5.60482L4.10231 6.11723C3.96563 6.27344 3.96563 6.52671 4.10231 6.68292C4.23899 6.83913 4.4606 6.83913 4.59729 6.68292L6.69729 4.28292C6.83397 4.12671 6.83397 3.87344 6.69729 3.71723L4.59729 1.31723C4.4606 1.16102 4.23899 1.16102 4.10231 1.31723C3.96563 1.47344 3.96563 1.72671 4.10231 1.88292L5.60482 3.60007L1.5498 3.60007C1.3565 3.60007 1.1998 3.77916 1.1998 4.00007Z"
                      fill="black"
                      fill-opacity="0.2"
                    />
                  </svg>
                </div>
                Move lesson
              </PopperSec>
            </div>
          ) : (
            <PopperSec onClick={handleClassStat}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 3.2C6.35086 3.2 4.89505 4.03176 4.03066 5.3H5.6V6.5H2V2.9H3.2V4.39962C4.29429 2.943 6.03658 2 8 2C11.3137 2 14 4.68629 14 8H12.8C12.8 5.34903 10.651 3.2 8 3.2ZM3.2 8C3.2 10.651 5.34903 12.8 8 12.8C9.64916 12.8 11.1049 11.9682 11.9694 10.7H10.4V9.5H14V13.1H12.8V11.6004C11.7057 13.057 9.96344 14 8 14C4.68629 14 2 11.3137 2 8H3.2Z"
                  fill="#2C2669"
                />
                <path
                  d="M8 3.2C6.35086 3.2 4.89505 4.03176 4.03066 5.3H5.6V6.5H2V2.9H3.2V4.39962C4.29429 2.943 6.03658 2 8 2C11.3137 2 14 4.68629 14 8H12.8C12.8 5.34903 10.651 3.2 8 3.2ZM3.2 8C3.2 10.651 5.34903 12.8 8 12.8C9.64916 12.8 11.1049 11.9682 11.9694 10.7H10.4V9.5H14V13.1H12.8V11.6004C11.7057 13.057 9.96344 14 8 14C4.68629 14 2 11.3137 2 8H3.2Z"
                  fill="black"
                  fill-opacity="0.2"
                />
              </svg>{" "}
              Restore lesson
            </PopperSec>
          )}
        </PopperCovers>
      </Popper>
    </div>
  );
}
export function InfoPopperContacts() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClickOutside = (event) => {
    if (anchorRef.current && !anchorRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <div
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        ref={anchorRef}
      >
        <InfoIcon
          $group
          fontSize="small"
          fill="#BFBAE3"
          style={{ cursor: "pointer" }}
        />
      </div>
      <Popper
        style={{ position: "absolute", left: "10px", width: "200px" }}
        id={id}
        open={open}
        anchorEl={anchorRef.current}
      >
        <PopperCovers $contactInfo>
          <PopperSec $contactInfo>
            <b>William John</b>
            <p>Full name</p>
          </PopperSec>
          <PopperSec $contactInfo>
            <b>99 999 99 99</b>
            <p>Phone number</p>
          </PopperSec>
          <PopperSec $contactInfo>
            <b>01.01.2024s</b>
            <p>Updated</p>
          </PopperSec>
        </PopperCovers>
      </Popper>
    </div>
  );
}

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#99CCF3",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const StyledPopperDiv = styled("div")(
  ({ theme }) => css`
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: ${theme.palette.mode === "dark"
      ? `0px 4px 8px rgb(0 0 0 / 0.7)`
      : `0px 4px 8px rgb(0 0 0 / 0.1)`};
    padding: 0.75rem;
    color: ${theme.palette.mode === "dark" ? grey[100] : grey[700]};
    font-size: 0.875rem;
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    opacity: 1;
    margin: 0.25rem 0;
  `
);
