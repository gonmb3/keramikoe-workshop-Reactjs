

import keramikoeImg from "../assets/img/keramikoe-bg.jpg"
import "../styles/nosotros.css"

const Nosotros = () => {

    return (
        <section id='nosotros' className='global-container flex items-center  justify-center gap-20 my-12 px-10 overflow-hidden'>

            <div
            data-aos="fade-up"
             className="lg:w-6/6 w-[100%] pb-16 md:pl-5">
             
                <h1
                className='text-start md:text-4xl text-[25px] text-gray-700 py-2 border-b-4 border-gray-200 inline-block'>
                    Nuestra
                    <span className='font-bold  text-yellow-500'> Historia</span>
                </h1>

                <div className="mt-5 ">
                    <p className="text-gray-400 text-[15px] text-justify">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Vero accusantium magni hic assumenda, dolorum amet quas disrem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                    <p className="text-gray-400  pt-5 text-[15px] text-justify">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Vero accusantium magni hic assumenda, dolorum amet quas disrem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                    <p className="text-gray-400  pt-5 text-[15px] text-justify">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Vero accusantium magni hic assumenda, dolorum amet quas disrem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                    <p className="text-gray-400  pt-5 text-[15px] text-justify">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Vero accusantium magni hic assumenda, dolorum amet quas disrem ipsum dolor sit, amet consectetur adipisicing elit.
                
                    </p>
                </div>


            </div>

            <div 
              data-aos="fade-up"
            className="w-full rounded-lg">
                <img src={keramikoeImg} alt="sad" className=" rounded-lg object-cover keramikoe__img mb-6" />
            </div>
        </section>

    )
}

export default Nosotros
