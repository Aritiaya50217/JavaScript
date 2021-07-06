function display(firstName,lastName = "Artitaya"){
    console.log(firstName,lastName);
}
// ถ้าไม่มีการใส่ค่า parameter2 จะดึงค่าที่เราใส่ไว้มาแสดงแทน
display("oil"); // oil Artitaya
display("oil","oil"); // oil oil
