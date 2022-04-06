// import MenuItems from './MenuItems_';

// const DropDown = ({submens, dropdown, depthlevel}) => {
//     depthlevel = depthlevel+1;
//     const dropdownClass =  depthlevel>1 ? "dropdown-submenu":"";

//     return(
//         <ul className={`dropdown ${dropdownClass} ${dropdown ? "show":""}`}>
//             {
//                 submens.map((submenu, index)=>{
//                     <MenuItems item={submens} key={index} depthlevel={depthlevel}/>
//                 })
//             }
//         </ul>
//     )
// }

// export default DropDown;
import React, {useState}from 'react';
import {MenuItems} from './MenuItems';
import {Link} from 'react-router-dom';
import './Dropdown.css';

function Dropdown() {
    const [click, setClick] = useState(false);
    const handleClick =()=> setClick(!click);
    return <>
        <ul onClick={handleClick}
        className={click ? 'dropdown-menu clicked': 'dropdown-menu'}>
            {MenuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                            {item.title}
                        </Link>
                       
                    </li>
                )
            })}
        </ul>
    </>;
}

export default Dropdown;