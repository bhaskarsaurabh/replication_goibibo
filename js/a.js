$(document).ready(function (){

    $("#change").on('click',function(){
        var pickup = $('#txt-pickup').val();
        $('#txt-pickup').val($('#txt-destination').val());
        $('#txt-destination').val(pickup);


    });

});