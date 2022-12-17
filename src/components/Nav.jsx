import { navData } from "../assets/data" /* Navlink data links */ 

const Nav = () => {
  return (
    <ul className='lg:flex hidden gap-3 lg:mr-20 md:mr-5'>            
    { /*NAV MENU DATA LINKS-----------*/ }
   {
       navData.map((link,index) => (

           <li key={index} className='p-3 text-white btn-slide-left hover:text-yellow-400  text-1xl'>
               <a href={link.href} >{link.text}</a>
           </li>
       ))
   } 
</ul>
  )
}

export default Nav