import { Button } from "bootstrap";
import evald from "../assets/evald.jpg";
import '../index.css';
import '../App.css';


export default function HeaderSection() {
  return (
    <div class="z-20 flex col-auto bg-gray-600 mx-12 my-5 min-h-[90vh] rounded-2xl bg-gray-0 backdrop-filter backdrop-blur-md bg-opacity-0 border border-gray-100 border-opacity-50">
      <img src={evald} class="my-auto mx-10 rounded-2xl max-h-[80vh]"></img>
      <div class="mx-32 my-auto text-2xl">
        <p class="text-white ">Hi im Evald Denhof</p>
        <p class="text-white text-6xl font-bold ">Im <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-500">Fullstack</span></p>
        <p class="text-white text-6xl font-bold ">Junior Developer</p>
        <div class="col-auto my-10">

        </div>
      </div>
    </div>
  );
}
