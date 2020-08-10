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