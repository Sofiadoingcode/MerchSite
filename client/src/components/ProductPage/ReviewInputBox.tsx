import { Card, CardContent, Grid, Input, InputLabel, Rating, Typography } from "@mui/material"
import { Product, Review, User } from "../../types"
import GqlCreateReview from "../../resolvers/mutations/GqlCreateReview"
import { useMutation } from "@apollo/client"
import GetReviewsByProduct from "../../resolvers/queries/GqlGetReviewsByProduct"
import { useState } from "react"
import { useUserContext } from "../../contexts/UserContext"
import GetAllProducts from "../../resolvers/queries/GqlGetAllProducts"


function ReviewInputBox({product, review, setReview}:{product:Product, review: Review, setReview:React.Dispatch<React.SetStateAction<Review>>}) {
    const intialState: Review = {id:'', title:'', text:'', rating:0, userId:'', productId:''}
    const user: User = useUserContext()
    const [mutateFunction, {loading, error, data}] = useMutation(GqlCreateReview, {
        refetchQueries: [
            GetAllProducts
        ]
    })
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        
        if(user.id){
            review.userId = user.id
        }
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
                <Card id="review_card">
                    {user.id && user.id.length > 0 ? <>
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