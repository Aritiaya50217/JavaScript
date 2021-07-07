/* เข้าถึง <p>
let a = document.getElementsByTagName("p");
console.log(a);
*/

// เข้าถึง id
const a = document.getElementById("test");
console.log(a);
// เข้าถึงผ่าน class
const b = document.querySelector(".myjs");
console.log(b);

function display(){
    // เปลี่ยนข้อความ เมื่อคลิก
    // จากเดิมเป็นคำว่า Hello
    // a.innerText ="<b>Basic<b>";
    a.innerHTML = "<b>Basic</b>";
}

