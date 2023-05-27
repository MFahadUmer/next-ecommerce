import React from 'react';

const TimeBox = ({ value, label }) => {
  return (
    <div className=" flex flex-col items-center justify-center w-14 h-14 border-2 rounded-lg">
      <p className="text-sm font-bold text-slate-700">{value}</p>
      <p className="text-sm text-slate-400">{label}</p>
    </div>
  );
};

export default TimeBox;
