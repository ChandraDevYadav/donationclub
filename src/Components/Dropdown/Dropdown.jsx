import React, { useState } from "react";

const Dropdown = ({ title, items, type = "text", width = "w-full" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)} // Trigger dropdown on hover
      onMouseLeave={() => setIsOpen(false)} // Close dropdown on mouse leave
    >
      {/* Dropdown Button */}
      <button
        className="text-black font-medium px-4 py-6 rounded-md"
        type="button"
      >
        {title}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute left-0 mt-0 ${width} bg-white border shadow-lg z-10`}
        >
          {type === "text" ? (
            items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
              >
                {item.label}
              </a>
            ))
          ) : (
            <div className="grid grid-cols-6 gap-2 p-2">
              {items.map((item, index) => (
                <a key={index} href={item.link} className="block">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-20 object-cover rounded-md hover:opacity-80"
                  />
                  <p className="mt-1 text-sm text-center text-gray-700">
                    {item.label}
                  </p>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
