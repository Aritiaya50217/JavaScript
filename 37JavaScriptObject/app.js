let product = {
    name : "mouse",
    price : 2500,
    color : "black",
    category : "computer",
    displayProduct:function(){
        return this.name + " ราคา :" +this.price
    },
    disCount:function(){
        return this.price - 1000 ;
    }
};

console.log(product.displayProduct());
alert("ราคาหลังจากหักส่วนลด : " + product.disCount() + " บาท");

/*
console.log("รายละเอียดทั้งหมด :",product);
// object
console.log("ชื่อสินค้า :",product.name);
*/

// array
let item = ["mouse",2500,"black","computer"];
console.log("รายละเอียดทั้งหมด :",item);
console.log("ชื่อสินค้า :",item[0]);