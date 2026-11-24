const fs=require('fs');let h=fs.readFileSync('index.html','utf8');
const js=h.split('<script>')[1].split('</script>')[0];
const els={};const mk=id=>els[id]||(els[id]={id,value:'',style:{},innerHTML:'',classList:{toggle(){},add(){},contains(){return 0}},closest(){return this},addEventListener(){},options:[]});
global.document={getElementById:mk,querySelectorAll:()=>[],activeElement:null,body:{classList:{toggle(){},add(){},contains(){return 0}}}};
global.window=global;global.localStorage={getItem(){return null},setItem(){}};global.scrollTo=()=>{};global.print=()=>{};
mk('bxin').value='5';mk('tgin').value='5';eval(js);


console.log(els.bxo.innerHTML.replace(/<\/tr>/g,'\n').replace(/<[^>]+>/g,' | ').slice(0,1500), els.tg.innerHTML.length)
