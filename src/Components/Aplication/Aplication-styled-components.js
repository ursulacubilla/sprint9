import styled from "styled-components";
import { Link } from "react-router-dom";


export const Section = styled.section`
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
flex-wrap: wrap;
max-width: 1920px;
`;

export const DivContainer = styled.div`
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
flex-wrap: wrap;
max-width: 1920px;
`;

export const Article = styled.article` 
width: 600px;
height: 220px;
display: flex;
overflow: hidden;
background: rgb(60, 62, 68);
border-radius: 0.5rem;
margin: 0.75rem;
box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;
`;

export const DivImg = styled.div`
flex: 2 1 0%;
width: 100%;
`;

export const Div = styled.div`
flex: 3 1 0%;
position: relative;
padding: 0.75rem;
color: rgb(255, 255, 255);
display: flex;
flex-direction: column;
`;

export const LinkStyled = styled(Link)`
color: rgb(255, 255, 255);
text-decoration: none;
border: 1px solid rgb(255, 152, 0);
width: 150px;
height: 30px;
margin-left: 70px;
margin-top: 10px;
padding-top: 10px;
border-radius: 10px;
padding-left: 10px;

&:hover {
    background-color: rgb(255, 152, 0);
}
`;
export const Button = styled.button`
color: rgb(255, 255, 255);
border: 2px solid rgb(255, 152, 0);
width: 250px;
height: 50px;
font-size: 25px;
margin-left: calc(100% - 60%);
margin-top: 20px;
border-radius: 10px;
padding-left: 10px;
background-color: rgb(60, 62, 68);

&:hover {
    background-color: rgb(255, 152, 0);
`;