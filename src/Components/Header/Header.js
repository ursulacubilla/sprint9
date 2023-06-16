import { Li, LinkStyled, Nav, Ul } from "./Header-styled-components";

export const Header = () => {
    return(
        <Nav>
            <Ul>
                <Li><LinkStyled to="Welcome">WELCOME</LinkStyled></Li>
                <Li><LinkStyled to="Aplication">CHARACTERS</LinkStyled></Li>
                <Li><LinkStyled to="Login">LOGIN</LinkStyled></Li>
                <Li><LinkStyled to="Register">REGISTER</LinkStyled></Li>
            </Ul>
        </Nav>
      
    );
}