// import React from "react";
// import { NavLink } from "react-router-dom";

// const NavBar: React.FC = () => {
//   return (
//     <div className="p-4 flex justify-end gap-4 text-2xl m-4">
//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           `hover:underline transition duration-200 ${
//             isActive ? "underline font-semibold" : ""
//           }`
//         }
//       >
//         Home |
//       </NavLink>
//       <NavLink
//         to="/mealplantwo"
//         className={({ isActive }) =>
//           `hover:underline transition duration-200 ${
//             isActive ? "underline font-semibold" : ""
//           }`
//         }
//       >
//         Week Two |
//       </NavLink>
//       <NavLink
//         to="/mealplanthree"
//         className={({ isActive }) =>
//           `hover:underline transition duration-200 ${
//             isActive ? "underline font-semibold" : ""
//           }`
//         }
//       >
//         Week Three |
//       </NavLink>
//       <NavLink
//         to="/mealplanfour"
//         className={({ isActive }) =>
//           `hover:underline transition duration-200 ${
//             isActive ? "underline font-semibold" : ""
//           }`
//         }
//       >
//         Week Four
//       </NavLink>
//     </div>
//   );
// };

// export default NavBar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Using Lucide icons

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 m-4">
      {/* Desktop Nav */}
      <div className="hidden md:flex justify-end gap-4 text-2xl">
        {["/", "/mealplantwo", "/mealplanthree", "/mealplanfour"].map((path, index) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `hover:underline transition duration-200 ${
                isActive ? "underline font-semibold" : ""
              }`
            }
          >
            {["Home", "Week Two", "Week Three", "Week Four"][index]}
            {index < 3 && " |"}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-end ">
        <button onClick={() => setIsOpen(!isOpen)} className="text-3xl cursor-pointer">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 w-full text-[18px]">
          {["/", "/mealplantwo", "/mealplanthree", "/mealplanfour"].map((path, index) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `block p-2 hover:underline ${
                  isActive ? "underline none" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {["Home", "Week Two", "Week Three", "Week Four"][index]}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
