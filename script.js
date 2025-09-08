const button=document.querySelectorAll("button");
const display = document.getElementById("display");

let output="";

button.forEach(btn =>{
btn.addEventListener("click",(e)=>{
const value=e.target.innerText;
if(value=="="){
output=eval(output);
display.value=output;
}else if(value=="AC"){
output=""
display.value=(output);
}else if(value=="DEL"){
display.value=display.value.slice(0,-1);
}else{
output+=value;
display.value=output;
}
})
})
