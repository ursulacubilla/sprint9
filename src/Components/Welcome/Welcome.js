import { Banner } from "../Banner/Banner";
import { DivWelcome, Main, WelcomeP } from "./Welcome-styled-components";

export const Welcome = () => {
    return (
        <>
        <Banner />
        <Main>
        <DivWelcome>
            <WelcomeP>En esta App podras ver todos los personajes(Characters) de Rick and Morty. Para ello sólo tienes que registrarte, loguearte y podras acceder a los personajes y lista de capitulos en los que aparece.!</WelcomeP>
            </DivWelcome>
            </Main>
        </>
    );
}