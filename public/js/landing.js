var signup = $("<form id='signup' name='signup'>");
    signup.append($("<label for='email'>Email Address</label>"),
    $("<input class='text' name='email' type='email' />"),
    $("<label for='firstname'>Firstname</label>"),$("<input name='firstname' type='text' />"),$("<label for='lastname'>Lastname</label>"),
    $("<input name='lastname' type='text' />"),$("<label for='password'>Password</label>"),$("<input name='password' type='password' />"),
    $("<button class='btn' type='submit' value='Create Account'/>"),$("<br>"));
    
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
            $.post("/signin",data).done(data => {
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
        });
        $(".signUpbtn").on("click", event => {
            $(".loginDiv").empty();
            $(".loginDiv").append(signup);
        });