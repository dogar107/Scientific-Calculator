const button=document.querySelectorAll("button");
const display = document.getElementById("display");

let output = ""; 
let latestAnswer = "";

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
      case "mode":
      output="0";
      display.value=output;
  }
  });
})



