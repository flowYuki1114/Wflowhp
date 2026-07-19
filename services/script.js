/* W-Flow Service Pages — Shared JS */

/* Cookie Consent */
function handleCookie(v){localStorage.setItem('wflow_cookie_consent',v);document.getElementById('cookie-banner').classList.remove('show');if(v==='accepted'&&typeof loadGA==='function')loadGA();}
if(!localStorage.getItem('wflow_cookie_consent')){setTimeout(function(){var b=document.getElementById('cookie-banner');if(b)b.classList.add('show');},800);}

/* Progress + Header */
window.addEventListener('scroll',()=>{
  document.getElementById('prog').style.width=(scrollY/(document.body.scrollHeight-innerHeight)*100)+'%';
  document.getElementById('hdr').classList.toggle('sc',scrollY>50);
},{passive:true});

/* IntersectionObserver */
const io=new IntersectionObserver(e=>{
  e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('on');});
},{threshold:.08});
document.querySelectorAll('.fu,.rv,.ln').forEach(el=>io.observe(el));

/* FAQ */
function toggleFaq(el){
  const item=el.closest('.faq-item');
  const was=item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
  if(!was)item.classList.add('open');
}

