import React, { useState } from "react";
import { BsCart,BsCartPlus,BsChatText,BsClipboard } from "react-icons/bs";
import { BiCog } from "react-icons/bi";
import { BiChevronLeft,BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Sidebar_dashbord() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? 'bg-gray-800 text-white relative h-[200vh] w-20 py-4 px-6 flex flex-col' : 'bg-gray-800 text-white relative h-[200vh] w-60 py-4 px-6 flex flex-col'}>
      <div className="text-xl font-bold mb-5 flex justify-between items-center">
        <span className={isOpen ? 'font-light text-sm pr-0' : 'font-light text-lg'}>داشبورد</span>
        <button
          className="text-blue-500 hover:text-blue-400  absolute top-1/2 left-0 transition duration-300"
          onClick={handleToggle}
        >
          {isOpen ? <BiChevronLeft size={30} /> : <BiChevronRight size={30} />}
        </button>
      </div>
      <nav className="w-full">
        <ul>
          <li className="mb-3 hover:text-blue-900"><Link className="text-white" to={'/'}><BsCart className="inline ml-2" size={25} /></Link><Link to="#" className={isOpen ? 'hidden' : 'hover:text-blue-400 font-light transition duration-300 no-underline text-white'}>لیست سفارشات</Link></li>
          <li className="mb-3"><Link className="text-white" to={'/'}><BsClipboard className="inline ml-2" size={25} /></Link><Link to="/blog" className={isOpen ? 'hidden' : 'hover:text-blue-400 font-light transition duration-300 no-underline text-white'}>وبلاگ</Link></li>
          <li className="mb-3"><Link className="text-white" to={'/'}><BsCartPlus className="inline ml-2" size={25} /></Link><Link to="#" className={isOpen ? 'hidden' : 'hover:text-blue-400 font-light transition duration-300 no-underline text-white'}>افزودن محصولات</Link></li>
          <li className="mb-3"><Link className="text-white" to={'/'}><BsChatText className="inline ml-2" size={25} /></Link><Link to="#" className={isOpen ? 'hidden' : 'hover:text-blue-400 font-light transition duration-300 no-underline text-white'}>مدیریت نظرات</Link></li>
          <li className="mb-3"><Link className="text-white" to={'/'}><BiCog className="inline ml-2" size={25} /></Link><Link to="#" className={isOpen ? 'hidden' : 'hover:text-blue-400 font-light transition duration-300 no-underline text-white'}>تنطیمات سایت</Link></li>
        </ul>
      </nav>
    </div>
  );
}
