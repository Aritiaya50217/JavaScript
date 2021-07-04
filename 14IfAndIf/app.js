let age = 14 ;
console.log("age =",age);

// กรณี age ไม่เกิน 15
if(age <= 15){
    if(age == 15){
        console.log("Yes");
    }else if (age == 14) {
        console.log("age less than 15");
    }else{
        console.log("No");
    }
}else{
    // age เกิน 15
    console.log("age great than 15");
}