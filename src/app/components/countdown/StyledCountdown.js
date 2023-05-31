import React from 'react';
import Countdown from 'react-countdown';
import TimeBox from './TimeBox';

const StyledCountdown = () => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex gap-2 justify-center my-4 flex-wrap">
        <TimeBox value={days} label={'Days'} />
        <TimeBox value={hours} label={'Hours'} />
        <TimeBox value={minutes} label={'Mins'} />
        <TimeBox value={seconds} label={'Sec'} />
      </div>
    );
  };

  return (
    <div>
      <Countdown date={Date.now() + 1000000000} renderer={renderer} />
    </div>
  );
};

export default StyledCountdown;
