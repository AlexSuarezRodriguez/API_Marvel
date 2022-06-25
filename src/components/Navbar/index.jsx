import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [login, setlogin] = useState([]);
  // const [changeNav,setChangeNav] = useState(false)
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setlogin([JSON.parse(localStorage.getItem("token"))]);
    }
  }, []);
  return (
    <div className="navbar">
      <strong className="nav-logo">MARVEL</strong>
      {login.length > 0 && (
        <>
          <p>{login[0].name}</p>
          <div className="nav-items">
            <Link to="/home">Home</Link>
            <button
              type="button"
              onClick={handleLogout}
              style={{
                background: "red",
                padding: "0px 10px",
                borderRadius: "4px",
              }}
            >
              Cerrar Sesion
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
