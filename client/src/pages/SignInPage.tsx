import React, {useState} from 'react';
import createAccount from "../styles/createAccount.css"
import {Button, Card, CardContent, CardMedia, Grid} from "@mui/material";
import {NavLink, redirect, useNavigate} from "react-router-dom";

function Login() {
    const init = {username: "", password: ""};
    const [loginCredentials, setLoginCredentials] = useState(init);
    const navigate = useNavigate();


    const performLogin = (evt: any) => {
        evt.preventDefault();
        // login(loginCredentials.username, loginCredentials.password)
    }


    // const login = (user, pass) => {
    //     facade.login(user, pass, setRoles, setLoggedIn, setUsername)
    //         .then((res) => {
    //             facade.getAccountFromId(apiFacade.decodeJwt().username)
    //                 .then((res) => { setAccount(res)
    //                     navigate("/feed")}
    //                 )})}


    const onChange = (evt: any) => {
        setLoginCredentials({...loginCredentials, [evt.target.id]: evt.target.value})
    }


    return (
        <div className={"createAccountDiv"}>
            <Grid container>
                <Grid style={{margin: '10% auto auto auto', width: '400px'}} item md={4}>
                    <Card className={"createAccountCard"}>
                        <h2 style={{margin: '10px 30px 30px 30px'}}>Log In!</h2>
                        <form>
                            <input className={"createAccountCardInputFields"} onChange={onChange} type="text"
                                   placeholder="Username" id="username"/>
                            <br/>
                            <input style={{margin: '10px 10px'}} className={"createAccountCardInputFields"}
                                   onChange={onChange} type="password" placeholder="Password" id="password"/>

                            <br/>
                            <div style={{fontSize: '14px', color: 'grey'}}>
                                <p>Don't have an account?</p>
                                <NavLink className={"navLinkToCreateOrLogin"} to={"/createaccount"}>Create
                                    account</NavLink>
                            </div>
                            <br/>
                            <Button style={{height: '40px', width: '200px'}} variant="contained"
                                    onClick={performLogin}>Log in!</Button>

                        </form>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;