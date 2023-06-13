import { useState } from "react";
import { Banner } from "../Banner/Banner";
import { DivContainer, Input, Main, Paragraph } from "./Register-styled-components";


export const Register = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState(0);

    function handleUser(e) {
        setUser(e.target.value);
    };
    function handlePassword(e) {
        setPassword(e.target.value);
    };
    function handleOnClickRegister(e) {
        localStorage.setItem('user', user);
        localStorage.setItem('password', password);
        console.log('localStorage', localStorage);
    }
    return (
        <>
            <Banner />
               <Paragraph>Registrate Gratis!!!</Paragraph>
            <Main>
                <DivContainer>
                    <Input placeholder="User" onChange={handleUser}></Input>
                    <Input placeholder="Password" onChange={handlePassword}></Input>
            <br></br>
                    <button onClick={handleOnClickRegister}>Register</button>
                </DivContainer>
            </Main>
        </>
    );
}