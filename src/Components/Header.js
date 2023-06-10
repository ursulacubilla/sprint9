import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <nav>
            <ul>
                <li><Link to="Aplication">CHARACTERS</Link></li>
                {/* <li><Link to="Episodes">EPISODES</Link></li> */}
                <li><Link to="Login">LOGIN</Link></li>
                <li><Link to="Register">REGISTER</Link></li>
            </ul>
        </nav>
      
    );
}