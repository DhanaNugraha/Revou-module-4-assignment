import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import AddToCartButton from "./AddToCartButton";
// import ShoppingCart from "../page/ShoppingCart";

const ProductListing = ({ categoryId }: any) => {

  const [productFetched, setProductFetched] = useState([]);

//   console.log(categoryId)
//   console.log(typeof categoryId);
//   console.log("category ID", categoryId);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/products"
      );
      const data = await response.json();
      setProductFetched(data.slice(7,37));
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }
//   console.log(productFetched)

  const filteredProductfetched = (productFetched:any, categoryId:any) => {
    const result:any = []
    // console.log(result)
    productFetched.forEach((product:any) => {
        // console.log(product)
        if (product.category.id === categoryId){
            // console.log("same")
            result.push(product)
            // console.log(result)
        }
         
    })
    // console.log(result)
    return result
  }

  console.log(categoryId)
  console.log(productFetched)
//   category ID 1 = all
  return categoryId === 2? 
    <div>
        {productFetched.map((product:any) => (
            <div className={"h-[50vh] w-[30%] transition-[0.25s] rounded-[4px] border border-solid hover:border-[#646cff] hover:scale-[102%] p-2 overflow-hidden"}>
                <Link to={`/ProductDetail/${product.id}`} key={product.id}> 
                        <img src={product.images[1]} alt={product.title} className="h-[50%] object-contain pt-2"/>
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
    : 
    <div>
         {
            filteredProductfetched(productFetched, categoryId).map((product:any) => (
            <Link to={`/ProductDetail/${product.id}`} key={product.id} >
                <div className={"h-[50vh] w-[30%] transition-[0.25s] rounded-[4px] border border-solid hover:border-[#646cff] hover:scale-[102%] p-2 overflow-hidden"}>
                    <img src={product.images[1]} alt={product.title} className="h-[50%] object-contain pt-2"/>
                    <h4 className={"w-[fit-content] rounded-[1px] border-b border-solid "}>
                        {product.title}
                    </h4>
                    <p>
                        ${product.price}
                    </p>
                </div>
            </Link>
        ))}
    </div>
};

export default ProductListing;


