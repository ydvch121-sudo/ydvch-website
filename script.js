const menu=document.getElementById("menu"),nav=document.getElementById("nav");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
const input=document.getElementById("ydvch"),units=document.getElementById("units");
input?.addEventListener("input",()=>{const n=Number(input.value)||0;units.textContent=(n*100000000).toLocaleString("en-US",{maximumFractionDigits:0})});
document.getElementById("searchBtn")?.addEventListener("click",()=>{document.getElementById("hint").textContent="Search is reserved for the YDVCH testnet explorer. It will become active when the real network is online."});
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(x=>observer.observe(x));
