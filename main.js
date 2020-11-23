function ans(a)
{
	localStorage.setItem("answer",a)
}
function getData()
{
    //gettting the values
    var A1= document.getElementById("animal1").value;
     localStorage.setItem("ANI1", A1);


    var A2= document.getElementById("animal2").value; 
     localStorage.setItem("ANI2", A2);


    var A3= document.getElementById("animal3").value; 
       localStorage.setItem("ANI3", A3);

    var ADJ= document.getElementById("adj_past").value;
     localStorage.setItem("ADJECT", ADJ);

    var VRB= document.getElementById("verb_ing").value;
    localStorage.setItem("VERB", VRB);

    var NUM= document.getElementById("Number").value; 
     localStorage.setItem("NUMBER", NUM);
 
   
           
    var SPEED= document.getElementById("Relative_speed").value; 
   localStorage.setItem("SP", SPEED);

    var QUOTATION= document.getElementById("quote").value; 
     localStorage.setItem("QUO", QUOTATION); 

    var Message= document.getElementById("Msg").value; 
     localStorage.setItem("MSG", Message);     
}



for(var i=0;i<8;i++)
{
document.getElementsByClassName("ANIMAL1")[i].innerHTML=localStorage.getItem("ANI1");
}
for(var j=0;j<9;j++)
{
document.getElementsByClassName("ANIMAL2")[j].innerHTML=localStorage.getItem("ANI2");
}
for(var k=0;k<3;k++)
{
document.getElementsByClassName("VB")[k].innerHTML=localStorage.getItem("VERB");
}

    document.getElementsByClassName("ANIMAL3")[0].innerHTML=localStorage.getItem("ANI3");
    document.getElementsByClassName("ADJE")[0].innerHTML=localStorage.getItem("ADJECT");
    
    document.getElementsByClassName("numb")[0].innerHTML=localStorage.getItem("NUMBER");
    document.getElementsByClassName("result")[0].innerHTML=localStorage.getItem("answer");

    document.getElementsByClassName("REL_SP")[0].innerHTML=localStorage.getItem("SP");
    document.getElementsByClassName("QTN")[0].innerHTML=localStorage.getItem("QUO");
  document.getElementsByClassName("msg")[0].innerHTML=localStorage.getItem("MSG");
  
