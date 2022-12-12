import {BrowserRouter, Link} from "react-router-dom";
import {Routes} from "./Routes"

const HomeTown = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Routes />
    </BrowserRouter>
  );
}

export default HomeTown;
