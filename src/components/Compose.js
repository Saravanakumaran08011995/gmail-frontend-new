import React, { useState } from 'react';
import axios from 'axios';

const ComposeMail = () => {
  const [formData, setFormData] = useState({
    sender: '',
    to: '',
    subject: '',
    text: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // First, send the email using nodemailer
      await axios.post('https://gmail-backend-new.vercel.app/api/send-email', formData);

      // Then, save the email to the database
      await axios.post('https://gmail-backend-new.vercel.app/api/save-email', formData);

      // Display a success message to the user
      alert('Mail sent successfully and saved to the database');

      // Clear the form data
      setFormData({
        sender: '',
        to: '',
        subject: '',
        text: ''
      });
    } catch (error) {
      console.error(error);
      alert('An error occurred while sending the mail');
    }
  };


  return (
    <div className="max-w-5xl mx-auto p-4 md:p-10">
      <h2 className="text-2xl font-bold mb-4">Compose Mail</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col mb-4 md:col-span-1">
          <label htmlFor="sender" className="text-lg font-medium mb-2">Sender:</label>
          <input type="email" id="sender" name="sender" required value={formData.sender} onChange={handleInputChange} className="input bg-gray-100" />
        </div>
        <div className="flex flex-col mb-4 md:col-span-1">
          <label htmlFor="to" className="text-lg font-medium mb-2">To:</label>
          <input type="email" id="to" name="to" required value={formData.to} onChange={handleInputChange} className="input bg-gray-100" />
        </div>
        <div className="flex flex-col mb-4 md:col-span-2">
          <label htmlFor="subject" className="text-lg font-medium mb-2">Subject:</label>
          <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleInputChange} className="input bg-gray-100" />
        </div>
        <div className="flex flex-col mb-4 md:col-span-2">
          <label htmlFor="text" className="text-lg font-medium mb-2">Message:</label>
          <textarea id="text" name="text" required value={formData.text} onChange={handleInputChange} className="textarea bg-gray-100"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto">
          Send
        </button>
      </form>
    </div>
  );
};

export default ComposeMail;
