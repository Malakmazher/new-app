import React from 'react';

const FormSection = ({ nameLabel, amountLabel, nameValue, onNameChange, amountValue, onAmountChange, error }) => {
  return (
    <div className="mb-8">
      <div className="flex gap-[18px]">
        <div className="mb-0 flex flex-col flex-1 min-w-0">
          <label className="text-sm mb-[7px] text-gray-600">{nameLabel}</label>
          <input
            type="text"
            value={nameValue}
            onChange={onNameChange}
            className="py-2 px-2.5 border-none rounded-lg text-sm text-black bg-white w-full box-border"
            placeholder="Type an Answer"
          />
        </div>
        <div className="mb-0 flex flex-col flex-1 min-w-0">
          <label className="text-sm mb-[7px] text-gray-600">{amountLabel}</label>
          <div className="flex items-center border border-gray-300 rounded-md w-full box-border">
            <input
              type="text"
              value={amountValue}
              onChange={onAmountChange}
              className="py-2 px-2.5 border-none rounded-lg text-sm text-black bg-white flex-grow w-full box-border"
              placeholder="0.00"
            />
          </div>
        </div>
      </div>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default FormSection;