import styled from "styled-components";


export const DivTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
position: relative;
margin-bottom: 20px;
width: 100%;

@media screen and (max-width: 600px) {
    height: 100px;
}
`;
export const ImgHeader = styled.img`
max-width: 600px;
height: 100%;
fill: rgb(245, 245, 245);
`;