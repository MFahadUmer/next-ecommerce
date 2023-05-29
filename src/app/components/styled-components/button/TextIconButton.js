import React from 'react';

const TextIconButton = ({
  text,
  Icon,
  color = 'white',
  bgColor = 'slate-700',
  hoverBgColor = 'green-500',
}) => {
  return (
    <button
      className={`py-2 px-4 text-${color} text-base cursor-pointer hover:bg-${hoverBgColor} bg-${bgColor} rounded-md border-0 font-bold`}
    >
      <div className="flex items-center gap-2">
        {text} <Icon className={`font-bold text-xl text-${color}`} />
      </div>
    </button>
  );
};

export default TextIconButton;
