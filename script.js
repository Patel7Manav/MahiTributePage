var x=0;
function showhead(){
if(x==0)
{
 for(var i=0; i<=4;i++)
 {   
document.getElementsByClassName("inn")[i].style.display="block";
document.getElementsByClassName("inn")[i].style.backgroundColor="#2596be";
}
document.getElementById("baticon").src="ball.png";
 
// .style.border="2px solid green";
// document.getElementById("bg").style.backgroundColor="blue";
// document.getElementById("bg").style.zIndex="2";

x=1;
}
else{
    for(var i=0; i<=4;i++)
 {   
document.getElementsByClassName("inn")[i].style.display="none";
}  
    document.getElementById("navbar").style.backgroundColor="#F9CD05";
    document.getElementById("baticon").src="cricket-bat.png";
//     document.getElementById("bg").style.backgroundColor="rgb(247, 223, 190)";
// document.getElementById("bg").style.zIndex="-2";

x=0;
}
}