import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-black w-full h-auto">
      <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif] max-w-full">
        <div>
          <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
          <p className="text-sm text-gray-300 mt-4 leading-relaxed">
            For inquiries or collaboration opportunities, please contact me at Isabelledallacarlesso@gmail.com. I’m eager to connect and discuss how we can work together on exciting projects!
          </p>

          <ul className="mt-12 space-y-8">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' viewBox="0 0 479.058 479.058">
                <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
              </svg>
              <a href="mailto:isabelledallacarlesso@gmail.com" className="text-white text-sm ml-4">
                isabelledallacarlesso@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' viewBox="0 0 482.6 482.6">
                <path d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7z" />
              </svg>
              <a href="tel:+55 11 991886797" className="text-white text-sm ml-4">
                +55 11 991886797
              </a>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' viewBox="0 0 368.16 368.16">
                <path d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136z" />
              </svg>
              <a href="#" className="text-white text-sm ml-4">
                Brazil, São Paulo
              </a>
            </li>
          </ul>

          <ul className="flex mt-12 space-x-4">
            <li className="bg-[#1a082e] hover:bg-[#1a082e] h-10 w-10 rounded-full flex items-center justify-center">
              <FaFacebookF className="text-white" />
            </li>
            <li className="bg-[#1a082e] hover:bg-[#1a082e] h-10 w-10 rounded-full flex items-center justify-center">
              <a href="https://www.linkedin.com/in/isabelledalla/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-white" />
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <form className="space-y-4">
            <input
              type="text"
              className="w-full p-3 rounded bg-[#1a082e] text-white placeholder-gray-400 focus:outline-none"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="w-full p-3 rounded bg-[#1a082e] text-white placeholder-gray-400 focus:outline-none"
              placeholder="Your Email"
            />
            <textarea
              rows="5"
              className="w-full p-3 rounded bg-[#1a082e] text-white placeholder-gray-400 focus:outline-none"
              placeholder="Your Message"
            ></textarea>
            <button
              type="submit"
              className="py-3 px-6 bg-[#1a082e] hover:bg-[#1a082e] rounded text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
