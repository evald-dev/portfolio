import "./App.css";
import Header from "./components/Header";
import "./index.css";
import AboutMeSection from "./sections/AboutMeSection";
import HeaderSection from "./sections/HeaderSection";
import ProjectsSection from "./sections/ProjectsSection";

function App() {
  return (
    <div class="h-screen ">
      <div class="fixed wd:left-[-7vh] wd:top-96 left-[-7vh] top-[40vh] z-0 h-[60vw] w-[60vw] rounded-full bg-white bg-gradient-to-br from-orange-300 from-40% to-red-400 to-80% md:left-[-7vh] md:top-96 md:h-[40vw] md:w-[40vw]"></div>
      <div class="md:space-y-[3vw]">
        <div class="snap-center">
          <Header></Header>
          <HeaderSection />
        </div>
        <AboutMeSection/>
        <ProjectsSection/>
      </div>
      <div class="h-[3vw] md:h-[3vw]"></div>
    </div>
  );
}

export default App;
