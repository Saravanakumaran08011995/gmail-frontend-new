import { NavLink } from 'react-router-dom';
import { FiInbox, FiSend, FiPlus, FiStar, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import '../App.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 h-screen md:w-64 pt-5">
      <div className="px-4">
        <div className="md:hidden flex items-center justify-between">
          <div className="text-2xl font-bold"></div>
          <button onClick={toggleSidebar}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <ul className={`${isOpen ? '' : 'hidden'} md:block mt-2 leading-10`}>
          <li>
            <NavLink to="/compose">
              <div className="flex items-center py-1 hover:bg-gray-200">
                <FiPlus className="inline-block mr-2" /> 
                <span className="inline-block">Compose</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/sent">
              <div className="flex items-center py-1 hover:bg-gray-200">
                <FiSend className="inline-block mr-2" /> 
                <span className="inline-block">Sent</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/inbox">
              <div className="flex items-center py-1 hover:bg-gray-200">
                <FiInbox className="inline-block mr-2" /> 
                <span className="inline-block">Inbox</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/starred">
              <div className="flex items-center py-1 hover:bg-gray-200">
                <FiStar className="inline-block mr-2" /> 
                <span className="inline-block">Starred</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
