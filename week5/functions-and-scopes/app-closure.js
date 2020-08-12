// Closure


function showMsg(name){
  var age = 26;
  console.log(age)
  return function(bmiType){
    console.log(name + ' age ' + " your weight is " + bmiType);
  }
}

const fn1 = showMsg('Paul')

fn1('obose')