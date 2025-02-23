import React from 'react';
import { Link } from 'react-router-dom';

const FooterNavigation = ({ skipTo, onNext, nextButtonText = "Next", showSkip = true }) => {
    return (
      <div className="flex justify-end mt-4">
        {showSkip && (
          <Link to={skipTo} className="text-decoration-none">
            <button className="bg-transparent text-sky-500 py-2 px-5 border border-sky-500 rounded-md cursor-pointer text-sm mr-2.5">
              Skip
            </button>
          </Link>
        )}
        <button onClick={onNext} className="bg-sky-500 text-white py-2 px-5 border-none rounded-md cursor-pointer text-sm">
          {nextButtonText}
        </button>
      </div>
    );
  };

export default FooterNavigation;