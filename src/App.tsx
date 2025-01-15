// App.tsx
import React, { useState } from 'react';
import Header from './components/MapIntegration/Layouts/Header';
import Sidebar from './components/MapIntegration/Layouts/Sidebar';

import Map from './components/MapIntegration/Main/Map';
// import * as ms from './components/MapIntegration/mapSource';
function App() {
  const [selectedContent, setSelectedContent] = useState<string>('Select an item from the sidebar.');

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar onSelect={setSelectedContent} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Body */}
        <div className="flex-1  bg-[#1C263C] ml-[280px] p-6 overflow-auto">
          <div className="">
            <div className='bg-[#283655] p-4 rounded-sm h-screen'>
               
               <Map/>
            </div>
          </div>
            
          
        </div>
      </div>
    </div>
  );
}

export default App;
