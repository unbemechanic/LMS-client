import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import styled from 'styled-components';
import InfoIcon from '../svg/attention';
import { InfoPopperContacts, LeadMenuVerticalDotsContact, LeadMenuVerticalDotsContacts } from './popper';
import ProfileImgs from '../assets/prof.png'

//style
const ArcadionWrapper = styled.div`
display: grid;
grid-template-columns: 13fr 1fr;
align-items: center;
border-radius: 6px;
border: 1px solid var(--300, #BFBAE3);
position: relative;
margin-bottom: 10px;
`
const ContactWrapper = styled.div`
    display: flex;
    position: relative;
    background-color: #EFEEF8;
    height: 50px;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 6px;
    background: var(--100, #EFEEF8);
    gap: 13px;
    width: 113%;
    margin-bottom: 10px;
    *{
        margin: 0;
    }
    
`
const ProfileImg = styled.div`
    background-image: url(${ProfileImgs});
    height: 35px;
    width: 35px;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    border: 1px solid #A098D5;
`
const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 100px;
    gap: 10px;
`
//style end

const ExpandIcon = styled(ExpandMoreIcon)`
    color: #BFBAE3;
`

export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <ArcadionWrapper>
      <Accordion sx={{boxShadow:'0', padding:'7px', boxSizing:'border-box'}}>
        <AccordionSummary
          expandIcon={<ExpandIcon fontSize='large' />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Elementary</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <ContactWrapper>
            <ProfileImg>{/* <img width={30} height={30} src={ProfileImgs}/> */}</ProfileImg>
            <div><p>William John</p><span>99 999 99 99</span></div>
            <InfoWrapper><InfoPopperContacts/><LeadMenuVerticalDotsContacts/></InfoWrapper>
          </ContactWrapper>
          <ContactWrapper>
            <ProfileImg>{/* <img width={30} height={30} src={ProfileImgs}/> */}</ProfileImg>
            <div><p>William John</p><span>99 999 99 99</span></div>
            <InfoWrapper><InfoPopperContacts/><LeadMenuVerticalDotsContacts/></InfoWrapper>
          </ContactWrapper>
        </AccordionDetails>
      </Accordion>
      <LeadMenuVerticalDotsContact/>
    </ArcadionWrapper>
      <ArcadionWrapper>
      <Accordion sx={{boxShadow:'0', padding:'7px', boxSizing:'border-box'}}>
        <AccordionSummary
          expandIcon={<ExpandIcon fontSize='large' />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Beginner</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <ContactWrapper>
            <ProfileImg>{/* <img width={30} height={30} src={ProfileImgs}/> */}</ProfileImg>
            <div><p>William John</p><span>99 999 99 99</span></div>
            <InfoWrapper><InfoPopperContacts/><LeadMenuVerticalDotsContacts/></InfoWrapper>
          </ContactWrapper>
          <ContactWrapper>
            <ProfileImg>{/* <img width={30} height={30} src={ProfileImgs}/> */}</ProfileImg>
            <div><p>William John</p><span>99 999 99 99</span></div>
            <InfoWrapper><InfoPopperContacts/><LeadMenuVerticalDotsContacts/></InfoWrapper>
          </ContactWrapper>
        </AccordionDetails>
      </Accordion>
      <LeadMenuVerticalDotsContact/>
    </ArcadionWrapper>
      <ArcadionWrapper>
      <Accordion sx={{boxShadow:'0', padding:'7px', boxSizing:'border-box'}}>
        <AccordionSummary
          expandIcon={<ExpandIcon fontSize='large' />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Matematika</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <ContactWrapper>
            <ProfileImg>{/* <img width={30} height={30} src={ProfileImgs}/> */}</ProfileImg>
            <div><p>William John</p><span>99 999 99 99</span></div>
            <InfoWrapper><InfoPopperContacts/><LeadMenuVerticalDotsContacts/></InfoWrapper>
          </ContactWrapper>
          <ContactWrapper>
            <ProfileImg>{/* <img width={30} height={30} src={ProfileImgs}/> */}</ProfileImg>
            <div><p>William John</p><span>99 999 99 99</span></div>
            <InfoWrapper><InfoPopperContacts/><LeadMenuVerticalDotsContacts/></InfoWrapper>
          </ContactWrapper>
        </AccordionDetails>
      </Accordion>
      <LeadMenuVerticalDotsContact/>
    </ArcadionWrapper>
      <ArcadionWrapper>
      <Accordion sx={{boxShadow:'0', padding:'7px', boxSizing:'border-box'}}>
        <AccordionSummary
          expandIcon={<ExpandIcon fontSize='large' />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Pre-Inter</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <ContactWrapper>
            <ProfileImg>{/* <img width={30} height={30} src={ProfileImgs}/> */}</ProfileImg>
            <div><p>William John</p><span>99 999 99 99</span></div>
            <InfoWrapper><InfoPopperContacts/><LeadMenuVerticalDotsContacts/></InfoWrapper>
          </ContactWrapper>
          <ContactWrapper>
            <ProfileImg>{/* <img width={30} height={30} src={ProfileImgs}/> */}</ProfileImg>
            <div><p>William John</p><span>99 999 99 99</span></div>
            <InfoWrapper><InfoPopperContacts/><LeadMenuVerticalDotsContacts/></InfoWrapper>
          </ContactWrapper>
        </AccordionDetails>
      </Accordion>
      <LeadMenuVerticalDotsContact/>
    </ArcadionWrapper>
      <ArcadionWrapper>
      <Accordion sx={{boxShadow:'0', padding:'7px', boxSizing:'border-box'}}>
        <AccordionSummary
          expandIcon={<ExpandIcon fontSize='large' />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Informatika</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <ContactWrapper>
            <ProfileImg>{/* <img width={30} height={30} src={ProfileImgs}/> */}</ProfileImg>
            <div><p>William John</p><span>99 999 99 99</span></div>
            <InfoWrapper><InfoPopperContacts/><LeadMenuVerticalDotsContacts/></InfoWrapper>
          </ContactWrapper>
          <ContactWrapper>
            <ProfileImg>{/* <img width={30} height={30} src={ProfileImgs}/> */}</ProfileImg>
            <div><p>William John</p><span>99 999 99 99</span></div>
            <InfoWrapper><InfoPopperContacts/><LeadMenuVerticalDotsContacts/></InfoWrapper>
          </ContactWrapper>
        </AccordionDetails>
      </Accordion>
      <LeadMenuVerticalDotsContact/>
    </ArcadionWrapper>
      <ArcadionWrapper>
      <Accordion sx={{boxShadow:'0', padding:'7px', boxSizing:'border-box'}}>
        <AccordionSummary
          expandIcon={<ExpandIcon fontSize='large' />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>History</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <ContactWrapper>
            <ProfileImg>{/* <img width={30} height={30} src={ProfileImgs}/> */}</ProfileImg>
            <div><p>William John</p><span>99 999 99 99</span></div>
            <InfoWrapper><InfoPopperContacts/><LeadMenuVerticalDotsContacts/></InfoWrapper>
          </ContactWrapper>
          <ContactWrapper>
            <ProfileImg>{/* <img width={30} height={30} src={ProfileImgs}/> */}</ProfileImg>
            <div><p>William John</p><span>99 999 99 99</span></div>
            <InfoWrapper><InfoPopperContacts/><LeadMenuVerticalDotsContacts/></InfoWrapper>
          </ContactWrapper>
        </AccordionDetails>
      </Accordion>
      <LeadMenuVerticalDotsContact/>
    </ArcadionWrapper>
    </div>
  );
}
