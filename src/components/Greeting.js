export default function Greeting() {
    // this is a function within the JS
    console.log('hello world');

    return (
        <div className="example">
            <h1>Basic React Element</h1> 
            <p>Hello world!</p>
            { /* This is how we write a function within our markup */}
        </div>
    );
}

/* 
  Ideas to cover:

  * the simplest React component is just a function!
  * do whatever you want before the return statement. This is where your imperative code can go, including talking to the console.
  * It returns jsx, which is how we write out html inline is a JS file (webpack transaltes this to basic JS)
  * className is a prop React understands, we use this instead of raw 'class'. 
  * Why? https://stackoverflow.com/questions/46989454/class-vs-classname-in-react-16 (short answer is class is a keyword in JS and JSX transpiles to JS so it's to avoid ambiguity)
*/
  