import "./home.css";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import Card from "../../components/Card";

function Home() {
  const [personajes, setPersonajes] = useState([]);

  const fetchAPI = async () => {
    const { data } = await fetchData(
      "http://gateway.marvel.com/v1/public/characters?"
    );
    setPersonajes(data.results);
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div className="contenedorapp">
      {personajes.map((element) => (
        <Card
          key={element.id}
          image={element.thumbnail}
          name={element.name}
          description={element.description}
          id={element.id}
        />
      ))}
    </div>
  );
}

export default Home;
