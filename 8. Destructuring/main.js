// destructuring arrays
// gia su ta co mot mang nhu sau
const userName = ["Toan", "Ha", "Huy"];
// neu muon lay ra cac phan tu cua mang tren
const user1 = userName[0];
const user2 = userName[1];
const user3 = userName[2];
console.log(user1, user2, user3);
// nhung neu su dung destructuring, chung ta viet ngan gon nhu sau
const [user4, user5, user6] = userName;
console.log(user4, user5, user6);

//co the bo qua phan tu ko can thiet bang cach dung dau phay
const [, user7, user8] = userName;
console.log(user7);
console.log(user8);

// des voi gia tri mac dinh
const [user9, user10, user11, user12 = "ko co ten"] = userName;
console.log(user12); // undefined

// des voi rest parameter
const [user13, ...rest] = userName;
console.log(user13); // toan
console.log(rest); // ha, huy

//vidu
const user = {
    name: "Toan",
    age: 20,
};
//neu muon lay
const ten = user.name;
const tuoi = user.age;
console.log(ten);
console.log(tuoi);
//cach2: ten bien phai trung voi ten thuoc tinh cua doi tuong
const { name, age } = user;
console.log(ten);
console.log(tuoi);

// doi ten bien khi des
const { name: ten1, age: tuoi1 } = user;
console.log(ten1); //toan
console.log(tuoi1); //20

// des voi gia tri mac dinh
const { name: ten2, age: tuoi2, gioiTinh = "Nam" } = user;
console.log(ten2);
console.log(tuoi2);
console.log(gioiTinh);

// des voi parameter
const { name: ten3, ...rest1 } = user;
console.log(ten3);
console.log(rest1);//{age:20}





