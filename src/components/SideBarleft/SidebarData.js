import React from  'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';


export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome />
    },

    {
        title: 'Charging Station',
        path: '/charging',
        icon: <FaIcons.FaChargingStation />
    },

    {
        title: 'Country',
        path: '/country',
        icon: <IoIcons.IoIosFlag />
    }, 

    {
        title: 'City',
        path: '/city',
        icon: <FaIcons.FaCity />
    }, 

    {
        title: 'Support',
        path: '/support', 
        icon: <MdIcons.MdContactSupport />
        
    },
]