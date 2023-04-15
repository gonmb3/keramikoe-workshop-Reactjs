
import googleMapsImg from "../assets/img/google-map-img.png"

const Map = () => {
  return (
    <div
    className="globlal-container w-full flex justify-center  pb-16">
      <img src={googleMapsImg} alt="google-maps-img" className="md:w-[65%] md:h-[500px] w-[80%] h-[380px]  object-cover shadow-md"/>
    </div>
  )
}

export default Map