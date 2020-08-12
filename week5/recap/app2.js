var a = 10;

function hello(name, age) {

    a = 20;
    console.log(name, age)
    test();

    function test() {

    }
    if (true) {
        var a;
    }
}
// test() - nu se poate accesa
hello("nico ", 25)


let a = 13; // vs var a
if (true) { // scop la nivel de bloc
    let x; // nu se aplica hoisting
    x = 2;
}
console.log(a)