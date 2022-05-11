function Notas (n1,n2){
    var media = (n1+n2)/2;
    if (media>=9.5){
        console.log("Está aprovado!");
    }else{
        console.log("Está reprovado! Desculpe :(");
    }
    return
}

function Meses (n1){
    if (n1 == 1){
        console.log("Janeiro");
    }
    else if (n1 == 2){
        console.log("Fevereiro");
    }
    else if (n1 == 3){
        console.log("Março");
    }
    else if (n1 == 4){
        console.log("Abril");
    }
    else if (n1 == 5){
        console.log("Maio");
    }
    else if (n1 == 6){
        console.log("Junho");
    }
    else if (n1 == 7){
        console.log("Julho");
    }
    else if (n1 == 8){
        console.log("Agosto");
    }
    else if (n1 == 9){
        console.log("Setembro");
    }
    else if (n1 == 10){
        console.log("Outubro");
    }
    else if (n1 == 11){
        console.log("Novembro");
    }
    else if (n1 == 12){
        console.log("Dezembro");
    }
    else{
        console.log("Não é um mês válido!");
    }
    return
}

function Calculadora(n1,n2,operador){
    if (operador == "+"){
        var soma = n1 + n2;
        console.log(soma);
    }
    else if (operador == "-"){
        var subtracao = n1 - n2;
        console.log(subtracao)
    }
    else if (operador == "*"){
        var multiplicacao = n1 * n2;
        console.log(multiplicacao)
    }
    else if (operador == "/"){
        var divisao = n1 / n2;
        console.log(divisao)
    }
    else if (operador == "^"){
        var elevado = n1**n2;
        console.log(elevado)
    }
    else{
        console.log("Operador não identificado!")
    }
    return
}

function multiplosMenores(n1,n2){
    for (i=1; i<n2; i++){
        if (i % n1 == 0){
            console.log(i);
        }
    }
}

function sum (n1){
    var sum = 0;
    for (i=0; i<=n1;i++){
        sum += i;
    }
    console.log(sum)
}

function fatorial (n1){
    var resultado = n1;
    var primeiroMultipicador = n1 - 1;
    for (var i = primeiroMultipicador; i > 1; i--) {
        resultado *= i;
    }
    console.log(resultado);
}

function max(n1){
    const max = Math.max(...n1); 
    console.log(max); 
}

function min(n1){
    const min = Math.min(...n1); 
    console.log(min); 
}

function med(n1){
    var n1len = n1.length;
    sum = 0;
    for(i=0; i<n1len; i++){
        sum = sum + n1[i];
    }
    var media = sum / n1len;
    return media;
}

function Max2(array1){
    var biggestNumber = array1[0];
    for (var i = 0; i < array1.length; i++){
        if (biggestNumber < array1[i]){
            biggestNumber = array1[i];
        }
    }
    return biggestNumber;
}

function Min2(array1){
    var lowestNumber = array1[0];
    for (var i = 0; i < array1.length; i++){
        if (lowestNumber > array1[i]){
            lowestNumber = array1[i];
        }
    }
 return lowestNumber;
}



//Notas(5,5);
//Meses(5);
//Calculadora(5,5,"-");
//multiplosMenores(5,20);
//sum(100);
//fatorial(5);
//console.log(med([20,10,15,2,16]));        
//console.log(Max2([5,2,3,160,12,15]));
//console.log(Min2([5,2,3,160,12,15]));