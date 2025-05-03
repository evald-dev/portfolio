export default function MainSkillBox({image,text}){
    return(
        <div>
            <div class="grid grid-cols-2 items-center">
            <div class="m-[3vw] h-[15vw] w-[15vw] rounded-lg border border-orange-300 flex items-center justify-center md:h-[5vw] md:w-[5vw] md:my-[1vw] md:mx-[2vw]">
  <img class="object-scale-down w-[12vw] md:w-[5vw]" src={image} />
</div>
          <p class="mx-[2vw] text-[4vw] font-bold text-white md:mx-[0vw] md:text-[1.5vw]">{text}</p>
        </div>
        </div>
    )
}