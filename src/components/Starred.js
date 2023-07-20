import React, { useState, useEffect } from 'react';
import EmailItem from './EmailItem';
import axios from 'axios';

const Starred = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://saravana-kumaran-gmail-backend.vercel.app/api/emails');
      setEmails(response.data);
    };

    fetchData();
  }, []);

  const handleUnstar = (id) => {
    setEmails(emails.map((email) => {
      if (email._id === id) {
        return { ...email, starred: false };
      }
      return email;
    }));
  };

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-2xl font-medium mb-6">Starred</h1>
      <div className="bg-white shadow overflow-hidden rounded-md">
        {emails
          .filter((email) => email.starred)
          .map((email) => (
            <EmailItem
              key={email._id}
              email={email}
              onSelect={(id) => setEmails(emails.map((e) => (e._id === id ? { ...e, selected: !e.selected } : e)))}
              onStar={(id) => handleUnstar(id)}
              onDelete={(id) => setEmails(emails.filter((e) => e._id !== id))}
            />
          ))}
        {emails.filter((email) => email.starred).length === 0 && (
          <div className="text-gray-500 px-4 py-3 text-sm sm:text-base">
            You have no starred emails.
          </div>
        )}
      </div>
    </div>
  );
};

export default Starred;
