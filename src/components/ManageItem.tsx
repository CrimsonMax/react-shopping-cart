import { Button } from "react-bootstrap";

interface Quantity {
  quantity: number
}

export function ManageItem({ quantity }: Quantity) {
  return (
    <div className="d-flex align-items-center flex-column" style={{ gap: '.5rem' }}>
      <div className="d-flex align-item-center justify-content-center" style={{ gap: '.5rem' }}>
        <Button style={{ width: '2.5rem', height: '2.5rem' }}>-</Button>
        <div>
          <span className="fs-3">{quantity}</span> in cart
        </div>
        <Button style={{ width: '2.5rem', height: '2.5rem' }}>+</Button>
      </div>
      <Button variant="danger" size="sm">Remove</Button>
    </div>
  )
}