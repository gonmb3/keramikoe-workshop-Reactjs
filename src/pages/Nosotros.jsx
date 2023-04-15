import { nosotrosData } from "../assets/data"

import keramikoeImg from "../assets/img/keramikoe-bg.jpg"
import "../styles/nosotros.css"

const Nosotros = () => {

    return (
        <section id='nosotros' className='global-container flex items-center  justify-center gap-20 my-12 px-10 overflow-hidden'>
         {
                nosotrosData.map((text, index) => (
                    <div key={index}
                        className="lg:w-6/6 w-[100%] pb-16 md:pl-5">
                        <h1
                            className='text-start md:text-4xl text-[25px] text-gray-700 py-2 border-b-4 border-gray-200 inline-block'>
                            {text.titleOne} 
                            <span className='font-bold  text-yellow-500'> {text.titleTwo} </span>
                        </h1>
                        <div className="mt-5 line-through leading-8">
                            <p className="text-gray-400 text-[15px] text-justify pb-2">
                               {text.textOne}
                            </p>
                            <p className="text-gray-400 text-[15px] text-justify pb-2">
                               {text.textTwo}
                            </p>
                            <p className="text-gray-400 text-[15px] text-justify pb-2">
                               {text.textThree}
                            </p>
                            <p className="text-gray-400 text-[15px] text-justify">
                               {text.textFour}
                            </p>
                        </div>
                    </div>
                ))
            }
         <div className="w-full rounded-lg">
                {/* image */}
             <img loading='lazy' src={keramikoeImg} alt="sad" className=" rounded-lg object-cover keramikoe__img mb-6" />
        </div>
        </section>

    )
}

export default Nosotros
