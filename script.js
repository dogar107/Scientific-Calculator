const button=document.querySelectorAll("button");
const display = document.getElementById("display");

let output = ""; 
let latestAnswer = "";
let memory = 0;

button.forEach(btn => {
  btn.addEventListener("click", (e) => {
    let value = e.target.innerText;

    if (value === "=") {
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
    } else {
      output += value;
      display.value = output;
    }
    switch(value){
    case "(-)":
    output = "-";
    display.value=output;
    break;
    case "√":
    let num=parseFloat(output);
    const result=Math.sqrt(num);
    display.value=result;
    output=result.toString();
    display.value=output;
    break;
    case "sin":
      let degree = parseFloat(output);
      if (!isNaN(degree)) {
        let radians = degree * (Math.PI / 180);
        let resultSin = Math.sin(radians);
        display.value = resultSin;
        output = resultSin.toString();
      } else {
        display.value = "Error";
        output = "";
      }
      break;
       case "cos":
      let degree1 = parseFloat(output);
      if (!isNaN(degree1)) {
        let radians = degree1 * (Math.PI / 180);
        let resultCos = Math.cos(radians);
        display.value = resultCos;
        output = resultCos.toString();
      } else {
        display.value = "Error";
        output = "";
      }
      break
       case "tan":
      let degree2 = parseFloat(output);
      if (!isNaN(degree2)) {
        let radians = degree2 * (Math.PI / 180);
        let resultTan = Math.tan(radians);
        display.value = resultTan;
        output = resultTan.toString();
      } else {
        display.value = "Error";
        output = "";
      }
      break
      case "x⁻¹":
      let numInv = parseFloat(output);
        let resultPow = 1 / numInv;
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
      case "M+":
      if(display.value){
      memory =parseFloat(display.value);
      display.value=""
      display.value=memory;
      }
      break;
      case "x³":
      let numSquared=parseFloat(output);
      if(!isNaN(numSquared)){
      let results=Math.pow(numSquared,3);
      display.value=results;
      output=results.toString();
      }
      break;
      case "^":
      let numSq=parseFloat(output);
      if(!isNaN(numSq)){
      let results=Math.pow(numSq,numSq);
      display.value=results;
      output=results.toString()
      }
      break;
      case "log":
      let lognum = parseFloat(output);
      if(!isNaN(lognum)){
      let results = Math.log10(lognum);
      display.value=results;
      output=results.toString()
      }
      break;
      case "In":
      let lnnum = parseFloat(output);
      if(!isNaN(lnnum)){
      let results = Math.log(lnnum);
      display.value=results;
      output=results.toString()
      }
      break;
      case "π":
      let pieNum = parseFloat(output);
      let results;
      if (!isNaN(pieNum)) {
      results = pieNum * Math.PI;
      display.value = results;
      output = results.toString();
      }
      break;
      case "xʸ":
       let numSquareds=parseFloat(output);
      if (!isNaN(numSquareds)) {
        let results = Math.pow(numSquareds, numSquareds);
        display.value = results;
        output = results.toString();
      }
     case "Abs":
    let numAbs=parseFloat(output);
    if (!isNaN(numAbs, )) {
        let results = Math.abs(numAbs - output);
        display.value = results;
        output = results.toString();
      
}
    }
})
  })




