import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';

function ContactUs() {
 

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>

      <div className="flex flex-wrap -mx-4">
        {/* Call Card */}
        <div className="w-full sm:w-1/2 p-4">
          <div className="bg-white rounded-lg shadow-md p-5 mb-4">
            <FontAwesomeIcon icon={faPhone} className="text-xl mb-2" />
            <p>
              <strong>Call:</strong> Phone No. 565743423
            </p>
          </div>
        </div>

        {/* Email Card */}
        <div className="w-full sm:w-1/2 p-4">
          <div className="bg-white rounded-lg shadow-md p-5 mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-xl mb-2" />
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:info@masaralshalal.tech">info@masaralshalal.tech</a>
            </p>
          </div>
        </div>

        {/* Address Card */}
        <div className="w-full sm:w-1/2 p-4">
          <div className="bg-white rounded-lg shadow-md p-5 mb-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl mb-2" />
            <p>
              <strong>Address:</strong> Office # 406 Al Zarouni Building, Frej Al Murar, Deira Dubai-UAE
            </p>
          </div>
        </div>

        {/* Post Office Box Card */}
        <div className="w-full sm:w-1/2 p-4">
          <div className="bg-white rounded-lg shadow-md p-5">
            <FontAwesomeIcon icon={faAddressCard} className="text-xl mb-2" />
            <p>
              <strong>Post Office Box:</strong> 21895
            </p>
          </div>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="mt-4">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.0684361268777!2d55.31899361497858!3d25.27385043384995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42778ec6f77f%3A0x1d39a21c8b7e1ff3!2sAl%20Zarouni%20Building%2C%20Frij%20Al%20Murar%2C%20Deira%2C%20Dubai!5e0!3m2!1sen!2sae!4v1631160052552!5m2!1sen!2sae"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
