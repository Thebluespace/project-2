console.log('javascript file linked successfully');

const signInButton = document.getElementById('signIn');
const emptyDiv = document.getElementById('emptyDiv');

const signInForm = () => {
    emptyDiv.innerHTML = `
        <form class="text-white text-center">
            <div class="container p-4 bg-info border border-light">
                <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input id="exampleInputPassword1" type="password" class="form-control" placeholder="Password">
          </div>
                <div class="form-group row pt-4">
                    <div class="col-10">
                        <button id="authorize" class="form-control" type="submit">Sign In!</button>
                    </div>
                </div>
            </div>
        </form>
    `;
}

// when sign in button is clicked...

signInButton.addEventListener('click', () => {
    console.log('the sign in button was clicked');
    signInForm();

    const authorize = document.getElementById('authorize');

    authorize.addEventListener('click', (event) => {
        event.preventDefault();
        // POST to server for authentication

        if (authentication === true) {
            // route to next page (choose a design page)
        } else {
            signInForm();
            // append "incorrect username or password" message 
        }
    })
})