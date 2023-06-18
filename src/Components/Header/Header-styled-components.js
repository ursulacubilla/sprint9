import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
margin: 0px auto;
min-height: 60px;
padding: 0px 10px;
background-color: rgb(60, 62, 68);
width: 90%;
`;

export const Ul = styled.ul`
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
padding: 30px;
margin: 0px;
`;

export const Li = styled.li`
list-style: none;
margin-left: 20px;
color: white;
`;

export const LinkStyled = styled(Link)`
text-decoration: none;
color: rgb(255, 255, 255);
border: 1px solid rgb(255, 152, 0);
width: 250px;
height: 90px;
margin-top: 10px;
border-radius: 10px;
padding: 5px;

&&:hover {
background-color: rgb(255, 152, 0);
}

@media screen and (max-width: 600px) {
    padding: 0;
    font-size: 12px;
}
`;