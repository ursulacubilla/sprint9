import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Article, Div, DivContainer, DivImg, Section } from "./styled-components";

export const Application = () => {
    const [characters, setCharacters] = useState();

    const fetchData = () => {
        return axios.get('https://rickandmortyapi.com/api/character')
            .then((response) => {
                setCharacters(response.data.results);
                console.log(response.data.results);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1>Rick and Morty</h1>
            <section>
            {characters && characters.length > 0 && characters.map((charactersObj, index) => (

                    <DivContainer>
                        <Article to={charactersObj.route} className='App-link' onClick={() => console.log("Click", characters)}>
                            <DivImg>
                                {/* imagen */}
                            </DivImg>
                            <Div >
                                <div>
                                {charactersObj.name}
                                <p>{charactersObj.species}</p>
                                </div>

                                <div>
                                   <p>Last known location: <em>{charactersObj.location.name}</em></p> 
                                </div>
                                
                            </Div>

                        </Article>
                    </DivContainer>

))}
</section>
        </>
    );
}