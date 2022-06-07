import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch ,useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProducts } from '../redux/actions/productActions'



const ProductListing = () => {
    //  redux store that we can access its data anywhere in our components
    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch()

    const productFetcher = async() => {
       const api = await axios
       .get('https://fakestoreapi.com/products/')
       .catch((error) => {
        console.log("Error: ", error);
      });
    dispatch(setProducts(api.data));
  };


    useEffect(() => {
        productFetcher()
    }, [])
     console.log({products})
  




    return(
        <div className=" ui grid container ">
           <ProductComponent />
        </div>
    )
}

export default ProductListing