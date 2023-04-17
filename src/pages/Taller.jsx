import { tallerData } from "../assets/data"


const Taller = () => {


    return (
        <section
            id='taller' className='global-container flex-col-reverse md:flex items-center justify-center  px-10 my-20 overflow-hidden'>
            {tallerData.map((text, index) => (
                <div key={index} className="lg:flex items-center ">
                    <div
                        className="lg:w-4/6 w-full ">
                            {/* image */}
                        <img src={text.img} alt="img-taller" className="lg:w-[90%] md:h-[400px] w-full h-[350px] rounded-md object-cover" />
                    </div>

                    <div
                    key={index}
                        className="lg:w-4/6 w-[100%]  md:pl-5">
                                      {/* title */}   
                        <h3 className='text-center md:text-[44px] text-4xl uppercase  text-gray-700  pt-8 leading-snug'>
                            <span className=' font-bold  text-cyan-800 drop-shadow-md '>
                                {text.titleOne} {" "}
                            </span>
                            <p className="text-cyan-800 font-semibold drop-shadow-md ">{text.titleTwo}  </p>
                        </h3>
                          {/* text */}
                        <p className='text-center pt-5 text-2xl font-bold text-gray-400'>
                        {text.textOne}
                        </p>

                        <div className="mt-5 ">
                            <p className='text-[15px] mx-10 text-center text-gray-500 '>
                            {text.textTwo}
                            </p>

                            <p className='text-[15px] mx-10 text-center text-gray-500 mt-3 '>
                            {text.textThree}
                            </p>
                            <p className='text-[15px] mx-10 text-center text-gray-400 mt-3 '>
                            {text.textFour}
                            </p>
                        </div>

                    </div>
                </div>

            ))}

        </section>
    )
}

export default Taller