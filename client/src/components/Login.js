import React from "react";
import Axios from "axios";

function Login() {

    const [user, setUser] = React.useState("");
    const [pass, setPass] = React.useState("");   

    const [loginStatus, setLoginStatus] = React.useState(""); 

    const login = () => {
        Axios.post('/app/login', 
        {
            username: user,
            password: pass,
        }).then((res) => {

            if(res.data.message){
                setLoginStatus(res.data.message)
            }
            console.log(res.data)
        })
    }

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
                    <input type="text" id="username" onChange={(e) => {
                            setUser(e.target.value);
                        }}></input>
                </label>
            </form>
            <form id = "passwordinput">
                <label for="password">
                    <strong>
                        Password:
                    </strong>
                    <input type="text" id="password" onChange={(e) => {
                            setPass(e.target.value);
                        }}></input>
                </label>
            </form>
            <input type="submit" value="Login" onClick = {login}></input>

            <h1>
                {loginStatus}
            </h1>
        </div>
    )

}

export default Login