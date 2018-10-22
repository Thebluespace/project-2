var signup = $("<form id='signinform' name='signup'>");
    signup.append($("<label for='email'>Email Address</label>"),$("<br>"),
    $("<input class='text' id='email' name='email' type='email' />"),$("<br>"),
    $("<label for='firstname'>Firstname</label>"),$("<br>"),$("<input id='firstname' name='firstname' type='text' />"),$("<br>"),$("<label for='lastname'>Lastname</label>"),$("<br>"),
    $("<input id='lastname' name='lastname' type='text' />"),$("<br>"),$("<label for='password'>Password</label>"),$("<br>"),$("<input id='password' name='password' type='password' />"),$("<br>"),
    $("<button class='createbtn' type='buttun'>Create Account</button>"));
    
var signin = $("<form id='signinform' name='signin'>");
    signin.append($("<label for='email'>Email Address</label>"),$("<br>"),$("<input class='text' id='email' name='email' type='text' />"),$("<br>"),
    $("<label for='password'>Password</label>"),$("<br>"),$("<input name='password' id='password' type='password' />"),$("<br>"),$("<button class='loginbtn' type='button'>Login</button>"),$("<button class='signUpbtn' type='button'>Sign Up</button>"));

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
    $("#logout").on("click",(req) => {
        window.location = "/api/logout";
    });
        