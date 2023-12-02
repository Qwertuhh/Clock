const dayo =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const main =()=>{
let ndate = new Date();
const h = ndate.getHours();
  document.getElementById("ih").innerHTML = h ;
  document.getElementById("i").innerHTML = (h<12)? (h):(h-12) +((h<12)?" AM":" PM");
const m = ndate.getMinutes();
  document.getElementById("im").innerHTML = m;
const s = ndate.getSeconds();
  document.getElementById("is").innerHTML = s;
const d = ndate.getDay();
  document.getElementById("day").innerHTML = dayo[d];
console.log(`The current time is ${h}:${m}:${s}`);
}
setInterval(()=>{ main() },1000);