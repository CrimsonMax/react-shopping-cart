import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCatrContext";
import { Quantity } from "../interfaces/myInterfaces";

export function ManageItem({ quantity, id }: Quantity) {
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useShoppingCart()

  return (
    <div className="d-flex align-items-center flex-column" style={{ gap: '.5rem' }}>
      <div className="d-flex align-items-center justify-content-center" style={{ gap: '.5rem' }}>
        <Button  onClick={() => decreaseCartQuantity(id)} style={{ width: '2rem', height: '2rem', padding: '0px' }}>-</Button>
        <div>
          <span className="fs-3">{quantity}</span> in cart
        </div>
        <Button  onClick={() => increaseCartQuantity(id)} style={{ width: '2rem', height: '2rem', padding: '0px' }}>+</Button>
      </div>
      <Button onClick={() => removeFromCart(id)} variant="danger" size="sm">Remove</Button>
    </div>
  )
}