import styled from "styled-components";

export const Main = styled.main`
height: 230px;
display: flex;
justify-content: center;

@media screen and (max-width: 600px) {
    display: block;
    margin: 0 auto;
    width: auto
}
`;

export const DivWelcome = styled.div`
width: 600px;
height: 220px;
background: rgb(60, 62, 68);
border-radius: 0.5rem;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
text-align: center;

@media screen and (max-width: 600px) {
    width: 360px;
    text-align: center;
}
`;

export const WelcomeP = styled.p`
margin: 80px 60px;
color: rgb(255, 255, 255);
margin-top: 80px;

@media screen and (max-width: 600px) {
    margin: 0 30px 0 30px;
    text-align: center;
    padding: 40px;
}
`; 