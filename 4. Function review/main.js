// khai báo hàm F-declaration
function xinChao(){
    console.log("xin chào bạn");
}
xinChao();
// có đối số
function xinChao2(userName){
    console.log("xin chào bạn " + userName);
}
xinChao2("Lan");

// tính tích hai số a và b
function tich(a, b){
    return a*b;
}
console.log(tich(2,6))

let tich2 =  function(c, d){
    return c*d;
}
console.log(tich2(2,6))
