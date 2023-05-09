import React, {useState} from 'react';
import Button from "@mui/material/Button";
import {useMutation} from "@apollo/client";
import GqlEditProduct from "../resolvers/mutations/GqlEditProduct";
import {Card, Grid} from "@mui/material";
import '../styles/createaccountpage.css'
import {NavLink} from "react-router-dom";

function CreateAccountPage(props: any) {
    const [editProduct, {loading, error}] = useMutation(GqlEditProduct);
    const [accountCredentials, setAccountCredentials] = useState({
        username: '',
        password: ''
    });


    const createAccount = (evt: any) => {
        evt.preventDefault();

    }

    const onChange = (evt: any) => {
        setAccountCredentials({...accountCredentials, [evt.target.id]: evt.target.value})
    }



    return (
        <div className={"createAccountDiv"}>
            <Grid container>
                <Grid style={{margin: '10% auto auto auto', width: '400px'}} item md={4}>
                    <Card className={"createAccountCard"}>
                        <h2 style={{margin: '10px 30px 30px 30px'}}>Create an Account!</h2>
                        <form onSubmit={createAccount}>
                            <input className={"createAccountCardInputFields"} onChange={onChange} type="text"
                                   placeholder="Username" id="username"/>{" "}
                            <br/>
                            <input style={{margin: '10px 10px'}} className={"createAccountCardInputFields"}
                                   onChange={onChange} type="password" placeholder="Password" id="password"/>
                            <br/>
                            <input className={"createAccountCardInputFields"} onChange={onChange} type="email"
                                   placeholder="Email" id="email"/>
                            <div style={{fontSize: '13px', color: 'grey'}}>
                                <span>Already have an account?</span>
                                <br/>
                                <NavLink className={"navLinkToCreateOrLogin"} to={"/signin"}>Log in</NavLink>
                            </div>
                            <br/>
                            <br/>
                            <Button style={{height: '40px', width: '200px'}} variant="contained"
                                    onClick={createAccount}>Sign up!</Button>

                        </form>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default CreateAccountPage;