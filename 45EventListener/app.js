// การเข้าถึง id
const language = document.getElementById("language");
const display = document.getElementById("display");
const btn = document.getElementById("btn");

// การใช้ event ในกรณี onchange = ""
// เมื่อมีการเปลี่ยนตัวเลือกในฟังก์ชัน จะให้ทำอะไร ถ้าอยู่ในหน้า HTML จะเป็น onchange แต่พอมาเขียนในรูปแบบ event จะเขียนเป็น change
language.addEventListener("change",getLanguage);

// การใช้ event ในกรณี onclick = ""
btn.addEventListener("click",showWelcome)

function getLanguage(){
    // เข้าถึงข้อมูลภายใน object
    // alert(language.value);
    // แสดงบนหน้า HTML
    display.innerHTML = language.value
}
function showWelcome(){
    alert("Welcome to Website");
}
