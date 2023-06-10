import { useState, useEffect } from "react";
import axios from "axios";
import { Div, Section } from './Episode-styled-components';
import { useParams } from "react-router-dom";


export const Episode = () => {
    const [episode, setEpisode] = useState();
    const { characterId } = useParams();

    // console.log("ID", characterId);


    function fetchEpisodes(idsEpisodes) {
        return axios.get('https://rickandmortyapi.com/api/episode/' + idsEpisodes)
            .then((response) => {
                setEpisode(response.data);
            })
    }
    function fetchDataEpisode() {
        return axios.get('https://rickandmortyapi.com/api/character/' + characterId)
            .then((response) => {
                setEpisode(response.data);
                // console.log("Hola",response.data);
                const result = response.data.episode.map((item) => {
                    // console.log("ITEM", item)
                    const remplazo = item.replace('https://rickandmortyapi.com/api/episode/', '');
                    //    console.log("item", remplazo);
                    return remplazo;
                })
                const idsEpisodes = result.join();

                fetchEpisodes(idsEpisodes);
                // setEpisode(join);

                // console.log("join", join);
            });
    }
    //  console.log("episode", episode);


    useEffect(() => {
        fetchDataEpisode();
    }, []);

    console.log("Episode", episode);
    return (
        <>
            <h1>Rick and Morty</h1>
            <Section>

                {episode && episode.length > 0 && episode.map((episodesObj, index) => {
                    console.log("episodeObj", episodesObj);
                    return (
                        <div key={index} >
                            <Div>
                                <h4>{episodesObj.name}</h4>
                                <p>{episodesObj.episode}</p>
                                <p>{episodesObj.air_date}</p>
                            </Div>
                        </div>
                    )
                })}
            </Section>
        </>
    );
}



// 1 - crear la pagina que reciba el id del personaje,--------
// agregar link al character ------------
// 2 - hacer llamada api para obtener informacion de ese personaje incluidos los episodios en los que ese personaje aparece ----------
// 3 - hacer una transformacion del arreglo de episodios para extraer los ids de los episodios
// 4 - hacer la llamada a la api para obtener todos los episodios de ese personaje. (map y replace, algo parecido a lo que implementamos en el proyecto de las naves)

// "https://rickandmortyapi.com/api/episode/1"

// https://rickandmortyapi.com/api/character/2

// Se pueden hacer mejoras en el codigo.!!!
