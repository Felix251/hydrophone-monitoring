import React from 'react';
import Line from './Charts/Line';
import Thermometer from './Charts/Thermometer';
import Header from './Header';
import { useStateContext } from '../Contexts/ContextProvider';

export default function Hydra1() {
  const {datas, setDatas} = useStateContext();
  return (
    <div className='mt-12 w-full h-full '>
        <Header categorie='page' title='Hydrophone1'/>
       <div className='w-full h-full flex justify-between'>
        <div className='w-2/3 '>
          <Line  />   
        </div>
        <div  className='mr-20 flex flex-col items-center'> 
          <h1 className='my-7'>Temperature(°C)</h1>
          {datas.map((item, index) => (
          <Thermometer width="100px" className='bg-white' height="240px" steps={5} minValue={0} maxValue={100} currentValue={item.temp}> 
            </Thermometer>
             ))}
          </div>
        </div>
    </div>
  )
}
