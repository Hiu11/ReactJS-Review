// giả sử có 1 đối tượng đơn hàng
const donHang = {
  maDonHang: 101,
  tienTe: "VND",
  tongTien: 500000,
};

// 1. Không sử dụng Destructuring
function xuLyDonHang(donHang) {
  const maDonHang = donHang.maDonHang;
  const tienTe = donHang.tienTe;
  const tongTien = donHang.tongTien;

  console.log(`Mã đơn hàng: ${maDonHang}`);
  console.log(`Tiền tệ: ${tienTe}`);
  console.log(`Tổng tiền: ${tongTien}`);
}

// gọi hàm
xuLyDonHang(donHang);

// 2. Sử dụng Destructuring
console.warn("Sử dụng Destructuring:");
function xuLyDonHang2({ maDonHang, tienTe, tongTien }) {
  console.log(`Mã đơn hàng: ${maDonHang}`);
  console.log(`Tiền tệ: ${tienTe}`);
  console.log(`Tổng tiền: ${tongTien}`);
}
xuLyDonHang2(donHang);

// Destructuring với giá trị mặc định
function xuLyDonHang({ maDonHang = 0, tienTe = "VND", tongTien = 0 }) {
  console.log(`Mã đơn hàng: ${maDonHang}`);
  console.log(`Tiền tệ: ${tienTe}`);
  console.log(`Tổng tiền: ${tongTien}`);
}

// Gọi hàm với dữ liệu thiếu
xuLyDonHang({ maDonHang: 102 });

/*
Kết quả:
Mã đơn hàng: 102
Tiền tệ: VND
Tổng tiền: 0
*/

 // Destructuring + Rest Parameter
 function xuLyDonHang({ maDonHang, ...rest }) {
  console.log(`Mã đơn hàng: ${maDonHang}`);
  console.log(rest);
}

// Gọi hàm
xuLyDonHang({
  maDonHang: 103,
  tienTe: "USD",
  tongTien: 1000,
  khachHang: "Nguyen Van A",
});

/*
Kết quả:
Mã đơn hàng: 103
{ tienTe: 'USD', tongTien: 1000, khachHang: 'Nguyen Van A' }
*/
