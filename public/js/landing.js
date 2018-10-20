var signup = $("<form id='signup' name='signup'>");
    signup.append($("<label for='email'>Email Address</label>"),
    $("<input class='text' id='email' name='email' type='email' />"),
    $("<label for='firstname'>Firstname</label>"),$("<input id='firstname' name='firstname' type='text' />"),$("<label for='lastname'>Lastname</label>"),
    $("<input id='lastname' name='lastname' type='text' />"),$("<label for='password'>Password</label>"),$("<input id='password' name='password' type='password' />"),
    $("<button class='createbtn' type='buttun'>Create Account</button>"),$("<br>"));
    
var signin = $("<form id='signin' name='signin'>");
    signin.append($("<label for='email'>Email Address</label>"),$("<input class='text' id='email' name='email' type='text' />"),
    $("<label for='password'>Password</label>"),$("<input name='password' id='password' type='password' />"),$("<button class='loginbtn' type='button'>Login</button>"),$("<button class='signUpbtn' type='button'>Sign Up</button>"),$("<br>"));

    $("#signIn").on("click", event => {
        $(".loginDiv").empty();
        $(".loginDiv").append(signin);
        $(".loginbtn").on("click", event => {
            event.preventDefault();
            var data = {
                email: $("#email").val().trim(),
                password: $("#password").val().trim()
            };
            $.post("/api/signin",data).done(data => {
                    if(data.redirect){
                        window.location = data.redirect;
                    }else{
                        console.log(data);
                        var message = $("<label id='errorlabel'>");
                        message.text(data.error);
                        if($("#errorlabel").length){
                            $("#errorlabel").remove();
                        }
                        $("#signin").append(message);
                    }
                });
            });
        $(".signUpbtn").on("click", event => {
            $(".loginDiv").empty();
            $(".loginDiv").append(signup);
            $(".createbtn").on("click", event => {
                event.preventDefault();
                var data = {
                    username: $("#email").val().trim(),
                    password: $("#password").val().trim(),
                    firstname: $("#firstname").val().trim(),
                    lastname: $("#lastname").val().trim()
                };
                $.post("/api/signup",data).done(data => {
                        if(data.redirect){
                            window.location = data.redirect;
                        }else{
                            console.log(data);
                            var message = $("<label id='errorlabel'>");
                            message.text(data.error);
                            if($("#errorlabel").length){
                                $("#errorlabel").remove();
                            }
                            $("#signup").append(message);
                        }
                    });
                });
        });
    });
        