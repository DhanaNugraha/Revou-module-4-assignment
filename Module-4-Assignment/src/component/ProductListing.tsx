import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import AddToCartButton from "./AddToCartButton";
// import ShoppingCart from "../page/ShoppingCart";

const ProductListing = ({ categoryId }: any) => {

  const [productFetched, setProductFetched] = useState([]);

  console.log(categoryId)
//   console.log(typeof categoryId);
//   console.log("category ID", categoryId);

  useEffect(() => {
    fetchProduct();
  }, [categoryId]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
      );
      const data = await response.json();
      setProductFetched(data);
      console.log("item fetched", data)
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }

return (
    <div className = "productListingContainer">
        {productFetched.map((product:any) => (
            <div key = {product.id} className="productListing">
                <Link to={`/ProductDetail/${product.id}`} key={product.id}> 
                        <img src={product.images[1]} alt={product.title} className="productListingImg"/>
                        <h4 className={"w-[fit-content] rounded-[1px] border-b border-solid "}>
                            {product.title}
                        </h4>
                        <p>
                            ${product.price}
                        </p>
                </Link>
                <button className="border text-[1em] font-medium bg-[#1a1a1a] cursor-pointer transition-[border-color] duration-[0.25s] px-[1.2em] py-[0.6em] rounded-lg border-solid border-transparent hover:border-[#646cff]" >add to cart</button>
            </div>
        ))}
    </div> 
  )
}
export default ProductListing;


