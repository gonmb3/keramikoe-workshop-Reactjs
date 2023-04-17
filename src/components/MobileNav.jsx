import { useState, useEffect, useRef } from "react" /* ---- React */



import { AiOutlinePhone } from "react-icons/ai" /* ---- react icons start*/
import { AiOutlineHome } from "react-icons/ai"
import { BsPeople } from "react-icons/bs"
import { HiOutlinePhotograph } from "react-icons/hi"
import { GiClothJar } from "react-icons/gi" /* ---- react icons end*/

const MobileNav = ({ nav, setNav }) => {


    /*-----Menu click outside CLOSED start */
    let menuRef = useRef();
    useEffect(() => {
        let handler = e => {
            if (!menuRef.current.contains(e.target)) {
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

        <div ref={menuRef} className={nav ? "fixed left-[0%]  top-0 w-[55%] border-r border-r-gray-300 h-full bg-white ease-in-out duration-300" : "fixed 0 left-[-100%] top-0 w-[50%] border-r border-r-gray-300 h-full bg-white ease duration-300"}>
            <h1 className='md:text-4xl text-[21px] logo px-6 font-bold text-black mt-5'><span className="text-teal-800">K</span>ERAMIKO´E</h1>
            <ul className='pt-12 uppercase'>
                <li className='li_nav p-6 text-black  md:text-2xl border-b border-gray-300  text-[18px] '><a href="#inicio" className="flex items-center gap-3">
                    <AiOutlineHome size={24} className="text-gray-500" />
                    Inicio
                </a>
                </li>
                <li className='li_nav p-6 text-black  md:text-2xl border-b border-gray-300  text-[18px]'><a href="#nosotros" className="flex items-center gap-3">
                    <BsPeople size={24} className="text-gray-500" />
                    Nosotros
                </a>
                </li>
                <li className='li_nav p-6 text-black md:text-2xl  border-b border-gray-300 text-[18px]'><a href="#taller" className="flex items-center gap-3">
                    <GiClothJar size={24} className="text-gray-500" />
                    Taller
                </a>
                </li>
                <li className='li_nav p-6 text-black  md:text-2xl border-b border-gray-300 text-[18px] '><a href="#galeria" className="flex items-center gap-3">
                    <HiOutlinePhotograph size={24} className="text-gray-500" />
                    Galeria
                </a>
                </li>
                <li className='li_nav p-6 text-black md:text-2xl  text-[18px]'><a href="#contacto" className="flex items-center gap-3">
                    <AiOutlinePhone size={24} className="text-gray-500" />
                    Contacto
                </a>
                </li>
            </ul>
        </div>
    )
}

export default MobileNav