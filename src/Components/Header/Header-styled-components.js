import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
margin: 0px auto;
max-width: 100%;
min-height: 60px;
padding: 0px 1.5rem;
background-color: rgb(60, 62, 68);
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
// font-weight: 700;
border: 1px solid rgb(255, 152, 0);
width: 250px;
height: 90px;
margin-top: 10px;
border-radius: 10px;
padding: 10px;

&&:hover {
background-color: rgb(255, 152, 0);
}
`;