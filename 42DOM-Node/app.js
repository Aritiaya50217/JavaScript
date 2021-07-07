// check Node
const textAll = document.querySelectorAll("p");

// NodeList(4) [p, p, p, p] คือ มี <p> สีตัว
console.log(textAll);
console.log(textAll[1].innerHTML); // Js

// const ใช้กับตัวแปรที่มีค่าตายตัว
// let ใช้กับตัวแปรที่มีการเปลี่ยนค่า
const menu = document.getElementById("menu");
let count = 1;

// การเพิ่ม Node
function addItem(){
    // สร้างตัวแปรเก็บค่า แล้วนำไปต่อที่ node parents
    const item = document.createElement("li");
    // แสดงข้อความ "Item"
    item.innerText="Item " + (count++);
    // เพิ่ม item ลงใน tag ที่ใช้ id="menu"
    menu.appendChild(item);
}

// การลบ Node
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const newItem = document.createElement("li");

// ตัวแปร newItem เก็บค่าคำว่า "replace"
newItem.innerText = "Replace";

// ลบ
function deleteItem(){
    // ลบข้อมูล item1
    menu.removeChild(item1);
}
// แทนที่
function replaceItem(){
    // เอาค่าในตัวแปร newItem แทนที่ค่าในตัวแปร item2
    menu.replaceChild(newItem,item2);
}