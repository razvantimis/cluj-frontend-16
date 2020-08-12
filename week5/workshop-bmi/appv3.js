// version 1
var height = 1.71;
var weight = 85;

var bmi = calcBmi(weight, height);
showMsgBmi(bmi, "Razvan");

function calcBmi(weight, height) {
    return weight / (height * height);
}

function showMsgBmi(bmi, personName, showMess) {
    if (bmi < 18.5) {
        showMess(personName, "underweight")
    } else if (bmi < 25) {
        showMess(personName, "normal")
    } else if (bmi < 30) {
        showMess(personName, "overweight")
    } else {
        showMess(personName, "obese")
    }
}

function showMess(name, bmitype) {
    console.log(name + " your weight is " + bmitype);
}

// version 2
var x = {
    height: 1.68,
    weight: 57,
    name: "Paul"
}
var y = {
    height: 1.63,
    weight: 80,
    name: "Ana"
}
var list = [x, y]
list.push({
    height: 1.69,
    weight: 70,
    name: "Maria"
});



for (var i = 0; i < list.length; i++) {
    var person = list[i];
    console.log('person', person)

    var bmi = calcBmi(person.weight, person.height);

    showMsgBmi(bmi, person.name, showMess); // i = 0 => showMsgBmi(??,"Paul")
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}

