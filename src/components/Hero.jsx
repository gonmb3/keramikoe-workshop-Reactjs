import whatsappImg from "../assets/img/whats-app.logo.png"  /*whatsapp image*/

import "../styles/hero.css"


const Hero = () => {
  return (
    <div id='inicio' className="hero__img w-full h-[100vh] relative top-0 left-0 right-0 overflow-hidden flex flex-col justify-center items-center" >

      <div 
      data-aos="fade-up"
      className="px-20 text-center">

        <h1
          className="md:text-6xl text-4xl text-center font-semibold text-white drop-shadow-md shadow-black md:pb-4 pb-5 leading-tight">
          Bienvenidos a <span className="text-yellow-400">KERAMIKO´E</span>!
        </h1>

        <p
          className="md:text-[32px] text-[20px]  text-gray-100  drop-shadow-md shadow-black pb-2">
          Taller Integral de Cerámica
        </p>

        <a
          href="#nosotros" className="slider-btn btn-slide-top hover:bg-gray-700 hover:text-white">
          Ver
        </a>

      </div>

      {/*-----WHATSAPP IMAGE  */}
      <a href="https://wa.me/59809111891" target="noopener noreferrer">  <img src={whatsappImg} alt="" className="md:w-[40px] w-[38px] bottom-6 md:right-5 right-2  fixed z-10" /></a>
    </div>
  )
}

export default Hero