// @ts-nocheck
/* Dino Run engine: canvas game ported 1:1 from the original build. Returns a cleanup function. */
export function initDinoGame(): () => void {
const ac=new AbortController(),on=(t,ev,fn)=>t.addEventListener(ev,fn,{signal:ac.signal});let raf=0,io;
const FONT=getComputedStyle(document.body).getPropertyValue('--font-pixel').trim()||'monospace';
const c=document.getElementById('g'),x=c.getContext('2d'),W=400,H=150,G=124,img=Object.assign(new Image(),{src:'/images/dino.png'}),R=Math.random,id=s=>document.getElementById(s);
x.imageSmoothingEnabled=false;
let S='ready',vis=false,best=0,mute=false,AC,last=0,d,o,k,pt,pp,cl,dist,bonus,score,cn,speed,t=0,nk=0,hold=false,isNew=false;
try{best=+localStorage.getItem('dl_best')||0}catch(e){}
id('bs').textContent=best;
const tone=(f,du,ty='square',v=.04,sl=0)=>{if(mute)return;try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();const a=AC.createOscillator(),g=AC.createGain();a.type=ty;a.frequency.setValueAtTime(f,AC.currentTime);if(sl)a.frequency.exponentialRampToValueAtTime(sl,AC.currentTime+du);g.gain.setValueAtTime(v,AC.currentTime);g.gain.exponentialRampToValueAtTime(.0001,AC.currentTime+du);a.connect(g);g.connect(AC.destination);a.start();a.stop(AC.currentTime+du)}catch(e){}};
function reset(){d={y:0,vy:0,duck:false,rot:0,air:false};o=[];k=[];pt=[];pp=[];dist=0;bonus=0;score=0;cn=0;speed=140;
cl=[0,1,2,3].map(i=>({x:i*110,y:12+R()*40,w:20+R()*18}));hud()}
function hud(){id('sc').textContent=score;id('co').textContent=cn;id('bs').textContent=best}
function ov(h,p,b){const e=id('ov');e.className='';e.innerHTML=`<h3>${h}</h3><p>${p}</p><button class="btn" id="go">${b}</button>`;id('go').onclick=start}
function start(){if(S==='pause'){S='run';id('ov').className='off';return}reset();S='run';id('ov').className='off';tone(440,.1,'square',.04,880)}
function jump(){if(S!=='run'){if(vis||S!=='run')start();return}if(d.y===0){d.vy=330;d.air=true;d.rot=0;tone(300,.15,'square',.04,700);for(let i=0;i<5;i++)pp.push({x:46+R()*20,y:G,vx:-30-R()*40,vy:-R()*30,l:.4})}}
function over(){S='over';tone(200,.4,'sawtooth',.06,50);isNew=score>best;if(isNew){best=score;try{localStorage.setItem('dl_best',best)}catch(e){}}hud();
ov('GAME OVER',`Score ${score} · Coins ${cn}<br>${isNew?'⭐ NEW RECORD!':'Best '+best}`,'PLAY AGAIN')}
function pause(){if(S==='run'){S='pause';ov('PAUSE','Press P or the button below to resume.','RESUME')}else if(S==='pause')start()}
function hit(a,b){return a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y}
function spawn(){const sc=score,r=R();let w,h,y,ty;
if(sc>250&&r<.28){ty='f';w=22;h=12;y=G-34}else if(r<.6){ty='c';w=12+R()*10|0;h=18+R()*12|0;y=G-h}else{ty='r';w=18;h=12;y=G-12}
o.push({t:ty,x:W+10,y,w,h});
if(R()<.55){const n=3,by=G-30-R()*34;for(let i=0;i<n;i++)k.push({x:W+w/2+i*14-14,y:by-Math.sin(i/2*Math.PI)*10,w:8,h:8})}}
function update(dt){speed=Math.min(330,140+score*.12);dist+=speed*dt;t+=dt;
if(d.y>0||d.vy>0){const g=1100*(d.duck?2.6:1);d.y+=d.vy*dt;d.vy-=g*dt;d.rot=Math.min(Math.PI*2,d.rot+dt*10.5);
if(d.y<=0){d.y=0;d.vy=0;d.air=false;if(d.rot>=6.2){bonus+=5;pp.push({txt:'KICKFLIP +5',x:50,y:G-50,l:1});tone(660,.12,'square',.04,1320)}d.rot=0;tone(120,.06,'triangle',.05);for(let i=0;i<6;i++)pp.push({x:50+R()*20,y:G,vx:-speed*.3*R(),vy:-R()*40,l:.35})}}
const lx=o.length?o[o.length-1].x:-999;if(lx<W-(120+R()*110+speed*.3))spawn();
o.forEach(e=>e.x-=(speed+(e.t==='f'?45:0))*dt);k.forEach(e=>e.x-=speed*dt);
o=o.filter(e=>e.x>-40);k=k.filter(e=>e.x>-20);
const hh=d.duck&&d.y===0?20:32,D={x:46,y:G-d.y-hh+3,w:24,h:hh-5};
for(const e of o)if(hit(D,{x:e.x+2,y:e.y+2,w:e.w-4,h:e.h-3}))return over();
k=k.filter(e=>{if(hit(D,e)){cn++;bonus+=10;tone(880,.08,'square',.04,1760);pp.push({txt:'+10',x:e.x,y:e.y,l:.5});return false}return true});
score=Math.floor(dist/8)+bonus;pp.forEach(p=>{p.l-=dt;if(p.vx!==undefined){p.x+=p.vx*dt;p.y+=p.vy*dt}else p.y-=12*dt});pp=pp.filter(p=>p.l>0);
cl.forEach(e=>{e.x-=speed*.08*dt;if(e.x<-40)e.x=W+R()*60});hud()}
const col=(f,a,b,w,h)=>{x.fillStyle=f;x.fillRect(a|0,b|0,w,h)};
function draw(){const sp=S==='run'?dist:t*40;if(S!=='run')t+=.016;
['#1b2a4a','#3d3560','#6b3b4d','#a8503f','#d0743c'].forEach((f,i)=>col(f,0,i*25,W,25));col('#ffc83d',300,48,26,26);col('#fff0a0',304,52,10,10);
if(cl)cl.forEach(e=>{col('#e9e7f5',e.x,e.y,e.w,6);col('#e9e7f5',e.x+6,e.y-4,e.w-12,4);col('#b9b8d4',e.x,e.y+4,e.w,2)});
for(let i=0;i<=W/8;i++){const px=i*8,a=sp*.15;col('#2a2347',px,G-30-Math.abs(Math.sin((px+a)/45))*26|0,8,150);col('#16331f',px,G-14-Math.abs(Math.sin((px+sp*.4)/22))*12|0,8,150)}
col('#3f9e3a',0,G,W,H-G);col('#7dff6a',0,G,W,3);col('#5a3a22',0,G+12,W,H);for(let i=0;i<30;i++){const gx=((i*16-sp)%(W+16)+W+16)%(W+16)-8;col('#2d8a33',gx,G+4,2,4);col('#7a5233',gx+6,G+18,4,2)}
if(!d)return;
o.forEach(e=>{if(e.t==='c'){col('#2f8a33',e.x+e.w/2-3,e.y,6,e.h);col('#2f8a33',e.x,e.y+6,e.w/2,4);col('#2f8a33',e.x,e.y+3,4,6);col('#2f8a33',e.x+e.w/2+3,e.y+9,e.w/2-3,4);col('#2f8a33',e.x+e.w-4,e.y+5,4,8);col('#7dff6a',e.x+e.w/2-3,e.y,2,e.h)}
else if(e.t==='r'){col('#6b6b7a',e.x,e.y,e.w,e.h);col('#9b9bb0',e.x+2,e.y,e.w-6,3);col('#4a4a5a',e.x,e.y+e.h-3,e.w,3)}
else{const f=(t*10|0)%2;col('#a33',e.x+4,e.y+3,14,6);col('#d55',e.x+14,e.y+1,8,5);col('#ffc83d',e.x+22,e.y+3,3,2);col('#833',e.x+8,f?e.y-3:e.y+8,8,4);col('#833',e.x,e.y+4,5,3)}});
k.forEach(e=>{const b=Math.sin(t*6+e.x/9)*1.5;col('#06100a',e.x-1,e.y+b-1,10,10);col('#ffc83d',e.x,e.y+b,8,8);col('#fff0a0',e.x+2,e.y+b+2,3,3)});
const sw=36,sh=d.duck&&d.y===0?21:32,bob=S==='run'&&d.y===0&&((t*14)|0)%2?1:0;
x.save();x.translate(Math.round(46-6+sw/2),Math.round(G-d.y-sh/2-bob+1));x.rotate(d.rot);img.naturalWidth&&x.drawImage(img,-sw/2,-sh/2,sw,sh);x.restore();
pp.forEach(p=>{if(p.txt){x.font='6px '+FONT;x.fillStyle=p.txt[0]=='K'?'#7dff6a':'#ffc83d';x.fillText(p.txt,p.x,p.y)}else col('#f0e2bd',p.x,p.y,2,2)})}
function loop(n){raf=requestAnimationFrame(loop);const dt=Math.min(.05,(n-last)/1000||0);last=n;d&&(d.duck=hold&&true);if(S==='run'&&vis&&!document.hidden)update(dt);else if(S==='run')pause();draw()}
reset();ov('DINO RUN','Jump over obstacles, collect coins, and chase the top score in DinoLand.','PLAY');
io=new IntersectionObserver(e=>{vis=e[0].isIntersecting;if(!vis&&S==='run')pause()},{threshold:.3});io.observe(id('arena'));
on(window,'keydown',e=>{const kk=e.key.toLowerCase();if(!vis&&S!=='run')return;
if([' ','arrowup','w'].includes(kk)){e.preventDefault();if(!e.repeat)jump()}
else if(['arrowdown','s'].includes(kk)){e.preventDefault();hold=true}
else if(kk==='p'||kk==='escape')pause();else if(kk==='m')id('mu').click()});
on(window,'keyup',e=>{if(['arrowdown','s'].includes(e.key.toLowerCase()))hold=false});
on(c,'pointerdown',jump);
on(id('bj'),'pointerdown',e=>{e.preventDefault();jump()});
const bd=id('bd');on(bd,'pointerdown',e=>{e.preventDefault();hold=true});['pointerup','pointerleave','pointercancel'].forEach(v=>on(bd,v,()=>hold=false));
id('mu').onclick=()=>{mute=!mute;id('mu').textContent=mute?'🔇':'🔊'};id('pa').onclick=pause;
raf=requestAnimationFrame(loop);
return()=>{cancelAnimationFrame(raf);ac.abort();io&&io.disconnect()}
}
