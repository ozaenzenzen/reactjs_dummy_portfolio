import { useState } from "react";
import { Menu, X } from "lucide-react"; // or "@heroicons/react"

// const MobileSidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Menu Button */}
//       <button
//         className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out shadow-lg`}
//       >
//         <nav className="flex flex-col p-5 space-y-4">
//           <a href="#" className="text-lg font-medium hover:text-gray-400">
//             Home
//           </a>
//           <a href="#" className="text-lg font-medium hover:text-gray-400">
//             About
//           </a>
//           <a href="#" className="text-lg font-medium hover:text-gray-400">
//             Services
//           </a>
//           <a href="#" className="text-lg font-medium hover:text-gray-400">
//             Contact
//           </a>
//         </nav>
//       </div>

//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-50"
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}
//     </>
//   );
// };

// export default MobileSidebar;

const MobileSidebar = ({isOpen, toggleValue}) => {
    // const [isOpen, setIsOpen] = useState(false);
  
    return (
      <>
        {/* Menu Button (Positioned in the Header) */}
        {/* <button
          className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}
  
        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg z-40 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <nav className="flex flex-col p-5 space-y-4">
            <a href="#" className="text-lg font-medium hover:text-gray-400">
              Home
            </a>
            <a href="#" className="text-lg font-medium hover:text-gray-400">
              About
            </a>
            <a href="#" className="text-lg font-medium hover:text-gray-400">
              Services
            </a>
            <a href="#" className="text-lg font-medium hover:text-gray-400">
              Contact
            </a>
          </nav>
        </aside>
  
        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </>
    );
  };
  
  export default MobileSidebar;