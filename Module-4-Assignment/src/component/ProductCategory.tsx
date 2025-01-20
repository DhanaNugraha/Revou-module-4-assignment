import { useState, useEffect } from "react";
import ProductListing from "../component/ProductListing";

const ProductCategory = () => {
  const [categoryFetched, setCategoryFetched] = useState([]);
  const [categoryId, setCategoryId] = useState(1);

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
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

  const currentCategoryStyling = "w-[1fr] transition-[0.25s] border-b-blue-400 text-blue-400 border-b border-solid hover:border-[#646cff] hover:scale-[108%]"

  const CategoryStyling = "w-[1fr] transition-[0.25s] rounded-[1px] border-b border-solid hover:border-[#646cff] hover:scale-[108%]"

  const checkCurrentCategory = (categoryID: any, currentCategory: any) => {
    if (categoryID === currentCategory) {
      return currentCategoryStyling
    } else {
      return CategoryStyling
    }
  }

  
// console.log("category", categoryFetched)
  return (
    <>
      <ul className="flex justify-around pt-[2%] pb-[4%]">
        {categoryFetched.map((category: any) => (
          <button id={category.id} key={category.id} className={checkCurrentCategory(category.id, categoryId)} onClick={handleClickCategory}>{category.name}</button>
        ))}
      </ul>

      <ProductListing
        categoryId = {categoryId} 
      />
    </>
  );
};

export default ProductCategory;
