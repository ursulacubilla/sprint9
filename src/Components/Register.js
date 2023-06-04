import { useState } from "react";


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
        console.log('localStorage',localStorage);
    }
    return(
        <>
        <input placeholder="User" onChange={handleUser}></input>
        <input placeholder="Password" onChange={handlePassword}></input>
        
        <button onClick={handleOnClickRegister}>Register</button>
        </>
    );
}