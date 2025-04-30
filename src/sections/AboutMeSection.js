import MainSkillBox from "../components/MainSkillBox";
import evald from "../assets/evald.jpg";
import spring from "../assets/Spring.svg";
import java from "../assets/java.svg";
import flutter from "../assets/flutter.svg";
import react from "../assets/react.svg";
import postgresql from "../assets/postgresql.svg";
import tailwind from "../assets/tailwind.svg";
import SkillTag from "../components/SkillTag";

export default function AboutMeSection() {
  return (
    <div class="bg-gray-0 z-20 mx-[4vw] my-[2vh] mb-[3vh] flex h-[95vh] snap-center flex-col rounded-2xl border border-gray-100 border-opacity-50 bg-gray-600 bg-opacity-10 backdrop-blur-md backdrop-filter md:mx-[2vw] md:my-0 md:h-[80vh] md:max-h-20 md:min-h-[90vh] md:items-start">
      <div class="mx-[3vw] my-[2vh] md:rounded-xl md:border md:border-orange-300 md:bg-[#242424]">
        <h1 class="text-[6vw] font-bold text-orange-300"> Über mich</h1>
        <p class="text-white">
          Hey, ich bin Evald Fachinformatiker für Anwendungsentwicklung mit
          einer Leidenschaft für kreative Projekte, KI und moderne
          Web-Technologien. Ich denke gerne unkonventionell, lerne ständig Neues
          und liebe es, Ideen zum Leben zu erwecken ob im Code, in der Musik.
          Was mich antreibt? Neugier, Vision und der Drang, Dinge zu erschaffen,
          die nicht nur funktionieren, sondern Eindruck hinterlassen.
        </p>
      </div>
      {/* Main Skills */}
      <div class="mx-[3vw] my-[2vh] grid grid-cols-2 rounded-xl border border-orange-300 bg-[#1f1f1f] pb-[1vw] md:h-[80vh]">
        <h1 class="col-span-2 m-[2vw] bg-gradient-to-r from-orange-300 to-red-500 bg-clip-text text-[6vw] font-bold text-transparent">
          Main Skills
        </h1>
        <MainSkillBox image={spring} text={"Spring"} />
        <MainSkillBox image={java} text={"Java"} />
        <MainSkillBox image={react} text={"React"} />
        <MainSkillBox image={tailwind} text={"Tailwind"} />
        <MainSkillBox image={flutter} text={"Flutter"} />
        <MainSkillBox image={postgresql} text={"Postgre"} />
      </div>
      <div class="mx-[3vw] my-[2vh] mb-[10vw] grid grid-cols-3 rounded-xl border border-orange-300 bg-[#1f1f1f] pb-[1vw] md:h-[80vh]">
        <h1 class="col-span-3 m-[2vw] text-[6vw] font-bold text-orange-300">
          Schon verwendet
        </h1>

        <SkillTag text={"Python"} />
        <SkillTag text={"Django"} />
        <SkillTag text={"Firebase"} />
        <SkillTag text={"Linux"} />
        <SkillTag text={"Jira"} />
        <SkillTag text={"Bitbucket"} />
        <SkillTag text={"Doocker"} />
      </div>
    </div>
  );
}
