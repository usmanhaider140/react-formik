import "./App.css";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto text-center">
          <img
            src="/easy-gift.png"
            alt="Easy Gift"
            className="img-fluid w-75 my-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
