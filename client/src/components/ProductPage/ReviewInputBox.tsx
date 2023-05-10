import { Card, CardContent, Grid, Input, InputLabel, Typography } from "@mui/material"


function ReviewInputBox() {

    return (
        <>
            <Grid item xs={10}>
                <Card style={{ marginLeft: '4rem', width: '60%' }}>
                    <CardContent>
                        <Typography typography={'h4'}>Leave a review</Typography>
                    </CardContent>
                    <CardContent>
                        <label className="review_label">Title:
                            <input className="review_input" />
                        </label>
                    </CardContent>
                    <CardContent>
                        <Typography typography={'h6'}>Comment: </Typography>
                        <textarea required maxLength={500} className="review_input" id="review_input_comment" placeholder={"Write your comment here"} />
                        <button type={"submit"}>Submit Review</button>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default ReviewInputBox