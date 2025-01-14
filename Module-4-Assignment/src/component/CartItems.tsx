
const CartItems = ({item, dispatch, REDUCER_ACTIONS}: any) => {
    const ItemTotalPrice: number = (item.qty * item.price)

    const onRemoveFromCart = () => dispatch({
        type: REDUCER_ACTIONS.REMOVE,
        payload: item, 
    })
    console.log("this is item", item)
  return (
    <li className="cartItem" key={item.id}>
        <img src={item.images[1]} alt={item.title} className="cartItemImg" />

        <p>{item.title}</p>

        <p>Price: ${item.price}</p>

        <button> - </button>

        <p>{item.qty}</p>

        <button> + </button>

        <p className="cartItemSubtotal">
            Total Price: ${ItemTotalPrice}
        </p>

        <button className="removeFromCartButton" onClick={onRemoveFromCart}>
            ✖ 
        </button>
    </li>
  )
}

export default CartItems