import "./App.css";
import "./index.css";
import HeaderSection from "./sections/HeaderSection";

function App() {
  return (
    <div class="z-10">
     
      <p class="z-10 text-white mx-4 md:mx-16 my-4 text-xl flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round"
          d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
  Evald Denhof
</p>

      

      <div class=" absolute top-96 left-[-7vh] md:top-96 md:left-[-7vh] z-0 rounded-full bg-white h-[20vh] w-[20vh] md:h-[70vh] md:w-[70vh] bg-gradient-to-br from-orange-300 from-40% to-red-400 to-80%"></div>
      <HeaderSection />
    </div>
  );
}

export default App;
