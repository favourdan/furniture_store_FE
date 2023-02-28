import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {React, useState} from 'react';
import './Navbar.css'
import { ImFacebook2 } from 'react-icons/im';
import { BsClock, BsInstagram, BsTelephone, BsTwitter } from 'react-icons/bs';


const Navbar = () => {

    const [nav, setNav] = useState(false);
    const itemCount = 1;
    const [sideBar, setSideBar] = useState(false)

    const handleNav = () => {
       setNav(!nav)
    }

    const handleSideBar =() => {
        setSideBar(!sideBar);
    }
    

    return(
        <div className='text-black items-center fixed w-[100%] top-0 shadow-sm z-10 bg-white'>

            {/* =========================LARGE SCREEN============================================ */}
            
            <div className='justify-center items-center text-[0.7rem] hidden lg:flex w-[100%] p-2'>
                <div onClick={handleSideBar} className='hidden md:block self-center w-[115px]'>
                    {sideBar ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />} 
                </div>
                <ul className='hidden lg:flex'>
                    <li className=''><a href='/'>HOME</a></li>
                    <li className=''><a href='/'>ABOUT US</a></li>
                    <li className=''><a href='/'>PAGES</a></li>
                    <li className=''><a href='/'>SHOP</a></li>
                </ul>
                <ul className='items-center hidden lg:block'>
                    <li className='w-full text-4xl font-bold text-[#403414]'>OAKLAND</li>
                </ul>
                <ul className='hidden lg:flex'>
                    <li className=''><a href='/'>BLOG</a></li>
                    <li className=''><a href='/'>CONTACT</a></li>
                </ul>
                <ul className='hidden lg:flex'>
                    <li className=''>
                        <span style={{color: 'rgb(81, 81, 81)'}}>$0.00&nbsp;&nbsp;</span>
                        <a href='/'>
                            <Badge color="secondary" badgeContent={itemCount} >
                                <ShoppingCart className='text-[#403414]' />
                            </Badge>
                        </a>
                    </li>
                </ul>
                <ul className='hidden lg:flex'>
                    <li className=''><a href='/'>SIGNUP</a></li>
                    <li className=''><a href='/'>SIGNIN</a></li>
                </ul>
                <div className={sideBar ? 'fixed w-[600px] left-0 top-0 pr-[6rem] hidden rounded-b-sm lg:block bg-gray-800 shadow-sm ease-in-out duration-500 text-white z-10' : 'fixed left-[-100%] ease-in-out duration-500'}>
                    <div onClick={handleSideBar} className='hidden ml-[100%] lg:block self-center w-[115px] pl-4 pt-4'>
                        {sideBar ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />} 
                    </div>
                    <div>
                        <div className='flex flex-col gap-[4rem] h-[100vh] items-center px-[2rem] pt-[8rem] pb-[23rem] overflow-y-scroll'>
                            <div className='text-center flex flex-col gap-4'>
                                <h3 className='text-3xl font-bold'>OAKLAND</h3>
                                <p className='text-[1.2rem] text-gray-500'>Far far away, behind the world mountains, far from the countires vokalia and consonatia there live the blind texts</p>
                            </div>
                            <div className=' flex flex-wrap gap-4'>
                                <img className='w-[130px] bg-white' src="../images/chair.jpeg" alt="" />
                                <img className='w-[130px] bg-white' src="../images/lamp3.jpeg" alt="" />
                                <img className='w-[130px] bg-white' src="../images/sofa.jpeg" alt="" />
                                <img className='w-[130px] bg-white' src="../images/glass-top-table.jpeg" alt="" />
                                <img className='w-[130px] bg-white' src="../images/end_table.png" alt="" />
                                <img className='w-[130px] bg-white' src="../images/wooden.png" alt="" /> 
                            </div>
                            <div className='flex flex-col gap-3 text-[1.2rem] items-center font-light '>
                                <div className='flex gap-2 items-center'>
                                    <span className=''>< BsClock /></span><span>Sun - Sat: 9:00 AM - 17:00 PM</span>
                                </div> 
                                <div className='flex gap-2 items-center'>
                                    <span className=''>< AiOutlineMail /></span><span>oakland@gmail.com</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <span className=''>< BsTelephone /></span><span>(+234)8166386376</span>
                                </div>
                                <div className="flex gap-8 text-black mt-[2.5rem] ">
                                    <a className='text-white' href='/'><ImFacebook2 /></a>
                                    <a className='text-white' href='/'><BsTwitter /></a>
                                    <a className='text-white' href='/'><BsInstagram /></a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                

            </div>
            
                    
                    {/* =========================MEDIUM SCREEN=========================== */}

            <div className='flex justify-between w-[100%] px-4 py-2 top-0 bg-white sm:hidden md:flex lg:hidden'>
                
                <div onClick={handleNav} className='hidden md:block lg:hidden self-center'>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />} 
                </div>

                <div className='text-center hidden md:block'>
                    <h1 className='w-full text-3xl m-2 font-bold text-[#403414]'>OAKLAND</h1>
                </div>
                <div className='self-center hidden md:block lg:hidden'>
                        <span style={{color: 'rgb(81, 81, 81)'}}>$0.00&nbsp;&nbsp;</span>
                        <a href='/'>
                            <Badge color="secondary" badgeContent={itemCount} >
                                <ShoppingCart className='text-[#403414]' />
                            </Badge>
                        </a>
                </div>
                
                
                <div className={nav ? 'fixed left-0 top-0 pr-[6rem] hidden rounded-b-sm md:block lg:hidden shadow-sm bg-[white] ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
                    <div onClick={handleNav} className='hidden md:block self-center w-[115px] pl-4 pt-4'>
                        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />} 
                    </div>
                    <ul className='py-4 pl-8'>
                        <li className='p-2'><a href='/'>ABOUT US</a></li>
                        <li className='p-2'><a href='/'>HOME</a></li>
                        <li className='p-2'><a href='/'>PAGES</a></li>
                        <li className='p-2'><a href='/'>SHOP</a></li>
                        <li className='p-2'><a href='/'>BLOG</a></li>
                        <li className='p-2'><a href='/'>CONTACT</a></li>
                        <li className='p-2'><a href='/'>CART</a></li>
                        <li className='p-2'><a href='/'>SIGNUP</a></li>
                        <li className='p-2'><a href='/'>SIGNIN</a></li>
                    </ul>
                </div>
            </div>


            {/* ==============================SMALL SCREEN====================================================== */}

            {/* flex justify-between w-[100%] px-4 py-2 top-0 bg-white sm:hidden md:flex lg:hidden */}
            <div className='flex justify-between w-[100%] md:hidden items-center  px-4 py-1 bg-[white]'>
                <div onClick={handleNav} className='md:hidden'>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>
                <div className='text-center md:hidden'>
                    <h1 className='w-full text-3xl m-2 font-bold text-[#403414]'>OAKLAND</h1>
                </div>
                
                <div className={nav ? 'fixed left-0 top-0 pr-[4rem] rounded-sm md:hidden shadow-sm bg-[white] ease-in-out duration-500 z-10' : 'fixed left-[-100%] ease-in-out duration-500'}>
                    <div onClick={handleNav} className='md:hidden pt-3 pl-3'>
                        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                    </div>
                    <ul className='py-4 pl-8'>
                        <li className='p-2'><a href='/'>HOME</a></li>
                        <li className='p-2'><a href='/'>ABOUT US</a></li>
                        <li className='p-2'><a href='/'>PAGES</a></li>
                        <li className='p-2'><a href='/'>SHOP</a></li>
                        <li className='p-2'><a href='/'>BLOG</a></li>
                        <li className='p-2'><a href='/'>CONTACT</a></li>
                        <li className='p-2'><a href='/'>CART</a></li>
                        <li className='p-2'><a href='/'>SIGNUP</a></li>
                        <li className='p-2'><a href='/'>SIGNIN</a></li>
                    </ul>
                </div>
            </div>  
        </div>
    )
}


export default Navbar;