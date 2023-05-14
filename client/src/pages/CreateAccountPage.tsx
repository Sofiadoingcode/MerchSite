import React, {useState} from 'react';
import Button from "@mui/material/Button";
import {useMutation} from "@apollo/client";
import {Card, Grid} from "@mui/material";
import '../styles/createaccountpage.css'
import {NavLink} from "react-router-dom";
import GqlCreateCustomer from "../resolvers/mutations/GqlCreateCustomer";
import {User} from "../types";

function CreateAccountPage() {
    const [CreateCustomer, {loading, error}] = useMutation(GqlCreateCustomer);

    const [userCredentials, setUserCredentials] = useState<User>(Object);


    const createAccount = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        CreateCustomer({variables: {userInput: userCredentials}})
    }
    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = evt.target;

        if (evt.target.id === "email" || evt.target.id === "name") {
            return setUserCredentials({...userCredentials, [id]: value})
        }
        if (evt.target.id === "phone") {
            return setUserCredentials({...userCredentials, [id]: parseFloat(value)})
        }
        setUserCredentials({...userCredentials, [id]: value})
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

                            <input style={{margin: '10px 10px'}} className={"createAccountCardInputFields"}
                                   onChange={onChange} type="string"
                                   placeholder="Name" id="name"/>
                            <input style={{margin: '10px 10px'}} className={"createAccountCardInputFields"}
                                   onChange={onChange} type="email"
                                   placeholder="Email" id="email"/>
                            <input style={{margin: '10px 10px'}} className={"createAccountCardInputFields"}
                                   onChange={onChange} type="number"
                                   placeholder="Number" id="phone"/>
                            <div style={{fontSize: '13px', color: 'grey'}}>
                                <span>Already have an account?</span>
                                <br/>
                                <NavLink className={"navLinkToCreateOrLogin"} to={"/login"}>Log in</NavLink>
                            </div>
                            <br/>
                            <br/>
                            <button style={{height: '40px', width: '200px'}} variant="contained"
                                    onClick={createAccount}>Sign up!</button>

                        </form>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default CreateAccountPage;