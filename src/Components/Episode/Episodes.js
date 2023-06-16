import { useState, useEffect } from "react";
import axios from "axios";
import { Div, Section, H1 } from './Episode-styled-components';
import { useParams } from "react-router-dom";
import { Banner } from "../Banner/Banner";


export const Episode = () => {
    const [episode, setEpisode] = useState();
    const { characterId } = useParams();



    function fetchEpisodes(idsEpisodes) {
        return axios.get('https://rickandmortyapi.com/api/episode/' + '[' + idsEpisodes + ']')
            .then((response) => {
                console.log("RespuestaAPI", response);
                setEpisode(response.data);
            })
    }
    function fetchDataEpisode() {
        return axios.get('https://rickandmortyapi.com/api/character/' + characterId)
            .then((response) => {
                console.log("1respuesta", response);
                // setEpisode(response.data);
                const result = response.data.episode.map((item) => {
                    const remplazo = item.replace('https://rickandmortyapi.com/api/episode/', '');
                    console.log("resplazo", remplazo);
                    return remplazo;
                })
                const idsEpisodes = result.join();
                console.log("Result", idsEpisodes);

                fetchEpisodes(idsEpisodes);
               
            });
    }


    useEffect(() => {
        fetchDataEpisode();
    }, []);

    console.log("Episode", episode);
    return (
        <>
            <Banner />
            <H1>Episode List</H1>
            <Section>

                {episode && episode.length > 0 && episode.map((episodesObj, index) => {
                    // console.log("episodeObj", episodesObj);
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





// Se pueden hacer mejoras en el codigo.!!!
