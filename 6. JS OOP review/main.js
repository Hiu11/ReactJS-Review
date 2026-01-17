const user = {
    //thuộc tính
    name: "Lan",
    age: 70,
    "giới tính": "nam",
    //phương thức
    xinChao() {
        console.log("xin chào bạn");
        console.log(this.age);
        return 1;
    }
};
console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user["giới tính"]); // có dấu cách ở giữa mới dùng cách này

console.log(user.xinChao());


//class (khai bao dc cho nhieu doi tuong)
class User {
    constructor(name, age) {
        this.ten = name;
        this.tuoi = age;
    }
    xinChao() {
        console.log("xin chào bạn");
        console.log(this.age);
        return 1;
    }
}
const user1 = new User("Nam", 60);
console.log(user1);
console.log(user1.ten);
console.log(user1.tuoi);

const user2 = new User("Trung", 50);
console.log(user2);
console.log(user2.ten);
console.log(user2.tuoi);
console.log(user2.xinChao());