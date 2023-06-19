import { useState } from "react";
import { Banner } from "../Banner/Banner";
import { Button, DivContainer, Input, Main, Paragraph } from "./Register-styled-components";


export const Register = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleUser(e) {
        setUser(e.target.value);
    };
    function handlePassword(e) {
        setPassword(e.target.value.toString());
    };
    function handleOnClickRegister(e) {
        localStorage.setItem('userRegister', user);
        localStorage.setItem('passwordRegister', password.toString());
        
        
        console.log('localStorage', localStorage);
        
        setUser('');
        setPassword('');

        alert("Tu registro se ha completado exitosamente!!!");
    }



    return (
        <>
            <Banner />
               <Paragraph>Registrate Gratis!!!</Paragraph>
            <Main>
                <DivContainer>
                    <Input value={user} placeholder="User" onChange={handleUser}></Input>
                    <Input value={password} type="password" placeholder="Password" onChange={handlePassword}></Input>
            <br></br>
                    <Button onClick={handleOnClickRegister}>Register</Button>
                </DivContainer>
            </Main>
        </>
    );
}