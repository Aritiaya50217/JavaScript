let status = "";
let light ;

// if statement
/*
if(status == 0){
    light  = "turn off" ;
}else if(status == 1){
    light = "turn on" ;
}else{
    light = "Error !!" ;
}
*/

// switch case
switch(status){
    case 0 : light = "turn off" ;
        break ;
    case 1 : light = "turn on" ;
        break ;
    default : light = "Please Enter the Number 0 or 1 !!!";
}

console.log(light);