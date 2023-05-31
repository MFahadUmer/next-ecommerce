import React from 'react';

const Links = ({ title, links }) => {
  return (
    <div className="mt-6">
      <h6 className="text-sm font-bold text-slate-700">{title}</h6>
      <div
        className={`grid ${
          links?.length > 7 ? 'grid-cols-2' : 'grid-cols-1'
        } gap-x-5 mt-3`}
      >
        {links.length > 0 &&
          links.map((item, index) => (
            <div key={index}>
              <p className="text-slate-400 text-sm mt-2 font-semibold cursor-pointer">
                {item}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Links;
