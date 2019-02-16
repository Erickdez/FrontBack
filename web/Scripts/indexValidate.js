$().ready(function(){
    
    $("#myform").validate({

        rules: {
            priceapple: "required"
        },
        messages: {
            priceapple: "Price is required"
        }
    });

});


