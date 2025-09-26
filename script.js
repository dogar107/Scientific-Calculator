const button=document.querySelectorAll("button");
const display = document.getElementById("display");
const equal = document.getElementById("btn");
const Shift = document.getElementById("shift");
const Alpha = document.getElementById("alpha");



let output = ""; 
let latestAnswer = "";
let memory = 0;
let shiftMode = false;
let alphaMode = false;
let isOn = false; 


button.forEach(btn => {
  btn.addEventListener("click", (e) => {
    let value = e.target.innerText;
    if(value==="=" && isOn===true){
   try {
  
  if  (output.includes("-")) {
   let parts = output.split("-");
  let numx = parseFloat(parts[0]);
  let numy= parseFloat(parts[1]);
  
  let result = Math.abs(numx-numy);
  display.value = result;
  output = result.toString();

  }else if(output.includes("⁻¹")){
       let parts = output.split("⁻¹");
        let numx = parseFloat(parts[0]);
        let resultPow = Math.pow(numx,-1);
        display.value = resultPow;
        output = resultPow.toString();
      
  }else if(output.includes("²")){
     let parts = output.split("²");
     let numSquare = parseFloat(parts[0]);
      if (!isNaN(numSquare)) {
        let resultPower = Math.pow(numSquare, 2);
        display.value = resultPower;
        output = resultPower.toString();
      } else {
        display.value = "Error";
        output = "";
      }
  }else if(output.includes("%")) {
  
  let cleanOutput = output.replace("%", "");
  let num = parseFloat(cleanOutput);
  if(alphaMode){
    let percentResult = "";
    percentResult = num / 100;
    display.value = percentResult;
    output = percentResult.toString();
    alphaMode=false;
 
  } else {
    display.value = "Error";
  }

}else if(output.includes(",")) {
 
  let cleanOutput = output.replace(",", "");
  let num = parseFloat(cleanOutput);

  if (!isNaN(num)) {
    output=",";
    display.value=output;
  } else if(output!==",") {
    display.value = "Math Error";
  }
  }else if(output.includes("³√")) {
  
  let cleanOutput = output.replace("³√", "");
  let num = parseFloat(cleanOutput);

  if (alphaMode && !isNaN(num)) {
    let result = Math.cbrt(num);
    output = result.toString();
    display.value = output;
    alphaMode = false;
  } else {
    display.value = "Error";
  }

}else if(output.includes("³")) {
 
  let cleanOutput = output.replace("³", "");
  let num = parseFloat(cleanOutput);

  if (!isNaN(num)) {
    let result = Math.pow(num, 3);
    output = result.toString();
    display.value = output;
  } else {
    display.value = "Error";
  }


    }else if(output.includes("π")){
      let pieNum=parseFloat(output);
      if(!isNaN(pieNum)){
      let results=pieNum * Math.PI;
      display.value=results.toFixed(3);
      output=results.toString();
  }else{
  let result=Math.PI
  display.value=result.toFixed(6);
  }
  


 } else if (shiftMode && output.includes("10**")) {
  let exponentStr = output.replace("10**", "");
  let exponent = parseFloat(exponentStr);

  if (!isNaN(exponent)) {
    let result = 10 ** exponent;
    display.value = result;
    output = result.toString();
  }



  
}else if(output.includes("log")) {
  let Output = output.replace("log", "");
  let logNum2 = parseFloat(Output);

   if (!isNaN(logNum2)) {
      let result = Math.log10(logNum2); 
      display.value = result.toFixed(6);
      output = result.toString();
      display.value=output;
    } else{
      display.value="Math Error"
    }

    }else if (output.includes("asin")) {
   let output5 = output.replace("asin","")
   let sin = parseFloat(output5);
 if (shiftMode) {
    let radians=Math.asin(sin);
      let degree=radians * (180/Math.PI);
      display.value=degree;
      output=degree.toString(); 
      shiftMode = false;
 }
}else if (output.includes("sin")) {
    let output5 = output.replace("sin","")
   let num = parseFloat(output5);
    if (!isNaN(num)) {
      let result=Math.sin(num * Math.PI / 180)
      display.value=result.toFixed(6);
      output=result.toString(); 
    } else {
      display.value = "Invalid Input";
    }

    }else if(output.includes("e")) {
  
  let abc = output.replace("e", "");
  let values = parseFloat(abc);
  if (alphaMode || !isNaN(values)) {
          let result = Math.exp(values); 
          display.value = result.toFixed(3);
          output = result.toString();
          alphaMode = false;
        }
  

}else if(output.includes("^")) {
  let parts = output.split("^");
        let num1 = parseFloat(parts[0].trim());
        let num2 = parseFloat(parts[1].trim());
    if (!isNaN(num1) && !isNaN(num2)) {
        let result=Math.pow(num1,num2);
        display.value=result;
    }
  } else if (output.includes("E")) {
    let Output = output.replace("E", "");
  let x = parseFloat(Output);
  if(shiftMode){
  let result=Math.E ** x;
  display.value=result;
  } 

}else if(output.includes("In")) {
  let Output = output.replace("In", "");
  let lnnum = parseFloat(Output);
        if (!isNaN(lnnum)) {
          let results = Math.log(lnnum);
          display.value = results.toFixed(6);
          output = results.toString();
        }
        


   }else if(output.includes("2√")) {
  
  let Outputz = output.replace("2√", "");
  let values1 = parseFloat(Outputz);
  if (alphaMode) {
      let result=2*Math.sqrt(values1);
      display.value=result.toFixed(6);
      output=result.toString();
      alphaMode=false;
  }
}else if (output.includes("∊")) {
 let output5 = output.replace("∊","")
   let e = parseFloat(output5);

  if (!isNaN(e)) {
  let result=Math.exp(e);
  display.value=result;
  output=result.toString();
  }else{
  display.value="MATH ERROR"
  }
    

  

}else if(output.includes("√")) {
  let Output = output.replace("√", "");
  let values = parseFloat(Output);
   if (!isNaN(values)) {
  let result=Math.sqrt(values);
  display.value=result.toFixed(6);
  output=result.toString();
   }
}else if (output.includes("atan")) {
    let output5 = output.replace("atan","")
   let tan = parseFloat(output5);
 if (shiftMode) {
    let radians=Math.atan(tan);
      let degree=radians * (180/Math.PI);
      display.value=degree;
      output=degree.toString(); 
      shiftMode = false;
 }
  } else if(output.includes("tan")) {
    let output5 = output.replace("tan","")
   let num = parseFloat(output5);
    if(!isNaN(num)){
    let result=Math.tan(num * Math.PI / 180)
    display.value=result.toFixed(6);
    output=result.toString(); 
    }else{
    display.value="Math Error";
    }
  
  output = display.value;

  } else if (output.includes("acos")) {
    let output5 = output.replace("acos","")
   let sin = parseFloat(output5);
 if (shiftMode) {
    let radians=Math.acos(sin);
      let degree=radians * (180/Math.PI);
      display.value=degree;
      output=degree.toString(); 
      shiftMode = false;
 }
  } else if(output.includes("cos")) {
   let output5 = output.replace("cos","")
   let cos = parseFloat(output5);
    if(!isNaN(cos)){
    let result=Math.cos(cos * Math.PI / 180)
      display.value=result.toFixed(6);
      output=result.toString(); 
    }else{
    display.value="Math Error";
    }
  output = display.value;
}else if (output.includes("!")) {
 let output5 = output.replace("!","")
   let n = parseFloat(output5);

  if (isNaN(n)) {
    display.value = "Math Error";
  } else if (n < 0) {
    display.value = "Factorial is not defined for negative numbers!";
  } else if (n === 0 || n === 1) {
    display.value = 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    display.value = result;
  }
  }else{  
  display.value=eval(display.value);
  }

  




  }catch{
  display.value="Math Error";
  }
  }else if (value === "AC" && isOn===true) {
     latestAnswer=output;
      output=""
      display.value=output;
      alphaMode=false;
      shiftMode=false;
      Shift.style.display="none";
      Alpha.style.display="none";
  
  
    } else if (value === "DEL" && isOn===true) {
      if(shiftMode){
       isOn = false;   
       output = "";
       memory = 0;
       display.value = "";
       shiftMode = false;
       return;

      }else{
        if (isOn) {
      output = output.slice(0, -1); 
      display.value = output;
      }
    }
    } else if (value === "x" && isOn===true) {
      output += "*"; 
      display.value = output;
    } else if(value==="÷" && isOn===true){
      output+= "/"
      display.value=output;
    } else if(value==="EXP" && isOn===true){
    output += "∊";
    display.value=output;
    } else if(value==="Ans" && isOn===true ){
     display.value=latestAnswer;
      } else if(value==="RCL" && isOn===true ){
     display.value=latestAnswer;
      } else if(value==="REPLAY" ){
       display.value=latestAnswer;

      }else if(value==="x!" && isOn===true){
      output+="!";
      display.value=output;
      }else if (value === "sin" && isOn===true ) {
  if (shiftMode) {
    output = "asin"
  } else {
    output = "sin";    
  }
  display.value = output;

} else if (value === "cos" && isOn===true ) {
  if (shiftMode) {
    output = "acos";
  } else {
    output = "cos";
  }
  display.value = output;
}else if (value === "tan" && isOn===true ) {
  if (shiftMode) {
    output = "atan";
  } else {
    output = "tan";
  }
  display.value = output;
}else if(value==="log" && isOn===true){
if(shiftMode){
output="10**"
shiftMode=false;
}else {
output="log"
}
display.value=output;
}else if(value==="^" && isOn===true){
if(alphaMode){
output="e"
alphaMode=false;
}else {
output+="^"
}
display.value=output;
}else if(value==="," && isOn===true){
if(alphaMode){
output+="%"
}else{
output+=","

}
display.value=output;
}else if(value==="In" && isOn===true){
if(shiftMode){
  output="E";
  display.value = output;
}else{
output="In";
display.value=output;
}
}else if(value==="SHIFT" && isOn===true){
Shift.style.display="block"                
}else if(value==="ALPHA" && isOn===true){
Alpha.style.display="block"    
}else if (!isOn && value !== "ON") {
      return;
}else if(value==="M+"){
memory += parseFloat(display.value); 
display.value=memory;
  }else if(value==="ON"){
  isOn = true;
  output = "";
  display.value = "0"; 
  return;
  }else if(value==="π"){
  output+="π";
  display.value=output;
  }else if(value==="x²"){
      output+="²";
      display.value=output;
  }else if(value==="x³"){
  if(alphaMode){
  output="³√";
  display.value=output;
  }else{
  output+="³";
  display.value=output;
  }

}else if(value==="Abs"){
output+="-";
display.value=output;
}else if(value==="MODE SETUP"){
    output="1:COMP 2:SD 3:REG";
    display.value=output;


}else if(value==="x⁻¹"){
      output+="⁻¹";
      display.value=output;

    } else {
      output += value;
      display.value = output;
    }
    switch(value){
    case "(-)":
    output = "-";
    display.value=output;
    break;
     
      
      case ")":
      case "(":
      output = output.replace(/(\d)(\()/g, '$1*(');
      display.value=output;
      break;
    case "SHIFT":
    shiftMode = !shiftMode;
    break;
     
      case "ALPHA":
      alphaMode = !alphaMode;
      break;
      case "√":
      if(alphaMode){
      output="2√";
      display.value=output;
    } else {
     output="√"
     display.value=output;
    }
    break;
   
    
  }
  
  })
})
   




 

  






