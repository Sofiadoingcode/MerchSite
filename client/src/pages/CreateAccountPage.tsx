import React, {useState} from 'react';
import Button from "@mui/material/Button";
import {useMutation} from "@apollo/client";
import GqlEditProduct from "../resolvers/mutations/GqlEditProduct";
import {Card, Grid} from "@mui/material";
import '../styles/createaccountpage.css'
import {NavLink} from "react-router-dom";
import {User} from "../types"
import GqlCreateCustomer from "../resolvers/mutations/GqlCreateCustomer";
function CreateAccountPage(props: any) {
    const [CreateCustomer, {loading, error}] = useMutation(GqlCreateCustomer);

    const [userCredentials, setUserCredentials] = useState({
        username: "",
        password: "",
        customer: {}
    });
    const [customerCredentials, setCustomerCredentials] = useState({
        email: "",
        name: "name",
        number: 0
    });



    const createAccount = (evt:  React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        userCredentials.customer = customerCredentials;
        console.log(userCredentials)
        CreateCustomer({variables: {input: userCredentials}})
    }
    const onChange = (evt: any) => {
        if (evt.target.id === "email" || evt.target.id === "name") {
            setCustomerCredentials({...customerCredentials, [evt.target.id]: evt.target.value})
            return
        }
        if (evt.target.id === "number") {
            setCustomerCredentials({...customerCredentials, [evt.target.id]: evt.target.value})
            return
        }
        setUserCredentials({...userCredentials, [evt.target.id]: evt.target.value})
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
                            <input style={{margin: '10px 10px'}} className={"createAccountCardInputFields"} onChange={onChange} type="email"
                                   placeholder="Email" id="email"/>
                            <input style={{margin: '10px 10px'}} className={"createAccountCardInputFields"} onChange={onChange} type="number"
                                   placeholder="Number" id="number"/>
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