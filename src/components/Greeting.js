export default function Greeting() {
    console.log('hello world');
    const greeting = 'Hello world!'; 

    return (
        <div className="example">
            <h1>Basic React Element</h1> 
            <p>{greeting}</p>
        </div>
    );
}
  