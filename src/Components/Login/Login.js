import { useState } from "react";

export const Login = ({ user, password }) => {
    const [user1, sertUser1] = useState('');
    const [password1, setPAssword1] = useState(0);

    function handleUser1(e) {
        sertUser1(e.target.value);
    };
    function handlePassword1(e) {
        setPAssword1(e.target.value);
    };
    function handleOnClickLogin() {
       const localStorageUser = localStorage.getItem('user', user);
       const localStoragePassword = localStorage.getItem('password', password);
       
       const result = user1 === localStorageUser && password1 === localStoragePassword ? "Password y contraseña, valido!" : "Password o contraseña, invalido!";

       console.log("Resultado:", result);
    }
    return(
        <>
        <input placeholder="User" onChange={handleUser1}></input>
       <input placeholder="Password" onChange={handlePassword1}></input>

       <button onClick={handleOnClickLogin}>Login</button>
        </>
    );
}