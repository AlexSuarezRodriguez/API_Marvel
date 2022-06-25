import "./home.css";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";

function Home() {
  const [personajes, setPersonajes] = useState([]);
  const [page, setPage] = useState(1);
  const [hashMore, setHashMore] = useState(true);

  const fetchDataPersonajes = async () => {
    setPage((pre) => pre + 1);
    const { data } = await fetchData(
      "https://gateway.marvel.com/v1/public/characters?",
      page
    );
    setPersonajes([...personajes, ...data.results]);
    if (data.results.length === 0 || data.results.length < 20) {
      setHashMore(false);
    }
  };

  const fetchAPI = async () => {
    const { data } = await fetchData(
      "https://gateway.marvel.com/v1/public/characters?",
      0
    );
    setPersonajes(data.results);
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <InfiniteScroll
          className="contenedorapp"
          dataLength={personajes.length} //This is important field to render the next data
          next={fetchDataPersonajes}
          hasMore={hashMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {personajes.map((element) => (
            <Card
              key={element.id}
              image={element.thumbnail}
              name={element.name}
              description={element.description}
              id={element.id}
            />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}

export default Home;
