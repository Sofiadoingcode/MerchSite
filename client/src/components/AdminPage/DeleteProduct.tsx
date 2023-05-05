import '../../styles/adminpage.css'
import { useMutation } from "@apollo/client"
import GqlDeleteProduct from "../../resolvers/mutations/GqlDeleteProduct"
import { Product } from '../../types';
import GetAllProducts from '../../resolvers/queries/GqlGetAllProducts';

function DeleteProduct(props: {productID: String}) {
    const [mutateFunction, {loading, error, data }] = useMutation(GqlDeleteProduct, {
        refetchQueries: [GetAllProducts]
      })
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;


    const handleSubmit = () => {
       mutateFunction({
        variables:{
          deleteProductId: props.productID
        }
      })

    }

    return (
        <div>
            <button onClick={handleSubmit} className='deleteButton'>X</button>
        </div>
    );
}

export default DeleteProduct;