const box = document.getElementById("box");

// เพิ่ม class style
function addDarkMode(){
    // เพิ่ม class ที่กำหนดใน style.css
    box.classList.add("darkMode");
}

// ลบ class style
function removeDarkMode(){
    // ใส่ class ที่ต้องการลบ 
    box.classList.remove("darkMode");
}

// สลับ class style
function switchMode(){
    // ใส่ class ที่ต้องการแสดง
    box.classList.toggle("lightMode");
}

// เปรียบเทียบ class style
function compareMode(){
    // ใส่ class ที่ต้องการเปรียบเทียบ
    // ถ้าใช้ class darkMode ค่าจะเป็น true
    status = box.classList.contains("darkMode");
    
    alert(status);
}