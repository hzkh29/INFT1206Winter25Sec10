console.log("Hello");

// How to define user-defined function
// 1. Function Declaration

function greeting1(){
    console.log("Hello");
}

greeting1();

function greeting2(name){
    // console.log("Hello " +name);
    // console.log('Hello ' +name);
    console.log('Hello ${name}');
}

greeting2('sam');

function greeting3(name){
    return 'Hello ${name}';
}

let message = greeting3('tom');
console.log(message);

greeting2();

function sum(num1=0, num2=0){
    return num1+num2;
}

console.log(sum(3,6));
console.log(sum(3));
console.log(sum(3,6,9));

// 2. Function Expression

let f1 = sum;

console.log(f1(7,9));

const f2 = function () {
    return "Good afternoon"
};

console.log(f2());

// 3. Arrow function

console.log(f1(7,9));

const f3 = ()=> "Good afternoon";

const f4 = (n1,n2) => n1 + n2;

console.log(f4(2,8));