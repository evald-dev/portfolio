import "./App.css";
import "./index.css";
import HeaderSection from "./sections/HeaderSection";

function App() {
  return (
    <div>
      <div class="my-[4vw] flex flex-row justify-between md:my-[1vw]">
        <p class="mx-[4vw] flex items-center gap-2 text-[4.5vw] text-white md:mx-[1vw] md:text-[2.5vw]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-[7vw] md:size-[4vw]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          Evald Denhof
        </p>
        <div class="flex">
          <button class="mx-[1vw] inline-flex min-h-[8vw] w-auto items-center rounded-md border-2 border-orange-300 bg-orange-300 bg-opacity-0 px-[3vw] align-middle text-[4vw] font-bold text-white opacity-95 duration-100 hover:scale-105 hover:opacity-100 md:mx-[2vw]   md:min-h-[4vw] md:min-w-[1vw] md:py-0 md:text-[2vw]">
            Projects
          </button>
          <button class="mx-[4vw] inline-flex min-h-[8vw] w-auto items-center rounded-md border-2 border-white bg-[#FFA95E] px-[3vw] align-middle text-[4vw] font-bold text-white opacity-95 duration-100 hover:scale-105 hover:opacity-100 md:mx-[2vw]   md:min-h-[4vw] md:min-w-[1vw] md:py-0 md:text-[2vw]">
            GitHub
          </button>
        </div>
      </div>

      <div class="absolute left-[-7vh] top-[40vh] wd:left-[-7vh] wd:top-96 z-0 h-[60vw] w-[60vw] rounded-full bg-white bg-gradient-to-br from-orange-300 from-40% to-red-400 to-80% md:left-[-7vh] md:top-96 md:h-[40vw] md:w-[40vw]"></div>
      <HeaderSection />
    </div>
  );
}

export default App;
