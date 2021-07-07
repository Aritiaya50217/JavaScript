const title = document.getElementById("title");
const content = document.getElementById(".content");
// เข้าถึง tag p ทุกตัว
const all = document.querySelectorAll("p");
const box = document.querySelector(".light");

// เปลี่ยนข้อความ Title เป็นสีแดง
// title.style.color="red";

function lightMode(){
    // title.style.color="white";
    // title.style.backgroundColor="gray";
    // เมื่อคลิกจะทำงานที่ class="light"
    box.setAttribute('class','light');
}
function darkMode(){
    box.setAttribute('class','dark');
}