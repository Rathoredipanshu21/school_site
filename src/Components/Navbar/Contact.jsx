import React, { useState } from 'react';
import './Contact.css';
import NavBuilding from './NavBuilding';
import Footer from '../Footer/Footer';
import axios from 'axios'; // Import Axios library

const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    axios.post('http://localhost/Doon/Contact.php', formData) // Use Axios post method
      .then((response) => {
        console.log(response.data);
        // Reset form after successful submission
        setFormData({ username: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <NavBuilding />
      <div className="contact-page">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you. Feel free to reach out!</p>
          <div className="info">
            <div className="info-item">
              <h3>Kusum Vihar</h3>
              <p>Koylanagar, Dhanbad , Jharkhand , 826005</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>66308@cbseshiksha.in</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>0326-2230713</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Your Name"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
