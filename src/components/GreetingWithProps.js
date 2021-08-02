export default function GreetingWithProps(props) {
  return (
    <div className="example">
      <h1>Basic React Element w/ Props</h1> 
      <h3>Facts about {props.name}:</h3> 
      <ul>
        <li>Is named: {props.name}</li>
        <li>Favorite {typeof props.value} is: {props.value}</li>
      </ul>
    </div>
  );
}