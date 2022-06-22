import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME_ROUTE, PERSONAJE_DETAILS } from "../../Constants/Routes";
import Home from "../../page/Home";
import PersonajeDetails from "../../page/PersonajeDetails";

function Mainrouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route
          path={`${PERSONAJE_DETAILS}/:id`}
          element={<PersonajeDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Mainrouter;
