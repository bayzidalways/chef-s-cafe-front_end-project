import { FaSearch, FaUserCircle } from "react-icons/fa";

export const Navbar = () => {
  return (
    <>
      <nav className="text-black px-4 py-3 flex flex-wrap justify-between items-center">
        {/* Left Side - Logo */}
        <div className="text-2xl font-bold">
          <h1>Recipe Calories</h1>
        </div>

        {/* Middle - Menu Items */}
        <ul className="hidden sm:flex space-x-4 text-gray-400">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">Recipes</li>
          <li className="hover:text-black cursor-pointer">About</li>
          <li className="hover:text-black cursor-pointer">Search</li>
        </ul>

        {/* Right Side - User Icon */}
        <div className="flex flex-wrap space-x-2 items-center mt-2 sm:mt-0">
          <div className="flex items-center justify-center mt-1 relative">
            <FaSearch className="absolute left-2 text-gray-600" />
            <input
              type="text"
              placeholder="Search"
              className="p-2 pl-8 rounded-full bg-gray-300 text-black placeholder-gray-600 text-sm"
            />
          </div>
          <div className="text-4xl cursor-pointer text-green-600">
            <FaUserCircle />
          </div>
        </div>
      </nav>
    </>
  );
};

