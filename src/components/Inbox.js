import React, { useState, useEffect } from 'react';
import EmailItem from './EmailItem';
import axios from 'axios';

const Inbox = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [showStarred, setShowStarred] = useState(false);
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://saravana-kumaran-gmail-backend-j5s45brtm.vercel.app/api/emails');
      setEmails(response.data);
    };

    fetchData();
  }, []);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setEmails(emails.map((email) => ({ ...email, selected: !selectAll })));
  };

  const handleStarredFilter = () => {
    setShowStarred(!showStarred);
  };

  const handleDeleteSelected = () => {
    setEmails(emails.filter((email) => !email.selected));
    setSelectAll(false);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl font-medium mb-6">Inbox</h1>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <div className="flex items-center mb-2 sm:mb-0">
          <input type="checkbox" checked={selectAll} onChange={handleSelectAll} className="mr-2" />
          <span className="font-medium">Select All</span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" checked={showStarred} onChange={handleStarredFilter} className="mr-2" />
          <span className="font-medium">Starred Only</span>
        </div>
        <button
          onClick={handleDeleteSelected}
          className="bg-red-500 text-white px-4 py-2 rounded-md ml-4 disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!emails.some((email) => email.selected)}
        >
          Delete Selected
        </button>
      </div>
      <div className="bg-white shadow overflow-hidden rounded-md">
        {emails
          .filter((email) => !showStarred || email.starred)
          .map((email) => (
            <EmailItem
              key={email._id}
              email={email}
              onSelect={(id) => setEmails(emails.map((e) => (e._id === id ? { ...e, selected: !e.selected } : e)))}
              onDelete={(id) => setEmails(emails.filter((e) => e._id !== id))}
            />
          ))}
      </div>
    </div>
  );
};

export default Inbox;
