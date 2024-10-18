import React from "react";
import {
  Bottom,
  GroupdImg,
  Spans,
  Students,
  Typography,
  Container 
} from "../pages/teacher/groups";
import { Link } from "react-router-dom";
import { IndividualPageIcon } from "../../materials/popper";
import GroupInfo, { StudentInfo } from "../pages/groups/tabs";

const IndividualStudent = () => {
  return (
    <div style={{ marginLeft: "320px", padding: "20px" }}>
      <Container style={{ height: "fit-content" }}>
      <IndividualPageIcon/>
        <GroupdImg></GroupdImg>
        <Typography $student>
        <Spans $student>150.000 UZS</Spans> <Spans>Balance</Spans>
        </Typography>
        <Typography $subject>
          Student name <Spans>Name</Spans>{" "}
        </Typography>
        <Typography $date>
          9823jq9j932qdj89 <Spans>id</Spans>
        </Typography>
        <Typography $date>
          (99) 999-44-33 <Spans>Phone number</Spans>
        </Typography>
        <Typography $date>
          Termiz <Spans>Brance</Spans>
        </Typography>
        <Typography $date>
          02.23.2023 <Spans>Joined</Spans>
        </Typography>
        <Bottom>
          <Link to="/teacherInfo">
            <button>+ Add payment</button>
          </Link>
          <Link to="/teacherInfo">
            <button>Add to group</button>
          </Link>
        </Bottom>
      </Container>
      <StudentInfo />
    </div>
  );
};

export default IndividualStudent;
