// src/components/ServiceDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import services from '../services';

const ServiceDetail = () => {
  const { serviceName } = useParams();
  const service = services.find(s => s.name === serviceName);

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <div>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
    </div>
  );
}

export default ServiceDetail;
