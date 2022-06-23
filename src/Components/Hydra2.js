import React from 'react'
import Line from './Charts/Line'
import Thermometer from './Charts/Thermometer';

export default function Hydra2() {
  return (
    <div className='mt-12 w-full h-full overflow-hidden'>
        <h1 className='ml-12'>Hydrophone 2</h1>
       <div className='w-full h-full flex justify-between'>
        <div className='w-2/3 '>
          <Line  />   
        </div>
        <div  className='mr-20 '> 
          <h1 className='my-7'>Temperature(°C)</h1>
          <Thermometer width="100px" className='bg-white' height="240px" steps={5} minValue={0} maxValue={100} currentValue={50}> 
            </Thermometer>
          </div>
        </div>
    </div>
  )
}
