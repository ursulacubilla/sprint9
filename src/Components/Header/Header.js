import { Li, LinkStyled, Nav, Ul } from "./Header-styled-components";
import { useContext } from 'react';
import { AuthenticationContext } from '../../authentication';



export const Header = () => {
    const { isLoggedIn, logOut } = useContext(AuthenticationContext);

    return (
        <Nav>
            <Ul>
                <Li><LinkStyled to="/">WELCOME</LinkStyled></Li>
                {isLoggedIn && <>
                    <Li><LinkStyled to="Aplication">CHARACTERS</LinkStyled></Li>
                    <Li onClick={logOut}><LinkStyled to='#'>LOG OUT</LinkStyled></Li>
                </>}

                {!isLoggedIn && <>
                    <Li><LinkStyled to="Login">LOGIN</LinkStyled></Li>
                    <Li><LinkStyled to="Register">REGISTER</LinkStyled></Li>
                </>}
            </Ul>
        </Nav>

    );
}