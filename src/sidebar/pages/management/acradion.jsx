import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import SettingSvg from '../../../svg/setting';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function AccordionUsage() {
  return (
    <div>
      <Accordion sx={{boxShadow:'none'}}>
        <AccordionSummary
            sx={{paddingLeft:'10px'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <SettingSvg/> Management
        </AccordionSummary>
        <AccordionDetails sx={{display:'grid', justifyContent:'end', position:'relative'}}>
          <VerticalLine>
            <HorizontalLine></HorizontalLine>
            <HorizontalLine $middle></HorizontalLine>
            <HorizontalLine $bottom></HorizontalLine>
          </VerticalLine>
          <StyledLink to={'/management/office'}><Buttons>Office</Buttons></StyledLink>
          <StyledLink to={'/management/ceo'}><Buttons>CEO</Buttons></StyledLink>
          <StyledLink to={'/management/archive'}><Buttons>Archive</Buttons></StyledLink>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
const StyledLink = styled(Link)`
    text-decoration: none;
`
const Buttons = styled.button`
    border-radius: 8px;
    background: var(--100, #EFEEF8);
    color: var(--600, #2C2669);
    font-family: "Public Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
    display: flex;
    display: flex;
    width: 172px;
    padding: 8px 12px;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
    border: none;
    cursor: pointer;
`

const VerticalLine = styled.div`
    width: 0.5px;
    height: 95px;
    border: 2px solid var(--100, #EFEEF8);
    background: #F6F6F6;
    position: absolute;
    left: 50px;
    top: 8px;
    box-sizing: border-box;
`
const HorizontalLine = styled.div`
    width: 20px;
    height: 8px;
    position: absolute;
    left: -2px;
    top: ${(props) => props.$middle ? '50px':(props) => props.$bottom ? '90px':'6px'};
    border-radius: 0px 0px 0px 8px;
    border-bottom: 4px solid var(--100, #EFEEF8);
    border-left: 4px solid var(--100, #EFEEF8);
`