import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHospital,
  faBuilding,
  faClipboardCheck,
  faPlane,
  faUsers,
  faSync,
  faCogs,
  faGlobe,
  // Add new FontAwesome icons here
  faUserTie, // Example new icon for PRO (Public Relations) Services
} from '@fortawesome/free-solid-svg-icons';

function ServiceCard({ icon, title, details }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="text-3xl text-center text-indigo-600 mb-4">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h2 className="text-xl font-medium text-gray-800 text-center mb-3">
          {title}
        </h2>
        <p className="text-gray-600 text-center">
          {details}
        </p>
      </div>
    </div>
  );
}

function Services() {
  const services = [
    { icon: faHospital, title: 'Medical ID documents', details: 'We assist in obtaining medical ID documents for various purposes.' },
    { icon: faBuilding, title: 'MB inside and outside', details: 'Get assistance in processing MB documents for both interior and exterior purposes.' },
    { icon: faClipboardCheck, title: 'Visa approvals', details: 'We help with visa approval processes, ensuring a smooth experience.' },
    { icon: faPlane, title: 'Tourist visa', details: 'Obtain tourist visas to explore new destinations with ease.' },
    { icon: faUsers, title: 'Family visa', details: 'We offer services for family visa applications and approvals.' },
    { icon: faSync, title: 'Visa renewal', details: 'Renew your visa hassle-free with our professional assistance.' },
    { icon: faCogs, title: 'Business Setup In Dubai', details: 'Assistance with setting up new businesses in Dubai.' },
    { icon: faGlobe, title: 'Global Services', details: 'We provide a range of global services to provide seemless experience to our clients' },
    // Add the new PRO (Public Relations) Services here
    { icon: faUserTie, title: 'PRO (Public Relations) Services', details: 'We offer public relations services to facilitate government and administrative procedures.' },
    // You can continue adding more services as needed
  ];

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-semibold mb-4">Our Services</h1>
      <div className="flex flex-wrap -mx-4">
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} details={service.details} />
        ))}
      </div>
    </div>
  );
}

export default Services;
