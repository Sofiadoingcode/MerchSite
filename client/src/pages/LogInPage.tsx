import React, {useState} from 'react';
import createAccount from "../styles/createAccount.css"
import {Button, Card, CardContent, CardMedia, Grid} from "@mui/material";
import {NavLink, redirect, useNavigate} from "react-router-dom";
import {useMutation} from "@apollo/client";
import GqlLogIn from "../resolvers/mutations/GqlLogIn";
import {useUserContext, useCartDispatchContext} from "../contexts/UserContext";


function Login() {
    const dispatch = useCartDispatchContext();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const [feedback, setFeedback] = useState('');

    const [mutateFunction, {loading, error, data}] = useMutation(GqlLogIn, {
        // refetchQueries: []
    })

    const performLogin = (evt: React.MouseEvent<HTMLElement>) => {
        evt.preventDefault();
        mutateFunction({
            variables: {
                userInput: {
                    username: user.username,
                    password: user.password,
                },
            }
        }).then((result) => {
            dispatch({type: 'added', user: result.data.login.user});
            localStorage.setItem('token', result.data.login.token);

            navigate('/');
        })
            .catch((error) => {
                setFeedback('Incorrect Username or Password!');
            });
    };


    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [evt.target.id]: evt.target.value});
    };

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
                            {feedback && <div style={{color: 'red', fontSize: '14px'}}>{feedback}</div>}
                            <div style={{fontSize: '14px', color: 'grey'}}>
                                <p>Don't have an account?</p>
                                <NavLink className={"navLinkToCreateOrLogin"} to={"/signup"}>Create
                                    account</NavLink>
                            </div>
                            <br/>
                            <Button
                                style={{height: '40px', width: '200px'}}
                                variant="contained"
                                onClick={performLogin}
                                disabled={loading}
                            >
                                {loading ? 'Loading...' : 'Log in!'}
                            </Button>


                        </form>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;