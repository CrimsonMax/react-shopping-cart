import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCatrContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from '../data/items.json'

interface ShoppingCartProps {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          Cart
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {
            cartItems.map(elem => (
              <CartItem key={elem.id} {...elem} />
            ))
          }
          <div className="ms-auto fw-bold fs-5">
            Total {formatCurrency(cartItems.reduce((total, cartItem) => {
              const item = storeItems.find(elem => elem.id === cartItem.id)
              return total + item?.price! * cartItem.quantity
            }, 0))}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}