import React, {useState} from 'react';
import createAccount from "../styles/createAccount.css"
import {Button, Card, CardContent, CardMedia, Grid} from "@mui/material";
import {NavLink, redirect, useNavigate} from "react-router-dom";
import {useQuery} from "@apollo/client/react";
import GetAllProducts from "../resolvers/queries/GqlGetAllProducts";
import GetProduct from "../resolvers/queries/GqlGetProduct";
import LogIn from "../resolvers/queries/GqlLogIn";
import {useMutation} from "@apollo/client";
import GqlCreateProduct from "../resolvers/mutations/GqlCreateProduct";
import GqlGetAllProducts from "../resolvers/queries/GqlGetAllProducts";
import GqlLogIn from "../resolvers/mutations/GqlLogIn";

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const [mutateFunction, {loading, error, data}] = useMutation(GqlLogIn, {
        // refetchQueries: []
    })

    const performLogin = (evt: any) => {
        evt.preventDefault();
        mutateFunction({
            variables: {
                userInput: {
                    username: user.username,
                    password: user.password,
                },
            }
        }).then((result) => {
            console.log(result.data.login.token);
            localStorage.setItem('token', result.data.login.token);
            navigate('/');
        })
            .catch((error) => {
                console.log(`Submission error! ${error.message}`);
            });
    };

    const onChange = (evt: any) => {
        setUser({...user, [evt.target.id]: evt.target.value});
    };

    if (loading) return <>Submitting...</>;
    if (error) return <>Submission error! {error.message}</>;

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