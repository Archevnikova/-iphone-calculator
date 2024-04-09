// function currentValue() {
//     return $("#result");
// }
let currentValue = "";
let operation = "";

// проходимся в цикле по каждой кнопке с числом, 
// и добавляем слушатель на пересчет результата
for(let i = 1; i < 10; i++) {

    $(`#${i}`).click(function() {

        const cv = $("#result").val(); //111
    
        const result = `${cv}${i}`;
    
        $("#result").val(result);
    
    });
    
}

// вешаеем слушатель на очистку результата
$("#ac").click(function(){
    $("#result").val("");
});

// вешаеем слушатель на =
$("#eq").click(function(){
    let result = 0;
    if (operation === "+"){
        result = Number(currentValue) + Number($("#result").val());
    } else if (operation === "-"){
        result = Number(currentValue) - Number($("#result").val());
    }else if (operation === "/"){
        result = Number(currentValue) / Number($("#result").val());
    }else if (operation === "*"){
        result = Number(currentValue) * Number($("#result").val());
    }
    $("#result").val(result);
});


// вешаеем слушатель на +
$("#plus").click(function(){
    currentValue = $("#result").val();
    operation = "+";
    $("#result").val("");
    $("#plus")
});


// вешаеем слушатель на -
$("#minus").click(function(){
    currentValue = $("#result").val();
    operation = "-";
    
    $("#result").val("");
});


// вешаеем слушатель на /
$("#del").click(function(){
    operation = "/";
    currentValue = $("#result").val();
    $("#result").val("");
});


// вешаеем слушатель на *
$("#mul").click(function(){
    currentValue = $("#result").val();
    operation = "*";
    $("#result").val("");
});






// $(".digit7").click(function(){
//     const prefVal = $(".result__answer").val();
//     $(".result__answer").val(`${prefVal}7`);
    
// })

// $(".digit8").click(function(){
//     $(".result__answer").val("8");
    
// })
// $(".digit9").click(function(){
//     $(".result__answer").val("9");
    
// })
// $(".digit4").click(function(){
//     $(".result__answer").val("4");
    
// })

// $(".digit5").click(function(){
//     $(".result__answer").val("5");
    
// })

// $(".digit6").click(function(){
//     $(".result__answer").val("6");
    
// })
// $(".digit1").click(function(){
//     $(".result__answer").val("1");
    
// })
// $(".digit2").click(function(){
//     $(".result__answer").val("2");
    
// })
// $(".digit3").click(function(){
//     $(".result__answer").val("3");
    
// })



// // const btn = document.querySelector(".buttons");
// // const result=document.querySelector("#result");
// // btn.addEventListener("click", function(event){
// //     console.log(event.target);
// //     if (!event.target.classList.contains("button"))return
// // const value= event.target.innerText;

// // switch(value){
// //     case "AC":
// //         result.innerText = "";
// //         break;
// //     case "=":
// //         result.innerText = eval(result.innerText).toFixed(2);
// //         break;
// //     default:
// //         result.innerText+= value;
// // }


// // });
