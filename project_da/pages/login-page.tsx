import React, { useState } from "react";
import Navbar from "../component/Navbar";
import * as data from '../component/links.json';

const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
    label: string;
    href: string;
};

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
    return (
        <div className='links-container'>
            {links.map((link: Link) => {
                return (
                    <div key={link.href} className='link'>
                        <a href={link.href}>
                            {link.label}
                        </a>
                    </div>
                )
            })}
        </div>
    )
};
const LoginPage = () => {

    const[{username, password}, setCredential] = useState({
        username: '',
        password: '',
    })
    return(
        <div>
        <Navbar />
        <div className="formulaire">
            <span className="login-phrase">Login</span>
            <br />
            <br />
            <br />
            <br />
        <form className="login">
            <label htmlFor="username"> username</label>
            <input placeholder="username" value={username} onChange={(event) => setCredential({
                username: event.target.value,
                password
            })}/>
            <br />
            <label htmlFor="password">Password</label>
            <input placeholder="password" type="password" value={password} onChange={(event) => setCredential({
                username,
                password: event.target.value,
            })}/>
            <br />
            <link rel="stylesheet" href="register" />
            <button className="login-button" type="submit">Sign up !</button>
        </form>
        </div>
        </div>
        
    )
}

export default LoginPage