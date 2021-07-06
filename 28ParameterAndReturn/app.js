function fullName(firstName,lastName,local){
    console.log(firstName,lastName,local);
}
function setSalary(salary){
    let bonus = 1000;
    return salary + bonus ;
}

fullName("oil","Artitaya","Thailand");
let total = setSalary(15000);
console.log("salary + bonus : "+total+" Baht");