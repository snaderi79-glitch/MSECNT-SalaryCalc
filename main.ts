import {CON as CON0, FEE, DEF, ADMIN_HASH} from "./data";
let CON: any[] = CON0;
try{const o=JSON.parse(localStorage.getItem('msecnt_con')||'null');if(Array.isArray(o)&&o.length)CON=o}catch(e){}
const TAX=[[40e6,.1],[80e6,.05],[100e6,.05],[120e6,.05],[140e6,.05]];
const $=i=>document.getElementById(i);
const nf=v=>isFinite(v)?Math.round(v).toLocaleString('en-US'):String(v);
const pf=v=>(v*100).toFixed(2)+'%';
const num=i=>{const s=String($(i).value).replace(/[,٬\s]/g,'').replace(/[۰-۹]/g,c=>'۰۱۲۳۴۵۶۷۸۹'.indexOf(c)).replace(/[٠-٩]/g,c=>'٠١٢٣٤٥٦٧٨٩'.indexOf(c));const v=parseFloat(s);return isNaN(v)?0:v};
const tax=a=>TAX.reduce((s,[f,g])=>s+(a>f?(a-f)*g:0),0);
function fillStatic(){
 $('contract').innerHTML=CON.map(c=>`<option>${c[0]}</option>`).join('');
 $('role').innerHTML=Object.keys(FEE).map(k=>`<option>${k}</option>`).join('');
}
function setDefaults(){
 const d=DEF;$('method').value=d.method;$('manual').value=d.manual;$('mmode').value='ماهانه';$('hrate').value='';$('hours').value='176';$('contract').value=d.contract;$('role').value=d.role;$('exp').value=d.exp;
 for(const k of ['ename','eid','site'])$(k).value=d.blank||'';
 for(const k of ['netexp','ins','days','married','kids','supp','bonus','cloth','food','lodge','transp','over','target','risk','delay'])$(k).value=d[k];
}
function params(){
 const c=CON.find(c=>String(c[0])===String($('contract').value))||['','-','-',0];
 const exp=num('exp'),idx=Math.min(Math.floor(exp),25);
 const feeK=(FEE[$('role').value]||[])[idx]||0;
 const method=$('method').value;
 const B=method==='دستی'?($('mmode').value==='ساعتی'?num('hrate')*num('hours'):num('manual')):c[3]*feeK*100;
 let st=method==='دستی'?'حالت دستی فعال است':feeK===0?'برای این رده و سابقه نرخی تعریف نشده است':c[3]===0?'ضریب این قرارداد هنوز وارد نشده':'محاسبه بر اساس قرارداد';
 return {c,feeK,B,st,ins:+$('ins').value,days:+$('days').value,mar:+$('married').value,kids:num('kids'),supp:num('supp'),bonus:num('bonus'),cloth:num('cloth'),
  food:num('food'),lodge:num('lodge'),transp:num('transp'),over:num('over')/100,target:num('target')/100,risk:num('risk')/100,delay:num('delay'),netexp:num('netexp'),base:0};
}
function consts(p){
 const f=p.ins;
 const wel=3e6*f+2.2e6*f+1662554*f*p.kids*f+5e5*p.mar*f;  // مسکن+بن+حق اولاد+تاهل
 const kidsPay=1662554*f*p.kids*f;
 const B26=16625550*p.days/30*f;
 const hh=(1+p.kids+p.mar)*f;
 const other=p.food*p.days+p.lodge*p.days+p.transp+hh*p.supp+p.bonus+p.cloth;
 return {f,wel,kidsPay,cap:B26*p.days/30*7,B26,other,eid:3*B26/12*f,emp:.23*f,wk:.07*f,riskT:p.risk*p.delay};
}
function model(p,k,base){
 const hk=base+k.wel, raw=hk-k.kidsPay, ib=Math.min(raw,k.cap), w=k.wk*ib, t=tax(hk-w);
 const ins=k.emp*ib+w;
 const C=ins+k.eid+base/12*k.f+hk/12*k.f+k.other+hk;
 const over=p.over*p.B, risk=k.riskT*p.B, ceil=.1667*p.B;
 const short=Math.max(0,ceil-.3*ib), pre=p.B-C-over-short-risk, taxc=Math.max(0,.25*pre);
 return {hk,ib,w,t,ins,C,over,risk,short,pre,taxc,net:pre-taxc,empNet:hk-w-t,ceil};
}
function baseFromNet(p,k,net){
 let lo=0,hi=1e11;
 for(let i=0;i<100;i++){const b=(lo+hi)/2,m=model(p,k,b);if(m.empNet<net)lo=b;else hi=b}
 return (lo+hi)/2;
}
function solveX(p,k,tg){
 let lo=0,hi=p.B,D,M;
 for(let i=0;i<50;i++){D=(lo+hi)/2;M=model(p,k,D).net-tg;if(i<49){if(M>=0)lo=D;else hi=D}}
 const ans=M>=0?D:lo;
 const ctl=model(p,k,0).net-tg;
 return {base:ans,m:model(p,k,ans),ok:ctl>=0};
}
function row(a,b,cls){return `<tr><td>${a}</td><td class="n ${cls||''}">${b}</td></tr>`}
const COL=['#0b5ed7','#f08c00','#e03131','#9c36b5','#868e96','#12a150'];
function pie(p,m){
 const it=[['هزینه مستقیم (C)',m.C],['سربار',m.over],['ریسک تأخیر',m.risk],['کسری ماده ۳۸',m.short],['مالیات عملکرد',m.taxc],['سود خالص',Math.max(0,m.net)]].map(x=>[x[0],Math.max(0,x[1])]);
 const tot=it.reduce((s,x)=>s+x[1],0)||1;let h='';const ring=(cy,col,d,off)=>`<circle cx="21" cy="${cy}" r="15.9" fill="none" stroke="${col}" stroke-width="6" stroke-dasharray="${d} ${100-d}" stroke-dashoffset="${off}"/>`;
 for(let L=4;L>=1;L--){let off=25;it.forEach((x,i)=>{const d=x[1]/tot*100;if(d>0){h+=ring(21+L*.5,'#000',d,off).replace('stroke="#000"','stroke="'+COL[i]+'" style="filter:brightness(.6)"');off-=d}})}
 let off=25;it.forEach((x,i)=>{const d=x[1]/tot*100;if(d>0){h+=ring(21,COL[i],d,off);off-=d}});
 $('svg').innerHTML=h;
 $('lg').innerHTML=it.map((x,i)=>`<div><i style="background:${COL[i]}"></i>${x[0]}: <b>${(x[1]/tot*100).toFixed(1)}٪</b></div>`).join('');
}
function calc(){
 const p=params(),k=consts(p);p.base=baseFromNet(p,k,p.netexp);$('site').value=p.c[1];
 $('employer').value=p.c[1];$('ph').innerHTML=`<b>محاسبه حقوق حکمی (ناخالص) بر اساس قرارداد کارفرما</b><br>نام و نام خانوادگی: <b>${$('ename').value||'-'}</b> &nbsp; شماره پرسنلی: <b>${$('eid').value||'-'}</b> &nbsp; محل خدمت: <b>${$('site').value||'-'}</b><br>شماره قرارداد: <b>${$('contract').value}</b> &nbsp; کارفرما: <b>${p.c[1]}</b> &nbsp; رده: <b>${$('role').value}</b>`;$('subject').value=p.c[2];$('coef').value=p.c[3];$('feebase').value=nf(p.feeK*100);$('B').value=nf(p.B);$('status').value=p.st;
 {const dm=$('method').value==='دستی',hr=$('mmode').value==='ساعتی';
 $('mmode').closest('div').style.opacity=dm?1:.5;
 for(const i of ['manual','hrate','hours'])$(i).closest('div').style.opacity=dm?1:.5;
 $('manual').closest('div').style.display=hr?'none':'';
 $('hrate').closest('div').style.display=hr?'':'none';$('hours').closest('div').style.display=hr?'':'none';
 $('mmode').closest('div').style.display=dm?'':'none';}
 const m=model(p,k,p.base);p.target=p.B>0?m.net/p.B:0;$('target').value=(p.target*100).toFixed(2);$('hkro').value=nf(m.hk);$('basero').value=nf(p.base);const tg=p.target*p.B;
 $('kpis').innerHTML=`<div class="kpi k1"><span>دریافتی ماهانه (B)</span><b>${nf(p.B)}</b></div><div class="kpi k2"><span>هزینه کل شرکت (C)</span><b>${nf(m.C)}</b></div><div class="kpi k3 ${m.net>0?'':'neg'}"><span>سود خالص</span><b>${nf(m.net)}</b></div><div class="kpi k4"><span>حاشیه سود / نسبت B÷C</span><b>${pf(p.B?m.net/p.B:0)} · ${(p.B/m.C).toFixed(2)}</b></div>`;
 pie(p,m);
 window._sum=[['دریافتی از کارفرما (B)',nf(p.B)],['حقوق پایه',nf(p.base)],['حقوق حکمی (ناخالص)',nf(m.hk)],['حقوق خالص کارمند (A)',nf(m.empNet)]];
 const hmanual=$('method').value==='دستی'&&$('mmode').value==='ساعتی';
 window._hr=hmanual?{rate:num('hrate'),hours:num('hours'),src:'ورودی کاربر'}:{rate:m.hk/176,hours:176,src:'حقوق حکمی ÷ ۱۷۶'};
 const H=t=>`<tr class="sh"><td colspan="2">${t}</td></tr>`,R=(a,b,c)=>`<tr class="${c||''}"><td>${a}</td><td class="n">${b}</td></tr>`;
 const food=p.food*p.days,lodge=p.lodge*p.days,hh=(1+p.kids+p.mar)*k.f,supp=hh*p.supp;
 const st=m.net>0?'سودده ✔':m.net===0?'سر به سر':'زیان‌ده ✘';
 $('res').innerHTML=H('خلاصه نتایج')+R('دریافتی از کارفرما (B)',nf(p.B),'b')+R('حقوق پایه',nf(p.base),'b')+R('حقوق حکمی (ناخالص)',nf(m.hk),'b')+R('حقوق خالص کارمند (A)',nf(m.empNet),'b')+H('ورودی‌ها')+
 R('دریافتی ماهانه از کارفرما (B)',nf(p.B),'b')+R('حقوق پایه (مبنا، ناخالص)',nf(p.base),'b')+R('وضعیت بیمه‌پذیری',k.f?'بیمه‌پذیر':'بازنشسته')+R('تعداد روزهای ماه',p.days)+R('متاهل',p.mar?'بله':'خیر')+R('تعداد فرزندان',p.kids)+
 R('بیمه تکمیلی هر نفر',nf(p.supp))+R('پاداش مناسبتی (ماهانه)',nf(p.bonus))+R('لباس و تجهیزات ایمنی',nf(p.cloth))+R('غذای روزانه',nf(p.food))+R('اسکان روزانه',nf(p.lodge))+R('ایاب و ذهاب ماهانه',nf(p.transp))+
 R('نرخ سربار (از B)',pf(p.over))+R('نرخ سود هدف',pf(p.target))+R('نرخ مالیات عملکرد شرکت','25%')+R('نرخ سقف بیمه قرارداد (ماده ۳۸)','16.67%')+
 H('ب) نحوه محاسبه حقوق و دستمزد')+
 R('مجموع حق اولاد',nf(k.kidsPay))+R('مجموع رفاهیات (مسکن+بن+تاهل+حق اولاد)',nf(k.wel))+R('حقوق حکمی (ناخالص)',nf(m.hk),'b')+
 R('مبنای بیمه خام',nf(m.hk-k.kidsPay))+R('سقف بیمه تعدیل‌شده ماه',nf(k.cap))+R('مبنای بیمه سقف‌خورده',nf(m.ib))+
 R('بیمه سهم کارگر (۷٪)',nf(m.w))+R('بیمه سهم کارفرما (۲۳٪)',nf(k.emp*m.ib))+R('مجموع بیمه ماهانه (۳۰٪)',nf(m.ins))+
 R('مالیات ماهانه پلکانی ۱۴۰۵',nf(m.t))+R('خالص پرداختی کارمند (A)',nf(m.empNet),'b g')+
 H('ج) هزینه کل شرکت برای کارمند (C)')+
 R('مجموع بیمه‌های ماهانه (کارگر+کارفرما)',nf(m.ins))+R('عیدی ماهانه (۳×سقف بیمه ÷ ۱۲)',nf(k.eid))+R('سنوات ماهانه (حقوق پایه ÷ ۱۲)',nf(p.base/12*k.f))+R('ذخیره مرخصی ماهانه',nf(m.hk/12*k.f))+
 R('هزینه‌ها (غذا+اسکان+ایاب‌وذهاب+بیمه تکمیلی+پاداش+لباس)',nf(k.other),'b')+
 R('&nbsp;&nbsp;↳ غذا',nf(food))+R('&nbsp;&nbsp;↳ اسکان',nf(lodge))+R('&nbsp;&nbsp;↳ ایاب و ذهاب',nf(p.transp))+R('&nbsp;&nbsp;↳ بیمه تکمیلی',nf(supp))+R('&nbsp;&nbsp;↳ پاداش',nf(p.bonus))+R('&nbsp;&nbsp;↳ لباس',nf(p.cloth))+
 R('حقوق حکمی',nf(m.hk))+R('هزینه کل شرکت (C)',nf(m.C),'b y')+
 H('د) تحلیل سودآوری قرارداد بر مبنای B ثابت')+
 R('هزینه سربار',nf(m.over))+R('هزینه ریسک تأخیر پرداخت',nf(m.risk))+R('سقف بیمه قرارداد (ماده ۳۸)',nf(m.ceil))+R('کسری بیمه',nf(m.short))+
 R('سود قبل از مالیات',nf(m.pre))+R('مالیات عملکرد شرکت',nf(m.taxc))+R('سود خالص پس از مالیات',nf(m.net),'b g '+(m.net>0?'ok':'bad'))+
 R('حاشیه سود خالص بر B',pf(p.B?m.net/p.B:0))+R('سود هدف (نرخ × B)',nf(tg))+R('فاصله از سود هدف',nf(m.net-tg),m.net>=tg?'ok':'bad')+R('وضعیت سودآوری',st,'b y')+
 H('نسبت‌های کلیدی')+
 R('نسبت B/C',(p.B/m.C).toFixed(3),'b y')+R('نسبت B/A',(p.B/m.empNet).toFixed(3),'b')+R('نسبت C/A',(m.C/m.empNet).toFixed(3),'b')+
 R('سود ناخالص (B − C)',nf(p.B-m.C))+R('حاشیه سود ناخالص بر B',pf(p.B?(p.B-m.C)/p.B:0));
 const tgp=num('tgin')/100,s1=solveX(p,k,tgp*p.B);
 const tgRows=[['سود خالص هدف',nf(tgp*p.B)],['حقوق (خالص) کارمند (A)',nf(s1.m.empNet)],['حقوق حکمی (ناخالص)',nf(s1.m.hk)],['حقوق پایه (ناخالص)',nf(s1.base)],['بیمه سهم کارگر',nf(s1.m.w)],['مالیات حقوق',nf(s1.m.t)],['هزینه کل شرکت (C)',nf(s1.m.C)],['سود خالص حاصل',nf(s1.m.net)],['وضعیت',s1.ok?'قابل دستیابی ✔':'غیرقابل دستیابی']];
 $('tg').innerHTML=tgRows.map(r=>row(r[0],r[1])).join('');
 const T=[p.target,0,.05,.1,.15,.2,.25,.3].map((r,i)=>({r,cur:i==0,s:i==0?{base:p.base,m,ok:true}:solveX(p,k,r*p.B)}));
 const cur=m.hk;
 const CL=[['نرخ سود هدف',t=>pf(t.r)],['سود خالص هدف',t=>nf(t.r*p.B)],['حداکثر حقوق پایه',t=>nf(t.s.base)],['حداکثر حقوق حکمی',t=>nf(t.s.m.hk)],
 ['بیمه سهم کارگر',t=>nf(t.s.m.w)],['مالیات حقوق',t=>nf(t.s.m.t)],['خالص کارمند (A)',t=>nf(t.s.m.empNet)],['هزینه کل شرکت (C)',t=>nf(t.s.m.C)],
 ['سربار + ریسک',t=>nf(t.s.m.over+t.s.m.risk)],['کسری ماده ۳۸',t=>nf(t.s.m.short)],['سود قبل از مالیات',t=>nf(t.s.m.pre)],['مالیات عملکرد',t=>nf(t.s.m.taxc)],
 ['سود خالص',t=>nf(t.s.m.net)],['نسبت B÷حکمی',t=>t.s.m.hk>0?(p.B/t.s.m.hk).toFixed(3):'-'],['نسبت B/C',t=>(p.B/t.s.m.C).toFixed(3)],
 ['اختلاف با حکمی فعلی',t=>nf(t.s.m.hk-cur)],['وضعیت',t=>t.cur?'وضع فعلی':t.s.ok?'قابل دستیابی ✔':'غیرقابل دستیابی']];
 $('ceo').innerHTML=CL.map(l=>`<tr><th>${l[0]}</th>${T.map(t=>`<td class="n ${t.cur?'hl':''}">${l[1](t)}</td>`).join('')}</tr>`).join('');
 window._s1=s1;document.querySelectorAll('.seg').forEach(x=>x._s&&x._s());save();
}
const KEYS=['ename','eid','method','manual','mmode','hrate','hours','contract','role','exp','netexp','ins','days','married','kids','supp','bonus','cloth','food','lodge','transp','over','target','risk','delay'];
function save(){try{const o={};KEYS.forEach(k=>o[k]=$(k).value);localStorage.setItem('msecnt2',JSON.stringify(o))}catch(e){}}
function load(){try{const o=JSON.parse(localStorage.getItem('msecnt2')||'null');if(o)KEYS.forEach(k=>{if(o[k]!=null)$(k).value=o[k]})}catch(e){}}
function fmtMoney(e){const v=num(e.id);e.value=v?Math.round(v).toLocaleString('en-US'):(e.value===''?'':'0')}
function segs(){document.querySelectorAll('.seg').forEach(sg=>{const sel=$(sg.dataset.for);const L=sg.dataset.l?sg.dataset.l.split('|'):[...sel.options].map(o=>o.text);const V=sg.dataset.v?sg.dataset.v.split('|'):[...sel.options].map(o=>o.value||o.text);
 sg.innerHTML=V.map((v,i)=>`<button data-v="${v}">${L[i]}</button>`).join('');
 sg.onclick=e=>{const b=e.target.closest('button');if(b){sel.value=b.dataset.v;calc()}};sg._s=()=>sg.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.v===sel.value))})}
function sync(){document.querySelectorAll('.seg').forEach(s=>s._s&&s._s());document.querySelectorAll('.money').forEach(fmtMoneyIfBlur)}
function fmtMoneyIfBlur(e){if(document.activeElement!==e)fmtMoney(e)}
function tab(id){document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('on',t.id===id));document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('on',b.dataset.tab===id));scrollTo(0,0)}
document.querySelectorAll('input:not([readonly]),select').forEach(e=>{e.addEventListener('input',()=>{calc();sync()});e.addEventListener('change',()=>{calc();sync()})});
document.querySelectorAll('.money').forEach(e=>{e.addEventListener('focus',()=>{const v=num(e.id);e.value=v||'';setTimeout(()=>e.select&&e.select(),0)});e.addEventListener('blur',()=>fmtMoney(e))});
document.querySelectorAll('[data-st]').forEach(b=>b.onclick=()=>{const e=$(b.dataset.st);e.value=Math.max(0,num(b.dataset.st)+ +b.dataset.d);calc();sync()});
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>b.dataset.tab==='t5'?openAdmin():tab(b.dataset.tab));
let adminOK=false;
async function sha(t){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(t));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
async function openAdmin(){
 if(!adminOK){const p=prompt('رمز مدیر را وارد کنید');if(p===null)return;
  try{adminOK=(await sha(p))===ADMIN_HASH}catch(e){alert('این بخش فقط روی https یا localhost کار می‌کند');return}
  if(!adminOK){alert('رمز نادرست است');return}}
 renderAdmin();tab('t5')}
function renderAdmin(){
 $('adm').innerHTML='<table class="ceo"><tr><th>ردیف</th><th>شماره قرارداد</th><th>کارفرما</th><th>موضوع قرارداد</th><th>ضریب</th><th></th></tr>'+CON.map((c,i)=>`<tr><td>${i+1}</td><td><input data-i="${i}" data-k="0" value="${c[0]}"></td><td><input data-i="${i}" data-k="1" value="${c[1]}"></td><td><input data-i="${i}" data-k="2" value="${c[2]}"></td><td><input data-i="${i}" data-k="3" value="${c[3]}"></td><td><button data-del="${i}">حذف</button></td></tr>`).join('')+'</table>'}
$('adm').oninput=e=>{const i=+e.target.dataset.i,k=+e.target.dataset.k;if(isNaN(i)||!CON[i])return;CON[i][k]=k===3?(parseFloat(String(e.target.value).replace(',','.'))||0):e.target.value};
$('adm').onclick=e=>{const d=e.target.dataset.del;if(d!=null){CON.splice(+d,1);renderAdmin()}};
$('addc').onclick=()=>{CON.push(['','','',0]);renderAdmin()};
$('savec').onclick=()=>{try{localStorage.setItem('msecnt_con',JSON.stringify(CON));const v=$('contract').value;fillStatic();$('contract').value=v;calc();$('admst').textContent='ذخیره شد ('+CON.length+' قرارداد) در این مرورگر.'}catch(e){$('admst').textContent='ذخیره نشد.'}};
$('expc').onclick=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(CON,null,1)],{type:'application/json'}));a.download='contracts.json';a.click()};
$('resc').onclick=()=>{if(confirm('قراردادهای ذخیره‌شده در این مرورگر حذف شود؟')){localStorage.removeItem('msecnt_con');location.reload()}};
$('go').onclick=()=>tab('t2');
$('setmax').onclick=()=>{$('netexp').value=Math.floor(window._s1.m.empNet);calc();sync()};
$('pr').onclick=()=>{calc();const h='<!doctype html><html lang="fa" dir="rtl"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>گزارش</title><style>body{font-family:Tahoma,sans-serif;margin:12px;font-size:13px}table{width:100%;border-collapse:collapse}td{border:1px solid #ccc;padding:5px}td.n{direction:ltr;text-align:left}tr.sh td{background:#2E75B6;color:#fff;font-weight:700}tr.b td{font-weight:700}tr.g td{background:#E2EFDA}tr.y td{background:#FFD966}.ph{margin-bottom:10px}.no{display:none}@media print{.no{display:none}}button{padding:10px;margin-bottom:8px}</style><body><button class="no" style="display:block" onclick="print()">چاپ / ذخیره PDF</button><div class="ph">'+$('ph').innerHTML+'<br>نرخ حق‌الزحمه ساعتی: <b>'+nf(Math.round(window._hr.rate))+' تومان</b> &nbsp; ساعات کار در ماه: <b>'+nf(window._hr.hours)+'</b> &nbsp; <span>('+window._hr.src+')</span>'+'</div><table>'+$('res').innerHTML+'</table></body></html>';
 try{const w=window.open('','_blank');if(w){w.document.open();w.document.write(h);w.document.close();setTimeout(()=>{try{w.focus();w.print()}catch(e){}},400);return}}catch(e){}
 try{window.print()}catch(e){alert('چاپ پشتیبانی نمی‌شود؛ از منوی مرورگر «Share/Print» استفاده کنید.')}};
$('dm').onclick=()=>{document.body.classList.toggle('dark');try{localStorage.setItem('msecnt_dark',document.body.classList.contains('dark')?1:0)}catch(e){}};
try{if(localStorage.getItem('msecnt_dark')==1)document.body.classList.add('dark')}catch(e){}
fillStatic();setDefaults();load();segs();calc();sync();

