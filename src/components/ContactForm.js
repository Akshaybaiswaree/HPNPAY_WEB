


import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


function ContactForm() {
  // const apiKey = import.meta.env.VITE_API_KEY;
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(apiKey , "gf")

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    enquiry: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email' && !/^\S+@\S+\.\S+$/.test(value)) {
      return; // Ignore invalid email input
    }

    // Mobile number validation: allow only digits and limit to 10 characters
    if (name === 'mobile' && !/^\d{0,10}$/.test(value)) {
      return; // Ignore invalid mobile input
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
     e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.mobile || !formData.enquiry) {
      // toast.error('Please fill in all the required fields');
      toast.error('Please fill in all the required fields', {
                style: {
                  fontSize: '13px',
                  width: '250px', // Set the desired width
                  height: '70px', // Set the desired height   
                  position: 'absolute', // Set the position to fixed
                  left: '8px', // Set the desired left position
                  top: '8px', // Set the desired top position
                },
              });
      return;
    }

    // Email validation: check if it's in a valid format
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Mobile number validation: check if it has exactly 10 digits
    if (formData.mobile.length !== 10) {
      // toast.error('Mobile number must be 10 digits');
      toast.error(" Mobile number must be 10 digits", {
        style: {
          fontSize: '13px',
          width: '250px', // Set the desired width
          height: '70px', // Set the desired height   
          position: 'absolute', // Set the position to fixed
          left: '8px', // Set the desired left position
          top: '8px', // Set the desired top position
        },
      });
      return;
    }

    try {
      const response = await axios.post(apiKey, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(apiKey , "gf")

      if (response.status >= 200 && response.status < 300) {
        // Success
        toast.success('Message sent successfully', {
          style: {
            fontSize: '13px',
            width: '250px',
            height: '70px',
            position: 'absolute',
            left: '8px',
            top: '8px',
          },
        });

        // Reset the form data
        setFormData({
          name: '',
          email: '',
          mobile: '',
          enquiry: '',
        });
      } else {
        // Error
        toast.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('An error occurred while sending the message');
    }
  };
// import React, { useState } from 'react';
// import { toast, ToastContainer, useToast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

// function ContactForm() {
  
//   const [formData, setFormData] = useState({
//     to_name: '',
//     email: '',
//     mobile: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();


//     if (!formData.to_name || !formData.email || !formData.mobile || !formData.message) {
//       // toast.error('Please fill in all the required fields');
//       toast.error('Please fill in all the required fields', {
//         style: {
//           fontSize: '13px',
//           width: '250px', // Set the desired width
//           height: '70px', // Set the desired height
//           position: 'absolute', // Set the position to fixed
//           left: '8px', // Set the desired left position
//           top: '8px', // Set the desired top position
//         },
//       });
//       return;
//     }

//     try {
//       const response = await axios.post('https://avestan-be.onrender.com/api/employee/leads', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.status >= 200 && response.status < 300) {
//         // Success
//         toast.success('Message sent successfully', {
//           style: {
//             fontSize: '13px',
//             width: '250px', // Set the desired width
//             height: '70px', // Set the desired height
//             position: 'absolute', // Set the position to fixed
//             left: '8px', // Set the desired left position
//             top: '8px', // Set the desired top position
//           },
//         });
        
//         // Reset the form data
//         setFormData({
//           to_name: '',
//           email: '',
//           mobile: '',
//           message: '',
//         });
//       } else {
//         // Error
//         toast.error('Failed to send message');
//       }
//     } catch (error) {
//       console.error('Error sending message:', error);
//       toast.error('An error occurred while sending the message');
//     }
//   };

  return (
    <>
      <div style={{ marginLeft: '0rem' }}>
        <form style={{ margin: 'auto' }} onSubmit={handleSubmit}>
          <label style={{ fontWeight: 'normal', fontSize: '0.975rem' }}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              border: '1px solid #ccc',
              padding: '8px',
              marginBottom: '0.5rem',
              width: '100%',
              fontSize: '0.875rem',
            }}
          />

          <label style={{ fontWeight: 'normal', fontSize: '0.975rem' }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              border: '1px solid #ccc',
              padding: '8px',
              marginBottom: '0.5rem',
              width: '100%',
              fontSize: '0.875rem',
            }}
          />

          <label style={{ fontWeight: 'normal', fontSize: '0.975rem' }}>
            Mobile
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            style={{
              border: '1px solid #ccc',
              padding: '8px',
              marginBottom: '0.5rem',
              width: '100%',
              fontSize: '0.875rem',
            }}
          />

          <label style={{ fontWeight: 'normal', fontSize: '0.975rem' }}>
            Message
          </label>
          <textarea
            name="enquiry"
            value={formData.enquiry}
            onChange={handleChange}
            style={{
              border: '1px solid #ccc',
              padding: '8px',
              width: '100%',
              fontSize: '0.875rem',
            }}
          />

          <button
            type="submit"
            style={{
              border: '1px solid #ccc',
              padding: '8px',
              cursor: 'pointer',
              background: '#00A6DE',
              marginTop: '1rem',
              marginBottom: '1rem',
              fontWeight: 'bold',
              width: '50%',
              fontSize: '0.875rem',
              borderRadius: '0.5rem',
              transition: 'background 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.background = '#007bb5')}
            onMouseOut={(e) => (e.target.style.background = '#00A6DE')}
          >
            Send
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default ContactForm;
