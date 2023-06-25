const url =' https://pokeapi.co/api/v2/pokemon/'
const card=document.getElementById("card")
const btn=document.getElementById("btn")
let imgMonster=document.getElementById("img1")
let hightpower=document.getElementById("hp")
let attack=document.getElementById("attackPower")
let deffence=document.getElementById("diffencePower")
let speedpow=document.getElementById("speed")
let namemonster=document.getElementById("nameofmonster")

btn.addEventListener("click",()=>{
    
    getpockemon();
})
function getpockemon(){
    let id=Math.floor(Math.random()*150)+1
  
    const finalurl=url+id
   // console.log(finalurl);
   fetch(finalurl).then((response)=>response.json())
   .then((data)=>generateCard(data))

}

let generateCard=(data)=>{
    ///get nessassiry data
    console.log(data)
   const hp= data.stats[0]. base_stat
   const nameofmonster=data.name
   const imgsrc=data.sprites.other.dream_world.front_default
   const StateAttack=data.stats[1].base_stat
   const StateDeffence=data.stats[2].base_stat
   const speed=data.stats[5].base_stat
   imgMonster.setAttribute("src",imgsrc)
   namemonster.innerHTML=nameofmonster;
   hightpower.innerHTML=hp
   attack.innerHTML=StateAttack;
   speedpow.innerHTML=speed;
   deffence.innerHTML=StateDeffence



}


window.addEventListener("load",()=>{
    getpockemon();
})
