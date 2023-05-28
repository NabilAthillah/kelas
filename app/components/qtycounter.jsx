import { useQuantity } from './quantitycontext';

function QtyCounter() {
  const { quantity, incrementQuantity, decrementQuantity } = useQuantity();

  return (
    <div>
      <button onClick={decrementQuantity}>-</button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>+</button>
    </div>
  );
}

export default QtyCounter;
