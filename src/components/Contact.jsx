import React, { useState, useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    number: '',
    message: ''
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [loading, setLoading] = useState(false);

  const form = useRef();       // ✅ Form ref for emailjs
  const modalRef = useRef();   // ✅ Modal ref

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_4s0olrw',          // ✅ Replace with your service ID
        'chp8o7a',               // ✅ Replace with your template ID
        form.current,
        'RNEAJcCAw6PNFghVl'           // ✅ Replace with your EmailJS public key
      )
      .then((result) => {
        setSubmittedData(formData);
        console.log("Message sent successfully:", result.text);
        modalRef.current?.showModal();  // ✅ Show success modal
        setLoading(false);
        setFormData({ name: '', email: '', subject: '', number: '', message: '' }); // clear form
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Failed to send message. Please try again later.");
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='h-[120vh] overflow-hidden w-full'>
      <div className="bgdiv absolute top-700 z-9"></div>

      <section id="contact" className="text-white relative z-10 py-20">
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
                  <p className="text-gray-300">Mohan Nagar GZB 201007, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
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
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#210d2d] border border-white/20 rounded-lg focus:outline-none focus:border-[#8a6ba3]"
                  required
                />
              </div>
              <div>
                <label htmlFor="number" className="block text-sm font-medium mb-1">Number</label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#210d2d] border border-white/20 rounded-lg focus:outline-none focus:border-[#8a6ba3]"
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
                type="submit"
                className={`w-full bg-[#8a6ba3] text-white py-2 px-4 rounded-lg hover:bg-[#6b4f8a] transition-colors duration-300 cursor-pointer ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? "Please Wait..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Success Modal */}
        <dialog ref={modalRef} id="my_modal_2" className="modal">
          <div className="modal-box text-white">
            <h3 className="font-bold text-lg text-[#8a6ba3]">
              {submittedData ? `Thank you, ${submittedData.name}, for contacting me!` : 'Thank you for contacting me!'}
            </h3>
            <p className="py-4">Your message has been sent successfully. I'll get back to you soon.</p>
            {submittedData && <p className="text-gray-300">Your message: {submittedData.message}</p>}
            <div className="modal-action">
              <form method="dialog">
                <button className="btn bg-[#8a6ba3] hover:bg-[#6b4f8a] text-white">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </section>
    </div>
  );
};

export default Contact;
