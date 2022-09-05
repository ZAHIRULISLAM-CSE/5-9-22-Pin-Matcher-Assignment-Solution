//Pin Generate
document.getElementById("generatepin").addEventListener("click",function(){
   // console.log("ok");
   var rad=Math.round(Math.random()*10000);
   var len=rad.toString().length;
   
   if(len==3){
      rad=rad.toString();
      rad=rad+Math.round(Math.random()*10);
   }
   if(len==2){
      rad=rad.toString();
      rad=rad+Math.round(Math.random()*100);
   }
   if(len==1){
      rad=rad.toString();
      rad=rad+Math.round(Math.random()*1000);
   }
   rad=parseFloat(rad);
   //console.log(rad);
   var pinBox=document.getElementById("pin");
   pinBox.value=rad;
})

const buttons = document.querySelectorAll('.button');
//console.log(buttons);
for (const but of buttons) {
   but.addEventListener('click', function() {
      
      if(but == one){
         document.getElementById('matchpin').value += 1;}
      else if(but == two){
         document.getElementById('matchpin').value += 2;} 
      else if(but == three){
         document.getElementById('matchpin').value += 3;}
      else if(but == four){
         document.getElementById('matchpin').value += 4;}
      else if(but == five){
         document.getElementById('matchpin').value += 5;}
      else if(but == six){
         document.getElementById('matchpin').value += 6;}
      else if(but == seven){
         document.getElementById('matchpin').value += 7;}
      else if(but == eight){
         document.getElementById('matchpin').value += 8;}
      else if(but == nine){
         document.getElementById('matchpin').value += 9;}
      else if(but == clear){
         document.getElementById('matchpin').value = "";}
      else if(but == zero){
         document.getElementById('matchpin').value += 0;}
      else if(but == cut){
         val = document.getElementById('matchpin').value
         if(val.length  == 1){
            document.getElementById('matchpin').value = ""; 
         }
         else{
            document.getElementById('matchpin').value = Math.floor(document.getElementById('matchpin').value/10);}
         }
   });
 }

 document.getElementById("submit").addEventListener("click",function(){
 if(document.getElementById('matchpin').value==document.getElementById("pin").value){
   //console.log("okay")
   document.getElementById('unmatch').style.display="none";
 }
 else{
   document.getElementById('match').style.display="none";
   var value= document.getElementById('try').innerHTML;
   value=parseInt(value);
   value=value-1;
   document.getElementById('try').innerHTML=value;
   if( document.getElementById('try').innerHTML==0){
      document.getElementById("submit").disabled = true;
      document.getElementById('try').innerHTML="Warnings!No More Try Left"
   }
   }
 })

