import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCatrContext"
import { StoreItemsProps } from "../types/customTypes"
import { formatCurrency } from "../utilities/formatCurrency"
import { ManageItem } from "./ManageItem"

export function StoreItem({ id, name, price, imgUrl }: StoreItemsProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
  } = useShoppingCart()

  const quantity = getItemQuantity(id)

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height='200px'
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {
            quantity > 0
              ?
              <ManageItem quantity={quantity} id={id}/>
              :
              <Button onClick={() => increaseCartQuantity(id)} className="mt-5 w-100">+ Add To Cart</Button>
          }
        </div>
      </Card.Body>
    </Card>
  )
}