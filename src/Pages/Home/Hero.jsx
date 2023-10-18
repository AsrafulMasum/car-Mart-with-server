import img1 from './../../assets/hero-car.png'
const Hero = () => {
  return (
    <div className="bg-base-200 rounded-lg">

      <div className="hero py-10 mx-4 max-w-screen-lg lg:mx-auto">

        <div className="hero-content ml-4 flex-col lg:flex-row-reverse">

          <img src={img1} className="rounded-lg w-5/6 lg:w-1/2 mb-10 lg:mb-0" />

          <div className="max-w-lg">
            <h1 className="text-5xl font-bold border-l-8 border-l-[#F8D7A4] pl-4">Premium and Luxurious carMart Services</h1>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Hero;