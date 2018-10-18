var signup = $("<form id='signup' name='signup' method='post' action='/signup'>");
    signup.append($("<label for='email'>Email Address</label>"),
    $("<input class='text' name='email' type='email' />"),
    $("<label for='firstname'>Firstname</label>"),$("<input name='firstname' type='text' />"),$("<label for='lastname'>Lastname</label>"),
    $("<input name='lastname' type='text' />"),$("<label for='password'>Password</label>"),$("<input name='password' type='password' />"),
    $("<button class='btn' type='submit' value='Create Account'/>"));
    
var signin = $("<form id='signin' name='signin' method='post' action='signin'>");
    signin.append($("<label for='email'>Email Address</label>"),$("<input class='text' name='email' type='text' />"),
    $("<label for='password'>Password</label>"),$("<input name='password' type='password' />"),$("<input class='btn' type='submit' value='SUBMIT' />"),$("<button class='signUp' type='BUTTON'>Sign Up</button>"));

    $("#signIn").on("click", event => {
        $(".loginDiv").empty();
        $(".loginDiv").append(signin);
        $(".signUp").on("click", event => {
            $(".loginDiv").empty();
            $(".loginDiv").append(signup);
        });
    });