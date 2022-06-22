import React,{useState,useEffect} from 'react'
import {fetchData} from '../../utils/fetchData'
import { useParams } from 'react-router-dom';

function PersonajeDetails() {
  const [personaje, setPersonaje] = useState([]);
  const params = useParams();

  const fetchAPI = async () => {
    const { data } = await fetchData(
      `http://gateway.marvel.com/v1/public/characters/${params.id}?`
    );
    setPersonaje(data.results);
  };
  console.log(personaje);
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div>index</div>
  )
}

export default PersonajeDetails