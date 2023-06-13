import { Article, Div, DivContainer, DivImg, DivTitle, ImgHeader, Section } from "./Aplication-styled-components";
import { Link } from "react-router-dom";
import { Banner } from "../Banner/Banner";




export const Body = ({ characters }) => {
   
    
    return (
        <>
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
            {/* {next !== null && <button onClick={handleOnClick}>View More</button> } */}
            </>
    );
}