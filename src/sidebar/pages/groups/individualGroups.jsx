import React from "react";
import {
  Bottom,
  Container,
  GroupdImg,
  Spans,
  Students,
  Typography,
} from "../teacher/groups";
import { Link } from "react-router-dom";
import GroupInfo from "./tabs";
import { IndividualPageIcon } from "../../../materials/popper";

const IndividualGroups = () => {
  return (
    <div style={{ marginLeft: "320px", padding: "20px" }}>
      <Container style={{ height: "fit-content" }}>
      <IndividualPageIcon/>
        <GroupdImg></GroupdImg>
        <Typography $ocean>
          Ocean <Spans>Group name</Spans>
        </Typography>
        <Typography $subject>
          Subject name <Spans>Course</Spans>{" "}
        </Typography>
        <Typography $date>
          John <Spans>Teacher name</Spans>
        </Typography>
        <Typography $date>
          02.23.2023 <Spans>Start data</Spans>
        </Typography>
        <Students>
          <div style={{ display: "flex", gap: "10px" }}>
            <Spans $student>12 student</Spans>
            <Spans $student>2-room</Spans>
          </div>{" "}
          <Spans>Student & room</Spans>
        </Students>
        <Bottom>
          <b>
            from-to <p>days</p>
          </b>
          <Link to="/group/teacherInfo">
            <button>See group</button>
          </Link>
        </Bottom>
      </Container>
      <GroupInfo />
    </div>
  );
};

export default IndividualGroups;
