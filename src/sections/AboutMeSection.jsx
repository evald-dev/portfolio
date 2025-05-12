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
    <div class="big-container">
      {/* Column fuer md */}
      <div class="md:grid md:grid-cols-5">
        {/* Uebermich + Schonverwendet window */}
        <div class="md:col-span-4 md:ml-[2vw] md:mr-[-1vw]">
          <div class="mx-[3vw] my-[2vh] rounded-xl border border-orange-300 bg-[#1f1f1f] pb-[1vw] md:mx-[4vw] md:my-[2vw]">
            <h2 class="m-[2vw] font-bold text-orange-300 md:m-[1vw] md:my-0">
              {" "}
              Über mich
            </h2>
            <p class="m-[2vw] text-white md:m-[1vw]">
              Hey, ich bin Evald! Als frischgebackener Fachinformatiker
              Anwendungsentwicklung (IHK 2025) lebe ich meine Kreativität im
              Code aus. Mich begeistern moderne Web-Technologien (Java/Spring,
              React) und ich finde es spannend, immer wieder neue Lösungswege zu
              entdecken. Meine Motivation? Die Neugier auf neue Technologien und
              die Freude daran, Ideen in funktionierende und eindrucksvolle
              Anwendungen zu verwandeln.
            </p>
            {/* ist so besser? */}
            <div class="grid grid-cols-3 md:grid-cols-6">
              <h2 class="col-span-3 m-[2vw] font-bold text-orange-300 md:col-span-6 md:m-[1vw] md:mb-0 md:mt-[0vw]">
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
          <span class="hidden md:block"></span>
        </div>
        {/* Main Skills */}
        <div class="mx-[3vw] my-[2vh] grid grid-cols-2 rounded-xl border border-orange-300 bg-[#1f1f1f] pb-[1vw] md:order-first md:mx-[2vw] md:my-[2vw] md:mb-[2vw] md:flex md:w-[20vw] md:flex-col">
          <h2 class="col-span-2 m-[2vw] bg-gradient-to-l from-red-500 to-orange-300 bg-clip-text font-bold text-transparent md:mx-[2vw] md:my-[0]">
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

function SkillTagsWindow() {
  return (
    <div>
      <div class="mx-[3vw] my-[2vh] grid grid-cols-3 rounded-xl border border-orange-300 bg-[#1f1f1f] pb-[1vw] md:m-[4vw] md:my-[5vw] md:mb-[2vw] md:grid-cols-6">
        <h2 class="col-span-3 m-[2vw] font-bold text-orange-300 md:col-span-6 md:m-[1vw] md:mb-0 md:mt-[0vw]">
          Schon verwendet
        </h2>

        <SkillTag text={"Python"} />
        <SkillTag text={"Django"} />
        <SkillTag text={"Firebase"} />
        <SkillTag text={"Linux"} />
        <SkillTag text={"Jira"} />
        <SkillTag text={"Bitbucket"} />
        <SkillTag text={"Docker"} />
        <SkillTag text={"JPA"} />
        <SkillTag text={"Figma"} />
      </div>
    </div>
  );
}
