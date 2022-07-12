import './App.css';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './Components/SideBar';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Hydra1 from './Components/Hydra1';
import Hydra2 from './Components/Hydra2';
import Hydra3 from './Components/Hydra3';
import { useState } from 'react';
import { useStateContext } from './Contexts/ContextProvider';

function App() {
  const {activeMenu} = useStateContext();
  return (
    <BrowserRouter>
      <div className='h-screen w-screen'>
        <div className="flex relative h-full overflow-x-hidden">
          <div className='fixed right-4 bottom-4 z-1000 dark:bg-main-dark-bg'>
              <TooltipComponent content="Settings" position='Top'>
                <button className='p-3 text-white hover:bg-light-gray text-2xl hover:drop-shadow-xl' style={{ background: 'blue', borderRadius: '50%' }}>
                  <FiSettings />
                </button>    
              </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 z-1000 fixed sidebar bg-white dark:bg-secondary-dark-bg'>
              <SideBar  />
            </div>
          ):
          (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <SideBar  />
            </div>
          )
          }
          <div 
            className={`dark:bg-main-bg h-10 bg-main-bg w-full min-h-screen ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
              <div className='mb-5 fixed md:static h-10 bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                  <Navbar />
              </div>
            <div className='w-full h-full overflow-hidden'>
                <Routes>
                  <Route path='/' element={<Dashboard/>}/>
                  <Route path='/Dashboard' element={<Dashboard />}/>
                  <Route path='/Hydrophone1' element={<Hydra1/>}/>
                  <Route path='/Hydrophone2' element={<Hydra2/>}/>
                  <Route path='/Hydrophone3' element={<Hydra3/>}/>
               </Routes>
            </div>
          </div>
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
