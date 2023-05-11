import { Card, CardContent, Grid, Rating, Typography } from "@mui/material"
import { Review } from "../../types"

function ReviewCard({ reviews }: { reviews: Review[] }) {

  return (
    <>
      {reviews?.map((rev) =>
        <Grid key={rev.id} item xs={4} style={{ margin: '1rem 2rem 2rem 4rem' }}>
          <Card style={{padding:5, backgroundColor:"whitesmoke"}}>
            <CardContent>
              <Typography typography={'h5'}>{rev.title}</Typography>
            </CardContent>
            <Rating value={rev.rating} style={{marginLeft:15}} readOnly/>
            <CardContent>
              <Typography>{rev.text}</Typography>
            </CardContent>
          </Card>
        </Grid>
      )}

    </>
  )
}

export default ReviewCard