import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME_ROUTE, PERSONAJE_DETAILS, HOME_PERSONAJES } from "../../Constants/Routes";
import Home from "../../page/Home";
import PersonajeDetails from "../../page/PersonajeDetails";
import Login from "../../page/Login"
import Navbar from "../Navbar";

function Mainrouter() {
  return (
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path={HOME_ROUTE} element={<Login />} />
        <Route path={HOME_PERSONAJES} element={<Home />} />
        <Route
          path={`${PERSONAJE_DETAILS}/:id`}
          element={<PersonajeDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Mainrouter;
