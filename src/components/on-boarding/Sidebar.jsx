import React from 'react';

const Sidebar = ({ title, description, isMobile }) => {
  return (
    <div
      className={`bg-sky-500 text-white box-border flex items-center justify-center ${
        isMobile ? 'basis-full py-7 px-5' : 'basis-2/5 py-10 px-10'
      }`}
    >
      <div className="p-0 max-w-[410px]">
        <div className="text-[34px] font-semibold mb-5 leading-[1.3]">{title}</div>
        <div className="text-base text-gray-300 leading-[1.4]">{description}</div>
      </div>
    </div>
  );
};

export default Sidebar;