import { useState, useEffect,useRef } from "react" /* ---- React */ 

import { navData } from "../assets/data" /* -Nav data links */ 

import instagramLogo from "../assets/img/intagram-logo.png"  /* instagraml logo img*/ 

import { AiOutlineClose, AiOutlinePhone} from "react-icons/ai" /* ---- react icons start*/ 
import { FaBars } from "react-icons/fa"
import {AiOutlineHome} from "react-icons/ai"
import {BsPeople} from "react-icons/bs"
import {HiOutlinePhotograph} from "react-icons/hi"
import {GiClothJar} from "react-icons/gi" /* ---- react icons end*/ 

import "../styles/header.css"


const Header = () => {
   
    const [color, setColor] = useState(false)   /*Change color header  state -- */
    const [nav, setNav] = useState(false);  /*Mobile menu  state --*/

    /*Toggle mobile nav function*/
         const handleNav = () => {
          setNav(!nav)
     }  
    
                    /*Change color function start -------*/
    const changeColorBg = () => {
        if(window.scrollY >= 160){
            setColor(true);
        }else{
            setColor(false)
        }
    }
    window.addEventListener("scroll", changeColorBg)  
                     /*Change color function end --------*/         
    
    /*-----Menu click outside CLOSED start */
     let menuRef = useRef();
        useEffect(() => {
            let handler = e => {
             if(!menuRef.current.contains(e.target)){
                    setNav(false)
                }
            }
          document.addEventListener("mousedown", handler);
            return () => {
                document.removeEventListener("mousedown", handler)
            }
    }, []);
     /*Menu click outside CLOSED end ------*/


     /*-----Menu CLOSED on scroll start */
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setNav(false)
        })  
    }, [])
     /*Menu CLOSED on scroll end ----*/

    return (

        <div className={color ? 'w-full  global-container h-20 bg-gray-700 flex justify-between items-center fixed  left-0 right-0 overflow-hidden top-0 z-50 '
         : 'w-full  global-container h-20 bg-transparent flex justify-between items-center  overflow-hidden fixed  left-0 right-0 top-0 z-50'}>
           <a href="#inicio">  <h1 className='md:text-3xl text-[21px] logo  font-bold text-white cursor-pointer'><span className="text-yellow-400">K</span>ERAMIKO´E</h1></a>

            <ul className='lg:flex hidden gap-3 lg:mr-20 md:mr-5'>            
                 { /*NAV MENU DATA LINKS-----------*/ }
                {
                    navData.map((link,index) => (

                        <li key={index} className='p-3 text-white btn-slide-left hover:text-yellow-400  text-1xl'><a href={link.href} >{link.text}</a></li>
                    ))
                } 
            </ul>

            <div className="flex items-center cursor-pointer">

                <a href="https://www.instagram.com" className="mr-2" target="noopener noreferrer"><img src={instagramLogo} alt="instagram" style={{width:"35px"}}/> </a>

                <div onClick={handleNav} className="block lg:hidden">  {/*MOBILE MENU ICONS OPEN AND CLOSE ------*/}
                    {
                        nav ?   <AiOutlineClose color="white "  size={24}  />   : <FaBars color="white" size={25} /> 
                    }
                </div>
            </div>

            {/*MOBILE MENU START ------*/}
            <div ref={menuRef} className={nav ?  "fixed left-[0%]  top-0 w-[55%] border-r border-r-gray-300 h-full bg-white ease-in-out duration-300" : "fixed 0 left-[-100%] top-0 w-[50%] border-r border-r-gray-300 h-full bg-white ease duration-300"}>
                <h1 className='md:text-4xl text-[21px] logo px-6 font-bold text-black mt-5'><span className="text-yellow-400">K</span>ERAMIKO´E</h1>
                <ul className='pt-12 uppercase'>
                    <li className='li_nav p-6 text-black  md:text-2xl border-b border-gray-300  text-[18px] '><a href="#inicio" className="flex items-center gap-3"><AiOutlineHome size={24}  className="text-gray-500"/>Inicio </a></li>
                    <li className='li_nav p-6 text-black  md:text-2xl border-b border-gray-300  text-[18px]'><a href="#nosotros" className="flex items-center gap-3"><BsPeople size={24}  className="text-gray-500"/>Nosotros</a></li>
                    <li className='li_nav p-6 text-black md:text-2xl  border-b border-gray-300 text-[18px]'><a href="#taller" className="flex items-center gap-3"><GiClothJar size={24}  className="text-gray-500"/>Taller </a></li>
                    <li className='li_nav p-6 text-black  md:text-2xl border-b border-gray-300 text-[18px] '><a href="#galeria" className="flex items-center gap-3"><HiOutlinePhotograph size={24}  className="text-gray-500"/>Galeria</a></li>
                    <li className='li_nav p-6 text-black md:text-2xl  text-[18px]'><a href="#contacto" className="flex items-center gap-3"><AiOutlinePhone size={24}  className="text-gray-500"/>Contacto </a></li>
                </ul>
            </div>
                            {/*MOBILE MENU END ------*/}   
        </div> 
     
        
    )
}

export default Header