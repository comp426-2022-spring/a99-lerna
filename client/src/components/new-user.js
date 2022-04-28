import React from "react";
import Axios from "axios";

function Create() {

    const [userCreate, setUserCreate] = React.useState("");
    const [passCreate, setPassCreate] = React.useState("");

    const create = () => {
        Axios.post('/app/new/user', 
        {
            username: userCreate,
            password: passCreate,
        }).then((res) => {
            console.log(res)
        })
        };

    return(
        <div>
            <h1>
                Don't have an account? Create one below.
            </h1>
            {/* input username */}
            <form id = "usernameinput">
                <label for="username">
                    <strong>
                        Username:
                    </strong>
                    <input type="text" id="username" onChange={(e) => {
                            setUserCreate(e.target.value);
                        }}></input>
                </label>
            </form>
            {/* input password */}
            <form id = "passwordinput">
                <label for="password">
                    <strong>
                        Password:
                    </strong>
                    <input type="text" id="password" onChange={(e) => {
                            setPassCreate(e.target.value);
                        }}></input>
                </label>
            </form>
            {/* input height */}
            <form id = "heightinput">
                <label for="height">
                    <strong>
                        Height
                    </strong>
                    <input type="text" id="height"></input>
                </label>
            </form>
            {/* input weight */}
            <form id = "weightinput">
                <label for="weight">
                    <strong>
                        Weight:
                    </strong>
                    <input type="text" id="weight"></input>
                </label>
            </form>
            {/* what other items do we want with the account? */}

            <input type="submit" value="Submit" onClick={create}></input>
        </div>
    )
    
}

export default Create