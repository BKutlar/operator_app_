import React, { useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import TestCalendar from "./TestCalendar";
import Popup from 'reactjs-popup';
import "./Navbar.css";
import {Link } from 'react-router-dom';
// import 'reactjs-popup/dist/index.css'
const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  
`;
const LI = styled.li``;
const Item = styled.div`
  display: flex;
  padding: 12px 18px;
  padding-left: ${props => `${props.dept * 18}px`};
  align-items: center;

  :hover {
    background: #1888ff;
}
`;
const Label = styled.span`
  width: 100%;
  display: block;
  cursor: pointer;
  
`;
const Arrow = styled.span`
  display: flex;
  height: 25px;
  width: 35px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;

    border-top: 4px solid #000;

    transform: ${props => (props.toggle ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;

const MultiMenus = ({ menus }) => {
  const [activeMenus, setActiveMenus] = useState([]);
  
  const handleMenuClick = data => {
    console.log(data);
  };
  const handleCalendarClick = menuName => {
    console.log(menuName);
  }

  const handleArrowClick = menuName => {
    let newActiveMenus = [...activeMenus];

    if (newActiveMenus.includes(menuName)) {
      var index = newActiveMenus.indexOf(menuName);
      if (index > -1) {
        newActiveMenus.splice(index, 1);
      }
    } else {
      newActiveMenus.push(menuName);
    }

    setActiveMenus(newActiveMenus);
  };

  const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex }) => (
    <LI>
      <Item dept={dept}>
        <Label onClick={() => handleMenuClick(data)}>{data.label} </Label>
        {/* <Label onClick={()=>handleMenuClick(data.submenu)}><TestCalendar/></Label> */}
        
        {/* <TestCalendar onClick={()=>handleCalendarClick(data)}>{data.submenu.label}</TestCalendar> */}
        {hasSubMenu && (
          <>
          <Arrow
            onClick={() => handleArrowClick(menuName)}
            toggle={activeMenus.includes(menuName)}
          ></Arrow>
          
          </>
        )}
        {!hasSubMenu && (
          <>
          {/* <TestCalendar/> */}
          <Popup trigger={ <Link to="/reservation" className='btn'>Reservation</Link>} positon="right center">
            <Form/>
          </Popup>
          </>
          
        )}
      </Item>
      {hasSubMenu && (
        <SubMenu
          dept={dept}
          data={data.submenu}
          toggle={activeMenus.includes(menuName)}
          menuIndex={menuIndex}
        //  onClick={()=>handleArrowClick({menuName})}
        ></SubMenu>
      )}
    </LI>
  );

  const SubMenu = ({ dept, data, toggle, menuIndex }) => {
    if (!toggle) {
      return null;
    }

    dept = dept + 1;

    return (
      <UL>
        {data.map((menu, index) => {
          const menuName = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

          return (
            <ListMenu
              dept={dept}
              data={menu}
              hasSubMenu={menu.submenu}
              menuName={menuName}
              key={menuName}
              menuIndex={index}
              onClick={()=>handleMenuClick(data)}>{data.submenu} </ListMenu>
            
          );
        })}
      </UL>
    );
  };

  return (
    <UL>
      {menus.map((menu, index) => {
        const dept = 1;
        const menuName = `sidebar-menu-${dept}-${index}`;

        return (
          <ListMenu
            dept={dept}
            data={menu}
            hasSubMenu={menu.submenu}
            menuName={menuName}
            key={menuName}
            menuIndex={index}
          />
        );
      })}
    </UL>
  );
};

export default MultiMenus;
