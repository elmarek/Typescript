// import React from "react";
import "./App.css";
const db = require("./database/db.js");

db.find({}, (error: any, results: any) => {
  if (error) {
    throw error;
  } else {
    console.log(results);
  }
});

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}
// cmon plz
export default App;
