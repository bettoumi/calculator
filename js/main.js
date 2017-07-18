   
   



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
   res.innerHTML=eval(operation.innerHTML);
                                 

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
               if(eval(str)===Infinity)
                { alert("division par zéro impossible")
                        }
               else {res.innerHTML=eval(str);
                 operation.innerHTML+="="+eval(str);}

             
         
 });
 document.getElementById("btrest").addEventListener("click", function reset(){
      operation.innerHTML="";
      resl=0;
      res.innerHTML="";
 });
 document.getElementById("signe").addEventListener("click", function signe(){ 
                var str=operation.innerHTML;
                    str="(-"+str+")";
                 console.log(str);
                
                 operation.innerHTML=str;
 }); 

document.getElementById("pourcent").addEventListener("click", function poursentage(){

               var str=operation.innerHTML;
               var prov=eval(str)/100;
               operation.innerHTML=prov.toString();

} );
document.getElementById("effacer").addEventListener("click", function efface(){
                    var str=operation.innerHTML;
           operation.innerHTML=str.substr(0,str.length-1);


});
document.getElementById("parenthese").addEventListener("click", function parenth(){
                    var str=operation.innerHTML;
                 if(!str.includes("(" )){
                     str=str+"(";
                  
                 } else { str=str+")";}
              operation.innerHTML=str;

});







