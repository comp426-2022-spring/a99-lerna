import React from "react";
import Axios from "axios";

function Login() {

    return(
        <div>
            <h1>
                Already Have an Account? Login Here.
            </h1>
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