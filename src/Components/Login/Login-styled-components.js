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

export const DivContainer = styled.div`
width: 600px;
height: 220px;
background: rgb(60, 62, 68);
border-radius: 0.5rem;
box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;
text-align: center;

@media screen and (max-width: 600px) {
    width: 390px;
    text-align: center;
}
`;

export const Input = styled.input`
width: 400px;
height: 30px;
margin-top: 30px;

@media screen and (max-width: 600px) {
    width: 200px;
}
`;

export const Button = styled.button`
color: rgb(255, 255, 255);
border: 2px solid rgb(255, 152, 0);
width: 250px;
height: 50px;
font-size: 25px;
margin-top: 20px;
border-radius: 10px;
padding-left: 10px;
background-color: rgb(60, 62, 68);

&:hover {
    background-color: rgb(255, 152, 0);
`;

// -600 se rompe el responsive