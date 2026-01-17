const traiCay = ["cam", "xoai", "tao", "nho"];
console.log(typeof traiCay);
console.log(traiCay);
// truy cap cac phan tu cua mang
console.log(traiCay[0]);
console.log(traiCay[1]);
console.log(traiCay[2]);
console.log(traiCay[3]);
console.log(traiCay.length);

const mang = [1, "hello", true, null, [1,2,3]];
console.log(mang[4]);
console.log(mang[4][1]);

//cac phuong thuc thuong dung
traiCay.push("dua")
console.log(traiCay);

// map: duyet qua tung phan tu cua mang tao moi tu mang cu
const so = [1,2,3,4,5];
console.log(mang);
const so2 = so.map((item) => item *2);
console.log(so2);

//bien doi phan tu cua mang thanh doi tuong moi
const so3 = so.map((item)=>({so:item}));
console.log(so3);

//findIndex
const kq = traiCay.findIndex((item)=>{
    return item ==="xoai"; // neu hai gtri giong nhau se tra ve gtri dau tien tim dc
});
console.log(kq); //1
// neu k co tra ve -1




