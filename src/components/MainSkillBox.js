export default function MainSkillBox({image,text}){
    return(
        <div>
            <div class="grid grid-cols-2 items-center">
          <div class="m-[2vw] h-[20vw] w-[20vw] rounded-lg border border-orange-300"><img class="m-[2vw] object-scale-down w-[15vw]" src={image}></img></div>
          <p class="mx-[2vw] text-[4vw] font-bold text-white">{text}</p>
        </div>
        </div>
    )
}