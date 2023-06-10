import { useEffect, useState } from "react";
import axios from 'axios';
import { Article, Div, DivContainer, DivImg, Section } from "./Aplication-styled-components";
import { Link } from "react-router-dom";


export const Application = () => {
    const [characters, setCharacters] = useState();

    const fetchData = () => {
        return axios.get('https://rickandmortyapi.com/api/character')
            .then((response) => {
                const ruta = response.data.results.map((item) => {
                    item.route = '/episodes/' + item.id;
                    return item;
                })
                console.log("Ruta", ruta);
                setCharacters(ruta);
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
                                    <p>Species: <em>{charactersObj.species}</em></p>
                                    <p>Gender: <em>{charactersObj.gender}</em></p>
                                    <p>Status: <em>{charactersObj.status}</em></p>
                                    {/* <p>Last known location: <em>{charactersObj.location.name}</em></p> */}
                                </div>
                               
                                    <Link to={charactersObj.route}>Ver Episodios</Link>

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