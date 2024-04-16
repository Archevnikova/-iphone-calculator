let currentValue = "";
let operation = "";
function addListener(){
    for(let i = 0; i < 10; i++) {
        const selector = `${i}`;
        let button  = document.getElementById(selector);
        button.addEventListener("click",function() {
            const cvInput = document.querySelector ("#result"); 
            const valInput = cvInput.value;
            const result = `${valInput}${i}`;
            cvInput.value = result;
        });
    }
}
 function saveCurrentValueAndClearInput(){
    let cvInput = document.querySelector("#result")
    currentValue = cvInput.value;
    cvInput.value = "";
 }
addListener();
//очистка
let ac = document.getElementById("ac");
ac.addEventListener("click",function(){
    let cv = document.querySelector ("#result");
    cv.value= "";
})
// вешаеем слушатель на +
let plus = document.getElementById("plus");
plus.addEventListener("click",function(){
    operation = "+";
    saveCurrentValueAndClearInput();
});
//вешаем слушатель на -
 let minusEl = document.getElementById("minus");
 minusEl.addEventListener("click",function(){
    operation= "-";
    saveCurrentValueAndClearInput();
 });
 
 //вешаем слушатель на *
 let mulEl = document.getElementById("mul");
 mulEl.addEventListener("click",function(){
    operation = "*";
    saveCurrentValueAndClearInput();

 })
//вешаем слушатель на /
let delEl = document.getElementById("division");
delEl.addEventListener("click",function(){
    operation = "/";
    saveCurrentValueAndClearInput();

})
//вешаем слушатель на %
let percentEl = document.getElementById("percent");
percentEl.addEventListener("click",function(){
    operation = "%";
    saveCurrentValueAndClearInput();

})
//вешаем слушатель на +/-
let invertEl = document.getElementById("invert");
invertEl.addEventListener("click",function(){
    operation = "+/-";
    let cvInput = document.querySelector("#result");
    cvInput.value = -cvInput.value;

})

// вешаеем слушатель на =
let equaliy= document.getElementById("eq");
equaliy.addEventListener("click",function(){
    let result = 0;
    const cvInput = document.querySelector("#result");
    const cvVal = Number(currentValue);
    const cvIn = Number(cvInput.value);
    switch(operation){
        case "+": result = cvVal + cvIn;
        break;
        case "-": result = cvVal - cvIn;
        break;
        case"*": result = cvVal * cvIn;
        break;
        case "/":result = cvVal / cvIn;
        break;
        case"%":{
        const minVal = Math.min(cvVal,cvIn);
        const maxVal = Math.max(cvVal,cvIn);
        result = (minVal / maxVal)*100 + "%";
        break;
        };
        default:alert("Операция не найдена!");
    }
    cvInput.value = result;
    
}); 
   