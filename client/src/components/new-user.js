import React from "react";

function Create() {

    return(
        <div>
            <title>
                Welcome! Create you account below.
            </title>
            {/* input full name */}
            <form name = "nameinput">
                <label fullname = "fullname">
                    <strong>
                        <input type = "text" name = "fullname">
                        </input>
                    </strong>
                </label>
            </form>
            {/* input username */}
            <form id = "usernameinput">
                <label for="username">
                    <strong>
                        Username:
                    </strong>
                    <input type="text" id="username"></input>
                </label>
            </form>
            {/* input password */}
            <form id = "passwordinput">
                <label for="password">
                    <strong>
                        Password:
                    </strong>
                    <input type="text" id="password"></input>
                </label>
            </form>
            {/* retype password (figure out how to compare them and display an error message if they don't match...) */}
            <form id = "retypepasswordinput">
                <label for="retypepassword">
                    <strong>
                        Confirm Password:
                    </strong>
                    <input type="text" id="password"></input>
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
                        Password:
                    </strong>
                    <input type="text" id="weight"></input>
                </label>
            </form>
            {/* what other items do we want with the account? */}

            <input type="submit" value="Submit"></input>
        </div>
    )
    
}

export default Create