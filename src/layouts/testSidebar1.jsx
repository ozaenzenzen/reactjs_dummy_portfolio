import React, { useState } from 'react';

const TestSidebar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTestSidebar1 = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* TestSidebar1 */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold">TestSidebar1</h2>
          <ul className="mt-4">
            <li className="mb-2">
              <a href="#" className="block hover:bg-gray-700 p-2 rounded">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block hover:bg-gray-700 p-2 rounded">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block hover:bg-gray-700 p-2 rounded">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleTestSidebar1}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1">
        {/* Hamburger button for mobile */}
        <button
          className="p-4 text-gray-800 focus:outline-none md:hidden"
          onClick={toggleTestSidebar1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Main content area */}
        <div className="p-4">
          <h1 className="text-2xl font-bold">Main Content</h1>
          <p>This is the main content area.</p>
        </div>
      </div>
    </div>
  );
};

export default TestSidebar1;