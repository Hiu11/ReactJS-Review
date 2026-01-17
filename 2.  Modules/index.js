// 1. lấy 1 phần tử cần thiết
// import {myVar} from "./named.js";
// console.log(myVar);

//2. lấy một số ptu cần thiết
import {myVar, myFunction} from "./named.js";
console.log(myVar);
myFunction();

//3. lấy all
import * as name from "./named.js";
console.log(name.myVar); // gọi biến 
name.myFunction // gọi hàm
// console.log(name.df2) // undefined

import df2 from "./named.js"
console.log(df2);

//4. import default
// import df from "./default.js";
// console.log(df);

import total from "./default.js"
console.log(total(4,1));

//5. đổi tên import

//5.1 import default: đặt tên tùy ý
import tuyY from "./default.js";
console.log(tuyY(8,5));

//5.2 import named: đặt tên với as
import {myVar as tenMoi} from "./named.js";
console.log(tenMoi);








