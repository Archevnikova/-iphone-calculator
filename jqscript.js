// function currentValue() {
//     return $("#result");
// }
let currentValue = "";
let operation = "";

// проходимся в цикле по каждой кнопке с числом, 
// и добавляем слушатель на пересчет результата
for(let i = 0; i < 10; i++) {

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
    
    }else if (operation === "%"){
        const minVal = Math.min(Number(currentValue),Number($("#result").val()));
        const maxVal = Math.max(Number(currentValue),Number($("#result").val()));

        result = (minVal / maxVal)*100 + "%";
    }
    $("#plus,#minus,#division,#mul").css({backgroundColor:"",color:""});
    $("#result").val(result);

});


// вешаеем слушатель на +
$("#plus").click(function(){
    currentValue = $("#result").val();
    operation = "+";
    $("#plus").css({backgroundColor:"white",color:"black"});
    $("#result").val("");
    
});


// вешаеем слушатель на -
$("#minus").click(function(){
    currentValue = $("#result").val();
    operation = "-";
    $("#result").val("");
    $("#minus").css({backgroundColor:"white",color:"black"});
});


// вешаеем слушатель на /
$("#division").click(function(){
    operation = "/";
    currentValue = $("#result").val();
    $("#result").val("");
    $("#division").css({backgroundColor:"white",color:"black"});
});


// вешаеем слушатель на *
$("#mul").click(function(){
    currentValue = $("#result").val();
    operation = "*";
    $("#result").val("");
    $("#mul").css({backgroundColor:"white",color:"black"});
});
//вешаем слушатель на +/-
$("#invert").click(function(){
    currentValue = $("#result").val();
    currentValue = -currentValue;
    $("#result").val(currentValue);
})
//вешаем слушатель на %
$("#percent").click(function(){
    operation = "%";
    currentValue = $("#result").val();
    $("#result").val("");
})

































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
