const billInput = document.querySelector("#bill-input-2");
const peopleInput = document.querySelector("#number-of-people");
const buttons = document.querySelectorAll('.button');
const custom=document.querySelector("#custom");
const reset=document.querySelector("#reset")

var billValue = 0;
var peopleValue=0;
var tipButtonValue=0;

reset.addEventListener('click',refresh);
billInput.addEventListener('input', calculate);
peopleInput.addEventListener('input', calculate)
custom.addEventListener("input",calculate);
buttons.forEach(button=>{
    button.addEventListener('click',()=>dosomething(button))
})
buttons.forEach(button => {
    button.addEventListener('click', calculate)
})
function dosomething(button){
    {
if(button==custom){

    buttons.forEach((button) => {
        if(!(button==custom)){
            button.style.backgroundColor="hsl(183, 100%, 15%)"
            button.style.color = "white";
        }
    })
    return;
}
     

        buttons.forEach(button=>{
            if((button==custom)){
                
            } else{
                button.style.backgroundColor="hsl(183, 100%, 15%)";
                button.style.color = "white";
            }
        } )
        // button.style.color = "hsl(183, 100%, 15%)";
        button.style.backgroundColor="hsl(172, 67%, 45%)";
        button.style.color = "hsl(183, 100%, 15%)";
    }
}

function calculate(e) {
    console.log(e.target);
    if (e.target == billInput){
        billValue=billInput.value
    }else if(e.target==peopleInput){
        peopleValue=peopleInput.value
    }else if(e.target==custom){
        tipButtonValue=e.target.value;
    }
    else{
        tipButtonValue = e.target.innerText.slice(0, e.target.innerText.length-1);
    }
    reset.style.backgroundColor = "hsl(172, 67%, 45%)";

    if (peopleValue == 0) {
        document.querySelector('#error-message').innerHTML='Can\'t be zero';
        document.querySelector("#number-of-people" ).style.outline = '2px solid red'
        return;
    }
    document.querySelector("#error-message").innerHTML = "";
    document.querySelector("#number-of-people" ).style.outline= '';
    let tipAmountPerPerson =( ((billValue*tipButtonValue)/100) / peopleValue).toFixed(2);
    let totalAmount =  ((billValue * 1 + (billValue*tipButtonValue/100) * 1)/peopleValue).toFixed(2);


    let tipValue = document.querySelector("#tip-amount-value");
    tipValue.innerHTML = "$" + tipAmountPerPerson;

    let totalValue = document.querySelector("#total-value");
    totalValue.innerHTML= "$" +totalAmount;

}



function refresh(){
document.querySelector("#bill-input-2").value= "";
document.querySelector("#number-of-people").value= "";
 document.querySelector("#tip-amount-value").innerHTML="$0.00";
 document.querySelector("#total-value").innerHTML = "$0.00";

 peopleValue =0;
 billValue=0;
 tipButtonValue=0

buttons.forEach((button) => {
  if (button == custom) {
  } else button.style.backgroundColor = "hsl(183, 100%, 15%)";
  button.style.color = "white";
});
}
