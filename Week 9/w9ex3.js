console.log("Hello");

function showOutput(){
    let firstnumber = document.querySelector("#first-number").value;
    let secondnumber = document.querySelector("#second-number").value;
    let result = firstnumber * secondnumber;
   // document.querySelector("output").addEventListener("click",showOutput);
    document.querySelector("#output").textContent="The multiplication of " + firstnumber + " and " + secondnumber + " is " + result;
    document.querySelector("#output").style.color="red";
}

document.querySelector("#btn").addEventListener("click",showOutput);