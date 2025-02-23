import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Navigation from './Navigation';

const PageLayout = ({ title, description, activePage, children, showAddButton = false, onAddClick }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 768;

  return (
    <div className={`flex w-full max-w-full box-border justify-start items-stretch ${isMobile ? 'flex-col' : 'flex-row'} h-screen`}>
      <Sidebar title={title} description={description} isMobile={isMobile}/>
      <div className={`bg-gray-200 flex flex-col box-border ${isMobile ? 'basis-full py-6 px-5' : 'basis-3/5 py-8 px-10'}`}>
        <Navigation activePage={activePage} isMobile={isMobile}/>
        <div className="flex justify-between items-center mb-5">
          <div className="text-[42px] font-bold text-gray-800">{activePage}</div>
          {showAddButton && (
            <button onClick={onAddClick} className="bg-sky-500 text-white py-2 px-5 border-none rounded-md cursor-pointer text-sm mt-0">
              Add
            </button>
          )}
        </div>
        <div className="h-[1px] bg-white mb-5"></div>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;