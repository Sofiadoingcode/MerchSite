import React from 'react';
import {useUserContext} from "../contexts/UserContext";
import {Card, CardContent, CardMedia, Grid, Typography, Button} from "@mui/material";
import CreateAddress from '../components/CheckOutPage/CreateAddress';
import GqlAddAddressToUser from '../resolvers/mutations/GqlAddAddressToUser';
import {Address, Order, ProductLine, User} from "../types"
import {useState} from "react"
import {useMutation, useQuery} from "@apollo/client"
import GetUser from '../resolvers/queries/GqlGetUser';

function AccountPage() {
    const [address, setAddress] = useState<Address>(Object)
    const user = useUserContext()
    const q = useQuery(GetUser, {
        variables: {
            userId: user.id
        },
        onCompleted: ()=> {
            
            if(q.data.user.address != undefined) {
                address.streetAddress = q.data.user.address.streetAddress;
                address.city = q.data.user.address.city;
                address.postalCode = q.data.user.address.postalCode;
                address.country = q.data.user.address.country;
                
            }
        }
    });

    const [mutateFunction, {loading, error, data}] = useMutation(GqlAddAddressToUser, {refetchQueries:[GetUser]})
    

    //if (loading) return <p>Loading...</p>;
    //if (error) return <p>Error: {error.message}</p>;


    const handleSubmit = () => {

        mutateFunction({
            variables: {
                addAddressToUserId: user.id,
                addressInput: address
            },
    
        })

        console.log("TEST 3")
    }

    return (
        <Grid container>
            <Grid item md={6}>
                <Card raised sx={{margin: '20px',}}>
                    <h3>SET YOUR ADDRESS</h3>
                    <CreateAddress address={address} setAddress={setAddress}/>
                    <Button style={{height: '40px', width: '200px', margin: '10px'}} variant="contained"
                                       onClick={handleSubmit} >Set Address</Button>
                </Card>
            </Grid>
            <Grid item md={6}>
                <Card raised sx={{margin: '20px',}}>
                    <Grid container>
                        <Grid item md={12}>
                            <CardContent style={{textAlign: 'center'}}>
                                <h2>{user.name}</h2>
                            </CardContent>
                        </Grid>
                        <Grid style={{fontSize: '24.5px'}} item md={6}>
                            <CardContent>
                                <p>Name: </p>
                            </CardContent>
                            <CardContent>
                                <p>Email: </p>
                            </CardContent>
                            <CardContent>
                                <p>Phone: </p>
                            </CardContent>
                        </Grid>
                        <Grid item md={6}>
                            <CardContent style={{float: 'right'}}>
                                <h2>{user.username}</h2>
                            </CardContent>
                            <CardContent style={{float: 'right'}}>
                                <h2>{user.email}</h2>
                            </CardContent>
                            <CardContent style={{float: 'right'}}>
                                <h2>{user.phone}</h2>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>


    );
}

export default AccountPage;