import img2 from "./../../assets/about.png"


const AboutPage = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-between bg-slate-200 py-10 px-10 rounded-lg">
        <h2 className="text-5xl font-bold text-slate-800">Our Brief History</h2>
        <img className="h-52" src="https://i.postimg.cc/x8ygbWYS/inner-banner-img.png" alt="" />
      </section>
      <div className="hero py-10 mx-2 max-w-screen-lg xl:mx-auto">
        <div className="hero-content flex-col lg:flex-row lg:gap-20">
          <img
            src={img2}
            className=" w-5/6 lg:w-1/2 mb-10 lg:mb-0 rounded-lg shadow-2xl"
          />
          <div className="py-6 w-5/6 mx-auto">
            <h3 className="text-3xl font-semibold text-[#A55C30] mb-4">
              About
            </h3>
            <p>
              We&#39;re passionate car agency we&#39;re thrilled to have you
              join our community of automotive enthusiasts and professionals.
              Whether you&#39;re a passionate driver, a car owner, or someone
              who loves all things automotive, you&#39;ve come to the right
              place.At carMart, we strive to create a space where people can
              connect, share knowledge, and explore the exciting world of
              automobiles. From discussing the latest car models and
              technologies to sharing driving tips and tricks, we&#39;re here to
              fuel your love for everything on wheels.Feel free to ask any
              questions you have, seek advice, or simply engage in friendly
              conversations with fellow members. Our community is full of
              experts and enthusiasts who are eager to share their insights and
              experiences. Buckle up and enjoy your journey with carMart!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
