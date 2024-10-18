import styled from "styled-components";

export const CourseCell = styled.div`
    width: 349px;
    height: 349px;
    flex-shrink: 0;
    box-sizing: border-box;
    background-color: white;
    border-radius: 16px;
    padding: 5px;
`
export const CourseImg = styled.img`
    width: 100%;
    height: 60%;
    border-radius: 16px;
`
export const CoursesTypography = styled.p`
    font-family: "Public Sans" sans-serif;
    color: #2C2669;
    font-size: ${(props) => props.$title ? '20px' : '16px'};
    font-weight: ${(props) => props.$title ? '700' : '400'};
    line-height: ${(props) => props.$title ? '30px' : '20px'};
    margin: 5px 0 5px 15px;

`
export const CourseButton = styled.button`
    display: inline-flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 6px;
    background: var(--600, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669);
    border: none;
    margin: 15px 0 0 15px;
`
export const CourseContainer = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
`