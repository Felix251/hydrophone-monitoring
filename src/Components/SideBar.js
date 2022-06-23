import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import fish from '../Assets/fish.jpg';
import temperature from '../Assets/Temperature.png';
import signal from '../Assets/signal.png';
import { MdDashboard } from "react-icons/md";
import { useState } from 'react';
import { FaBars } from "react-icons/fa"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useStateContext } from '../Contexts/ContextProvider';

export default function SideBar() {
    const {activeMenu, setActiveMenu} = useStateContext();
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
    const isActive=true;
    const links = [
        {
            title: 'Dashboard',
            links : [{
                name : 'Dashboard',
                icon : <MdDashboard/>,  
            }]
        },
        {
            title: 'Hydrophones',
            links : [{
                name : 'Hydrophone1',
                icon : <img src={signal} width={30} height={30}/>,  
            },
            {
                name : 'Hydrophone2',
                icon : <img src={signal} width={30} height={30}/>,  
            },
            {
                name : 'Hydrophone3',
                icon : <img src={signal} width={30} height={30}/>,  
            },
        ]
        },
    ]
  return (
    <>
        
        <div className={`ml-3 h-screen md:overflow-hidden md:hover:overflow-auto overflow-auto pb-10`}>
            {activeMenu && ( <>
                <div className='flex items-center justify-between'>
                    <Link to="/" 
                        className='item-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900 dark:text-white h-15' onClick={() => {}}>
                        <span className='flex items-center'><img src={fish} width={100} height={100}/>Hydra</span>
                    </Link>
                </div>
                <div className='mt-10'>
                    {links.map((item) => (
                        <div key={item.title}>
                            <p className='text-gray-400 m-3 mt-4 uppercase'>
                                {item.title}
                            </p>
                            {item.links.map((link) => (
                                <NavLink to={`/${link.name}`} key={link.name} className={(isActive) => !isActive ? activeLink : normalLink}>
                                    {link.icon}
                                    <span className='capitalize'>
                                        {link.name}
                                    </span>
                                </NavLink>
                            ))}
                        </div>
                    ))}
                </div>
                </> )}
        </div>
    </>
  )
}

