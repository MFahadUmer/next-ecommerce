import React from 'react';

const FeatureCard = ({ Icon, title, description }) => {
  return (
    <div className="flex flex-col">
      <Icon className="text-green-700 text-4xl font-bold" />
      <p className="text-slate-700 text-lg font-bold my-4">{title}</p>
      <p className="text-base text-slate-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
