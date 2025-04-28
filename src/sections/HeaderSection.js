import { Button } from "bootstrap";
import evald from "../assets/evald.jpg";
import "../index.css";
import "../App.css";

export default function HeaderSection() {
  return (
    <div class="bg-gray-0 z-20 mx-[4vw] my-5 flex min-h-[80vh] flex-col items-center rounded-2xl border border-gray-100 border-opacity-50 bg-gray-600 bg-opacity-10 backdrop-blur-md backdrop-filter md:mx-[2vw] md:my-0 md:items-start">
      <div class="md:mx-[4vw] md:flex md:flex-row">
        <img
          src={evald}
          class="mx-auto my-[10vw] max-h-[100vw] rounded-[15px] border border-orange-300 md:my-[2vw] md:max-h-[38vw] md:mx-0"
        ></img>
        <div class="mx-auto flex flex-col items-center leading-[8vw] md:mx-[10vw] md:my-auto md:flex-col md:items-start md:leading-[4vw]">
          <p class="text-[6vw] text-gray-200 md:text-[2vw]">
            Hi im Evald Denhof
          </p>
          <p class="text-[8vw] font-bold text-white md:text-[4vw]">
            Im{" "}
            <span class="bg-gradient-to-r from-orange-300 to-red-500 bg-clip-text text-transparent">
              Fullstack
            </span>
          </p>
          <p class="text-[8vw] font-bold text-white md:text-[4vw]">
            Junior Developer
          </p>
          <div class="my-4 flex flex-row space-x-4">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1DEJ9boEeccXmFte-uqytmTpWKSVXOhOP/view?usp=sharing"
            >
              <button class="hover: mt-[4vw] inline-flex w-auto min-w-[25vw] items-center rounded-[15px] border-[1px] border-white bg-[#FFA95E] px-[3vw] py-[1vw] text-[6vw] font-bold text-white opacity-95 duration-100 hover:scale-105 hover:opacity-100 md:mt-[1vw] md:min-w-[1vw] md:px-[1vw] md:py-[0.5vw] md:text-[2.5vw]">
                Lebenslauf
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="ml-[1vw] size-[6vw] md:size-[2vw]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
