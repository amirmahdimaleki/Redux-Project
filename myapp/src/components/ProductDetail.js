
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import {selectedProduct,removeSelectedProduct,} from "../redux/actions/productsActions"

const ProductDetail = () => {
    return(
        <div>
            <h2>ProductDetail</h2>
        </div>
    )
}

export default ProductDetail