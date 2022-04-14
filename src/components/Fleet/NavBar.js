import React from "react";
import styled from "styled-components";
// import "./style.css";
import MultiMenus from "./MultiMenus";
import TestCalendar from "./TestCalendar";
const Wrapper = styled.aside`
  background: #ccc;
  width: 300px;
`;
// const test = TestCalendar;
const menus = [
 
    {
        label: "Choose Fleet",
        submenu: [
            {
                label: "Fleet 1",
                submenu: [
                    {
                        label: "Buses",
                        submenu: [
                           { label: "A1",
                            // submenu: [
                            //  <TestCalendar/>
                            // ]
                        },
                           { label: "A2"},
                        ]
                    },
                    {
                        label: "Cars",
                        submenu: [
                            {label: 'Car1'},
                            {label: 'Car2'}
                        ]
                    }
                ]
            },
            {
                label: "Fleet 2",
                submenu: [
                    {
                        label: "Buses", 
                        submenu: [
                            {label: "A3"},
                            {label: "A4"}
                        ]
                    },

                    {
                        label: "Cars",
                        submenu: [
                            {label: "Car3"},
                            {label: "Car4"}
                        ]
                        
                    }
                ]
            },
            
        ]
    },
    
];

export default function NavBarFleet() {
    // const [click, setClick] = React.useState(null);
    // const handleClick = TestCalendar => {
    //     setClick(TestCalendar);
    // }
    return (
        <>
        <Wrapper>
            <MultiMenus menus={menus}>
                
            </MultiMenus>
            
        </Wrapper>
        
        </>
    )
}