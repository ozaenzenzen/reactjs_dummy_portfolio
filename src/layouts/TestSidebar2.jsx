import React from 'react';

const TestSidebar2 = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 z-30`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold">Sidebar</h2>
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
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default TestSidebar2;