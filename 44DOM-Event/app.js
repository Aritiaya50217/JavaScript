function welcome(){
    alert("Welcome to website");
}
// onfocus = " "
function hightlight(obj){
    // เมื่อ element ได้รับการ focus (คลิกช่อง input)
    // background จะเป็นสีเทา
    obj.style.background="gray";
}
// onblur = " "
function unhightlight(obj){
    // เมื่อ element ไม่ได้รับการ focus (คลิกช่องว่างบริเวณใดก็ได้)
    // background จะเป็นสีน้ำเงิน
    obj.style.background="blue";
}
// onchange = " "
function getLanguage(){
    // id ที่ต้องการเข้าถึง
    const language = document.getElementById("language");
    const display = document.getElementById("display");
    // .value เพื่อเข้าถึงข้อมูลภายใน object
    alert("ภาษาที่คุณเลือก : "+language.value);
    // แสดงบนหน้า HTML
    display.innerHTML = language.value;
}
// onMouseover = " "
function hightlight2(obj){
    // เมื่อเอาเมาส์ไปจ่อ จะเกิดพื้นหลังสีฟ้าอ่อน
    obj.style.background = "lightblue";
}
// onMouseout = " "
function unhightlight2(obj){
    // เมื่อเอาเมาส์ออก จะเกิดพื้นหลังสีขาว
    obj.style.background = "white";
}