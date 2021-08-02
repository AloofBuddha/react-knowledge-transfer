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

/* 
  Ideas to cover:

  * React becomes basically useful because of props, which act to create a simple template language.
  * can also destructure props in the function signature, very useful and we use this style in our app heavily
  * GreetingWithProps({ name, value })
  * Notice that the type of value was not lost when using {}

*/