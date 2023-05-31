import React from 'react';
import Copyright from './Copyright';
import Links from './Links';
import link from '@/app/mock/links';

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="grid lg:grid-cols-[2fr_4fr] md:grid-cols-1">
          <div>
            {link?.categories && (
              <Links
                title={link?.categories?.title}
                links={link?.categories?.links}
              />
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {link?.other?.length > 0 &&
              link?.other?.map((item, index) => (
                <Links key={index} title={item.title} links={item.links} />
              ))}
          </div>
        </div>
      </div>
      <hr className="border-1 mt-2 border-slate-700" />
      <div className="container">
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
