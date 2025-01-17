import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  return (
    <div>
      <h2>Service Detail: {serviceId}</h2>
      <p>Details about the service: {serviceId}</p>
    </div>
  );
};

export default ServiceDetail;
