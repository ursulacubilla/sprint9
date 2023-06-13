import { useEffect, useState } from "react";
// import '../App.css';
import axios from 'axios';
import { Article, Div, DivContainer, DivImg, DivTitle, ImgHeader, Section } from "./Aplication-styled-components";
import { Link } from "react-router-dom";
import { Banner } from "../Banner/Banner";
import { Body } from "./Body";




export const Application = () => {
    const [characters, setCharacters] = useState();
    const [next, setNext] = useState("");

    const fetchData = () => {
        return axios.get('https://rickandmortyapi.com/api/character')
            .then((response) => {
                setNext(response.data.info.next);
                const ruta = response.data.results.map((item) => {
                    item.route = '/episodes/' + item.id;
                    return item;
                })
                setCharacters(ruta);
            });
        }
        
        useEffect(() => {
            fetchData();
        }, []);
        
        function handleOnClick() {
            axios.get(next)
            .then((response) => {
                setNext(response.data.info.next);
                const nextMap = response.data.results.map((item) => {
                    item.route = item.url.replace('https://rickandmortyapi.com/api/character', '');
                    return item;
                })
                setCharacters([...characters,
                ...response.data.results,
            ])
        });
    }

    
    return (
        <>
        {/* <Body /> */}
       <Banner />
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
                                    
                                </div>
                               
                                   <Link to={charactersObj.route}>Ver lista de episodios</Link>

                            </Div>

                        </Article>
                    </DivContainer>

                ))}
            </Section>
           
             {next !== null && <button onClick={handleOnClick}>View More</button> }
            </>
    );
}

