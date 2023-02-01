function gradingSystem (numbers) {

    let grade = 0;

    if (numbers > 100) {
        grade = "Wrong Input";
    }
    else if (numbers >= 80) {
        grade = "A+";
    }
    else if (numbers >= 70) {
        grade = "A";
    }
    else if (numbers >= 60) {
        grade = "A-";
    }
    else if (numbers >= 50) {
        grade = "B";
    }
    else if (numbers >= 40) {
        grade = "C";
    }
    else if (numbers >= 33) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    return grade;
}

let puttingNumbers = 99;
let result = gradingSystem (puttingNumbers);
console.log ("You got:", result, "grade");