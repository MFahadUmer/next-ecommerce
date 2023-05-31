import React from 'react';
import FeatureCard from './FeatureCard';
import { AiOutlineClockCircle } from 'react-icons/ai';

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
      <FeatureCard
        Icon={AiOutlineClockCircle}
        title="10 minute grocery now"
        description="Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you."
      />
      <FeatureCard
        Icon={AiOutlineClockCircle}
        title="10 minute grocery now"
        description="Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you."
      />
      <FeatureCard
        Icon={AiOutlineClockCircle}
        title="10 minute grocery now"
        description="Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you."
      />
      <FeatureCard
        Icon={AiOutlineClockCircle}
        title="10 minute grocery now"
        description="Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you."
      />
    </div>
  );
};

export default Features;
