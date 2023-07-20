import React from 'react';
import { FaStar } from 'react-icons/fa';

const EmailItem = ({ email, onSelect,onDelete }) => {
  const handleSelect = () => {
    onSelect(email._id);
  };
  
  const handleDelete = () => {
    onDelete(email._id);
  };
  

  return (
    <div className={`px-4 py-3 ${email.read ? '' : 'font-medium bg-gray-100'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input type="checkbox" checked={email.selected} onChange={handleSelect} className="mr-2" />
          <FaStar className={`cursor-pointer ${email.starred ? 'text-yellow-400' : 'text-gray-300'}`} />
          <span className="ml-2">{email.sender}</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2">{new Date(email.date).toLocaleDateString()}</span>
          <button onClick={handleDelete} className="text-gray-400 hover:text-red-600">
            Delete
          </button>
        </div>
      </div>
      <div className="mt-2">
        <span className="mr-2">{email.subject}</span>
        <span className="text-sm text-gray-500">{email.body}</span>
      </div>
    </div>
  );
};

export default EmailItem;
