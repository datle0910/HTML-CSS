
$(document).ready(function(){
    function ganvaotable(){
        var email = $("#jtf-email").val();
        var pass = $("#jtf-password").val();
        var cn = $("#jcb-chuyennganh").val();

        var newRow = $("<tr>"+
                        "<td>"+email+"</td>"+
                        "<td>"+pass+"</td>"+
                        "<td>"+cn+"</td>"+
                    +"</tr>");
        $(".table tbody").append(newRow);

    }
    $("#xacnhan-ccc").click(function(event) {
        event.preventDefault(); 

        ganvaotable();
    });
});
        