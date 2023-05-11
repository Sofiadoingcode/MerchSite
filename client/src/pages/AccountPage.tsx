import React from 'react';
import {useUserContext} from "../contexts/UserContext";
import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";

function AccountPage() {

    const user = useUserContext()

    return (
        <Grid container>
            <Grid item md={6}>
                <Card raised sx={{margin: '20px',}}>
                    <Grid container>
                        <Grid item md={8}>
                            <CardContent>
                            </CardContent>
                        </Grid>
                        <Grid item md={4}>
                            <CardContent>
                            </CardContent>
                        </Grid>
                    </Grid>
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