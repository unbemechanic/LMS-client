import React, { useState } from 'react';
// import Leads from './leads';
import Groups from './teacher/groups';
import Teachers from '../pages/teacher/teaches';
import Budget from './budget';
import Students from './students';
import Notification from './notification';
import './sidebar.css'
import { LocationSec, Logo } from './styles';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SelectInput from '@mui/material/Select/SelectInput';
import SelectAddress from '../../materials/selectAddress';
import TeacherSvg from '../../svg/teacher';
import StudentSvg from '../../svg/student';
import SvgComponent from '../../svg/groupSVG';
import styled from 'styled-components';
import LeadsSvg from '../../svg/leads';
import BudgetSvg from '../../svg/budget';
import NotifSvg from '../../svg/notification';
import { Link, useLocation } from 'react-router-dom';
import SettingSvg from '../../svg/setting';
import Salary from './teacher/salary';
import ProfImg from '../../assets/profileImg.png'
import AccordionUsage from './management/acradion';

const Student = styled(StudentSvg)`
    font-size: 30px;
    background-color: #ffffff;
    color: white;
`

const Buttons = styled.button`
    display: flex;
    align-items: center;
    border-radius: 8px;
    background: #FFF;
    border: none;
    height: 30px;
    padding: 20px 12px;
    gap: 15px;
    color: ${(props)=>props.$profile ?'#2C2669':'#2C2669'} ;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 14px;
    font-family: "Public Sans";
    font-weight: 500;
    width: 100%;
    position: ${(props)=>props.$profile ?'absolute':''};
    bottom: ${(props)=>props.$profile ?'10px':''};
    width: ${(props)=>props.$profile ?'260px':''};
    :first-child{
        color: black;
    }
    &:hover{
        background: #E8E8E8;
    }
    &:disabled{
        color:#6053B9;
        background-color: #E8E8E8;
    }
    &:focus{
        color:#6053B9;
        background-color: #E8E8E8;
    }
`
export const StyledLink = styled(Link)`
    text-decoration: none;
`
export const ButtonImg = styled.div`
    border-radius: 50%;
  background-image: url(${ProfImg});
  height: 36px;
  width: 36px;
  background-size: cover;
`
export const Divider = styled.div`
    height: 2px;
    background-color: #Efeef8;
    border-radius: 2px;
    margin: 30px 0;
`

const Sidebar = ({children}) => {
    const location = useLocation();
    const[currentTabs ,setCurrentTabs] = useState('Leads');
    
    return (
        <div className='container'>
            <div className='tabs'>
                {/* <div style={{position:'absolute', height:'100%', top:'0px', bottom:'0px'}}> */}
                    <StyledLink to='/'><Logo>EduManSim</Logo></StyledLink>
                    <LocationSec>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_2130_1699)">
                            <path d="M7.5 9.16699C7.5 9.83003 7.76339 10.4659 8.23223 10.9348C8.70107 11.4036 9.33696 11.667 10 11.667C10.663 11.667 11.2989 11.4036 11.7678 10.9348C12.2366 10.4659 12.5 9.83003 12.5 9.16699C12.5 8.50395 12.2366 7.86807 11.7678 7.39922C11.2989 6.93038 10.663 6.66699 10 6.66699C9.33696 6.66699 8.70107 6.93038 8.23223 7.39922C7.76339 7.86807 7.5 8.50395 7.5 9.16699Z" stroke="#2C2669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.5 9.16699C7.5 9.83003 7.76339 10.4659 8.23223 10.9348C8.70107 11.4036 9.33696 11.667 10 11.667C10.663 11.667 11.2989 11.4036 11.7678 10.9348C12.2366 10.4659 12.5 9.83003 12.5 9.16699C12.5 8.50395 12.2366 7.86807 11.7678 7.39922C11.2989 6.93038 10.663 6.66699 10 6.66699C9.33696 6.66699 8.70107 6.93038 8.23223 7.39922C7.76339 7.86807 7.5 8.50395 7.5 9.16699Z" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.6523 17.7714C10.3467 17.9013 10.0091 17.9369 9.68308 17.8736C9.35701 17.8104 9.05729 17.6511 8.82235 17.4164L5.28568 13.8805C4.50958 13.1044 3.93713 12.1486 3.61914 11.098C3.30116 10.0475 3.24748 8.93466 3.46288 7.85838C3.67828 6.78211 4.15609 5.77566 4.85389 4.92841C5.55169 4.08115 6.44789 3.41929 7.46293 3.0016C8.47796 2.5839 9.58043 2.42328 10.6724 2.53401C11.7645 2.64474 12.8123 3.02338 13.7228 3.63633C14.6333 4.24927 15.3784 5.07755 15.892 6.04763C16.4055 7.01771 16.6715 8.09958 16.6665 9.19719" stroke="#2C2669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.6523 17.7714C10.3467 17.9013 10.0091 17.9369 9.68308 17.8736C9.35701 17.8104 9.05729 17.6511 8.82235 17.4164L5.28568 13.8805C4.50958 13.1044 3.93713 12.1486 3.61914 11.098C3.30116 10.0475 3.24748 8.93466 3.46288 7.85838C3.67828 6.78211 4.15609 5.77566 4.85389 4.92841C5.55169 4.08115 6.44789 3.41929 7.46293 3.0016C8.47796 2.5839 9.58043 2.42328 10.6724 2.53401C11.7645 2.64474 12.8123 3.02338 13.7228 3.63633C14.6333 4.24927 15.3784 5.07755 15.892 6.04763C16.4055 7.01771 16.6715 8.09958 16.6665 9.19719" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.6008 16.768C17.9505 16.4184 18.1886 15.973 18.2852 15.488C18.3817 15.003 18.3322 14.5003 18.143 14.0435C17.9538 13.5866 17.6334 13.1961 17.2223 12.9214C16.8111 12.6466 16.3277 12.5 15.8333 12.5C15.3388 12.5 14.8554 12.6466 14.4442 12.9214C14.0331 13.1961 13.7127 13.5866 13.5235 14.0435C13.3343 14.5003 13.2848 15.003 13.3813 15.488C13.4779 15.973 13.716 16.4184 14.0658 16.768C14.4141 17.1172 15.0033 17.6389 15.8333 18.3339C16.7091 17.5922 17.2991 17.0705 17.6008 16.768Z" stroke="#2C2669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.6008 16.768C17.9505 16.4184 18.1886 15.973 18.2852 15.488C18.3817 15.003 18.3322 14.5003 18.143 14.0435C17.9538 13.5866 17.6334 13.1961 17.2223 12.9214C16.8111 12.6466 16.3277 12.5 15.8333 12.5C15.3388 12.5 14.8554 12.6466 14.4442 12.9214C14.0331 13.1961 13.7127 13.5866 13.5235 14.0435C13.3343 14.5003 13.2848 15.003 13.3813 15.488C13.4779 15.973 13.716 16.4184 14.0658 16.768C14.4141 17.1172 15.0033 17.6389 15.8333 18.3339C16.7091 17.5922 17.2991 17.0705 17.6008 16.768Z" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.8333 15V15.0083" stroke="#2C2669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.8333 15V15.0083" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_2130_1699">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                        </svg>
                        <SelectAddress/><KeyboardArrowDownOutlinedIcon/>
                    </LocationSec>
                    <StyledLink to='/leads'><Buttons><LeadsSvg/>Leads</Buttons></StyledLink>
                    <StyledLink to='/teacher'><Buttons><TeacherSvg/>Teacher</Buttons></StyledLink>
                    <StyledLink to='/groups'><Buttons ><SvgComponent/>Groups</Buttons></StyledLink>
                    <StyledLink to='/students'><Buttons ><StudentSvg/>Students</Buttons></StyledLink>
                    <StyledLink to='/budget'><Buttons><BudgetSvg/>Budget</Buttons></StyledLink>
                    <Divider></Divider>
                    <StyledLink to='/notifications'><Buttons><NotifSvg/>Notification</Buttons></StyledLink>
                    <StyledLink ><AccordionUsage/></StyledLink>
                    <StyledLink to='/teacher/profile'><Buttons $profile><ButtonImg/>Profile</Buttons></StyledLink>
                {/* </div> */}
            </div>
        </div>
    );
};

export default Sidebar;