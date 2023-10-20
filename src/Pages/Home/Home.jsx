import { useState } from "react";
import About from "./About";
import Featured from "./Featured";
import Hero from "./Hero";
import SellCars from "./SellCars";

const Home = () => {
  const [toggle, setToggle] = useState(false);

  if (toggle) {
    document.getElementById("theme").setAttribute("data-theme", "dark");
  }else{
    document.getElementById("theme").setAttribute("data-theme", "light");
  }
  return (
    <div>
      <div className="my-10 flex justify-end gap-1">
        <h2>Dark mode:</h2>
        <input
          onClick={() => setToggle(!toggle)}
          type="checkbox"
          className="toggle"
        />
      </div>
      <Hero></Hero>
      <About></About>
      <Featured></Featured>
      <SellCars></SellCars>
    </div>
  );
};

export default Home;
