// import React, {useState} from 'react';
// import {Button} from './Button';
// import {Link} from 'react-router-dom';
// import './Navbar.css';
// import DropDown from './Dropdown';

// function NavBarFleet(){
//     const [click, setClick] = useState(false);
//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);
//     const [dropdown, setDropdown] = useState(false);
//     const onMouseEnter = () => {
//         if(window.innerWidth < 960) {
//             setDropdown(false);
//         } else {
//             setDropdown(true);
//         }
//     };

//     const onMouseLeave = () =>{
//         if(window.innerWidth < 960) {
//             setDropdown(false);
//         } else {
//             setDropdown(false);
//         }
//     }
//     return(
//         <>
//             <nav className='navBar'>
//                 <Link to='/charging' className='navBar-logo'>
//                     Epic
//                 </Link>
//                 <div className='menu-icon' onClick={handleClick}>
//                     <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
//                 </div>
//                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                     <li className="nav-item">
//                         <Link to='/charging' className="nav-links" onClick={closeMobileMenu}>
//                             Home
//                         </Link>
//                     </li>
//                     <li className="nav-item"
//                         onMouseEnter={onMouseEnter}
//                         onMouseLeave={onMouseLeave}
//                     >
//                         <Link to='/charging' className="nav-links" onClick={closeMobileMenu}>
//                             Drop <i className='fas fa-caret-right'/>
//                         </Link>
//                         {dropdown && <DropDown/>}

//                     </li>


//                 </ul>
//             </nav>        
//         </>
//     )
// }

// export default NavBarFleet; 


// import React from 'react';
// import './style.css';
// export default function NavBarFleet() {

//     return (
//         <>
//             <div>
//                 <h2>Multi-Level Dropdowns</h2>
//                 <p>In this example, we have created a .dropdown-submenu class for multi-level dropdowns (see style section above).</p>
//                 <p>Note that we have added jQuery to open the multi-level dropdown on click (see script section below).</p>
//                 <div class="dropdown">
//                     <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Tutorials
//                         <span class="caret"></span></button>
//                     <ul class="dropdown-menu">
//                         <li><a tabindex="-1" href="#">HTML</a></li>
//                         <li><a tabindex="-1" href="#">CSS</a></li>
//                         <li class="dropdown-submenu">
//                             <a class="test" tabindex="-1" href="#">New dropdown <span class="caret"></span></a>
//                             <ul class="dropdown-menu">
//                                 <li><a tabindex="-1" href="#">2nd level dropdown</a></li>
//                                 <li><a tabindex="-1" href="#">2nd level dropdown</a></li>
//                                 <li class="dropdown-submenu">
//                                     <a class="test" href="#">Another dropdown <span class="caret"></span></a>
//                                     <ul class="dropdown-menu">
//                                         <li><a href="#">3rd level dropdown</a></li>
//                                         <li><a href="#">3rd level dropdown</a></li>
//                                     </ul>
//                                 </li>
//                             </ul>
//                         </li>
//                     </ul>
//                 </div>

//             </div>

//             <script>
//                 $(document).ready(function(){
//                     $('.dropdown-submenu a.test').on("click", function (e) {
//                         $(this).next('ul').toggle();
//                         e.stopPropagation();
//                         e.preventDefault();
//                     });
// });
//             </script>
//         </>

//     )
// }
// import React from 'react';
// import ReactDOM from 'react-dom';
// class DropdownMenu extends React.Component {

//     getMenuItemTitle = (menuItem, index, depthLevel) => {
//       return menuItem.title;
//     };

//     getMenuItem = (menuItem, depthLevel, index) => {
//       let title = this.getMenuItemTitle(menuItem, index, depthLevel);

//       if (menuItem.submenu && menuItem.submenu.length > 0) {
//         return (
//           <li>
//             {title}
//             <DropdownMenu config={menuItem.submenu} submenu={true} />
//           </li>
//         );
//       } else {
//         return <li>{title}</li>;
//       }
//     };

//     render = () => {
//       let { config } = this.props;

//       let options = [];
//       config.map((item, index) => {
//         options.push(this.getMenuItem(item, 0, index));
//       });

//       if (this.props.submenu && this.props.submenu === true)
//         return <ul>{options}</ul>;

//       return <ul className="dropdown-menu">{options}</ul>;
//     };
//   }


//   ReactDOM.render(<DropdownMenu config={[
//       {
//         "title": "Option 1",
//         "submenu": null
//       },
//       {
//         "title": "Option 2",
//         "submenu": [
//           {
//             "title": "Option 2.1",
//             "submenu": [
//               {
//                 "title": "Option 2.1.1",
//                 "submenu": null
//               },
//               {
//                 "title": "Option 2.1.2",
//                 "submenu": null
//               }
//             ]
//           },
//           {
//             "title": "Option 2.2",
//             "submenu": [
//               {
//                 "title": "Option 2.2.1",
//                 "submenu": null
//               },
//               {
//                 "title": "Option 2.2.2",
//                 "submenu": null
//               }
//             ]
//           }
//         ]
//       }
//     ]}/>, document.querySelector("#app"))
//   export default DropdownMenu;

import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
// import "./style.css";
import MultiMenus from "./MultiMenus";

const Wrapper = styled.aside`
  background: #ccc;
  width: 300px;
`;

const menus = [
    // {
    //     label: "Menu 1"
    // },
    // {
    //     label: "Menu 2",
    //     submenu: [
    //         {
    //             label: "Sub Menu 1"
    //         },
    //         {
    //             label: "Sub Menu 2"
    //         }
    //     ]
    // },
    {
        label: "Choose Fleet",
        submenu: [
            {
                label: "Fleet 1",
                submenu: [
                    {
                        label: "Buses",
                        submenu: [
                           { label: "A1"},
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
                        // submenu: [
                        //     {
                        //         label: "Lorem 1"
                        //     },
                        //     {
                        //         label: "Lorem 2",
                        //         submenu: [
                        //             {
                        //                 label: "Super Deep"
                        //             }
                        //         ]
                        //     }
                        // ]
                    }
                ]
            },
            // {
            //     label: "Sub Menu 3"
            // },
            // {
            //     label: "Sub Menu 4",
            //     submenu: [
            //         {
            //             label: "Last 1"
            //         },
            //         {
            //             label: "Last 2"
            //         },
            //         {
            //             label: "Last 3"
            //         }
            //     ]
            // }
        ]
    },
    // {
    //     label: "Menu 4"
    // }
];

export default function NavBarFleet() {
    return (
        <Wrapper>
            <MultiMenus menus={menus} />
        </Wrapper>
    )
}