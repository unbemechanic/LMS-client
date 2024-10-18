import React from "react";
import FakeImg from "..//..//..//assets/firstCourse.png";
import {
  CourseButton,
  CourseCell,
  CourseContainer,
  CourseImg,
  CoursesTypography,
} from "./style";
import { AddNewCourseModal } from "../../../materials/leads/modal";

const Courses = () => {
  return (
    <div>
      <AddNewCourseModal />
      <CourseContainer>
        <CourseCell>
          <CourseImg src={FakeImg} />
          <CoursesTypography $title>
            English Foundation Course
          </CoursesTypography>
          <CoursesTypography>90 minutes</CoursesTypography>
          <CourseButton>200.000 Uzs</CourseButton>
        </CourseCell>
        {/* deleted */}
        <CourseCell>
          {" "}
          {/* course */}
          <CourseImg src={FakeImg} />
          <CoursesTypography $title>
            English Foundation Course
          </CoursesTypography>
          <CoursesTypography>90 minutes</CoursesTypography>
          <CourseButton>200.000 Uzs</CourseButton>
        </CourseCell>
        <CourseCell>
          {" "}
          {/* course */}
          <CourseImg src={FakeImg} />
          <CoursesTypography $title>
            English Foundation Course
          </CoursesTypography>
          <CoursesTypography>90 minutes</CoursesTypography>
          <CourseButton>200.000 Uzs</CourseButton>
        </CourseCell>
        <CourseCell>
          {" "}
          {/* course */}
          <CourseImg src={FakeImg} />
          <CoursesTypography $title>
            English Foundation Course
          </CoursesTypography>
          <CoursesTypography>90 minutes</CoursesTypography>
          <CourseButton>200.000 Uzs</CourseButton>
        </CourseCell>
        <CourseCell>
          {" "}
          {/* course */}
          <CourseImg src={FakeImg} />
          <CoursesTypography $title>
            English Foundation Course
          </CoursesTypography>
          <CoursesTypography>90 minutes</CoursesTypography>
          <CourseButton>200.000 Uzs</CourseButton>
        </CourseCell>
        <CourseCell>
          {" "}
          {/* course */}
          <CourseImg src={FakeImg} />
          <CoursesTypography $title>
            English Foundation Course
          </CoursesTypography>
          <CoursesTypography>90 minutes</CoursesTypography>
          <CourseButton>200.000 Uzs</CourseButton>
        </CourseCell>
        <CourseCell>
          {" "}
          {/* course */}
          <CourseImg src={FakeImg} />
          <CoursesTypography $title>
            English Foundation Course
          </CoursesTypography>
          <CoursesTypography>90 minutes</CoursesTypography>
          <CourseButton>200.000 Uzs</CourseButton>
        </CourseCell>
      </CourseContainer>
    </div>
  );
};

export default Courses;
