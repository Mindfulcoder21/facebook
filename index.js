$(document).ready(function(){
    $("#signup").validate({
        rules:{
        
        fname:{
            required:true,
            minlength:4,
            maxlength:6
            
        },
        sname:{
            requried:true,
            minlength:4
        },
        email:{
            required:true,
            email:true
        },
        password:{
            required:true,
            password:true,
            minlength:6,
            maxlength:6

        },
        day:{
            required:true,

        },
        gender:{
            required:true
        }

    },
    messages:{
        fname:{
        required:"enter first name",
        minlength:"enter atleast 4 characters "
        }
    }
})    
})
