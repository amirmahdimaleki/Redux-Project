
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions"

const ProductDetail = () => {
//         url routes
    const { productId } = useParams()
    //     redux store
    let product = useSelector((state) => state.product)
    const { image, title, price, category, description } = product
    const dispatch = useDispatch()
    const productDetailFetcher = async (id) => {
      const api = await axios
    //   product detail page url with id
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((error) => {
          console.log("Error: ", error)
        })
      dispatch(selectedProduct(api.data))
    }
  
    
    useEffect(() => {
      if (productId && productId !== "") productDetailFetcher(productId)
      return () => {
        dispatch(removeSelectedProduct())
      }
    }, [productId])



    return (
      <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>-----Loading-----</div>
        ) : (
          <div className = "ui placeholder segment">
            <div className = "ui two column stackable center aligned grid">
              <div className = "ui vertical divider">AND</div>
              <div className = "middle aligned row">
                <div className= "column lp">
                  <img className = "ui fluid image" src={image} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className = "ui teal tag label">$ {price}</a>
                  </h2>
                  <h3 className = "ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div className = "ui vertical animated button" tabIndex="0">
                    <div className ="hidden content">
                      <i className ="shop icon"></i>
                    </div>
                    <div className = "visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

export default ProductDetail