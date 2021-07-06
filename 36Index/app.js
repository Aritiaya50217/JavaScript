let point = [20,100,-100,5,-25,10];
console.log(point);

// น้อยไปมาก
point.sort(function(a,b){
    // a = ค่าลบ เรียงก่อน
    // b = ค่าบวก เรียงหลัง
    return a - b ;
});
// ผลลัพธ์ [-100, -25, 5, 10, 20, 100]
console.log("Sort :",point);

// มากไปน้อย
let number = [1,23,40,60,-7,-9,-29];
console.log(number);

number.sort(function(a,b){
    // b = ค่าบวก เรียงก่อน
    // a = ค่าลบ เรียงหลัง
    return b - a ;
});
console.log("Descend :",number);