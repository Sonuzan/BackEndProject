var students = [];

//Acrescentar o objeto (aluno) dentro do array students com valores random
for (let i = 0; i < 20; i++) {
    var student = {
        number: Math.ceil(Math.random() * 1000),
        grade: Math.ceil(Math.random() * 20)
    };
    students.push(student);
}

function listAll(students){
    for (let i = 0; i < students.length; i++) {
        var student = students[i];
        console.log("Number: " + student.number + ", Grade: " + student.grade);
    }
}

function bestGrade(students){
    var biggestGrade = students[0].grade;
    for (let i = 0; i < students.length; i++) {
        if (biggestGrade < students[i].grade){
            biggestGrade = students[i].grade;
        }
    }
    console.log("The biggest grade is: " + biggestGrade);
}

function worstGrade(students){
    var lowestGrade = students[0].grade;
    for (let i = 0; i < students.length; i++) {
        if (lowestGrade > students[i].grade){
            lowestGrade = students[i].grade;
        }
    }
    console.log("The lowest grade is: " + lowestGrade);
}

function averageGrade(students){
    var sum = 0;
    for(let i = 0; i < students.length; i++){
        sum = sum + students[i].grade;
        var studentnum = students[i].number;
       
    }
    var average = sum / students.length;
    result = Math.abs(students[0].grade - average);
    for (let i = 0; i < students.length; i++) {
        if(students[i].grade - average < result){
            result = students[i].grade - average;
        }
        var student = student[i];
    }
    console.log("The average grade is: " + average);
    console.log("The closest grade to the average grade is: " +  + " and the students number is: " + studentnum);
}

function negativeGrades(students){
    var sum= 0;
    for (i=0; i<students.length; i++){
        if (students[i].grade < 9.5){
            sum += 1;
        }
    }
    console.log ("There are " + sum + " negative grades")
}

function positiveGrades(students){
    var sum = 0;
    for (let i = 0; i < students.length; i++){
        if (students[i].grade >= 9.5){
            sum++;
        }
    }
    console.log ("There are " + sum + " positive grades");
}


function studentStats(students,option){
    switch (option) {
        case 1:
            listAll(students);
            break;
        case 2:
            listAll(students)
            bestGrade(students);
            break;
        case 3:
            listAll(students)
            worstGrade(students);
            break;
        case 4:
            listAll(students)
            averageGrade(students);
            break;
        case 5:
            listAll(students);
            negativeGrades(students);
            break;
        case 6:
            listAll(students);
            positiveGrades(students);
            break;
        default:
            console.log("Opção Inválida!");
            break;
    }
}

studentStats(students,4);