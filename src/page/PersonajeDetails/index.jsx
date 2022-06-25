import React, { useState, useEffect } from "react";
import { fetchData } from "../../utils/fetchData";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../../components/Card";
import "./personajeDetails.css";
import "../Home/home.css";

function PersonajeDetails() {
  const [personaje, setPersonaje] = useState([]);
  const [comics, setComics] = useState([]);
  const params = useParams();
  const [page, setPage] = useState(1);
  const [hashMore, setHashMore] = useState(true);

  const fetchAPI = async () => {
    const { data } = await fetchData(
      `https://gateway.marvel.com/v1/public/characters/${params.id}?`
    );
    // const comics= await
    setPersonaje(data.results);
  };

  const fetchComics = async () => {
    const { data } = await fetchData(
      `https://gateway.marvel.com/v1/public/characters/${params.id}/comics?`
    );
    // const comics= await
    setComics(data.results);
  };

  const fetchDataComics = async () => {
    setPage((pre) => pre + 1);
    const { data } = await fetchData(
      `https://gateway.marvel.com/v1/public/characters/${params.id}/comics?`,
      page
    );
    setComics([...comics, ...data.results]);
  };
  useEffect(() => {
    fetchAPI();
    fetchComics();
  }, []);
  console.log(comics);
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      {personaje.length > 0 && (
        <div className="containerDetails">
          <img
            src={`${personaje[0].thumbnail.path}.${personaje[0].thumbnail.extension}`}
            alt="qw"
          />
          <div className="containerDetails_description" id="scroll">
            <h1 style={{margin: '0 auto', fontSize:'25px'}}><strong>{personaje[0].name}</strong></h1>
            {personaje[0].description ? (
              <p>{personaje[0].description}</p>
            ) : (
              "..."
            )}

            {/* {comics.length > 0 && ( */}
            <InfiniteScroll
              className="contenedorapp"
              scrollableTarget="scroll"
              dataLength={comics.length} //This is important field to render the next data
              next={fetchDataComics}
              hasMore={hashMore}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {comics.map((element) => (
                <Card
                  key={element.id}
                  image={element.thumbnail}
                  title={element.title}
                  description={element.description}
                  id={element.id}
                />
              ))}
            </InfiniteScroll>
            {/* )} */}
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonajeDetails;
