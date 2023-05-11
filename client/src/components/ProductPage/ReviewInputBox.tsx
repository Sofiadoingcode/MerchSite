import { Card, CardContent, Grid, Input, InputLabel, Rating, Typography } from "@mui/material"
import { Product, Review, User } from "../../types"
import GqlCreateReview from "../../resolvers/mutations/GqlCreateReview"
import { useMutation } from "@apollo/client"
import GetReviewsByProduct from "../../resolvers/queries/GqlGetReviewsByProduct"
import { useState } from "react"
import { useUserContext } from "../../contexts/UserContext"


function ReviewInputBox({product}:{product:Product}) {
    const intialState: Review = {id:'', title:'', text:'', rating:0, userId:'', productId:''}
    const [review, setReview] = useState<Review>(intialState)
    const user: User = useUserContext()
    const [mutateFunction, {loading, error, data}] = useMutation(GqlCreateReview, {
        refetchQueries: [{
            query: GetReviewsByProduct,
            variables: {
                reviewsByProductId: product.id
            }
        }]
    })
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        
        review.userId = user.id
        review.productId = product.id
        mutateFunction({
            variables: {
                reviewInput: review
            }
        })
        setReview(intialState)
    }

    return (
        <>
            <Grid item xs={10}>
                <Card style={{ marginLeft: '4rem', width: '60%' }}>
                    {user.id.length > 0 ? <>
                    <CardContent>
                    <Typography typography={'h4'}>Leave a review</Typography>
                </CardContent>
                <form onSubmit={handleSubmit}>
                <CardContent style={{display:'flex'}}>
                    <label className="review_label">Title:
                        <input className="review_input" required value={review.title} onChange={(evt)=> setReview({...review, title:evt.target.value})}/>
                    </label>
                    <Rating id="review_input_box_rating" size="large" onChange={(evt, newValue)=> { if(newValue!=null)setReview({...review, rating:newValue})}}/>
                </CardContent>
                <CardContent>
                    <Typography typography={'h6'}>Comment: </Typography>
                    <textarea required maxLength={500} aria-required className="review_input" id="review_input_comment" placeholder={"Write your comment here"} value={review.text} onChange={(evt)=> setReview({...review, text:evt.target.value})}/>
                    <button type="submit">Submit Review</button>
                </CardContent>
                </form> </>: 
                    <Typography typography={'h6'}>Must be logged in to leave a review</Typography>
                }
                    
                </Card>
            </Grid>
        </>
    )
}

export default ReviewInputBox