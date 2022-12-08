import { useState } from 'react';

import imagesData from "../assets/data"

import { RiCloseCircleFill } from "react-icons/ri"
import { FaSearchPlus } from "react-icons/fa"

import "../styles/galeria.css"


const Ventas = () => {
  /*MODAL STATE*/
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState("");

  const getImg = (img) => {
    setTempImg(img)
    setModal(true)
  }

  return (
    <>    { /* GALLERY MODAL START*/}
      <div className={modal ? "modal open" : "modal"}>
        <RiCloseCircleFill onClick={() => setModal(false)} className='icon' size={32} />
        <img src={tempImg} alt="img-ventas" />

      </div>
      { /* GALLERY MODAL END*/}

      <section id="galeria" className="global-container bg-gray-200 section__ventas">
        <h1
        data-aos="fade-right"
          className="md:text-4xl text-[25px] text-yellow-500 text-center pt-10 font-bold ">
          Galeria
          <div className='line mx-auto'></div>
        </h1>


        { /* GALLERY  START*/}
        <div
          className="row py-10">

          {
            imagesData.map((img) => (

              <div 
              data-aos="fade-up"
              key={img.id} className="col relative  m-2">

                <img src={img.image} className="galeria-img " alt="img-galeria" />

                <div onClick={() => getImg(img.image)} className='absolute w-full h-[100%] top-0 bottom-0 right-0 cursor-pointer 
                     bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 duration-200 '
                >
                  <FaSearchPlus size={35} className="z-10 font-bolder text-white" />
                </div>
              </div>

            ))
          }
        </div>
        { /* GALLERY  END*/}


        <div
        data-aos="fade-right"
          className='text-center mb-3 '>
          <small className='text-gray-600'>Consultá por nuestras piezas disponibles y por encargo...</small>
        </div>

        <div
          data-aos="fade-left"
          className='w-full text-center pb-10'
        >

          <a
            className='bg-white px-10 py-2 rounded-3xl inline-block
            text-gray-500 shadow-md hover:bg-gray-100 hover:text-gray-900'
            href="https://www.instagram.com"
            target="noopener noreferrer"
          >
            Ver Más
          </a>
        </div>



      </section>

    </>


  )
}

export default Ventas