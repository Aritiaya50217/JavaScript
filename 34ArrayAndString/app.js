let colors = ["red","green","blue","orange"];
let str = colors.toString();
console.log(colors);
console.log("Before :",typeof(colors));
console.log(str);
console.log("After :",typeof(str));
// เอาค่าล่าสุดออก
colors.pop();
console.log(colors);
// เก็บค่าที่เอาออกไว้ในตัวแปร x
let x = colors.pop();
// แสดงค่าที่เอาออก
console.log(x);
console.log(colors);
