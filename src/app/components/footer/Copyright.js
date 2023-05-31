import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';

const Copyright = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row items-start md:items-center">
      <div>
        <p className="text-sm text-slate-500">
          Copyright 2023 © ECart eCommerce HTML Template. All rights reserved.
          Created by&nbsp;
          <a
            className="hover:text-green-700 text-green-600"
            href="http://fahadumer.net"
            target="_blank"
          >
            Muhammad Fahad.
          </a>
        </p>
      </div>
      <div className="flex gap-2 items-center mt-4 md:mt-0">
        <p className="text-sm text-slate-500">Follow Us on</p>
        <div className="flex gap-2 items-center">
          <div className="h-7 w-7 flex items-center border rounded-lg border-slate-500 hover:border-green-700 justify-center">
            <AiFillFacebook className="text-xl text-slate-500 hover:text-green-700" />
          </div>
          <div className="h-7 w-7 flex items-center border rounded-lg border-slate-500 hover:border-green-700 justify-center">
            <AiFillFacebook className="text-xl text-slate-500 hover:text-green-700" />
          </div>
          <div className="h-7 w-7 flex items-center border rounded-lg border-slate-500 hover:border-green-700 justify-center">
            <AiFillFacebook className="text-xl text-slate-500 hover:text-green-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
