// smooth scroll
document.querySelectorAll("a[href^='#']").forEach(link=>{
  link.addEventListener("click",e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({behavior:"smooth"});
  });
});

// reveal on scroll
const items=document.querySelectorAll(".reveal");
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>e.isIntersecting && e.target.classList.add("show"));
},{threshold:.15});
items.forEach(i=>io.observe(i));

// theme toggle (saved)
const btn=document.getElementById("themeBtn");
const body=document.body;
if(localStorage.getItem("theme")==="light"){body.classList.add("light");btn.textContent="🌙";}
btn.addEventListener("click",()=>{
  body.classList.toggle("light");
  localStorage.setItem("theme",body.classList.contains("light")?"light":"dark");
});
