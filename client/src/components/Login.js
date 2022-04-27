import React from "react";

function Login() {

    return(
        <div>
            <title>
                Login Page
            </title>
            <form id = "usernameinput">
                <label for="username">
                    <strong>
                        Username:
                    </strong>
                    <input type="text" id="username"></input>
                </label>
            </form>
            <form id = "passwordinput">
                <label for="password">
                    <strong>
                        Password:
                    </strong>
                    <input type="text" id="password"></input>
                </label>
            </form>
            <input type="submit" value="Login"></input>
            <input type="submit" value="Create Account"></input>
        </div>
    )

}

export default Login