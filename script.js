const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
menuToggle?.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open)});
navLinks?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const themeToggle=document.getElementById('themeToggle');
const savedTheme=localStorage.getItem('theme');
if(savedTheme==='dark')document.body.classList.add('dark');
themeToggle?.addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light')});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const counters=document.querySelectorAll('.counter');
let countersStarted=false;
const counterObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting&&!countersStarted){countersStarted=true;counters.forEach(counter=>{const target=Number(counter.dataset.target);let current=0;const step=Math.max(1,Math.ceil(target/70));const timer=setInterval(()=>{current+=step;if(current>=target){current=target;clearInterval(timer)}counter.textContent=current+(target>10?'+':'')},20)})}})},{threshold:.4});
if(counters.length)counterObserver.observe(counters[0]);

window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;document.getElementById('progress').style.width=(scrollY/max*100)+'%'});
document.getElementById('year').textContent=new Date().getFullYear();
