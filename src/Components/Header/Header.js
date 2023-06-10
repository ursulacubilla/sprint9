import { Link } from "react-router-dom";
import { Li, Nav, Ul } from "./Header-styled-components";

export const Header = () => {
    return(
        <Nav>
            <Ul>
                <Li><Link to="Aplication">CHARACTERS</Link></Li>
                {/* <li><Link to="Episodes">EPISODES</Link></li> */}
                <Li><Link to="Login">LOGIN</Link></Li>
                <Li><Link to="Register">REGISTER</Link></Li>
            </Ul>
        </Nav>
      
    );
}