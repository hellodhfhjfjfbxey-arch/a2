(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
function chips(id,cb){var w=$(id);if(!w)return;[].forEach.call(w.querySelectorAll('button'),function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){[].forEach.call(w.querySelectorAll('button'),function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});cb(+b.getAttribute('data-v'));});});}
var belt=$('belt');if(belt&&!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)){var hold=false;['pointerdown','mouseenter','touchstart','focusin'].forEach(function(e){belt.addEventListener(e,function(){hold=true;});});['mouseleave','focusout'].forEach(function(e){belt.addEventListener(e,function(){hold=false;});});
 setInterval(function(){if(hold)return;if(belt.scrollLeft+belt.clientWidth>=belt.scrollWidth-2)belt.scrollLeft=0;else belt.scrollLeft+=1;},30);}
var cg=$('ct-g');if(cg){var occ=1,ch=$('ct-h');var MIX=[['Crisp crostini','#D9A15B'],['Veggie bites','#7FAE52'],['Meaty bites','#FF7A59'],['Creamy cups','#F6E27F'],['Warm pastry','#C98A4B'],['Skewers','#E85F3D'],['Seafood','#7FC1C4'],['Sweet bites','#E7A3B8']];
 function ct(){var g=+cg.value,h=+ch.value,per=occ===0?3.5:occ===1?4*h+(h>=2?1:0):Math.max(12,5*h+3);if(occ===0)per=Math.min(5,3+(h-1));var tot=Math.round(g*per),k=g<=12?4:g<=24?5:g<=40?6:8;if(occ===2)k=Math.min(8,k+1);var each=Math.ceil(tot/k);
  $('ct-go').textContent=g;$('ct-ho').textContent=h+(h===1?' hour':' hours');$('ct-t').textContent=tot;$('ct-k').textContent=k;$('ct-e').textContent=each;
  var d='',shown=Math.min(tot,200);for(var i=0;i<shown;i++){d+='<i style="--c:'+MIX[i%k][1]+';--n:'+i+'"></i>';}$('ct-d').innerHTML=d;
  $('ct-m').innerHTML=MIX.slice(0,k).map(function(m){return '<li><i style="--c:'+m[1]+'"></i>'+m[0]+'<b>'+each+'</b></li>';}).join('')+(tot>200?'<li style="grid-column:1/-1">Each dot is one bite; showing the first 200.</li>':'');}
 cg.addEventListener('input',ct);ch.addEventListener('input',ct);chips('ct-o',function(v){occ=v;ct();});ct();}
var pt=$('pl-t');if(pt){var warm=1;function fmt(x){x=(x+48)%24;var h=Math.floor(x),m=Math.round((x-h)*60),ap=h<12?'am':'pm',hh=h%12||12;return hh+':'+(m<10?'0':'')+m+' '+ap;}
 function pl(){var t=+pt.value;$('pl-to').textContent=fmt(t);var S=[['The day before','Bake crostini and pastry cases, make dips and spreads, and store everything separately in airtight boxes.'],[fmt(t-6)+' on the day','Chop toppings, wash herbs and set out trays, napkins and labels.'],[fmt(t-2),'Take spreads out of the fridge so they soften, and lay out bases on trays.']];
  if(warm)S.push([fmt(t-1.5),'Shape warm bites ready for the oven and heat it to a low temperature.']);S.push([fmt(t-1),'Assemble crisp bites: spread, topping and fresh finish, tray by tray.']);if(warm)S.push([fmt(t-.25),'Warm bites into the oven so the first tray is hot as the doorbell rings.']);S.push([fmt(t),'First guests arrive. Send out the first wave and keep the rest for later.']);
  $('pl-l').innerHTML=S.map(function(s,i){return '<li'+(i===S.length-1?' class="hot"':'')+' style="animation-delay:'+(i*60)+'ms"><b>'+s[0]+'</b><span>'+s[1]+'</span></li>';}).join('');}
 pt.addEventListener('input',pl);chips('pl-w',function(v){warm=v;pl();});pl();}
var st=document.querySelector('.ms2-an-g');if(st&&'IntersectionObserver' in window){new IntersectionObserver(function(es,o){es.forEach(function(e){if(e.isIntersecting){st.classList.add('in');o.disconnect();}});},{threshold:.3}).observe(st);}else if(st){st.classList.add('in');}
})();
