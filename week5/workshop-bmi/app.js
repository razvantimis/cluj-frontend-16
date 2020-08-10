// version 1
var height = 1.71;
var weight = 85;

var bmi = weight / (height * height);

console.log(bmi);

if (bmi < 18.5) {
  console.log("your weight is underweight");
} else if (bmi < 25) {
  console.log("your weight is normal");
} else if (bmi < 30) {
  console.log("your weight is overweight");
} else {
  console.log("your weight is obese");
}

// version 2
var Paul = {
  height: 1.68,
  weight: 57,
}
var Ana = {
  height: 1.63,
  weight: 80,
}
var list = [Paul, Ana]
for (var i = 0; i < list.length; i++) {
  var person = list[i];

  var bmi = person.weight / (person.height * person.height);
  if (bmi < 18.5) {
    console.log("your weight is underweight");
  } else if (bmi < 25) {
    console.log("your weight is normal");
  } else if (bmi < 30) {
    console.log("your weight is overweight");
  } else {
    console.log("your weight is obese");
  }
}