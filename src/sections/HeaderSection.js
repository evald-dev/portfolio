import { Button } from "bootstrap";
import evald from "../assets/evald.jpg";
import "../index.css";
import "../App.css";

export default function HeaderSection() {
  return (
    <div class="z-20 grid grid-flow-row md:flex md:col-auto bg-gray-600 mx-4 md:mx-16 my-5 min-h-[85vh]  rounded-2xl bg-gray-0 backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 border-opacity-50">
      <img
        src={evald}
        class="border-orange-300 border my-auto mx-auto md:mx-10 rounded-2xl max-h-[50vh] md:max-h-[80vh]"
      ></img>
      <div class="mx-auto md:mx-24 md:my-auto text-2xl md:text-2xl">
        <p class="text-white ">Hi im Evald Denhof</p>
        <p class="text-white text-4xl md:text-6xl font-bold ">
          Im{" "}
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-500">
            Fullstack
          </span>
        </p>
        <p class="text-white text-4xl md:text-6xl font-bold ">Junior Developer</p>
        <div class="col-auto my-10"></div>
      </div>
    </div>
  );
}
