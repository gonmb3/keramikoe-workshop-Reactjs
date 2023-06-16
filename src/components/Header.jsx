import { useState, useEffect,useRef } from "react" /* ---- React */ 

import Nav from "./Nav"  //component
import MobileNav from './MobileNav'; //component


import instagramLogo from "../assets/img/intagram-logo.png"  /* instagraml logo img*/ 

import { AiOutlineClose,} from "react-icons/ai" /* ---- react icons start*/ 
import { FaBars } from "react-icons/fa"


import "../styles/header.css" // css styles

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
    

    return (

        <div className={color ? 'w-full   global-container h-20 bg-gray-700 flex justify-between items-center fixed  left-0 right-0 overflow-hidden top-0 z-50 '
         : 'w-full  global-container h-20 bg-transparent flex justify-between items-center  overflow-hidden fixed  left-0 right-0 top-0 z-50'}>
           { /* logo */}
           <a href="#inicio">  <h1 className='md:text-3xl text-[21px] logo  font-bold text-white cursor-pointer'>
            <span className="text-yellow-600">K</span>ERAMIKO´E</h1>
          </a>

          { /* nav component */}
            <Nav/>

            <div className="flex items-center cursor-pointer">

                <a href="https://www.instagram.com" className="mr-2" target="noopener noreferrer">
                    <img src={instagramLogo} alt="instagram" style={{width:"35px"}}/>
             </a>

                <div onClick={handleNav} className="block lg:hidden">  {/*MOBILE MENU ICONS OPEN AND CLOSE ------*/}
                    {
                        nav ?   <AiOutlineClose color="white "  size={24}  />   : <FaBars color="white" size={25} /> 
                    }
                </div>
            </div>

            {/*MOBILE MENU COMPONENT ------*/}
            <MobileNav nav={nav} setNav={setNav} />
                            
        </div> 
     
        
    )
}

export default Header