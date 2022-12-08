import tallerImg from "../assets/img/Talleres.jpg"
import "../styles/taller.css"

const Taller = () => {
    return (
        <section
         id='taller' className='global-container flex items-center justify-center mt-10 px-10 mb-11 overflow-hidden'>
            <div
              data-aos="fade-up-right"
             className="lg:w-4/6 w-full ">
                <img src={tallerImg} alt="sad" className="lg:w-[90%] md:h-[400px] w-full h-[350px] rounded-md object-cover" />
            </div>

            <div
            data-aos="fade-up-left"
            className="lg:w-4/6 w-[100%] pb-16 md:pl-5">

                <h3 className='text-center md:text-[44px] text-4xl uppercase  text-gray-700 pt-8 leading-snug'>
                    <span className=' font-bold  text-yellow-500 '>Clases de Cerámica </span>Moldeada y Alfafería
                </h3>
                <p className='text-center pt-5 text-2xl font-bold text-gray-400'>
                Lorem ipsum dolor sit, amet conse
                </p>

                <div className="mt-5 ">
                    <p className='text-[15px] mx-10 text-center text-gray-500 '>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Vero accusantium magni hic assumenda, dolorum amet quas disrem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>

                    <p className='text-[15px] mx-10 text-center text-gray-500 mt-3 '>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Vero accusantium magni hic assumenda, dolorum amet quas disrem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Taller