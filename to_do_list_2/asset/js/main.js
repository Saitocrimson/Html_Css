var vcor,vcort,vnome;
var confP=document.getElementById("configuracao");
var conff=document.getElementById("centralizform");
var nomeLista=document.getElementById("listatodo");
var h1 = document.createElement("h1");
var lista=document.getElementById("listaAdd");
var nomeLista=document.getElementById("listatodo");
var textonew=document.getElementById("newI");



function imprimir(){
    var pegar=nomeLista.innerHTML;
    var jane=window.open('','','width=800,height=800');
    jane.document.write('<html><head>')
    jane.document.write('<tittle>pdf</tittle></head>')
    jane.document.write('<body>')
    jane.document.write(pegar) 
    jane.document.write('</body></hmtl>')
    jane.document.close();
    jane.print();
}

function padrao()
{
   localStorage.cor=document.body.style.backgroundColor="rgb(24, 22, 22)";
   localStorage.cort=document.body.style.color="white";
   localStorage.nome=vnome;
   conff.style.display="none"
   confP.style.visibility="visible";

}

function fechar()
{
   conff.style.display="none"
   confP.style.visibility="visible";

}
function gravar(){
   if(document.getElementById("fnome").value!=""){
       vnome=document.getElementById("fnome").value;
       localStorage.nome=vnome;
       h1.textContent="Lista de "+localStorage.nome;
       nomeLista.insertBefore(h1, nomeLista.childNodes[0]);
    
   } 
    localStorage.cor=vcor;
    localStorage.cort=vcort;
    conff.style.display="none";
    confP.style.visibility="visible"
    document.getElementById("fnome").value=""
   
}
function definecor(op,cor) {
   switch (op) {
       case 1:
           document.body.style.backgroundColor=cor;
           vcor=cor;
           break;
       case 2:
           document.body.style.color=cor;
           vcort=cor;
           break;
       default:
           break;
   }
   
}
function exibe(){
   conff.style.display="block";
   conff.style.visibility="visible"
   confP.style.visibility="hidden"
}

//verfica se existe o nome no local storage

if(localStorage.nome==""||localStorage.nome=="undefined"||localStorage.nome=="null"){
    while(true){
    vnome=prompt("insira seu nome:");
    localStorage.nome=vnome;
    if(vnome!="")break;

 }}

//criação da lista

h1.textContent="Lista de "+localStorage.nome;
nomeLista.insertBefore(h1, nomeLista.childNodes[0]);
console.log(localStorage.nome)
document.getElementById("buttonAdd").addEventListener("click", function(){
            var li = document.createElement("li");
            if(textonew.value!=""){
                li.textContent=textonew.value;
                li.style.fontSize=30+"px";
                lista.insertBefore(li, lista.childNodes[0]);
                textonew.value="";
            }
            else{
                textonew.value="";
}})
    
//verifica se suporta o Storage
if(typeof(Storage)!="undefined"){
    if(localStorage.cor!="undefined" || localStorage.cort!="undefined" || localStorage.nome!="undefined"){
        document.body.style.backgroundColor=localStorage.cor;
        document.body.style.color=localStorage.cort;
        vcor=localStorage.cor;
        vcort=localStorage.cort;
        }
        else{
            padrao()
        }

        if(localStorage.visitas){
            localStorage.visitas=Number(localStorage.visitas)+1
    
        }else{
            localStorage.visitas=1  
        }
    
    }else{
        alert("Nao suporta storage!!!!!");
}


