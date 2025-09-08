const button=document.querySelectorAll("button");
const display = document.getElementById("display");

let output="";

button.forEach(btn =>{
btn.addEventListener("click",(e)=>{
const value=e.target.innerText;
if(value=="="){
output=eval(output);
display.value=output;
}else{
output+=value;
display.value=output;
}
})
})
