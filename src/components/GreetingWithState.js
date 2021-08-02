import { useState } from 'react';

export default function GreetingWithState() {

  const [name, setName] = useState("");

  const onNameChange = (event) => setName(event.target.value)

  return (
    <div className="example">
      <h1>Canonical 'Reactive' Example</h1>
      <span>Enter your name: </span>
      <input onChange={onNameChange} />
      <br />
      <span>Your name is: </span><b>{name}</b>
    </div>
  );
}