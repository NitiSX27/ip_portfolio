import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_s7kgg8p', 'template_5v3t7yq', formData, 'W7ogZfUZaMNipuUoJ')
      .then((result) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      }, (error) => {
        alert('Failed to send message, please try again later.');
      });
  };

  return (
    <footer id='test' className="bg-indigo-800 text-white py-10">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">Contact Me</h3>
            <p>Feel free to reach out to me directly via email or through this form:</p>
            <p className="mt-4">
              <span className="font-bold">Email: </span>nitishbhosle10@gmail.com
            </p>
            <p className="mt-2">
              <span className="font-bold">Phone: </span>+91 9833869971
            </p>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">Send Me a Message</h3>
            <form onSubmit={sendEmail} className="bg-white p-5 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
