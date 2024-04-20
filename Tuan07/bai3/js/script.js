$(document).ready(function() {

    function checkFullName() {
        var regex = /^[A-Z][a-z]+$/;
        var fullName = $("#hovaten").val();
        if(fullName === "") {
            $("#rangbuocht").text("Khong duoc de trong!");
            return false;
        }
        else if(regex.test(fullName) == false) {
            $("#rangbuocht").text("Khong oafhoahf!");
            return false;
        }
        else {
            $("#rangbuocht").text("");
            return true;
        }

    }
    $("#hovaten").blur(checkFullName);

    function checkTenDN(){
        var regex = /^[A-Za-z0-9]{6,}$/;
        var tenDN = $("#tendangnhap").val();
        if(tenDN === ""){
            $("#rangbuocDN").text("Khong duoc de trong");
            return false;
        }
        else if(!regex.test(tenDN)){
            $("#rangbuocDN").text("Phai co tren 6 ky tu");
            return false;
        }
        else{
            $("#rangbuocDN").text("");
            return true;
        }
    }
    $("#tendangnhap").blur(checkTenDN);

    function checkPassword(){
        var mk = $("#matkhau").val();
        if(mk === ""){
            $("#rangbuocMK").text("Khong duoc de trong");
            return false;
        }
        else {
            $("#rangbuocMK").text("");
            return true;
        }
    }
    $("#matkhau").blur(checkPassword);

    function checkConfirmPassword(){
        var mk = $("#matkhau").val();
        var cfmk = $("#xnmatkhau").val();
        if(cfmk === ""){
            $("#rangbuocxnmatkhau").text("Khong duoc de trong");
            return false;
        }
        else if(cfmk !== mk){
            $("#rangbuocxnmatkhau").text("Khong trung voi mat khau");
            return false;
        }
        else{
            $("#rangbuocxnmatkhau").text("");
            return true;
        }
    }
    $("#xnmatkhau").blur(checkConfirmPassword);

    function checkPhoneNumber() {
        var regex = /^0\d+$/;
        var phoneNumber = $("#dienthoai").val();
        if (phoneNumber === "") {
            $("#rangbuocDT").text("Khong duoc de trong");
            return false;
        } else if (!regex.test(phoneNumber)) {
            $("#rangbuocDT").text("Phai la so va bat dau bang so 0");
            return false;
        } else {
            $("#rangbuocDT").text("");
            return true;
        }
    }

    $("#dienthoai").blur(checkPhoneNumber);

    function checkEmail(){
        // var regex = /^[A-Za-z][0-9]*$/;
        var email = $("#email").val();
        if(email === ""){
            $("#rangbuocEM").text("Khong duoc de trong");
            return false;
        }
        // else if(!regex.test(email)){
        //     $("#rangbuocEM").text("Khong dung dinh giang cua email");
        //     return false;
        // }
        else{
            $("#rangbuocEM").text("");
            return true;
        }
    }
    $("#email").blur(checkEmail);

    $(document).ready(function() {
        $("#registerForm").submit(function(event) {
            // Ngăn chặn hành động mặc định của form
            event.preventDefault();

            // Lấy giá trị từ các input
            var fullName = $("#hovaten").val();
            // Lấy các giá trị khác tương tự
            var tendangnhap = $("#tendangnhap").val();
            var matkhau = $("#matkhau").val();
            var ngaysinh = $("#ngaysinh").val();
            var dienthoai = $("#dienthoai").val();
            var diachi = $("#diachi").val();
            var email = $("#email").val();
            var sothich = $("#sothich").val();

            // Lưu thông tin vào local storage để truy cập ở trang thongtin.html
            localStorage.setItem("fullname", fullName);
            localStorage.setItem("tendangnhap", tendangnhap);
            localStorage.setItem("matkhau", matkhau);
            localStorage.setItem("ngaysinh", ngaysinh);
            localStorage.setItem("dienthoai", dienthoai);
            localStorage.setItem("diachi", diachi);
            localStorage.setItem("email", email);
            localStorage.setItem("sothich", sothich);
            // Lưu các thông tin khác tương tự

            // Chuyển hướng người dùng đến trang thongtin.html
            window.location.href = "thongtin.html";
        });

        // Xử lý sự kiện khi nhấn nút Hủy
        $("#huy").click(function() {
            // Đưa người dùng về trang trước đó
            window.history.back();
        });
    });
});