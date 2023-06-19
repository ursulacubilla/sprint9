import { useEffect, useState } from "react";
import axios from 'axios';
import { Article, Div, DivContainer, DivImg, Section, LinkStyled, Button } from "./Aplication-styled-components";
import { Banner } from "../Banner/Banner";


export const Application = () => {
    const [characters, setCharacters] = useState();
    const [next, setNext] = useState("");

    const fetchData = () => {
        return axios.get('https://rickandmortyapi.com/api/character')
            .then((response) => {
                setNext(response.data.info.next);
                const routeMap = response.data.results.map((item) => {
                    item.route = '/episodes/' + item.id;
                    return item;
                })
                setCharacters(routeMap);
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
                    item.route = '/episodes/' + item.id;
                    return item;
                }) 
                setCharacters([...characters,
                ...response.data.results,
            ])
        });
    }

    
    return (
        <>
       <Banner />
            <Section>
                {characters && characters.length > 0 && characters.map((charactersObj, index) => (

                    <DivContainer key={index}>
                        <Article to={charactersObj.route} className='App-link' onClick={() => {}}>
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
                                   <LinkStyled to={charactersObj.route}>Ver lista de episodios</LinkStyled>
                            </Div>
                        </Article>
                    </DivContainer>

                ))}
            </Section>
           
             {next !== null && <Button onClick={handleOnClick}>View More</Button> }
            </>
    );
}