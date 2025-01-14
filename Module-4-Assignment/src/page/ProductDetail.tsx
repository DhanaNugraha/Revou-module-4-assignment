import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useCart from "../hooks/useCart";

const ProductDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {productId} = useParams();
  const [productFetched, setProductFetched] = useState<any>({});
  const [imageFetched, setImageFetched] = useState<any>("");

  const {dispatch, REDUCER_ACTIONS} = useCart()

useEffect(() => {
  fetchProduct();
  }, []);
  
  const fetchProduct = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${productId}`
      );
      const data = await response.json();
      // console.log(data)
      setProductFetched(data);
      setImageFetched(data.images)
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }
  // console.log(productFetched)

  // console.log(typeof(productId))

  const onAddToCart = () => {
    dispatch({type: REDUCER_ACTIONS.ADD, payload: {...productFetched, qty:1}})
    alert("Item added to cart")
  }


  return (
    <div>
      {isLoading ? <p>Loading...</p> : null}

      <img src={imageFetched[0]} className="w-[50vw] object-contain pt-2"/>

      <img src={imageFetched[1]} className="w-[50vw] object-contain pt-2"/>

      <img src={imageFetched[2]} className="w-[50vw] object-contain pt-2"/>

      <h1>{productFetched.title}</h1>

      <p>{productFetched.description}</p>

      <p>Price: ${productFetched.price}</p>

      <button 
      className="border text-[1em] font-medium bg-[#1a1a1a] cursor-pointer transition-[border-color] duration-[0.25s] px-[1.2em] py-[0.6em] rounded-lg border-solid border-transparent hover:border-[#646cff]" 
      onClick={onAddToCart}
      >
          Add to Cart
      </button>

    </div>
  )
}

export default ProductDetail