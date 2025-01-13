import { useState, useEffect } from "react";
import ProductListing from "../component/ProductListing";

const ProductCategory = () => {
  const [categoryFetched, setCategoryFetched] = useState([]);
  const [categoryId, setCategoryId] = useState(1);

  useEffect(() => {
    fetchCategory();
  }, []);

  // const productCategories = {
  //   1: "All",
  //   2: "Clothes",
  //   3: "Electronics",
  //   4: "Shoes",
  //   5: "Miscellaneous",
  // };

  const fetchCategory = async () => {
    try {
      // for (const [key, value] of Object.entries(productCategories)) {
      //   // console.log("key is", key, "value is", value)
      //   const response = await fetch(
      //     `https://api.escuelajs.co/api/v1/categories/`,
      //     {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({
      //         name: value,
      //         image: `${key}`
      //       })})
      //   if (!response){
      //       throw new Error
      //   }
      //   }
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/categories/"
      );
      const data = await response.json();
      // console.log("data fetched", data)
      setCategoryFetched(data.slice(0,5));
      setCategoryId(data.slice(0)[0].id)
    } catch (error) {
      console.error("Error fetching Category:", error);
    }
  };

  const handleClickCategory = (event:any) => {
    // console.log(event.target.id)
    setCategoryId(Number(event.target.id))
    return event.target.id
  }

  
// console.log("category", categoryFetched)
  return (
    <>
      <ul className="flex justify-around pt-[2%] pb-[2%]">
        {categoryFetched.map((category: any) => (
          <button id={category.id} key={category.id} className="w-[1fr] transition-[0.25s] rounded-[1px] border-b border-solid hover:border-[#646cff] hover:scale-[108%]" onClick={handleClickCategory}>{category.name}</button>
        ))}
      </ul>

      <ProductListing
        categoryId = {categoryId} 
      />
    </>
  );
};

export default ProductCategory;
