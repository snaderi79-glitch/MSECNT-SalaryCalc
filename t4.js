const fs=require('fs');let h=fs.readFileSync('index.html','utf8');
const js=h.split('<script>')[1].split('</script>')[0];
const els={};const mk=id=>els[id]||(els[id]={id,value:'',style:{},classList:{toggle(){},add(){},contains(){return 0}},closest(){return this},addEventListener(){},options:[]});
global.document={getElementById:mk,querySelectorAll:()=>[],activeElement:null,body:{classList:{toggle(){},add(){},contains(){return 0}}}};
global.window=global;global.localStorage={getItem(){return null},setItem(){}};global.scrollTo=()=>{};global.print=()=>{};
try{new Function(js+';mk=null;')}catch(e){console.log('SYNTAX',e.message)}
try{
global.$=null;
const f=new Function('mk',js.replace("fillStatic();setDefaults();load();segs();calc();sync();","")+';fillStatic();setDefaults();$("contract").value="151988";calc();const p=params(),k=consts(p);p.base=baseFromNet(p,k,p.netexp);const m=model(p,k,p.base);const s=solveX(p,k,p.target*p.B);return [$("B").value,m.hk,m.C,m.net,m.empNet,s.m.empNet,s.m.hk,s.m.net-p.target*p.B,$("tg").innerHTML.length,$("site").value]');
console.log(f(mk));
}catch(e){console.log('ERR',e.message)}
