let score = 55;
let pass;
/* แบบเดิม
if(score > 50){
    pass = "ผ่าน" ;
}else{
    pass = "ไม่ผ่าน";
}
*/
// แบบย่อ
pass = score > 50 ? "ผ่าน" :"ไม่ผ่าน";
console.log(pass);

