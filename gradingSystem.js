function gradingSystem (numbers) {
    if (numbers > 100) {
        var grade = "Wrong Input";
    }
    else if (numbers >= 80) {
        var grade = "A+";
    }
    else if (numbers >= 70) {
        var grade = "A";
    }
    else if (numbers >= 60) {
        var grade = "A-";
    }
    else if (numbers >= 50) {
        var grade = "B";
    }
    else if (numbers >= 40) {
        var grade = "C";
    }
    else if (numbers >= 33) {
        var grade = "D";
    }
    else {
        var grade = "F";
    }

    return grade;
}

let puttingNumbers = 99;
let result = gradingSystem (puttingNumbers);
console.log ("You got:", result, "grade");