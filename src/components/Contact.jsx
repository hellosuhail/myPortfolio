import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });


  const handleSubmit = async (e) => {
  
  
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/contact', formData)
      console.log(response.data)
    } catch (error) {
      console.error('Error sending email:', error)
    }
          
    console.log(formData);
    // navigate('/')
    document.getElementById('my_modal_2').showModal()

  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-[#130335] text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-[#8a6ba3]" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-300">suhailka744@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-2xl text-[#8a6ba3]" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-300">+91 892 917 0870</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl text-[#8a6ba3]" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-300">Mohan Nager GZB 201007, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#210d2d] border border-white/20 rounded-lg focus:outline-none focus:border-[#8a6ba3]"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#210d2d] border border-white/20 rounded-lg focus:outline-none focus:border-[#8a6ba3]"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Number</label>
              <input
                type="tellr"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="tabular-nums w-full px-4 py-2 bg-[#210d2d] border border-white/20 rounded-lg focus:outline-none focus:border-[#8a6ba3]"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 bg-[#210d2d] border border-white/20 rounded-lg focus:outline-none focus:border-[#8a6ba3]"
                required
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-[#8a6ba3] text-white py-2 px-4 rounded-lg hover:bg-[#6b4f8a] transition-colors duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-[#210d2d] text-white">
          <h3 className="font-bold text-lg text-[#8a6ba3]">Thank {formData.name} you for contacting me!</h3>
          <p className="py-4">Your message has been sent successfully. I'll get back to you soon.</p>
          <p className='text-gray-300'>your message : {formData.message}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-[#8a6ba3] hover:bg-[#6b4f8a] text-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default Contact; 