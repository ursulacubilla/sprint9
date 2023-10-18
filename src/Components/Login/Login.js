import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Banner } from "../Banner/Banner";
import { Button, DivContainer, Input, Main } from "./Login-styled-components";
import { AuthenticationContext } from '../../authentication';

export const Login = () => {
    const { logIn } = useContext(AuthenticationContext);
    const navigate = useNavigate();
    const [user1, sertUser1] = useState('');
    const [password1, setPassword1] = useState('');

    function handleUser1(e) {
        sertUser1(e.target.value);
    };
    function handlePassword1(e) {
        setPassword1(e.target.value);
    };
    function handleOnClickLogin() {
        const localStorageUser = localStorage.getItem('userRegister');
        const localStoragePassword = localStorage.getItem('passwordRegister');

        const result = user1 === localStorageUser && password1 === localStoragePassword ? "Password y contraseña, valido!" : "Password o contraseña, invalido!";
        
        alert(user1 === localStorageUser && password1 === localStoragePassword ? "Password y contraseña, valido!" : "Password o contraseña, invalido!");
        
        if(result === "Password y contraseña, valido!") {
            logIn();
            navigate("/Aplication");
            sertUser1('');
            setPassword1('');
        }

    }
    

    return (
        <>
            <Banner />
            <Main>
            <DivContainer>
                <Input value={user1} placeholder="User" onChange={handleUser1}></Input>
                
                <Input value={password1} type="password" placeholder="Password" onChange={handlePassword1}></Input>
                <br></br>
                <Button onClick={handleOnClickLogin}>Login</Button>
            </DivContainer>
            </Main>

        </>
    );
}