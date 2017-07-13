        // Adition
        //----------
function adition(a,b)
{
  return a+b;
}
        //  multiplication
        //  -------------- 
function multiplication(a,b)
{
  return a*b;
}

   // division
   // ---------
function division(a,b)
{
  if(b!==0)
    {
      return a/b;
    }
  else{ alert("division par zéro impossible");}
}
  //soustraction 
  //------------
function soustraction (a,b)
{
  return  a-b;
}
   // pourcentage
   // -----------
function pourcentage(a)
{
  return a/100;
}
     // racine carré
     // ------------
function racinecarre(a)
{
  return Math.sqrt(a);
}
    //signe
    //-----
function signe(a)
{
  if(a>0){ return -a;}
  else {return --a;}
}


function reset()
{

}
//FUNCTION FOR BUTTON
var operation=document.getElementById("operation");
var res=document.getElementById("result");
var operator;

//EVENT IN THE NUMBER
//-------------------------
var tn=[];
var jc=0;
var resl=0;
var operande="";
var chif;
var c=document.getElementsByClassName("chif");

for( let i=0; i<c.length;i++ )
{
  
 c[i].addEventListener("click",function chiffre(){ 

   
  operation.innerHTML+=c[i].innerHTML.toString();
   

    });
}
//console.log(operation.innerHTML);

//EVENT IN THE operator
//-------------------------
var op=document.getElementsByClassName("op");
// console.log(op);
   for(let i=0; i<op.length;i++ )
   {
  
      op[i].addEventListener("click", function operat(){
                  
                 
                 operation.innerHTML+=op[i].innerHTML;
                 
                                 

                  });

     }    
   
 
 document.getElementById("egale").addEventListener("click", function calcul(){
            var str=operation.innerHTML;
             res.innerHTML=eval(str);
             operation.innerHTML+="="+eval(str);
         
 });
 document.getElementById("btrest").addEventListener("click", function reset(){
      operation.innerHTML="";
      resl=0;
      res.innerHTML=0;
 });
   
     




// document.getElementsByClassName("sig").addEventListener("click", signe );



// function chiffre()
// {
//   res.innerHTML=this.innerHTML;

// }




