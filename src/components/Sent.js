import axios from 'axios';
import { useState, useEffect } from 'react';

const Sent = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://gmail-backend-new.vercel.app/api/emails/sent');
      setEmails(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-y-hidden">
      <div className="mx-auto max-w-7xl pt-8 pb-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Sent</h1>
      </div>
      <div className="flex-grow overflow-y-auto">
        <div className="mx-auto max-w-7xl pb-12 px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <div className="flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {emails.map((email) => (
                  <li key={email._id} className="py-4">
                    <div className="flex flex-wrap items-center justify-between sm:flex-nowrap space-y-2 sm:space-y-0 sm:space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate p-3">Sender: {email.sender}</p>
                        <p className="text-sm font-medium text-gray-900 truncate p-3">Sent to: {email.to}</p>
                        <p className="text-sm text-gray-900 truncate p-3">Subject: {email.subject}</p>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        <p className="text-sm text-gray-500">{email.createdAt}</p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <p className="mt-1 text-sm text-gray-600 p-3">{email.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sent;
