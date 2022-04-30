import React from "react";
import Axios from "axios";

function Login() {

    const [user, setUser] = React.useState("");
    const [pass, setPass] = React.useState("");   
    const [height, setHeight] = React.useState("");
    const [weight, setWeight] = React.useState("");
    const [weeks, setWeeks] = React.useState("");
    const [goal, setGoal] = React.useState("");

    const [loginStatus, setLoginStatus] = React.useState(""); 

    const [updater, setUpdater] = React.useState(""); 

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
                setNew("")
            }
            console.log(res.data)
            setHeight(res.data.height)
            setWeight(res.data.weight)
            setWeeks(res.data.weeks)
            setGoal(res.data.goal)
        })
    }


    const [userCreate, setUserCreate] = React.useState("");
    const [passCreate, setPassCreate] = React.useState("");
    const [heightCreate, setHeightCreate] = React.useState("");
    const [weightCreate, setWeightCreate] = React.useState("");
    const [weeksCreate, setWeeksCreate] = React.useState("");
    const [goalCreate, setGoalCreate] = React.useState("");
    const [newAccount, setNew] = React.useState("");

    const create = () => {
        Axios.post('/app/new/user', 
        {
            username: userCreate,
            password: passCreate,
            height: heightCreate,
            weight: weightCreate,
            weeks: weeksCreate,
            goal: goalCreate,
        }).then((res) => {
            setNew("Account Created, Login Above!")
            console.log(res)
        })
        };


        const deleteAcc = () => {
            Axios.post('/app/delete/user', 
            {
                username: user,
            }).then((res) => {
                console.log(res.data)
                setLoginStatus("")
            })
        }

    const update = () => {
        Axios.post('/app/update/user', 
        {   
            username: user,
            password: passCreate,
            height: heightCreate,
            weight: weightCreate,
            weeks: weeksCreate,
            goal: goalCreate,
        }).then((res) => {
            setUpdater("Information Updated")
            console.log(res.data)
            setPass(passCreate)
            setHeight(heightCreate)
            setWeight(weightCreate)
            setWeeks(weeksCreate)
            setGoal(goalCreate)
        })
    }

    if(loginStatus == "Login Successful") {
        return (
        <>
        <div>
        <h1>
            Recommended Exercise:
        </h1>
        <p>
            NEED ALGORITHM TO DETERMINE
        </p>
        </div>

        <div>
            <h1>
                Update User Info:
            </h1>
            <strong>
                Old Password: {pass}
            </strong>
            {/* input password */}
            <form id = "passwordinput">
                <label for="password">
                    <strong>
                        New Password:
                    </strong>
                    <input type="text" id="password" onChange={(e) => {
                            setPassCreate(e.target.value);
                        }}></input>
                </label>
            </form>
            <strong>
                Old Height: {height}
            </strong>
            {/* input height */}
            <form id = "heightinput">
                <label for="height">
                    <strong>
                        New Height (inches):
                    </strong>
                    <input type="text" id="height" onChange={(e) => {
                            setHeightCreate(e.target.value);
                        }}></input>
                </label>
            </form>
            <strong>
                Old Weight: {weight}
            </strong>
            {/* input weight */}
            <form id = "weightinput">
                <label for="weight">
                    <strong>
                        New Weight (pounds):
                    </strong>
                    <input type="text" id="weight" onChange={(e) => {
                            setWeightCreate(e.target.value);
                        }}></input>
                </label>
            </form>
            <strong>
                Old # Weeks: {weeks}
            </strong>
            {/* what other items do we want with the account? */}
            <form id = "weeksinput">
                <label>
                    <strong>
                        New # Weeks?:
                    </strong>
                    <input type="radio" name = "weeks" value = "1 Week" onChange={(e) => {
                            setWeeksCreate(1);
                        }}></input>1 Week
                    <input type="radio" name = "weeks" value = "4 Weeks" onChange={(e) => {
                            setWeeksCreate(4);
                        }}></input>4 Weeks
                    <input type="radio" name = "weeks" value = "26 Weeks" onChange={(e) => {
                            setWeeksCreate(26);
                        }}></input>26 Weeks
                    <input type="radio" name = "weeks" value = "52 Weeks" onChange={(e) => {
                            setWeeksCreate(52);
                        }}></input>52 Weeks
                </label>
            </form>
            <strong>
                Old Goal: {goal}
            </strong>
            <form id = "goalinput">
                <label>
                    <strong>
                        What is Your Goal?:
                    </strong>
                    <input type="radio" name="goal" value = "Bulk" onChange={(e) => {
                            setGoalCreate("bulk");
                        }}></input>Bulk
                    <input type="radio" name="goal" value = "Cut" onChange={(e) => {
                            setGoalCreate("cut");
                        }}></input>Cut
                    <input type="radio" name="goal" value = "Maintain" onChange={(e) => {
                            setGoalCreate("maintain");
                        }}></input>Maintain
                </label>
            </form>
            <input type="submit" value="Submit" onClick={update}></input>
        </div>
            <strong>
                {updater}
            </strong>

        <div>
        <input type="submit" value="Delete Account" onClick = {deleteAcc}></input>
        </div>

        </>
        )
    } else {

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

            <h1>
                Don't have an account? Create one below!
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
                        Height (inches):
                    </strong>
                    <input type="text" id="height" onChange={(e) => {
                            setHeightCreate(e.target.value);
                        }}></input>
                </label>
            </form>
            {/* input weight */}
            <form id = "weightinput">
                <label for="weight">
                    <strong>
                        Weight (pounds):
                    </strong>
                    <input type="text" id="weight" onChange={(e) => {
                            setWeightCreate(e.target.value);
                        }}></input>
                </label>
            </form>
            {/* what other items do we want with the account? */}
            <form id = "weeksinput">
                <label>
                    <strong>
                        How Many Weeks?:
                    </strong>
                    <input type="radio" name = "weeks" value = "1 Week" onChange={(e) => {
                            setWeeksCreate(1);
                        }}></input>1 Week
                    <input type="radio" name = "weeks" value = "4 Weeks" onChange={(e) => {
                            setWeeksCreate(4);
                        }}></input>4 Weeks
                    <input type="radio" name = "weeks" value = "26 Weeks" onChange={(e) => {
                            setWeeksCreate(26);
                        }}></input>26 Weeks
                    <input type="radio" name = "weeks" value = "52 Weeks" onChange={(e) => {
                            setWeeksCreate(52);
                        }}></input>52 Weeks
                </label>
            </form>
            <form id = "goalinput">
                <label>
                    <strong>
                        What is Your Goal?:
                    </strong>
                    <input type="radio" name="goal" value = "Bulk" onChange={(e) => {
                            setGoalCreate("bulk");
                        }}></input>Bulk
                    <input type="radio" name="goal" value = "Cut" onChange={(e) => {
                            setGoalCreate("cut");
                        }}></input>Cut
                    <input type="radio" name="goal" value = "Maintain" onChange={(e) => {
                            setGoalCreate("maintain");
                        }}></input>Maintain
                </label>
            </form>
            <input type="submit" value="Submit" onClick={create}></input>
            <p>
            <strong>
                {newAccount}
            </strong>
            </p>
        </div>
    )
}

}

export default Login