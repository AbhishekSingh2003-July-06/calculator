const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%","*","/","-","+","="];
let output ="";

// define function to calculate based on button clicked 
const calculate = (btnvalue) =>{
   if(btnvalue === "=" && output !==""){
    // if output has '%' replace with '/100' before evaluting
    output =eval(output.replace("%","/100"));
   }
   else if(btnvalue ==="AC"){
    output ="";
   } else if(btnvalue==="DEL"){
    // if DEL button is clicked remove the last charcter from the output
    output=output.toString().slice(0,-1);
   }
   else{
    // if output is empty and button is special chars the returns 
    if(output=== "" && specialChars.includes(btnvalue)) return;
    output+=btnvalue;

   }
display.value=output;

}

// add event listener to buttons, call calculator() on click
buttons.forEach((button) => {
    // buttton click listener calls calculate() with dataset value as argument 
    button.addEventListener("click",(e) => calculate(e.target.dataset.value));
});