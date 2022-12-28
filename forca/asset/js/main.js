var chave="";
var erros=document.getElementById("errata")
var resul=document.getElementById("resul")
var botao=document.getElementById("Bot2")
var aux;
var cadeia=[]
var palavras=["pudim", "folha","ponto","clipe","caixa","nota","canto","mel","azul","lapis","dengo","lobo","mal","lirio"];
var cont=0;
var sorte= Math.floor(Math.random(0,8)*8);
chave=palavras[sorte]
console.log(sorte)
var n=0;

var heart1=document.getElementById("he1")
var heart2=document.getElementById("he2")
var heart3=document.getElementById("he3")
var heart4=document.getElementById("he4")

var texto1=document.getElementById("palavrass2")
var texto2=document.getElementById("palavrass3")
var texto3=document.getElementById("palavrass4")
var texto4=document.getElementById("palavrass5")
var texto5=document.getElementById("palavrass6")

function vidas(n)
{
        switch(n){
                case 0: heart1.style.visibility="hidden";
                        break;
                case 1: heart2.style.visibility="hidden";
                        break;      
                case 2: heart3.style.visibility="hidden";
                        break;
                case 3: heart4.style.visibility="hidden";
                        break;   
            }
}

function visibilidade(num,po){
        switch(num){
            case 0: texto1.style.visibility=po
                    break;
            case 1: texto2.style.visibility=po
                    break;      
            case 2: texto3.style.visibility=po
                    break;
            case 3:texto4.style.visibility=po
                    break;
            case 4: texto5.style.visibility=po
                    break;
    
            
            
            
    
        }
    }

function cases(pa,po){
    switch(po){
        case 0: texto1.value=pa.toUpperCase();
                break;
        case 1: texto2.value=pa.toUpperCase();
                break;      
        case 2: texto3.value=pa.toUpperCase();
                break;
        case 3: texto4.value=pa.toUpperCase();
                break;
        case 4: texto5.value=pa.toUpperCase();
                break; 

    }
}

function add(){
        for(var i=0;i<chave.length;i++){
                   visibilidade(i,"visible")          
        }
}

function limpar(){
          var limpa =document.getElementById("palavrass");
          limpa.value=""
}

function verifica(word, texto){
        
        var numbers=["1","2","3","4","5","6","7","8","9","0"];
        var letrasEsp=["á","à","â","ã","é","è","ê","í","ï","ó","ô","õ","ö","ú","ç","ñ"];
      
        for(var i=0;i<chave.length;i++){
                if(texto==chave[i]){
                   cases(chave[i],i)
                   word=1;
                   cont++;
                  
            }
        }
        for(var i=0;i<chave.length;i++){
                if(cadeia.length==0){
                        break;
                }
                if(texto==cadeia[i] && word!=1){
                        aux=1;

                }
        }
     
        for(var i=0;i<numbers.length;i++){
                if(texto==numbers[i]){
                        aux=1;

                }
        }
        for(var i=0;i<letrasEsp.length;i++){
                if(texto==letrasEsp[i]){
                        aux=1;

                }
        }



        if(word!=1 && texto!="" && aux!=1){
                cadeia.push(texto);
                console.log(cadeia);
                erros.style.color="red"
                erros.innerHTML=cadeia;
                word=0;
                vidas(n);
                n++;
                }
            else{  
                word=0;
                }
        aux=0;

}
function preenche(){
        for(var i=0;i<chave.length;i++){
                cases(chave[i],i)       
            }
        

}
function winner()
{

        if(cont==chave.length){
                resul.style.fontSize=30+"px";
                resul.innerHTML="Vc ganhou!";
                resul.style.color="red";
                botao.style.visibility="visible"
             
        }
        if(n==4){
                resul.style.fontSize=30+"px";
                resul.innerHTML="Vc perdeu!";
                resul.style.color="red";
                botao.style.visibility="visible"   ;
                preenche();

        }
}
function recarrega(){
        location.reload();
}
function enviar(){
   
    var texto=document.getElementById("palavrass").value;
    var word=0;
    verifica(word,texto.toLowerCase())
    limpar();
    winner();
}

function inicia()
{
        add();
}
window.addEventListener("load",inicia);
