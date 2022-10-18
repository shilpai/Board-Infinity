import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Productpage from "./component/Productpage";
import Cartpage from "./component/Cartpage";
import SubPagepizza from "./component/SubPagepizza";
import Subpageburger from "./component/Subpageburger";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Routes>
          <Route exact path="/" element={<Productpage />} />
          <Route exact path="/burger" element={<Subpageburger />} />
          <Route exact path="/pizza" element={<SubPagepizza />} />
          <Route exact path="/carts" element={<Cartpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
