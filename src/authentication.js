import { createContext, useContext } from 'react';
import { Login } from './Components/Login/Login';

const state = {
    logIn: () => {},
    logOut: () => {},
    isLoggedIn: false,
};

export const AuthenticationContext = createContext(state);

export const Authentication = (props) => {
    const { isLoggedIn } = useContext(AuthenticationContext);

    if (isLoggedIn) {
        return <>{props.children}</>
    }

    return <Login />;
};