import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {productId} = useParams();
  const [productFetched, setProductFetched] = useState<any>({});

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
      console.log(data)
      setProductFetched(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }
  console.log(productFetched)

  console.log(typeof(productId))
  const cleanedSrc = productFetched.images[1].replace(/\[\]\"/g, "");
  const cleanImg = /[\[\]"]/g.test(cleanedSrc) ? `https://placehold.co/192` : cleanedSrc;

  return (
    <div>
      {isLoading ? <p>Loading...</p> : null}
{/* 
      <img src={cleanImg} className="w-[50vw] object-contain pt-2"/> */}

      {/* <img src={productFetched.images[1]} alt={productFetched.title} className=" w-[50vw] object-contain pt-2"/> */}

      {/* <img src={productFetched.images[2]} alt={productFetched.title} className=" w-[50vw] object-contain pt-2"/> */}

      <h1>{productFetched.title}</h1>

      <p>{productFetched.description}</p>

      <p>Price: ${productFetched.price}</p>

    </div>
  )
}

export default ProductDetail