let colors = ["red","green","blue"];
colors.push("gray");

console.log(colors);
/*for (let i = 0; i < colors.length;i++){
    console.log("Index :",(i+1),"=",colors[i]);
}
*/
// เข้าถึงด้วย forEach
// แสดงข้อมูลทั้งหมดโดยไม่จัดเรียงแบบ Array ไม่ต้องใช่[]เพื่อเรียกดูลำดับ
colors.forEach(getColor);
function getColor(color){
    console.log("color :",color);
}
