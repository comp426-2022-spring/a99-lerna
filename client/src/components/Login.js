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
            } else {
                setLoginStatus("Login Successful")
            }
            console.log(res.data)
        })
    }

    return(
        <div>
            <h1>
                Login Here
            </h1>
            <form id = "usernameinput">
                <label>
                    <strong>
                        Username:
                    </strong>
                    <input type="text" id="username" onChange={(e) => {
                            setUser(e.target.value);
                        }}></input>
                </label>
            </form>
            <form id = "passwordinput">
                <label>
                    <strong>
                        Password:
                    </strong>
                    <input type="text" id="password" onChange={(e) => {
                            setPass(e.target.value);
                        }}></input>
                </label>
            </form>
            <input type="submit" value="Login" onClick = {login}></input>
            <p>
            <strong>
                {loginStatus}
            </strong>
            </p>
        </div>
    )

}

export default Login