var utils = {
    isEmpty: function(array){ //Recebe apenas o array
        return array.length == 0;
    },
    Max: function(array){ //Recebe apenas o array
        var maxNumber = array[0]
        for (let i = 0; i < array.length; i++) {
            if (maxNumber < array[i]) {
                maxNumber = array[i];
            }
        }
        return maxNumber;
    },
    Min: function(array){ //Recebe apenas o array
        var minNumber = array[0];
        for (let i = 0; i < array.length; i++) {
            if (minNumber > array[i]) {
                minNumber = array[i];
            }
        }
        return minNumber
    },
    Average: function(array){ //Recebe apenas o array
        var sum = 0;
        for(let i = 0; i < array.length; i++){
            sum = sum + array[i];
        }
        var average = sum / array.length;
        return average;
    },
    returnIndex: function(array,value){ //Recebe o array e o valor que se deseja encontrar a posição
        for (let i = 0; i < array.length; i++) {
            if (array[i] == value) {
                return i;
            }         
        }
        return -1;
    },
    subArray: function(array,startIndex,endIndex){ //Recebe o array, o valor inicial e o valor final
        var newArray = [];
        for (let i = startIndex; i < array[endIndex]; i++) {
            newArray.push(i + 1);
        }
        return newArray;
    },
    isSameLength: function(array1,array2){ //Recebe dois arrays
        return array1.length == array2.length;
    },
    Reverse: function(array){ //Recebe apenas o array
        var newArray = [];
        for (let i = array.length - 1; i >= 0; i--) {
           newArray.push(array[i]);
        }
        return newArray;
    },
    Swap: function(array,index1,index2){ //Recebe o array e os dois valores para trocar
        var positionTemp = array[index1];
        array[index1] = array[index2];
        array[index2] = positionTemp;
        return array;
    },
    Contains: function(array,value){ //Recebe o array e o valor
        return this.returnIndex(array, value) != -1;     
    },
    Concatenate: function(array1,array2){ //Recebe dois arrays para concatenar
        for (let i = 0; i < array2.length; i++) {
            array1.push(array2[i]);
        }   
        return array1;
    }
}

module.exports=utils;