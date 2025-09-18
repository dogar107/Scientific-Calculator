const button=document.querySelectorAll("button");
const display = document.getElementById("display");

let output = ""; 
let latestAnswer = "";
let memory = 0;
let shiftMode = false;
let alphaMode = false;

button.forEach(btn => {
  btn.addEventListener("click", (e) => {
    let value = e.target.innerText;
    if(value==="="){
    output=eval(output);
    display.value=output;
    } else if (value === "AC") {
      latestAnswer=output;
      output = "";
      display.value = output;
    } else if (value === "DEL") {
      output = output.slice(0, -1); 
      display.value = output;
    } else if (value === "x") {
      output += "*"; 
      display.value = output;
    } else if(value==="÷"){
      output+= "/"
      display.value=output;
    } else if(value==="EXP"){
    output += "E";
    display.value=output;
    } else if(value==="Ans" ){
      display.value=latestAnswer;
    } else if(value==="RCL" ){
      display.value=latestAnswer;

      } else if(value==="REPLAY" ){
        display.value=latestAnswer;
      }else if(value==="M+"){
      memory+=parseFloat(output);
      display.value=memory;
    } else {
      output += value;
      display.value = output;
    }
    switch(value){
    case "(-)":
    output = "-";
    display.value=output;
    break;
      case "x⁻¹":
      let numx = parseFloat(output);
        let resultPow = Math.pow(numx,-1);
        display.value = resultPow;
        output = resultPow.toString();
      
      break;
      case ")":
      case "(":
      output = output.replace(/(\d)(\()/g, '$1*(');
      display.value=output;
      break;
      case "x²":
      let numSquare = parseFloat(output);
      if (!isNaN(numSquare)) {
        let resultPowe = Math.pow(numSquare, 2);
        display.value = resultPowe;
        output = resultPowe.toString();
      } else {
        display.value = "Error";
        output = "";
      }
      break;
      
  case "π":
  let pieNum=parseFloat(output);
  if(!isNaN(pieNum)){
  let results=pieNum * Math.PI;
  display.value=results.toFixed(3);
  output=results.toString();
  }else{
  let result=Math.PI
  display.value=result.toFixed(6);
  }
  break;


      case "xʸ":
      let results;
      if (output.includes("xʸ")) {
        let parts = output.split("xʸ");
        let num1 = parseFloat(parts[0]);
        let num2 = parseFloat(parts[1]);

        results = Math.pow(num1,num2)
        display.value=results;
      }
      break;
     case "Abs":
    let result;
    if (output.includes("-")) {
        let parts = output.split("-");
        let num1 = parseFloat(parts[0]);
        let num2 = parseFloat(parts[1]);

        result = Math.abs(num1 - num2);
    }

    display.value = result;
    output = result.toString();
    break;

    
    case "ON":
    output=0;
    display.value=output;

    break;
    case "MODE SETUP":
    output="1:COMP 2:SD 3:REG"
    display.value=output;
    break;
  case "SHIFT":
    shiftMode = !shiftMode;
    break;

  case "sin":
    let sin = parseFloat(output);
    if (shiftMode) {
      let radians=Math.asin(sin);
      let degree=radians * (180/Math.PI);
      display.value=degree;
      output=degree.toString(); 
      shiftMode = false;
    } else {
      let result=Math.sin(sin * Math.PI / 180)
      display.value=result.toFixed(6);
      output=result.toString(); 
    }
  
    break;

  case "cos":
    let cos = parseFloat(output);
    if (shiftMode) {
      let radians=Math.acos(cos);
      let degree=radians * (180/Math.PI);
      display.value=degree;
      output=degree.toString();
      shiftMode = false;
    } else {
      let result=Math.cos(cos * Math.PI / 180)
      display.value=result.toFixed(6);
      output=result.toString(); 
    }
    break;

  case "tan":
    let tan = parseFloat(output);
    if (shiftMode) {
       let radians=Math.atan(tan);
      let degree=radians * (180/Math.PI);
      display.value=degree;
      output=degree.toString();
      shiftMode = false;
    } else {
      let result=Math.tan(tan * Math.PI / 180)
      display.value=result.toFixed(6);
      output=result.toString(); 
    }
    break;
    case "In":
      if (shiftMode) {
        let num = parseFloat(display.value);
        if (!isNaN(num)) {
          let result = Math.exp(num); 
          display.value = result.toFixed(3);
          output = result.toString();
        }
        shiftMode = false;
      } else {
        let lnnum = parseFloat(output);
        if (!isNaN(lnnum)) {
          let results = Math.log(lnnum);
          display.value = results.toFixed(6);
          output = results.toString();
        }
      }
      break;
    case "log":
  let logNum = parseFloat(output);
  if (!isNaN(logNum)) {
    if (shiftMode) {
      let result = Math.pow(10, logNum); 
      display.value = result;
      output = result.toString();
      shiftMode = false;
    } else {
      let result = Math.log10(logNum); 
      display.value = result.toFixed(6);
      output = result.toString();
    }
  }
  break;
      case "AC":
      if(shiftMode){
      output="";
      display.value=output;
      shiftMode=false;
      }
      case "ALPHA":
      alphaMode = !alphaMode;
      break;
      case "√":
      let num=parseFloat(output);
      if (alphaMode) {
      let result=Math.sqrt(2,num);
      display.value=result.toFixed(6);
      output=result.toString();
      alphaMode=false;
    } else {
      let result=Math.sqrt(num);
      display.value=result.toFixed(6);
      output=result.toString();
    }
    break;
    case "x³":
    let numSquared=parseFloat(output);
    if(alphaMode){
    const result=Math.cbrt(numSquared,3)
    display.value=result;
    output=result.toString();
    display.value=output;
    alphaMode=false;
    }else{
      let results=Math.pow(numSquared,3);
      display.value=results;
      output=results.toString();
    }
    break;
    case "^":
      let numSq = parseFloat(output);
      let resultuy;
      if (alphaMode) {
      const results56=numSq * Math.E;
      display.value = results56.toFixed(6);
      output = results56.toString();
      alphaMode=false;
    }else{
       if(output.includes("^")){
      let parts = output.split("^");
        let num1 = parseFloat(parts[0]);
        let num2 = parseFloat(parts[1]);
        resultuy=Math.pow(num1,num2);
        display.value=resultuy;
       }
      }
  
    break;
    case ",":
    if(alphaMode){
    let percentage=parseFloat(output);
    let percentResult = "";
    percentResult = percentage / 100;
    display.value = percentResult;
    output = percentResult.toString();
    }else{
      output=","
      display.value=output;
    }
    break;
  }
    })
  })
   




 

  






