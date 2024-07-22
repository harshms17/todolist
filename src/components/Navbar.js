import React from 'react';
import { Link} from 'react-router-dom';
import logo from './logo.png';
import './Navbar.css'
export default function Navbar() {
  return (
    <div>
        <div className="h-24 overflow-hidden flex justify-between items-center text-2xl px-[3vw] bg-gradient-to-b from-green-500 to-blue-500 rounded-b-3xl shadow-slate-950 shadow-[inset_0_-10px_30px]">
            <a href="/">
                <img className="h-[160px]" src={logo} alt="Logo"/>
            </a>
            <ul className='topbar h-full flex items-center gap-16'>
                <Link to='todolist/' className={`headings flex items-center `}>
                    <li className='h-3/5 px-5 py-3 rounded flex items-center transition-all duration-300 hover:bg-gradient-to-b from-green-400 to-blue-400 hover:underline cursor-pointer'>
                        <b>Home</b>
                    </li>
                </Link>
                <Link to='todolist/about' className={`headings flex items-center `}>
                    <li className='h-3/5 px-5 py-3 flex items-center rounded transition-all duration-300 hover:bg-gradient-to-b from-green-400 to-blue-400 hover:underline cursor-pointer'>
                        <b>About</b>
                    </li>
                </Link>
                <Link to='todolist/contact' className={`headings flex items-center `}>
                    <li className='h-3/5 px-5 py-3 flex items-center rounded transition-all duration-300 hover:bg-gradient-to-b from-green-400 to-blue-400 hover:underline cursor-pointer'>
                        <b>Contact</b>
                    </li>
                </Link>
                <li onClick={()=>{
                    document.querySelector('.sidebar').style.display='flex'
                    document.querySelector('.topbar').style.display='none'
                }} className='menuu h-3/5 px-4 flex items-center rounded transition-all duration-300 hover:bg-slate-950 hover:underline cursor-pointer'>
                    <b><svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></b>
                </li>
            </ul>
        </div>
        <ul className='sidebar hidden px-5 absolute text-2xl pt-10 top-0 right-0 w-72 h-screen z-10 flex flex-col gap-4 bg-white/10 backdrop-blur transition-all duration-300'>
            <li onClick={()=>{
                    document.querySelector('.sidebar').style.display='none'
                    document.querySelector('.topbar').style.display='flex'
                }} className='cross p-3 w-min rounded transition-all duration-300 hover:bg-red-600/75 hover:underline cursor-pointer'>
                <b><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></b>
            </li>
            <Link to='/'>
                <li className='py-5 w-full rounded pl-5 transition-all duration-300 hover:bg-gradient-to-b from-green-700 to-blue-700 hover:underline cursor-pointer'>
                    <b>Home</b>
                </li>
            </Link>
            <Link to='/about'>
                <li className='py-5 w-full rounded pl-5 transition-all duration-300 hover:bg-gradient-to-b from-green-700 to-blue-700 hover:underline cursor-pointer'>
                    <b>About</b>
                </li>
            </Link>
            <Link to='/contact'>
                <li className='py-5 w-full rounded pl-5 transition-all duration-300 hover:bg-gradient-to-b from-green-700 to-blue-700 hover:underline cursor-pointer'>
                    <b>Contact</b>
                </li>
            </Link>
        </ul>
    </div>
  );
}
