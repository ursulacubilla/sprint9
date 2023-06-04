import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Article, Div, DivContainer, DivImg, Section } from "./Aplication-styled-components";


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
            <Section>
                {characters && characters.length > 0 && characters.map((charactersObj, index) => (

                    <DivContainer key={index}>
                        <Article to={charactersObj.route} className='App-link' onClick={() => console.log("charactersObject", charactersObj)}>
                            <DivImg>
                                <img src={charactersObj.image} />
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
            </Section>
        </>
    );
}

// width: 100%;
//     height: 100%;
//     margin: 0px;
//     opacity: 1;
//     transition: opacity 0.5s ease 0s;
//     object-position: center center;
//     object-fit: cover;
// }