export default function CommonCounter({ decrement, value, increment }) {

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <pre>{value}</pre>
      <button onClick={increment}>+</button>
    </div>
  );
}