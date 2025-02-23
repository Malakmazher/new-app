import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ activePage, isMobile }) => {
  const navIcons = {
      Welcome: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="#777">
            <path d="M20 7L9 0 2 4v16h20V7zM7.9 18.1h-3V15h3v3.1zm3-4h-3v-3h3v3zm3-4h-3V8h3v3zm3-4h-3V4.9h3V8z"/>
          </svg>
        ),
        Accounts: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="#777">
            <path d="M12 2a5 5 0 100 10 5 5 0 000-10zM4 21v-2a5 5 0 015-5h6a5 5 0 015 5v2H4z"/>
          </svg>
        ),
        Income: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="#777">
            <path d="M2 20h20v-1H2v1zm4-3h12v-1H6v1zM2 10h20V9H2v1zm4-3h12V6H6v1zM2 3v1h20V3H2z"/>
          </svg>
        ),
        Housing: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="#777">
            <path d="M20 7L9 0 2 4v16h20V7z"/>
          </svg>
        ),
        Transportation: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="#777">
            <path d="M19 8l-3.92 0c-.11-.27-.19-.54-.28-.82l1.75-3.84c.07-.15.1-.32.1-.5 0-.55-.45-1-1-1H8.5c-.55 0-1 .45-1 1 0 .18.03.35.1.5l1.75 3.84c-.09.28-.17.55-.28.82L5 8 5 19h14L19 8zM6 18H6V9H5v9H6zm12 0H12V9h6v9H18z"/>
          </svg>
        ),
        Lifestyle: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="#777">
            <path d="M12 21.35l-1.49-1.34C2.85 12.38 0 9.14 0 5.5A5.5 5.5 0 015.5 0C7.35 0 9.11.86 10.38 2.32L12 3.96l1.62-1.64C14.89.86 16.65 0 18.5 0A5.5 5.5 0 0124 5.5c0 3.64-2.85 6.88-10.51 14.51L12 21.35z"/>
          </svg>
        )
  };

  const navLinks = [
    { to: "/welcome", label: "Welcome", icon: navIcons.Welcome },
    { to: "/accounts", label: "Accounts", icon: navIcons.Accounts },
    { to: "/income", label: "Income", icon: navIcons.Income },
    { to: "/housing", label: "Housing", icon: navIcons.Housing },
    { to: "/transportation", label: "Transportation", icon: navIcons.Transportation },
    { to: "/lifestyle", label: "Lifestyle", icon: navIcons.Lifestyle },
  ];

  return (
    <div className={`flex justify-center mb-7 gap-15 ${isMobile ? 'flex-wrap' : 'flex-nowrap'}`}>
      {navLinks.map((link) => (
        <Link key={link.to} to={link.to} className="text-decoration-none">
          <div
            className={`p-0 mr-[15px] cursor-pointer text-sm flex flex-col items-center ${
              activePage === link.label ? 'text-black' : 'text-gray-500'
            }`}
          >
            <div
              className={`rounded-full w-[30px] h-[30px] flex justify-center items-center mb-2 ${
                activePage === link.label ? 'bg-gray-300' : 'bg-white'
              }`}
            >
                {React.cloneElement(link.icon, {
                    fill: activePage === link.label ? "#009DE0" : "#777",
                })}
            </div>
            <span className={`text-xs text-center ${activePage === link.label ? 'text-black' : 'text-gray-500'}`}>{link.label}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;