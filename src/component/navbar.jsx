import React, { useState } from "react";

const Navbar = () => {
  return (
    <container > 
     <div className="mx-auto flex justify-between bg-green-300 text-center text-white py-10 px-30">
      <span className='text-3xl ' >logo</span>
      <ul className='flex gap-10'>
        <li className='text-2xl cursor-pointer hover:font-bold transition-all duration-50 transform '>Home</li>
        <li className='text-2xl cursor-pointer hover:font-bold transition-all duration-50 transform '>Menu</li>
      </ul>

     </div>
     </container>
  );
};

export default Navbar;
