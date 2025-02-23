import React from "react";

const ChoiceButton = ({ choice, isSelected, onSelect }) => {
    return (
        <button
            type="button"
            onClick={onSelect}
            className={`flex flex-col items-center justify-center p-4 rounded-2xl cursor-pointer transition-colors duration-200 shadow-md
                  ${isSelected
                    ? 'bg-sky-500 text-white'
                    : 'bg-white text-gray-800'}`}
        >
            {choice.icon}
            <span className="mt-2 text-sm text-center">{choice.label}</span>
        </button>
    )
}

export default ChoiceButton;
