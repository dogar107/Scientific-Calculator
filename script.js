const button=document.querySelectorAll("button");
const display = document.getElementById("display");

let output = ""; 
let latestAnswer = "";
let memory = 0;
let shiftMode = false;
let alphaMode = false;
let output1="";

button.forEach(btn => {
  btn.addEventListener("click", (e) => {
    let value = e.target.innerText;
    if(value==="="){
     try {
        output = eval(output);
        display.value = output;
      } catch {
        display.value = "Error";
        output = "";
        
      }
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
      }else if(value===","){
      output=","
      display.value=output;
      }else if(value==="M+"){
      display.value=latestAnswer;
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
      output = output.replace(/(\d)(\()/g, '$1*(')
      const resultbracket = eval(output);
      display.value=output;
      return resultbracket;
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
  }
  break;


      case "xʸ":
       let numSquareds=parseFloat(output);
      if (!isNaN(numSquareds)) {
        let results = Math.pow(numSquareds, numSquareds);
        display.value = results;
        output = results.toString();
      }
      break;
     case "Abs":
    let numAbs=parseFloat(output);
    if (!isNaN(numAbs)) {
        let results = Math.abs(numAbs);
        display.value = results;
        output = results.toString();
      }
      break;
    case "ON":
    if(output!=""){
    output=0;
    display.value=output;
    }else if(!isNaN(output)){
    output="";
    display.value=output;
    }

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
    const result=Math.cbrt(numSquared);
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
      if (alphaMode) {
      const results56=numSq * Math.E;
      display.value = results56.toFixed(6);
      output = results56.toString();
      alphaMode=false;
    }else{
      let results=Math.pow(numSq);
      display.value=results;
      output=results.toString()
    }
    break;
    case "=":
    if(alphaMode){
    let percentage=parseFloat(output);
    let percentResult = "";
    percentResult = percentage / 100;
    display.value = percentResult;
    output = percentResult.toString();
  }
    }
    })
    })
   




 

  






