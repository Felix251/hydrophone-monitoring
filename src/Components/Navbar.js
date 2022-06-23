import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { useStateContext } from '../Contexts/ContextProvider';
import navButton from './navButton';


export default function Navbar() {
  const {activeMenu, setActiveMenu} = useStateContext();
 /* const navButton = ({title, func, icon, color} ) => (
    <TooltipComponent content={title} position="BottomCenter">
                <button type='button' onClick={func} style={{color}} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
                  <span className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'>
                    {icon}
                  </span>
                </button>    
              </TooltipComponent>
  );*/
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
        <navButton title='Menu' func={(prevActiveMenu) => {setActiveMenu(!prevActiveMenu)}} color='blue' icon={<AiOutlineMenu/>}/>
    </div>
  )
}
