import styled from "styled-components";


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

export const LinkA = styled.a`
color: white;
`;


// Link
 /* a:-webkit-any-link {
    color: white;
    cursor: pointer;
    text-decoration: none;
} */