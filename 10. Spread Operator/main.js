// Danh sách sở thích hiện tại
let soThich = ["đọc sách", "nghe nhạc"];

// Sở thích mới muốn thêm
const soThichMoi = ["đi du lịch"];

// Cập nhật danh sách sở thích (dùng spread operator)
soThich = [...soThich, ...soThichMoi];

console.log("Danh sách sở thích sau khi thêm:", soThich);

/*
Kết quả:
[
  'đọc sách',
  'nghe nhạc',
  'đi du lịch'
]
*/
// Thông tin người dùng ban đầu
let user = {
  id: 1,
  name: "Nguyễn Văn A",
  email: "vana@gmail.com",
};

// Thông tin cần cập nhật
const updates = {
  address: "123 Đường ABC",
  role: "admin",
};

// Cập nhật thông tin người dùng (dùng spread operator)
user = { ...user, ...updates };

console.log("Thông tin người dùng sau khi cập nhật:", user);

/*
Kết quả:
{
  id: 1,
  name: 'Nguyễn Văn A',
  email: 'vana@gmail.com',
  address: '123 Đường ABC',
  role: 'admin'
}
*/
