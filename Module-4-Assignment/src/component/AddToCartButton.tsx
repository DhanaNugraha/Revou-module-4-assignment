

const AddToCartButton = ({ product, addToCart }:any) => {
  return (
  <button className="border text-[1em] font-medium bg-[#1a1a1a] cursor-pointer transition-[border-color] duration-[0.25s] px-[1.2em] py-[0.6em] rounded-lg border-solid border-transparent hover:border-[#646cff] z-[20]" onClick={() => addToCart(product)}>Add to Cart</button>
  )
};

export default AddToCartButton;