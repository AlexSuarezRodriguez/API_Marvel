import "./App.css";
import { useEffect } from "react";
import { fetchData } from "./utils/fetchData";

function App() {
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchData(
        "http://gateway.marvel.com/v1/public/characters?"
      );
      console.log(data);
    };
    fetchAPI();
  }, []);
  return <div className="App">hola</div>;
}

export default App;
