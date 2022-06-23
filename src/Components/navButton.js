import React from 'react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

export default function navButton({title, func, icon, color}) {
  return (
    <TooltipComponent content={title} position="BottomCenter">
        <button type='button' onClick={func} style={{color}} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
            <span className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'>
                {icon}
            </span>
        </button>    
     </TooltipComponent>
  )
}
