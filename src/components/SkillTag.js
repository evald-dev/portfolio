export default function SkillTag({ text }) {
  return (
    <div class="mx-[2vw] mb-[2vw] rounded-lg bg-[#252525] text-center shadow-inner shadow-[#161616] md:mx-[2vw] md:mb-0 md:my-[2vw] md:max-h-[3vw]">
      <p class="my-1 text-[4vw] text-white md:text-[1.5vw] md:my-1"> {text}</p>
    </div>
  );
}
