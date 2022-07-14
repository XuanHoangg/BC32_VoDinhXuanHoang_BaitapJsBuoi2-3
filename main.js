/**Bài 1
 * Mô hình 3 khối:
    Đầu vào:
        +Tạo 1 biến soNgayLam DOM tới soNgayLam và lây giá trị
        +Tạo biến luong1Ngay DOM tới luong1Ngay và lây giá trị
    Xử lý:
        +Tạo biến tongLuong = soNgayLam*luong1Ngay
    Đầu ra:
        +In ra Kết quả của tongluong khi click vào nút Tính tiền
 * 
 */
document.getElementById('bai1').onclick = function () {
    var luong1Ngay = document.getElementById('luong1Ngay').value;
    var soNgayLam = document.getElementById('soNgayLam').value;
    var tongLuong = luong1Ngay * soNgayLam;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    document.getElementById('ketQua1').innerHTML = 'Tổng số tiền lương trong ' + currentFormat.format(soNgayLam) + ' ngày làm là: ' + currentFormat.format(tongLuong) + 'vnđ';
}

/**Bài 2
 * Mô hình 3 khối:
    Đầu vào:
        +Tạo ra 5 biến st1 st2 st3 st4 st5 DOM tới 5 id bên html và lấy 5 giá trị
    Xử lý:
        +Tạo 1 biến giatritrungbinh = (st1 + st2 +st3 + st4 + st5)/5
    Đầu ra:
        +In ra Kết quả giá trị trung bình của 5 số thực khi click vào nút Kết quả
 */
document.getElementById('bai2').onclick = function () {
    var soThu1 = document.getElementById('soThu1').value * 1;
    var soThu2 = document.getElementById('soThu2').value * 1;
    var soThu3 = document.getElementById('soThu3').value * 1;
    var soThu4 = document.getElementById('soThu4').value * 1;
    var soThu5 = document.getElementById('soThu5').value * 1;
    var giaTriTrungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
    document.getElementById('ketQua2').innerHTML = 'Giá trị trung bình của 5 số trên = ' + giaTriTrungBinh;
}



/**Bài 3
 * Mô hình 3 khối:
    Đầu vào:
        +Nhập vào số lượng USD cần đổi DOM tới soLuongUSD và lấy giá trị
    Xử lý:
        +Tạo biến quyDoi = 23500*soLuongUSD
    Đầu ra:
        + In ra Kết quả đổi từ USD sang VNĐ khi click vào nút quy đổi
 */
document.getElementById('bai3').onclick = function () {
    var soLuongUSD = document.getElementById('soLuongUSD').value;
    var quyDoi = 23500 * soLuongUSD;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    document.getElementById('ketQua3').innerHTML = "Số tiền quy đổi = " + currentFormat.format(quyDoi) + "vnđ";
}


/**Bài 4
 * Mô hình 3 khối:
    Đầu vào:
        +Tạo biến chieuDai  chieuRong  DOM tới chieuDai chieuRong và lấy giá trị
    Xử lý:
        +Tạo biến dienTich = chieuDai*chieuRong
        +Tạo biến chuVi = (chieuDai+chieuRong)*2
    Đầu ra:
        +In ra màn hình Kết quả của dienTich và chuVi
 */
document.getElementById('bai4').onclick = function () {
    var chieuDai = document.getElementById('chieuDai').value * 1;
    var chieuRong = document.getElementById('chieuRong').value * 1;
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;
    document.getElementById('ketQua4').innerHTML = "Diện tích: " + dienTich + '<br>' + " Chu vi: " + chuVi;
}

/**Bài 5
 * Mô hình 3 khối:
    Đầu vào:
        +Tạo biến n và DOM tới id so2ChuSo để lấy value
    Xử lý:
        +Tạo biến hangChuc = Math.floor(n/10)
        +Tạo biến hangDV = n%10
        +Tạo biến tong = hangChuc+hangDV
    Đầu ra:
        +In Kết quả của tổng 2 chữ số ra màn hình
 */

document.getElementById('bai5').onclick = function () {
    var n = document.getElementById('so2ChuSo').value;
    var hangChuc = Math.floor(n / 10);
    var hangDV = n % 10;
    var tong = hangChuc + hangDV;
    document.getElementById('ketQua5').innerHTML = "Tổng 2 chữ số = " + tong;
}

