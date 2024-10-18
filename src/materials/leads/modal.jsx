import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import { FormButton, FormInput, FormWrapper } from '../../../pages/registration/signIn';
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import "..//mui.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//phone
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import {
  FormWrapper,
  FormButton,
  FormInput,
} from "../../pages/registration/signIn";
import { PopperSec } from "../popper";
import { OutlinedInput } from "@mui/material";

export const CheckboxSec = styled.div`
  display: flex;
  p {
    margin-right: 30px;
    color: var(--400, #a098d5);
    /* Medium/14px -> 20px */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
  }
`;

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};
export const Close = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0;
  background-color: #efeef8;
  text-align: end;
  padding: 10px;
`;
const ButtonSec = styled.button`
  border-radius: 6px;
  background: var(
    --600,
    linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    #2c2669
  );
  color: #fff;
  border: none;
  padding: 10px 40px;
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  border-collapse: collapse;
  white-space: nowrap;
  height: 44px;
  cursor: pointer;
  /* display: ${(props) => (props.$notification ? "" : "")}; */
`;
const Selects = styled.select`
  display: flex;
  padding: 8px 102px 8px 16px;
  align-items: center;
  border-radius: 3px;
  border: 1px solid #cfcbea;
  margin-bottom: 20px;
  height: 50px;
  background-color: #efeef8;
  color: #2c2669;
  box-sizing: border-box;
  width: 100%;
  font-family: "Public Sans";
  font-size: 18px;
  &:focus {
    outline: none;
    /* border: 1px solid #4c36d8; */
  }
  cursor: pointer;
  margin-top: 10px;
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  h1 {
    color: var(--600, #2c2669);

    /* Bold/30px -> 40px */
    font-family: "Public Sans";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 133.333% */
  }
  label {
    color: var(--500, #6053b9);
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 114.286% */
    /* padding-bottom: 10px; */
    margin-bottom: 15px;
  }
  select {
    width: 100%;
    display: flex;
    padding: 8px 102px 8px 16px;
    align-items: center;
    border-radius: 3px;
    border: 1px solid #cfcbea;
    margin-bottom: 20px;
    height: 50px;
    background-color: #efeef8;
    color: #cfcbea;
    box-sizing: border-box;
  }
`;
const SMSTemplates = styled.div`
  height: 44px;
  border: 1px solid rgba(158, 158, 158, 0.607);
  box-sizing: border-box;
  padding: 5px;
`;

const ButtonPlus = styled.button`
  width: 100%;
  border-radius: 6px;
  border: 1px solid var(--600, #2c2669);
  padding: 10px 0 5px 0;
  background-color: inherit;
  margin-bottom: 20px;
  cursor: pointer;
`;
const SMSModal = styled.div`
  color: var(--500, #6053b9);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  cursor: pointer;
`;

const Checkbox = styled.div`
  display: flex;
  p {
    color: var(--400, #a098d5);
    font-family: "Public Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
  }
`;

export default function AddLeadModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialValues = {
    contactno: "",
    country_code: "",
    firstName: "",
    lastName: "",
    email: "",
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleChange = (e) => {
    setPhoneNumber({ ...phoneNumber, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <ButtonSec onClick={handleOpen}>+ Add lead</ButtonSec>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormContainer>
            <Close>
              <CloseIcon
                fontSize="small"
                onClick={handleClose}
                sx={{ cursor: "pointer" }}
              />
            </Close>
            <h1>Add new lead</h1>
            <form action="">
              <label htmlFor="">Lead name</label>
              <FormInput
                type="text"
                name="lead-name"
                id=""
                placeholder="Enter name"
              />
              <label
                style={{ marginTop: "30px", paddingTop: "20px" }}
                htmlFor=""
              >
                Phone Number
              </label>
              <PhoneInput
                inputClass="phone-number"
                country={"uz"}
                // value={`${phoneNumber.country_code}${phoneNumber.contactno}`}
                // onChange={() => handleChange('+' + phoneNumber)}
                inputStyle={{
                  width: "100%",
                  height: "44px",
                  backgroundColor: "#ffffff",
                  marginBottom: "10px",
                }}
              />
              <label style={{}} htmlFor="">
                Sections
              </label>
              <Selects name="" id="">
                <option value="">Sections</option>
                <option value="Matematika">Matematika</option>
                <option value="History">History</option>
                <option value="Informatika">Informatika</option>
                <option value="Fizika">Fizika</option>
                <option value="Beginner">Beginner</option>
                <option value="Pre-Inter">Pre-Inter</option>
              </Selects>
              <label style={{ marginTop: "20px" }} htmlFor="">
                From where
              </label>
              <Selects name="" id="">
                <option value="">From where</option>
                <option value="Telegram">Telegram</option>
                <option value="Whatsapp">Whatsapp</option>
              </Selects>
              <FormButton style={{ cursor: "pointer" }}>Create lead</FormButton>
            </form>
          </FormContainer>
        </Box>
      </Modal>
    </div>
  );
}
export function AddWhereModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <ButtonPlus onClick={handleOpen}>
        <AddRoundedIcon />
      </ButtonPlus>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormContainer>
            <Close>
              <CloseIcon
                fontSize="small"
                onClick={handleClose}
                sx={{ cursor: "pointer" }}
              />
            </Close>
            <h1>Add from where</h1>
            <form action="">
              <label htmlFor="">From where name</label>
              <FormInput
                type="text"
                name="lead-name"
                id=""
                placeholder="Enter name"
              />
              <FormButton style={{ cursor: "pointer" }}>
                Create from where
              </FormButton>
            </form>
          </FormContainer>
        </Box>
      </Modal>
    </div>
  );
}
export function AddSectionModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <ButtonPlus onClick={handleOpen}>
        <AddRoundedIcon />
      </ButtonPlus>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormContainer>
            <Close>
              <CloseIcon
                fontSize="small"
                onClick={handleClose}
                sx={{ cursor: "pointer" }}
              />
            </Close>
            <h1>Add section</h1>
            <form action="">
              <label htmlFor="">Section name</label>
              <FormInput
                type="text"
                name="lead-name"
                id=""
                placeholder="Enter name"
              />
              <FormButton style={{ cursor: "pointer" }}>
                Create section
              </FormButton>
            </form>
          </FormContainer>
        </Box>
      </Modal>
    </div>
  );
}
export function AddGroupModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <ButtonPlus onClick={handleOpen}>
        <AddRoundedIcon />
      </ButtonPlus>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormContainer>
            <Close>
              <CloseIcon
                fontSize="small"
                onClick={handleClose}
                sx={{ cursor: "pointer" }}
              />
            </Close>
            <h1>Add to group</h1>
            <form action="">
              <label htmlFor="">Select group</label>
              <Selects name="" id="">
                <option value="">Sections</option>
                <option value="Matematika">Matematika</option>
                <option value="History">History</option>
                <option value="Informatika">Informatika</option>
                <option value="Fizika">Fizika</option>
                <option value="Beginner">Beginner</option>
                <option value="Pre-Inter">Pre-Inter</option>
              </Selects>
              <FormButton style={{ cursor: "pointer" }}>
                Add to group
              </FormButton>
            </form>
          </FormContainer>
        </Box>
      </Modal>
    </div>
  );
}
export function SendSmsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <SMSModal onClick={handleOpen}>SMS</SMSModal>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormContainer>
            <Close>
              <CloseIcon
                fontSize="small"
                onClick={handleClose}
                sx={{ cursor: "pointer" }}
              />
            </Close>
            <h1>Send SMS</h1>
            <form action="">
              <textarea name="" id="" placeholder="Enter Message"></textarea>
              <FormButton style={{ cursor: "pointer" }}>Send</FormButton>
              <h1>SMS Template</h1>
              <SMSTemplates>Bugun farzandingiz darsga kelmadi</SMSTemplates>
              <SMSTemplates>Iltimos kurs uchun to'lov qiling!</SMSTemplates>
              <SMSTemplates>
                Farzandingiz darslarni ozlashtira olmayapti
              </SMSTemplates>
            </form>
          </FormContainer>
        </Box>
      </Modal>
    </div>
  );
}

// groups modal

export function AddNewGroupModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isSelected, setIsSelected] = useState("");

  const handleSelect = (e) => {
    setIsSelected(e.target.value);
  };

  return (
    <div>
      <ButtonSec onClick={handleOpen}>+ Add new group</ButtonSec>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, overflow: "scroll", scrollbarWidth: "none" }}>
          <FormContainer>
            <Close>
              <CloseIcon
                fontSize="small"
                onClick={handleClose}
                sx={{ cursor: "pointer" }}
              />
            </Close>
            <h1>Create new group</h1>
            <form action="">
              <label htmlFor="">Group name</label>
              <FormInput
                style={{ height: "40px" }}
                $photo
                type="text"
                name="lead-name"
                id=""
                placeholder="Enter name"
              />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "30px",
                }}
              >
                <div>
                  <label htmlFor="">Upload photo</label>
                  <FormInput
                    style={{ height: "40px" }}
                    $photo
                    type="file"
                    placeholder="Upload photo"
                  />
                </div>
                <div>
                  <label htmlFor="">Select course</label>
                  <Selects style={{ height: "40px" }} $course>
                    <option value="">Select courses</option>
                    <option value="course one">course one</option>
                    <option value="course two">course two</option>
                    <option value="course three">course three</option>
                  </Selects>
                </div>
              </div>
              <label htmlFor="">Select teacher</label>
              <Selects style={{ height: "40px" }} name="" id="">
                <option value="">Select teacher</option>
                <option value="John Kenedy">John Kenedy</option>
                <option value="Jack Rodriguez">Jack Rodriguez</option>
                <option value="Malika Yusupova">Malika Yusupova</option>
              </Selects>
              <label style={{ marginTop: "20px" }} htmlFor="">
                Select lesson start time
              </label>
              <Selects style={{ height: "40px" }} name="" id="">
                <option value="">Hours</option>
                <option value="8:00">8:00</option>
                <option value="9:00">9:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
              </Selects>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "30px",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "30px",
                  }}
                >
                  <div>
                    <label htmlFor="">Select days</label>
                    <Selects
                      style={{ height: "40px" }}
                      $course
                      value={isSelected}
                      onChange={handleSelect}
                    >
                      <option value="">Select days</option>
                      <option value="course one">Even days</option>
                      <option value="course two">Odd days</option>
                      <option value="course three">Weekends</option>
                      <option value="other">Other</option>
                    </Selects>
                  </div>
                  <div>
                    <label htmlFor="">Select room</label>
                    <Selects style={{ height: "40px" }} $course>
                      <option value="">Select room</option>
                      <option value="course one">room one</option>
                      <option value="room two">room two</option>
                      <option value="room three">room three</option>
                    </Selects>
                  </div>
                </div>
                <div>
                  {isSelected === "other" && (
                    <div
                      style={{
                        display: "flex",
                        width: "200px",
                        flexWrap: "wrap",
                      }}
                    >
                      <Checkbox>
                        <input type="checkbox" />
                        <p>Monday</p>
                      </Checkbox>
                      <Checkbox>
                        <input type="checkbox" />
                        <p>Tuesday</p>
                      </Checkbox>
                      <Checkbox>
                        <input type="checkbox" />
                        <p>Wednesday</p>
                      </Checkbox>
                      <Checkbox>
                        <input type="checkbox" />
                        <p>Thursday</p>
                      </Checkbox>
                      <Checkbox>
                        <input type="checkbox" />
                        <p>Friday</p>
                      </Checkbox>
                      <Checkbox>
                        <input type="checkbox" />
                        <p>Saturday</p>
                      </Checkbox>
                      <Checkbox>
                        <input type="checkbox" />
                        <p>Sunday</p>
                      </Checkbox>
                    </div>
                  )}
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "30px",
                  }}
                >
                  <div>
                    <label htmlFor="">Select course</label>
                    <FormInput
                      style={{ height: "40px" }}
                      $photo
                      type="date"
                      placeholder="Select Data"
                    />
                  </div>
                  <div>
                    <label htmlFor="">End date of the group</label>
                    <Selects style={{ height: "40px" }} $course>
                      <option value="">End date of the group</option>
                      <option value="course one">course one</option>
                      <option value="course two">course two</option>
                      <option value="course three">course three</option>
                    </Selects>
                  </div>
                </div>
              </div>
              <FormButton style={{ cursor: "pointer" }}>Create lead</FormButton>
            </form>
          </FormContainer>
        </Box>
      </Modal>
    </div>
  );
}
export function AddNewStudentModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleChange = (e) => {
    setPhoneNumber({ ...phoneNumber, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <ButtonSec onClick={handleOpen}>+ Add new student</ButtonSec>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, overflow: "scroll", scrollbarWidth: "none" }}>
          <FormContainer>
            <Close>
              <CloseIcon
                fontSize="small"
                onClick={handleClose}
                sx={{ cursor: "pointer" }}
              />
            </Close>
            <h1>Add new Student</h1>
            <form action="">
              <label htmlFor="">Full name</label>
              <FormInput
                style={{ height: "40px" }}
                $photo
                type="text"
                name="lead-name"
                id=""
                placeholder="Enter name"
              />
              <label htmlFor="">Date of Birth</label>
              <FormInput
                style={{ height: "40px" }}
                $photo
                type="date"
                placeholder="Date from"
              />
              <label style={{ display: "block", marginBottom: "15px" }}>
                Gender
              </label>
              <input type="checkbox" />{" "}
              <label htmlFor="male" style={{ marginRight: "30px" }}>
                Male
              </label>
              <input type="checkbox" /> <label htmlFor="Female">Female</label>
              <label style={{ display: "block", margin: "20px 0 10px 0" }}>
                Phone number
              </label>
              <PhoneInput
                inputClass="phone-number"
                country={"uz"}
                inputStyle={{
                  width: "100%",
                  height: "44px",
                  backgroundColor: "#EFEEF8",
                }}
              />
              <label style={{ display: "block", margin: "20px 0 10px 0" }}>
                Parent phone number
              </label>
              <PhoneInput
                inputClass="phone-number"
                country={"uz"}
                inputStyle={{
                  width: "100%",
                  height: "44px",
                  backgroundColor: "#EFEEF8",
                }}
              />
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  marginTop: "20px",
                }}
              >
                Password
              </label>
              <OutlinedInput
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                required
                placeholder="Enter your password"
                className="inputPassword"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                }
              />
              <label
                style={{
                  display: "inline-block",
                  marginTop: "30px",
                  width: "50%",
                }}
              >
                Select group
              </label>
              <label
                style={{
                  display: "inline-block",
                  marginTop: "30px",
                  width: "50%",
                }}
              >
                Date from
              </label>
              <Selects
                style={{
                  height: "40px",
                  width: "40%",
                  display: "inline-block",
                  marginRight: "30px",
                }}
                $course
              >
                <option value="course one">course one</option>
                <option value="course two">course two</option>
                <option value="course three">course three</option>
              </Selects>
              <FormInput
                style={{
                  height: "40px",
                  width: "40%",
                  display: "inline-block",
                }}
                $photo
                type="date"
                placeholder="Date from"
              />
              <FormButton style={{ cursor: "pointer" }}>Add Student</FormButton>
            </form>
          </FormContainer>
        </Box>
      </Modal>
    </div>
  );
}
export function AddNewNotificationModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleChange = (e) => {
    setPhoneNumber({ ...phoneNumber, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <ButtonSec
        style={{ position: "absolute", top: "30px", right: "30px" }}
        onClick={handleOpen}
      >
        + Add new notification
      </ButtonSec>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, overflow: "scroll", scrollbarWidth: "none" }}>
          <FormContainer>
            <Close>
              <CloseIcon
                fontSize="small"
                onClick={handleClose}
                sx={{ cursor: "pointer" }}
              />
            </Close>
            <h1>Add new notification</h1>
            <form action="">
              <label htmlFor="">Title</label>
              <FormInput
                style={{ height: "40px" }}
                $photo
                type="text"
                name="lead-name"
                id=""
                placeholder="Write title name"
              />
              <label htmlFor="">Content</label>
              <textarea
                name="content"
                id="notification-content"
                placeholder="Write content"
                style={{
                  display: "block",
                  margin: "15px 0 15px 0",
                  width: "98%",
                  padding: "20px",
                  boxSizing: "border-box",
                  height: "150px",
                }}
              ></textarea>
              <FormButton style={{ cursor: "pointer" }}>
                Add notification
              </FormButton>
            </form>
          </FormContainer>
        </Box>
      </Modal>
    </div>
  );
}
export function AddNewCategoryModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleChange = (e) => {
    setPhoneNumber({ ...phoneNumber, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <ButtonSec
        style={{ position: "absolute", top: "30px", right: "30px" }}
        onClick={handleOpen}
      >
        + Add new category
      </ButtonSec>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, overflow: "scroll", scrollbarWidth: "none" }}>
          <FormContainer>
            <Close>
              <CloseIcon
                fontSize="small"
                onClick={handleClose}
                sx={{ cursor: "pointer" }}
              />
            </Close>
            <h1>Add new category</h1>
            <form action="">
              <label htmlFor="">Category name</label>
              <FormInput
                style={{ height: "40px" }}
                $photo
                type="text"
                name="lead-name"
                id=""
                placeholder="Write category name"
              />

              <FormButton style={{ cursor: "pointer" }}>
                Add category
              </FormButton>
            </form>
          </FormContainer>
        </Box>
      </Modal>
    </div>
  );
}
export function AddNewExpenceModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleChange = (e) => {
    setPhoneNumber({ ...phoneNumber, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <ButtonSec
        style={{ position: "absolute", top: "30px", right: "30px" }}
        onClick={handleOpen}
      >
        + Create new Expence
      </ButtonSec>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, overflow: "scroll", scrollbarWidth: "none" }}>
          <FormContainer>
            <Close>
              <CloseIcon
                fontSize="small"
                onClick={handleClose}
                sx={{ cursor: "pointer" }}
              />
            </Close>
            <h1>Create new Expence</h1>
            <form action="">
              <label htmlFor="">Description</label>
              <FormInput
                style={{ height: "80px" }}
                $photo
                type="text"
                name="lead-name"
                id=""
                placeholder="Enter text"
              />
              <label htmlFor="">Description</label>
              <FormInput
                style={{ height: "40px" }}
                $photo
                type="date"
                name="date"
                id=""
                placeholder="Pick a date"
              />
              <label style={{ display: "block", margin: "15px 0" }}>
                Select category
              </label>
              <select name="expence" id="expense">
                <option value="">Select</option>
                <option value="epyloyer">Employer</option>
                <option value="epyloyee">Employee</option>
                <option value="other">Ohter</option>
              </select>
              <label style={{ display: "block", margin: "15px 0" }}>
                Select employee
              </label>
              <select name="expence" id="expense">
                <option value="">Select</option>
                <option value="epyloyer"></option>
                <option value="epyloyee"></option>
              </select>
              <label style={{ display: "block", margin: "15px 0" }}>
                {" "}
                Amount
              </label>
              <FormInput type="text" placeholder="Enter amount" />
              <label style={{ display: "block", margin: "15px 0" }}>
                <p>Pament method</p>
                <label style={{ marginRight: "50px" }}>
                  <input type="checkbox" />
                  Cash
                </label>
                <label style={{ marginRight: "50px" }}>
                  <input type="checkbox" />
                  Card
                </label>
                <label style={{ marginRight: "50px" }}>
                  <input type="checkbox" />
                  Online transfer
                </label>
                <label style={{ marginRight: "50px" }}>
                  <input type="checkbox" />
                  Payme
                </label>
                <label style={{ marginRight: "50px" }}>
                  <input type="checkbox" />
                  Uzum
                </label>
                <label style={{ marginRight: "50px" }}>
                  <input type="checkbox" />
                  Account transfer
                </label>
              </label>

              <FormButton style={{ cursor: "pointer" }}>
                Create category
              </FormButton>
            </form>
          </FormContainer>
        </Box>
      </Modal>
    </div>
  );
}
export function AddNewRoomModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleChange = (e) => {
    setPhoneNumber({ ...phoneNumber, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <ButtonSec
        style={{ position: "absolute", top: "30px", right: "30px" }}
        onClick={handleOpen}
      >
        + Create new Room
      </ButtonSec>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, overflow: "scroll", scrollbarWidth: "none" }}>
          <FormContainer>
            <Close>
              <CloseIcon
                fontSize="small"
                onClick={handleClose}
                sx={{ cursor: "pointer" }}
              />
            </Close>
            <h1>Create new room</h1>
            <form action="">
              <label htmlFor="">Room name</label>
              <FormInput
                style={{ height: "50px" }}
                $photo
                type="text"
                name="course-name"
                id=""
                placeholder="Enter room name"
              />
              <FormButton style={{ cursor: "pointer" }}>Create room</FormButton>
            </form>
          </FormContainer>
        </Box>
      </Modal>
    </div>
  );
}
export function AddNewBranchModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleChange = (e) => {
    setPhoneNumber({ ...phoneNumber, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <ButtonSec
        style={{ position: "absolute", top: "30px", right: "30px" }}
        onClick={handleOpen}
      >
        + Create new branch
      </ButtonSec>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, overflow: "scroll", scrollbarWidth: "none" }}>
          <FormContainer>
            <Close>
              <CloseIcon
                fontSize="small"
                onClick={handleClose}
                sx={{ cursor: "pointer" }}
              />
            </Close>
            <h1>Create new branch</h1>
            <form action="">
              <label htmlFor="">Branch name</label>
              <FormInput
                style={{ height: "50px" }}
                $photo
                type="text"
                name="branch-name"
                id=""
                placeholder="Enter branch name"
              />
              <FormButton style={{ cursor: "pointer" }}>Create branch</FormButton>
            </form>
          </FormContainer>
        </Box>
      </Modal>
    </div>
  );
}
export function AddNewCourseModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleChange = (e) => {
    setPhoneNumber({ ...phoneNumber, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <ButtonSec
        style={{ position: "absolute", top: "30px", right: "30px" }}
        onClick={handleOpen}
      >
        + Create new Expence
      </ButtonSec>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, overflow: "scroll", scrollbarWidth: "none" }}>
          <FormContainer>
            <Close>
              <CloseIcon
                fontSize="small"
                onClick={handleClose}
                sx={{ cursor: "pointer" }}
              />
            </Close>
            <h1>Create new Course</h1>
            <form action="">
              <label htmlFor="">Course name</label>
              <FormInput
                style={{ height: "50px" }}
                $photo
                type="text"
                name="course-name"
                id=""
                placeholder="Enter course name"
              />
              <label style={{ display: "block", margin: "15px 0" }}>
                Lesson duration
              </label>
              <select name="expence" id="expense">
                <option value="">Select</option>
                <option value="8">08:00</option>
                <option value="epyloyee">09:00</option>
                <option value="other">10:00</option>
                <option value="other">11:00</option>
                <option value="other">12:00</option>
              </select>
              <label style={{ display: "block", margin: "15px 0" }}>
                Course duration (month)
              </label>
              <FormInput
                style={{ height: "40px" }}
                $photo
                type="number"
                name="month"
                id=""
                placeholder="Number of month"
              />
              <label style={{ display: "block", margin: "15px 0" }}>
                Course price
              </label>
              <FormInput
                style={{ height: "40px" }}
                $photo
                type="number"
                name="price"
                id=""
                placeholder="Course price"
              />
              <label style={{ display: "block", margin: "15px 0" }}>
                Description
              </label>
              <textarea
                style={{
                  height: "80px",
                  padding: "8px 16px 8px 16px",
                  whiteSpace: "pre-wrap",
                  overflowWrap: "break-word",
                  borderRadius: "3px",
                  width: "100%",
                  boxSizing: "border-box",
                  marginBottom: "15px",
                  backgroundColor: "#efeef8",
                  border: "1px solid #cfcbea",
                }}
                type="text"
                placeholder="Course description"
              />
              <FormButton style={{ cursor: "pointer" }}>
                Create category
              </FormButton>
            </form>
          </FormContainer>
        </Box>
      </Modal>
    </div>
  );
}

export function AddNewEmployeeModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleChange = (e) => {
    setPhoneNumber({ ...phoneNumber, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <ButtonSec
        style={{ position: "absolute", top: "30px", right: "30px" }}
        onClick={handleOpen}
      >
        + Create new Employee
      </ButtonSec>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, overflow: "scroll", scrollbarWidth: "none" }}>
          <FormContainer>
            <Close>
              <CloseIcon
                fontSize="small"
                onClick={handleClose}
                sx={{ cursor: "pointer" }}
              />
            </Close>
            <h1>Add new employee</h1>
            <form action="">
              <label htmlFor="">Full name</label>
              <FormInput
                style={{ height: "40px" }}
                $photo
                type="text"
                name="lead-name"
                id=""
                placeholder="Enter name"
              />
              <label style={{ display: "block", margin: "20px 0 10px 0" }}>
                Phone number
              </label>
              <PhoneInput
                inputClass="phone-number"
                country={"uz"}
                inputStyle={{
                  width: "100%",
                  height: "44px",
                  backgroundColor: "#EFEEF8",
                }}
              />
              <label style={{ display: "block", margin: "20px 0 10px 0" }}>
                Telegram username
              </label>
              <FormInput
                style={{ height: "40px" }}
                $photo
                type="text"
                placeholder="Your username"
              />
              <label style={{ display: "block", margin: "20px 0 10px 0" }}>
                <legend style={{ marginBottom: "15px" }}>Uppload photo</legend>
                <FormInput type="file" />
              </label>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  marginTop: "20px",
                }}
              >
                Password
              </label>
              <OutlinedInput
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                required
                placeholder="Enter your password"
                className="inputPassword"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                }
              />
               <fieldset style={{border:'none',display:'flex', gap:'20px'}}>
            <legend style={{color:'#6053b9', fontWeight:'700'}}>Roles</legend>
            <label for="ceo">
                <input type="checkbox" id="ceo" name="role" value="ceo" />
                CEO
            </label>
            <label for="administer">
                <input type="checkbox" id="administer" name="role" value="administer" />
                Administer
            </label>
            <label for="teacher">
                <input type="checkbox" id="teacher" name="role" value="teacher" />
                Teacher
            </label>
        </fieldset>
        <fieldset  style={{border:'none',display:'flex', gap:'20px'}}>
            <legend style={{color:'#6053b9', fontWeight:'700'}}>Branches</legend>
            <label for="demo">
                <input type="checkbox" id="demo" name="branch" value="demo" />
                Demo
            </label>
            <label for="demo2">
                <input type="checkbox" id="demo2" name="branch" value="demo2" />
                Demo 2
            </label>
            <label for="demo3">
                <input type="checkbox" id="demo3" name="branch" value="demo3" />
                Demo 3
            </label>
        </fieldset>
              <FormButton style={{ cursor: "pointer" }}>
                Add new employee
              </FormButton>
            </form>
          </FormContainer>
        </Box>
      </Modal>
    </div>
  );
}
