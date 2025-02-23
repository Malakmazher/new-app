import React from 'react';

const ListSection = ({ items }) => {
  return (
    <div className="mb-[35px]">
      <div className="text-2xl font-bold mb-[18px] text-gray-800">List</div>
      {items.map((item, index) => (
        <div key={index} className="bg-white py-3.5 px-5 rounded-md mb-2.5 flex justify-between items-center border border-gray-300">
          <div className="text-xl text-gray-800 font-bold">{item.name}</div>
          <div className="flex items-center gap-1">
            <div className="text-xl font-bold text-gray-800">{item.amount}</div>
            <button className="bg-transparent border-none cursor-pointer p-1.5 ml-4">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAAEAWj7AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAApElEQVRImWNgGEhgYMhgAAA8IAgGBwYFBAUBjQwEDg8GAcRgYBBjYAgZggKGwGBj0GBgYGRoYJgcDAyMTA0h8GA8gJTAwMGkGYyBgsAgMTAzBkcDAyBQQCQAe/RgYWBiA4Wwg4GBicggwMKEAw0BgbCwM0jgcgYFxgmBgYHBg0DA4jIwMCzicDAwMLC4EwhxAaKzBAgwAP6ofm+MlSxoAAAAASUVORK5CYII="
                alt="delete"
                className="w-3 h-3 opacity-60"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListSection;