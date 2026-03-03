/* W-Flow Service Pages — Shared JS */

/* Cookie Consent */
function handleCookie(v){localStorage.setItem('wflow_cookie_consent',v);document.getElementById('cookie-banner').classList.remove('show');if(v==='accepted'&&typeof loadGA==='function')loadGA();}
if(!localStorage.getItem('wflow_cookie_consent')){setTimeout(function(){var b=document.getElementById('cookie-banner');if(b)b.classList.add('show');},800);}

/* Cursor */
const dot=document.getElementById('curDot'),ring=document.getElementById('curRing');
if(dot&&ring){
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
  (function raf(){
    rx+=(mx-rx)*.12;ry+=(my-ry)*.12;
    dot.style.cssText=`left:${mx}px;top:${my}px`;
    ring.style.cssText=`left:${rx}px;top:${ry}px`;
    requestAnimationFrame(raf);
  })();
  document.querySelectorAll('a,button,.faq-q').forEach(el=>{
    el.addEventListener('mouseenter',()=>{ring.style.width=ring.style.height='48px';ring.style.borderColor='rgba(212,175,106,.65)';});
    el.addEventListener('mouseleave',()=>{ring.style.width=ring.style.height='32px';ring.style.borderColor='rgba(212,175,106,.4)';});
  });
}

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

/* Magnetic CTA */
document.querySelectorAll('.btn-g').forEach(btn=>{
  btn.addEventListener('mousemove',e=>{
    const r=btn.getBoundingClientRect();
    btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.22}px,${(e.clientY-r.top-r.height/2)*.22}px)`;
    btn.style.transition='transform .1s ease';
  });
  btn.addEventListener('mouseleave',()=>{
    btn.style.transform='translate(0,0)';
    btn.style.transition='transform .6s cubic-bezier(0.16,1,0.3,1)';
  });
});
