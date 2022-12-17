import Map from './Map';    /*component*/
import FormularioContacto from './FormularioContacto';  /*component*/

import { GiSmartphone } from "react-icons/gi"  /*react icon*/
import { FiMail } from "react-icons/fi"  /*react icon*/


import "../styles/contacto.css" /*css styles*/


const Contacto = () => {
    return (
        <section
            id="contacto" className='global-container w-full bg-gray-100 '>

            <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="px-5 pt-10">
                <div className="pt-10 mb-10">
                    <h3 className='font-bold text-3xl text-gray-900'>Contacta con nosotros!</h3>
                    <p className="text-gray-400 text-[14px] pt-2">Te responderemos con la mayor brevedad posible...</p>
                </div>

                <div className="flex justify-between contacto" >

                    <div className="flex flex-col gap-1">
                        <h6 className="font-bold mb-1 text-gray-900">DIRECCIÓN</h6>
                        <p className="text-gray-400  text-[14px] ">Vázquez 1474 </p>
                        <p className="text-gray-400  text-[14px] mb-2">entre Colonia y Mercedes</p>
                        <p className="flex text-gray-400  text-[14px] "><FiMail size={16} className="mr-2" /> keramikoe@hotmail.com</p>
                        <p className="flex items center text-[14px]  text-gray-400 "> <GiSmartphone className="mr-2" size={19} /> 077 777 877 </p>
                    </div>

                    {/*---------CONTACT FORM COMPONENT   */}
                    <FormularioContacto />               
                </div>
            </div>

            {/*------MAP COMPONENT */}
            <Map />           
        </section>
    )
}

export default Contacto