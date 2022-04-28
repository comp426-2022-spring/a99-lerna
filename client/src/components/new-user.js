import React from "react";
import Axios from "axios";

function Create() {

    const [userCreate, setUserCreate] = React.useState("");
    const [passCreate, setPassCreate] = React.useState("");
    const [heightCreate, setHeightCreate] = React.useState("");
    const [weightCreate, setWeightCreate] = React.useState("");
    const [weeksCreate, setWeeksCreate] = React.useState("");
    const [goalCreate, setGoalCreate] = React.useState("");

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
                    <input type="text" id="height" onChange={(e) => {
                            setHeightCreate(e.target.value);
                        }}></input>
                </label>
            </form>
            {/* input weight */}
            <form id = "weightinput">
                <label for="weight">
                    <strong>
                        Weight:
                    </strong>
                    <input type="text" id="weight" onChange={(e) => {
                            setWeightCreate(e.target.value);
                        }}></input>
                </label>
            </form>
            {/* what other items do we want with the account? */}
            <form id = "weightinput">
                <label for="weight">
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
            <form id = "weightinput">
                <label for="weight">
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
        </div>
    )
    
}

export default Create