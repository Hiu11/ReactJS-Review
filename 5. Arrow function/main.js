// arow function
let tongTich = (a, b) => {
let tong = a+b;
let tich = a*b;
return tong+tich;
}
console.log(tongTich(3,3));

// nếu thân hàm có một câu lệnh duy nhất
let nhan = (c, d) => c*d;
console.log(nhan(2,4));

// khi trả về một đối tượng
//cach1
let person = (ten, tuoi) => {
    return{"họ và tên": ten, "huong tho": tuoi};
};
console.log(person("lan", 70)); 
//cach2
let person2 = (ten2, tuoi2) => ({"họ và tên": ten2, "huong tho": tuoi2});
console.log(person2("lan", 70)); 