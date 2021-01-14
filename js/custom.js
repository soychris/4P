$(document).ready(function(e){
    $("#fcontacto").on('submit', function(e){
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'php/send.php',
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData:false,
            beforeSend: function(){
               
            },
            success: function(data){
                $("#respuesta").slideDown();
                $("#respuesta").html(data);
            }
        });
    });
});










/*$(document).ready(function(){
    $("#fcontacto").submit(function(event){
        
        event.preventDefault();
        
        
        $.ajax({
            type: 'POST',
            url: 'php/send.php',
            data: $(this).serialize(),
            success: function(data){
                $("#respuesta").slideDown();
                $("#respuesta").html(data);
            }
        });
        return false;
    });
});*/



/*$(document).ready(function(){
    $("#formAdjuntar").submit(function(event){
        
        event.preventDefault();
        
        var form = $(this);
        var formdata = new FormData(form);
        
        $.ajax({
            type: 'POST',
            url: 'php/send.php',
            data: formdata,
            success: function(data){
                $("#respuesta").slideDown();
                $("#respuesta").html(data);
            }
        });
        return false;
    });
});*/



/*$(document).ready(function(){
$("#formAdjuntar").submit (function(event){
    event.preventDefault();
    var form = $(this);
    var formdata = false;
    if (window.FormData){
        formdata = new FormData(form);
    }

    var formAction = form.attr('action');
    $.ajax({
        url         : 'php/send.php',
        data        : formdata ? formdata :form.serialize(),
        cache       : false,
        contentType : false,
        processData : false,
        type        : 'POST',
        success     : function(data, textStatus, jqXHR){
                    $("#respuesta").slideDown();
                    $("#respuesta").html(data);
            // Callback code
        }
    });
    });
});*/



