export default function Header(){
    return(
        <div class="my-[4vw] z-20 flex flex-row justify-between md:my-[1vw] md:mx-[2vw]">
        <p class="mx-[4vw] flex items-center gap-2 text-[4.5vw] text-white md:mx-[0vw] md:text-[2.5vw]">
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
        <div class="flex space-x-[3vw]">
          <button class="mx-[1vw] inline-flex min-h-[8vw] w-auto items-center rounded-[15px] border-[1px] border-orange-300 bg-orange-300 bg-opacity-0 px-[3vw] align-middle text-[4vw] font-bold text-white opacity-95 duration-100 hover:scale-105 hover:opacity-100  md:min-h-[4vw] md:mx-0 md:min-w-[1vw] md:py-0 md:text-[2vw]">
            <h3>Projects</h3>
          </button>
          <a href="https://github.com/evald-dev" target="_blank">
            <button class="mx-[4vw] inline-flex min-h-[8vw] w-auto items-center rounded-[15px] border-[1px] border-white bg-[#FFA95E] px-[3vw] align-middle text-[4vw] font-bold text-white opacity-95 duration-100 hover:scale-105 hover:opacity-100  md:min-h-[4vw] md:min-w-[1vw] md:mx-0 md:py-0 md:text-[2vw]">
              <h3>GitHub</h3>
            </button>
          </a>
        </div>
      </div>
    )
}