$(document).ready(function() {
    function KiemTraTenDN() {
        var re = /^[a-zA-Z]\w*/;
        var inputDN = $("#jtf-DN").val().trim(); 
        if (!inputDN) {
            $("#tendn").text("Không được bỏ trống");
            return false;
        }
    
        else if (!re.test(inputDN)) {
            $("#tendn").text("Bắt đầu là ký tự, có hoặc không có ký tự số, ký tự đặc biệt và không được có khoảng trắng");
            return false;
        } else {
            $("#tendn").text("*");
            return true;
        }
    }
    $("#jtf-DN").blur(KiemTraTenDN);
    
    function KiemTraMatKhau(){
        var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

        var inputMK= $("#jtf-MK").val();
        if(!inputMK){
            $("#mk").text("Khong duoc bo trong");
            return false;
        }
        else if(!regex.test(inputMK)){
            $("#mk").text("từ 8 ký tự trở lên, có ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt ");
            return false;
        }
        else{
            $("#mk").text("*");
            return true;
        }
    }
    $("#jtf-MK").blur(KiemTraMatKhau);

    function confirmPassword(){
        var MK= $("#jtf-MK").val();
        var inputCFPS= $("#jtf-NLMK").val();
        if(!inputCFPS){
            $("#cfmk").text("Khong duoc bo trong");
            return false;
        }
        else if(inputCFPS !== MK){
            $("#cfmk").text("Phai giong voi mat khau");
            return false;
        }
        else{
            $("#cfmk").text("*");
            return true;
        }
    }
    $("#jtf-MK").blur(confirmPassword);
    

    function kiemTraHoTen(){
        var regex = /^([A-Z]{1}[a-z]*\s?)+([A-Z]{1}[a-z]*\s{1})?$/;
        var inputHT = $("#jtf-hovaten").val();
        if(!inputHT){
            $("#hvt").text("Khong duoc bo trong");
            return false;
        }
        else if(!regex.test(inputHT)){
            $("#hvt").text("Phải có ít nhất Họ, Tên. Ký tự đầu bắt buộc phải viết hoa");
            return false;
        }
        else{
            $("#hvt").text("*");
            return true;
        }
    }
    $("#jtf-hovaten").blur(kiemTraHoTen);

    function KiemTraNgaySinh(){
        var ngaySinh = new Date($("#jtf-NgaySinh").val());
        var today = new Date();
        var age = today.getFullYear() - ngaySinh.getFullYear();
        if(age <= 16){
            $("#nss").text("Phai tren 16 tuoi");
            return false;
        }
        else {
            $("#nss").text("*");
            return true;
        }
    }
    $("#jtf-NgaySinh").blur(KiemTraNgaySinh);

    function kiemTraDiaChi(){
        var diachi = $("#jtf-diachi").val();
        if(!diachi){
            $("#rangbuocDC").text("Khong duoc de trong");
            return false;
        }
        else{
            $("#rangbuocDC").text("");
            return true;
        }
    }
    $("#jtf-diachi").blur(kiemTraDiaChi);

    function kiemTraSDT(){
        var regex = /^0[3,4,5,6,7,9]\d{8}$/;
        var sdt = $("#jtf-sdt").val();
        if(!sdt){
            $("#sdt").text("Khong duoc de trong");
            return false;
        }
        else if(!regex.test(sdt)){
            $("#sdt").text("là số điện thoại 10 ký tự số, bắt đầu là 09, 03, 07, 06, 05, 04");
            return false;
        }
        else {
            $("#sdt").text("");
            return true;
        }
    }
    $("#jtf-sdt").blur(kiemTraSDT);

    function kiemTraEmail(){
        var regex = /^([A-Za-z]\d?)+(@gmail.com)/;
        var email = $("#jtf-email").val();
        if(!email){
            $("#email").text("Khong duoc de trong");
            return false;
        }
        else if(!regex.test(email)){
            $("#email").text("luôn đúng định dạng của địa chỉ email");
            return false;
        }
        else{
            $("#email").text("");
            return true;
        }
    }
    $("#jtf-email").blur(kiemTraEmail);

    $("#dangky").click(function(){
        if(!KiemTraTenDN() ){
            alert("ban chua nhap hoac nhap sai thong tin");
            return false;
        }
        else{
            alert("Dang ky thanh cong");
            return true; 
        }
        
    });

    $("#huy").click(function(){
        alert("huy thanh cong");
    });
});
