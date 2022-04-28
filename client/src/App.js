import React from 'react';
import './App.css';
import Login from "./components/Login.js"
import Create from "./components/new-user.js"

function App() {

  const [data, setData] = React.useState(null);
  const [data2, setData2] = React.useState(null);

  React.useEffect(() => {
    fetch("/app/user/user1")
    .then((res) => res.json())
    .then((data) => setData( data.weight));

  }, []);

  React.useEffect(() => {
    fetch("/app/user/user1")
    .then((res) => res.json())
    .then((data2) => setData2( data2.height));

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
        <p>{!data2 ? "Loading..." : data2}</p>
      </header>
    </div>
   
  );
}

export default App;
