import "./App.css";

import { format } from "date-fns";

function App() {
  // format(new Date(2014, 1, 11), "PPpp");

  const date = new Date();
  const dateNew = format(date, "d.mm.y H:mm");

  const helloWorld = "Hello world!";
  const helloWorldh1 = <h1>Hello World</h1>;

  const name = {
    firstName: "aidyn",
    lastName: "sairan",
  };

  const getUserName = ({ firstName, lastName }) => {
    return `My name is ${firstName} and my family name ${lastName}`;
  };

  const divStyle = {
    backgroundColor: "aqua",
    fontSize: "2rem",
  };

  return (
    <div className="container-fluid d-flex flex-column main header">
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <i class="icon bi bi-wrench-adjustable-circle"></i>
        </a>
        <div>
          <h1 className="date">{dateNew}</h1>
        </div>
      </nav>
      <div className="main container-fluid d-flex  flex-column flex-lg-row">
        <div className="img1 img container-fluid container-lg d-flex flex-row justify-content-center align-items-center">
          <h1 className="hey">HEY</h1>
        </div>
        <div className="img2 img container-fluid container-lg d-flex flex-row justify-content-center align-items-center">
          <h1>LET'S</h1>
        </div>
        <div className="img3 img container-fluid container-lg d-flex flex-row justify-content-center align-items-center">
          <h1>GIVE</h1>
        </div>
        <div className="img4 img container-fluid container-lg d-flex flex-row justify-content-center align-items-center">
          <h1>ALL</h1>
        </div>
        <div className="img5 img container-fluid container-lg d-flex flex-row justify-content-center align-items-center">
          <h1>YOU CAN</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
