import styled from "styled-components";

import HorizontalMenuIcon from '../../svg/horizontalMenu'
import VerticalMenuIcon from '../../svg/verticalMenu'

export const Logo = styled.div`
    width: 100%;
    background-color: #2C2669;
    color: white;
    text-align: center;

    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 114.286% */
    padding: 15px 0;
    box-sizing: border-box;
    margin-bottom: 30px;
    border-radius: 25px;
`
export const LocationSec = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-bottom: 30px;
    border-bottom: 2px solid #EFEEF8;
    padding-bottom: 20px;
    color: #2C2669;

    :last-child{
        margin-left: auto;
        padding-right: 10px;
    }
    :nth-child(2){
        border: none;
        &:active{
            border: none;
            outline: none;
            /* background-color: red; */
        }
    }
`

//styles of 
export const ButtonWrapper = styled.div`
  border: 1px solid #2C2669;
  border-radius: 6px;
  padding: 0px;
  height: fit-content;
  border-collapse: collapse;
  display: flex;
  height: 44px;
  width: 88px;
  box-sizing: border-box;
`
export const Horizon = styled(HorizontalMenuIcon)`
  width: 44px;
  height: 100%;
  background-color: lime;
  padding: 8px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 4px 0 0 4px;
`
export const Vertical = styled(VerticalMenuIcon)`
  width: 44px;
  height: 100%;
  /* background-color: lime; */
  padding: 8px;
  box-sizing: border-box;
  cursor: pointer;
  fill: #2C2669;
  /* margin-left: 30px; */
  border-radius: 0 4px   4px 0;
`

export const Filters = styled.div`
  display: ${(props)=> props.$leads ? 'flex' : 'grid'};
  justify-content: space-between;
  grid-template-columns: ${(props)=> props.$leads ? '' : '5fr 1fr'};
  width: 95%;
  margin-inline: auto;
  padding-top: 40px;
  gap: 30px;
  /* background-color: lime; */
`
export const InputWrapper = styled.div`
  height: 44px;
  width: 160px;
  background-color: #fff;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--300, #BFBAE3);
  background: var(--Color-7, #FFF);
  color: #BFBAE3;
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  cursor: ${(props)=>props.$reset ? "pointer":''};
`
export const FilterWrapper = styled.div`
  display: ${(props)=> props.$student ? "grid" :'flex'};
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  gap: 20px;

`
export const Inputs = styled.input`
  border: none;
  outline: none;
  color: #BFBAE3;
  width: 80%;
`
export const Selects = styled.select`
  border: none;
  outline: none;
  width: 100%;
  color: #BFBAE3;
`

//style of vertical menu

export const FirstWrapper = styled.div`
  width: 400px;
  height: ${(props)=>props.$section ? '750px': '670px'};
  border-radius: 16px;
  background: var(--Color-7, #FFF);
  padding: 20px;
  box-sizing: border-box;
  position: ${(props)=>props.$section ? 'relative':''};
`
export const Header = styled.p`
  color: var(--600, #2C2669);
  font-family: "Public Sans";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 136.364% */
`
export const ButtonPlus = styled.button`
  width: 100%;
  border-radius: 6px;
  border: 1px solid var(--600, #2C2669);
  padding: 10px 0 5px 0;
  background-color: inherit;
  margin-bottom: 20px;
`
export const DetailSec = styled.div`
  border-radius: 6px;
  border: 1px solid var(--300, #BFBAE3);
  width: 100%;
  height: 64px;
  box-sizing: border-box;
  padding: 10px 20px;
  margin-bottom: 10px;
  position: relative;
  *{
    margin: 0;
  }
`
export const Typography = styled.p`
  color: ${(props)=>props.$n ? '#6053B9':'#2C2669'} ;
  font-family: "Public Sans";
  font-size: ${(props)=>props.$n ? '22px':'14px'};
  font-style: normal;
  font-weight: ${(props)=>props.$n ? '700':'400'};
  line-height: ${(props)=>props.$n ? '30px':'16px'};
`
export const VerticalContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-left: 65px;
  margin-top: 45px;
` 
export const SectionHeader = styled.div`
  background-color: #ffffff;
  z-index: 1;
  height: 116px;
`
export const ArcadionScroll = styled.div`
  height: 580px;
  overflow-y: scroll;
  background-color: #ffffff;
`
export const GroupImg = styled.div`
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 50%;
  background-color: #A098D5;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HistoryWrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 3px 8px 0px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24);
  padding: 20px;
  box-sizing: border-box;
  h5{
    border-bottom: 2px solid #BFBAE3;
  }
  h3{
    color: var(--600, #2C2669);
    font-family: "Public Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
  }
  p{
    color: var(--500, #6053B9);
    font-family: "Public Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }
`
export const NotificationContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  height: 90%;
  margin-right: 30px;
  margin-top: 30px;
  display: inline-block;
  width: 78dvw;
  padding: 30px;
  box-sizing: border-box;
  justify-content: space-between;
  position: relative;
`
export const NotificationTable = styled.table`
  width: 100%;
  margin-inline: auto;
`
export const NotificationTableRow = styled.tr`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
  width: 100%;
  /* background-color: red; */
  border-bottom: 1px solid #7575758f;
  padding: 10px;
  align-items: center;
`
export const TableRows = styled.th`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NotificationAdd = styled.button `
  background-color: #2C2669;
  border: none;
  border-radius: 6px;
  display: inline-flex;
  padding: 14px 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  color: white;
  font-family: "Public Sans" sans-serif;
  margin-left: auto;
  position: absolute;
  right: 30px;
  top: 40px;
  cursor: pointer;
`
