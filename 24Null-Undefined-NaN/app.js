// undefined
let a;
console.log(a);

// null ค่าว่าง (empty)
let b = null ;
if (b) {
    console.log("b is null");
}else{
    console.log("b is not null");
}

// NaN
// "n" ไม่ใช่ integer นำไปคำนวณไม่ได้
let c = 10 - "n" ;
console.log(c);