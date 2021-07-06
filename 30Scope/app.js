// global
let a = 100 ;

function display(){
    let b = 50; // local
    console.log("global variable in function :",a);
    console.log("local variable in function :",b)
    console.log("a + b =",a+b);
}
console.log("global variable :",a);

display();