function IMC(peso, altura) {

    var resultado = peso / (altura) ** 2;
    if (resultado <= 18.5) {
        console.log("Abaixo do peso");
    }
    else if (resultado > 18.5 && resultado < 25) {
        console.log("No peso normal");
    }
    else if (resultado > 25 && resultado < 30) {
        console.log("Acima do peso");
    }
    else if (resultado > 30) {
        console.log("Obeso");
    }

}

function Reversed(phrase) {
    var space = phrase.split(" ");
    var newPhrase = "";
    for (var i = 0; i < space.length; i++) {
        var word = space[i];
        for (var j = word.length - 1; j >= 0; j--) {
            var letters = word[j];
            newPhrase += letters;
        }
        newPhrase += " ";
    }
    return console.log(newPhrase);
}

function nVowels (phrase) {
    var vowels = ["a","e","i","o","u"];
    var count = 0;
    
    for (var i = 0; i < phrase.length; i++){
        for (var j = 0; j < vowels.length; j++){
            if (phrase[i] == vowels[i]){
                count++;
            }
        }
    }
    console.log(count);
}

function letterTimes (phrase,letter){
    var count = 0;
    var lowerPhrase = phrase.toLowerCase();
    for (var i = 0; i < lowerPhrase.length; i++){
        if(lowerPhrase[i] == letter){
            count+=1;
        }
    }
    console.log("A letra aparece " + count + " vezes");
}

function employeeTime(horaEntrada,minutoEntrada,segundoEntrada,horaSaida,minutoSaida,segundoSaida){
    var EntradaSeg = (horaEntrada*3600) + (minutoEntrada*60) + segundoEntrada;
    var SaidaSeg = (horaSaida*3600) + (minutoSaida*60) + segundoSaida;
    var segundosTrabalhados = SaidaSeg - EntradaSeg;
    var horasTrabalhado = Math.floor(segundosTrabalhados/3600);
    var RestoHorasTrabalhado = segundosTrabalhados%3600;
    var minutosTrabalho = Math.floor(RestoHorasTrabalhado/60);
    var RestoMinutosTrabalho = RestoHorasTrabalhado%60;
    console.log("O empregado trabalhou: " + horasTrabalhado + ":" + minutosTrabalho + ":" + RestoMinutosTrabalho + " horas");
}

function Rectangle(width, height){
    var str = "";
    for(var j = 0; j < width;j++){
        str += "*";
    }
    for(var i = 0; i < height;i++){
        console.log(str);
    }
}

function Triangle(height){
    var str = "";
    for(var i = 1; i<=height;i++){
        str += "*";
        console.log(str);
    }
}

function OpenRectangle(width,height){
    for (let i = 0; i < height; i++){
        var line = "";
        for (let j = 0; j < width; j++) {
            if(i == 0 || i == height - 1){
                line += "*";
            }else{
                if(j == 0 || j == width - 1){
                    line += "*";
                }else{
                    line += " ";
                }
            } 
        }
        console.log(line);
    }
}

//OpenRectangle(3,3)
//Triangle(10)
//Rectangle(10,5)
//employeeTime(09,20,00,17,50,00)
//letterTimes("Olaaaaaaaaaaa mundo","a")
//nVowels("Ola mundo")
//Reversed("Ola Joao")
//IMC(60,1.65)