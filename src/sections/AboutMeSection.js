import MainSkillBox from "../components/MainSkillBox";
import evald from "../assets/evald.jpg";
import spring from "../assets/Spring.svg";
import java from "../assets/java.svg";
import flutter from "../assets/flutter.svg";
import react from "../assets/react.svg";
import postgresql from "../assets/postgresql.svg";
import tailwind from "../assets/tailwind.svg";
import SkillTag from "../components/SkillTag";
import "../index.css";

export default function AboutMeSection() {
  return (
    <div class="bg-gray-0 z-20 mx-[4vw] my-[2vh] mb-[3vh] flex snap-center flex-col rounded-2xl border border-gray-100 border-opacity-50 bg-gray-600 bg-opacity-10 backdrop-blur-md backdrop-filter md:mx-[2vw] md:my-0 md:min-h-[90vh] md:items-start">
      {/* Column fuer md */}
     <div class="md:grid md:grid-cols-5">
      {/* Uebermich + Schonverwendet window */}
      <div class="md:col-span-4 md:ml-[2vw] md:mr-[-1vw]">
      <div class="mx-[3vw] my-[2vh] rounded-xl border border-orange-300 bg-[#1f1f1f] pb-[1vw] md:m-[4vw] md:my-[2vw] ">
        <h2 class="m-[2vw]  font-bold text-orange-300 md:m-[1vw] md:my-0">
          {" "}
          Über mich
        </h2>
        <p class="m-[2vw] text-white md:m-[1vw]">
          Hey, ich bin Evald Fachinformatiker für Anwendungsentwicklung mit
          einer Leidenschaft für kreative Projekte, KI und moderne
          Web-Technologien. Ich denke gerne unkonventionell, lerne ständig Neues
          und liebe es, Ideen zum Leben zu erwecken ob im Code, in der Musik.
          Was mich antreibt? Neugier, Vision und der Drang, Dinge zu erschaffen,
          die nicht nur funktionieren, sondern Eindruck hinterlassen.
        </p>
      </div>
      <span class="hidden md:block">
      <SkillTagsWindow></SkillTagsWindow>
      </span>
      </div>
      {/* Main Skills */}
      <div class="mx-[3vw] my-[2vh] grid grid-cols-2 rounded-xl border border-orange-300 bg-[#1f1f1f] pb-[1vw] md:w-[20vw] md:m-[2vw] md:flex md:flex-col md:my-[4vh] md:order-first md:mb-[2vw]">
        <h2 class="col-span-2 m-[2vw] bg-gradient-to-l from-red-500 to-orange-300 bg-clip-text  font-bold text-transparent md:mx-[2vw] md:my-[0]">
          Main Skills
        </h2>
        <MainSkillBox image={spring} text={"Spring"} />
        <MainSkillBox image={java} text={"Java"} />
        <MainSkillBox image={react} text={"React"} />
        <MainSkillBox image={tailwind} text={"Tailwind"} />
        <MainSkillBox image={flutter} text={"Flutter"} />
        <MainSkillBox image={postgresql} text={"Postgre"} />
      </div>
      </div>
      <span class="md:hidden">
      <SkillTagsWindow></SkillTagsWindow>
      </span>
    </div>
  );
}

function SkillTagsWindow(){
  return(
    <div>
<div class="mx-[3vw] my-[2vh] grid grid-cols-3 md:grid-cols-6 rounded-xl border border-orange-300 bg-[#1f1f1f] pb-[1vw] md:mb-[2vw] md:my-[5vw] md:m-[4vw] ">
        <h2 class="col-span-3 md:col-span-6 m-[2vw] font-bold text-orange-300 md:m-[1vw] md:mt-[0vw] md:mb-0">
          Schon verwendet
        </h2>

        <SkillTag text={"Python"} />
        <SkillTag text={"Django"} />
        <SkillTag text={"Firebase"} />
        <SkillTag text={"Linux"} />
        <SkillTag text={"Jira"} />
        <SkillTag text={"Bitbucket"} />
        <SkillTag text={"Doocker"} />
        <SkillTag text={"JPA"} />
        <SkillTag text={"Figma"} />
      </div>
    </div>
  )
}
