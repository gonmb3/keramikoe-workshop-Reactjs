import { useState } from 'react';

import imagesData from "../assets/data"

import { RiCloseCircleFill } from "react-icons/ri"
import { FaSearchPlus } from "react-icons/fa"

import "../styles/galeria.css"


const Galeria = () => {

  $(document).ready(function($) {
    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '',
        
      }
    });
  });

  return (

    <>    
      <section id="galeria" className="global-container bg-gray-200 section__ventas">
        <h1
          className="md:text-4xl text-[25px] text-cyan-800 text-center pt-10 font-bold ">
          Galeria
          <div className='line mx-auto'></div>
        </h1>


        { /* GALLERY  START*/}
        <div
          className="row py-10">

          {
            imagesData.map((img) => (

              
              
              <div 
              key={img.id} className="col relative  m-2 popup-gallery" > 

                <a href={img.image}>
                    <img  src={img.image} className="galeria-img  " alt="img-galeria" />
                
                </a>

                
              </div>

            ))
          }
        </div>
        { /* GALLERY  END*/}


        <div
          className='text-center mb-3 '>
          <small className='text-gray-600'>Consultá por nuestras piezas disponibles y por encargo.</small>
        </div>

        <div
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

export default Galeria