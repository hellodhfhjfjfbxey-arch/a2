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
var pk=$('bd-pk');if(pk){var P=[['Base',[['Crostini','#D9A15B'],['Cucumber','#9DBF6B'],['Puff pastry','#E8C27A'],['Blini','#E9D2A6']]],['Spread',[['Whipped feta','#FFFFFF'],['Hummus','#E4C489'],['Herb butter','#E5E19A'],['Beetroot dip','#B03A63']]],['Topping',[['Smoked salmon','#F08A6A'],['Roast tomato','#E2483D'],['Mushroom','#7A5A44'],['Prosciutto','#D97A7A']]],['Finish',[['Dill','#5E8A3A'],['Chilli','#C53A30'],['Lemon zest','#F2D33D'],['Honey','#E8A632']]]];
 pk.innerHTML=P.map(function(g,gi){return '<fieldset><legend>'+(gi+1)+'. '+g[0]+'</legend><div class="ch">'+g[1].map(function(o,oi){return '<label><input type="radio" name="bd'+gi+'" value="'+oi+'"'+(oi===0?' checked':'')+'><span>'+o[0]+'</span></label>';}).join('')+'</div></fieldset>';}).join('');
 var ins=[].slice.call(pk.querySelectorAll('input'));function v(g){var x=0;ins.forEach(function(e){if(e.name==='bd'+g&&e.checked)x=+e.value;});return x;}
 function bd(){var s=[0,1,2,3].map(v),c=s.map(function(x,i){return P[i][1][x][1];}),o='<ellipse cx="150" cy="250" rx="110" ry="18" fill="#2A1D17" opacity=".1"/>';
  o+=s[0]===1?'<g class="ly"><ellipse cx="150" cy="215" rx="95" ry="32" fill="'+c[0]+'"/><ellipse cx="150" cy="210" rx="82" ry="25" fill="#E5F0C8"/></g>':'<g class="ly"><rect x="55" y="195" width="190" height="38" rx="'+(s[0]===3?19:10)+'" fill="'+c[0]+'"/><rect x="55" y="195" width="190" height="10" rx="5" fill="#fff" opacity=".25"/></g>';
  o+='<g class="ly" style="animation-delay:.12s"><path d="M70 196 q80 -26 160 0 q-10 14 -80 14 q-70 0 -80 -14z" fill="'+c[1]+'" stroke="#2A1D17" stroke-opacity=".15"/></g>';
  o+='<g class="ly" style="animation-delay:.24s">'+(s[2]===2?'<ellipse cx="120" cy="176" rx="26" ry="16" fill="'+c[2]+'"/><ellipse cx="178" cy="176" rx="24" ry="15" fill="'+c[2]+'"/>':'<path d="M84 186 q30 -40 66 -20 q36 -24 66 18 q-66 14 -132 2z" fill="'+c[2]+'"/>')+'</g>';
  var f='';for(var i=0;i<6;i++){var x=100+i*20,y=150+(i%2)*12;f+=s[3]===3?'<path d="M'+(x-6)+' '+y+' q6 18 12 0" stroke="'+c[3]+'" stroke-width="5" fill="none" stroke-linecap="round"/>':'<circle cx="'+x+'" cy="'+y+'" r="'+(s[3]===0?5:4)+'" fill="'+c[3]+'"/>';}o+='<g class="ly" style="animation-delay:.36s">'+f+'</g>';
  $('bd-svg').innerHTML=o;var nm=P[2][1][s[2]][0]+' on '+P[0][1][s[0]][0].toLowerCase()+' with '+P[1][1][s[1]][0].toLowerCase()+' and '+P[3][1][s[3]][0].toLowerCase();$('bd-n').textContent=nm;}
 ins.forEach(function(e){e.addEventListener('change',bd);});bd();}
var ring=$('ring');if(ring){var a=0,w=ring.parentElement;function sp(d){a+=d*60;ring.style.transform='rotateY('+(-a)+'deg)';}$('rg-n').addEventListener('click',function(){sp(1);});$('rg-p').addEventListener('click',function(){sp(-1);});
 var x0=null;w.addEventListener('pointerdown',function(e){x0=e.clientX;});addEventListener('pointerup',function(e){if(x0===null)return;var dx=e.clientX-x0;if(Math.abs(dx)>30)sp(dx<0?1:-1);x0=null;});
 if(!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)){var t=setInterval(function(){sp(1);},3500);w.addEventListener('pointerdown',function(){clearInterval(t);});$('rg-n').addEventListener('click',function(){clearInterval(t);});$('rg-p').addEventListener('click',function(){clearInterval(t);});}}
var pg=$('pr-g');if(pg){var I=['Tomato','Basil','Mozzarella','Smoked salmon','Dill','Cream cheese','Fig','Goat cheese','Honey','Prosciutto','Melon','Beetroot','Feta','Mint','Cucumber','Lemon'];
 var M={'Tomato':['Basil','Mozzarella','Feta'],'Basil':['Tomato','Mozzarella','Lemon'],'Mozzarella':['Tomato','Basil','Prosciutto'],'Smoked salmon':['Dill','Cream cheese','Cucumber','Lemon'],'Dill':['Smoked salmon','Cucumber','Cream cheese'],'Cream cheese':['Smoked salmon','Dill','Cucumber'],'Fig':['Goat cheese','Honey','Prosciutto'],'Goat cheese':['Fig','Honey','Beetroot'],'Honey':['Fig','Goat cheese','Feta'],'Prosciutto':['Melon','Fig','Mozzarella'],'Melon':['Prosciutto','Mint','Feta'],'Beetroot':['Goat cheese','Feta','Mint'],'Feta':['Melon','Mint','Beetroot','Tomato'],'Mint':['Melon','Feta','Cucumber'],'Cucumber':['Smoked salmon','Dill','Mint'],'Lemon':['Smoked salmon','Basil','Feta']};
 pg.innerHTML=I.map(function(x){return '<button type="button">'+x+'</button>';}).join('');var bs=[].slice.call(pg.children);
 function pr(k){var p=M[k];bs.forEach(function(b){var t=b.textContent;b.className=t===k?'on':(p.indexOf(t)>-1?'pair':'dim');b.setAttribute('aria-pressed',t===k);});$('pr-o').textContent=k+' loves '+p.slice(0,-1).join(', ')+(p.length>1?' and ':'')+p[p.length-1].toLowerCase()+'. Put two of them on a crisp base and you have a bite.';}
 bs.forEach(function(b){b.addEventListener('click',function(){pr(b.textContent);});});pr('Fig');}
})();
