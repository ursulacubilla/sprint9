import { useState } from "react";
import { Banner } from "../Banner/Banner";
import { Button, DivContainer, Input, Main } from "./Login-styled-components";

export const Login = () => {
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
        
        console.log("localStorageUser", localStorageUser);
        console.log("localStoragePassword", localStoragePassword);

        // const localStorageLoginUser = localStorage.setItem('userLogin', user1);
        // const localStorageLoginPassword = localStorage.setItem('passwordLogin', password1);

        const result = user1 === localStorageUser && password1 === localStoragePassword ? "Password y contraseña, valido!" : "Password o contraseña, invalido!";

        console.log("Resultado:", result);

        
        alert(user1 === localStorageUser && password1 === localStoragePassword ? "Password y contraseña, valido!" : "Password o contraseña, invalido!");
        
        if(result === "Password y contraseña, valido!") {
            sertUser1('');
            setPassword1('');
        }

        // console.log("localStorageLoginUser", localStorage);
        // console.log("localStorageLoginPassword", localStorageLoginPassword);
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