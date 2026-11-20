const fs=require('fs');let h=fs.readFileSync('index.html','utf8');
const js=h.split('<script>')[1].split('</script>')[0];
const els={};const mk=id=>els[id]||(els[id]={id,value:'',style:{},classList:{toggle(){},add(){},contains(){return 0}},closest(){return this},addEventListener(){},options:[],innerHTML:'',dataset:{}});
global.document={getElementById:mk,querySelectorAll:()=>[],activeElement:null,body:{classList:{toggle(){},add(){},contains(){return 0}}}};
global.window=global;global.localStorage={getItem(){return null},setItem(){}};global.scrollTo=()=>{};
const sc=JSON.parse(process.argv[2]);
const f=new Function('mk','sc',js.replace(/fillStatic\(\);setDefaults\(\);load\(\);segs\(\);calc\(\);sync\(\);/,'')+`;fillStatic();setDefaults();for(const k in sc)$(k).value=sc[k];const p=params(),k=consts(p);p.base=baseFromNet(p,k,p.netexp);const m=model(p,k,p.base);return {B:p.B,base:p.base,hk:m.hk,t:m.t,C:m.C,ins:.3*m.ib,short:m.short,net:m.net,A:m.empNet}`);
console.log(JSON.stringify(f(mk,sc)));
