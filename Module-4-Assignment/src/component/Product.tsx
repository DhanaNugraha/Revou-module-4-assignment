import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Product = ({product, dispatch, REDUCER_ACTIONS}: any) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("access_token");

    const onAddToCart = () => {
        if (token) {
            dispatch({type: REDUCER_ACTIONS.ADD, payload: {...product, qty:1}})
            alert("Item added to cart") 
        } else {
            navigate("/Login") 
            alert("Please log in to add item to cart") 
        }
    }
    
  return (
    <div key = {product.id} className="productListing">
        <Link className="productListLinkContainer" to={`/ProductDetail/${product.id}`} key={product.id}> 
                <img src={product.images[1]} alt={product.title} className="productListingImg"/>
                <h4 className={"w-[fit-content] rounded-[1px] border-b border-solid "}>
                    {product.title}
                </h4>
                <p>
                    ${product.price}
                </p>
        </Link>
        <button 
        className="border text-[1em] font-medium bg-[#1a1a1a] cursor-pointer transition-[border-color] duration-[0.25s] px-[1.2em] py-[0.6em] rounded-lg border-solid border-transparent hover:border-[#646cff]" 
        onClick={onAddToCart}
        >
            Add to Cart
        </button>
    </div>
  )
}

export default Product