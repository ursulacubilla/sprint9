import { useState, useEffect } from "react";
import axios from "axios";

export const Episode = () => {
    const [episode, setEpisode] = useState();

    const fetchDataEpisode = () => {
        return axios.get('https://rickandmortyapi.com/api/episode')
        .then((response) => {
            setEpisode(response.data.results);
            console.log(response.data.results);
        });
    }

    useEffect(() => {
        fetchDataEpisode();
    }, []);

    return(
       <>
       <h1>Rick and Morty</h1>
       <section>
        {episode && episode.length > 0 && episode.map((episodesObj, index) => (
            <div key={index}>
                {console.log(episodesObj)}
                <article>
                    {episodesObj.name}
                    <p>{episodesObj.episode}</p>
                    <p>{episodesObj.air_date}</p>
                </article>
            </div>
        ) )}
       </section>
       </>
    );
}