/*$(document).ready(function(){
    $("#Enviar").click(function(event){
        
        event.preventDefault();
        
        var form = $('#formAdjuntar')[0];
        
        var data = new FormData(form);
        
        $.ajax({
            type: "post",
            enctype: 'multipart/form-data',
            url: 'php/send.php',
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (data){
                $("#result").text(data);
                console.log("SUCCESS : ", data);
                $("#btnSubmit").prop("disabled", false);
            },
            error: function (e) {

                $("#result").text(e.responseText);
                console.log("ERROR : ", e);
                $("#btnSubmit").prop("disabled", false);

            }
        });
                                      
    });
});*/