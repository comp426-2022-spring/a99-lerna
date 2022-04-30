import React from 'react';
import './App.css';
import Login from "./components/Login.js"

function App() {

  return (
  <div>
    <Login></Login>
  </div>
  );


  /*
  // Testing creating new user (SUCCESS)
  const formInfo = {
        username: "user2",
        password: "123"
  }

  React.useEffect(() => {
    fetch("/app/new/user", {
      method: "POST",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(formInfo)
    })
    .then((res) => res.json())
    .then((d) => console.log(d));
  }, [])


  // Testing changing info (FAIL)

  const formInfo2 = {
    password: "234"
  }

  React.useEffect(() => {
  fetch("/app/update/user/user2", {
    method: "PATCH",
   headers: {
     'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Content-type': "application/json"
    },
    body: JSON.stringify(formInfo2)
  })
  .then((res) => res.json())
  .then((d1) => console.log(d1));
  }, []);


  // Testing recieving user info (SUCCESS)
  const [data, setData] = React.useState(null);
  const [data2, setData2] = React.useState(null);

  React.useEffect(() => {
    fetch("/app/user/user1")
    .then((res) => res.json())
    .then((data) => setData( data.weight));

  }, []);

  React.useEffect(() => {
    fetch("/app/user/user2")
    .then((res) => res.json())
    .then((data2) => setData2( data2.password));

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
        <p>{!data2 ? "Loading..." : data2}</p>
      </header>
    </div>
   
  );
  */
}

export default App;
