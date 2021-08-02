# About

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running

In the project directory, you can run:
```sh
npm install
npm start
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

# Walkthrough

## Bootstrapping

* All we serve is a single file from the `public` folder: `index.html`
* The body contains a single element with an id of `root` we can use to hook React into the DOM.
* Inside the `src` folder we have a file `index.js` which renders the `<App />` component to the DOM element specified above
* You may be wondering how we import `index.css` and how the JSX markup is ultimately transformed to regular JS and run in the browser. All of this is done with Bootstrap under the hood (thanks to Create React App) but is a bit beyond the scope of this walkthrough. I avoid using css beyond this initial import and you can just take it for granted that we can write JSX inline without having to worry about how its transformed. You can read more about it [here](https://reactjs.org/docs/introducing-jsx.html) if you're desparately curious how it's done.


## React

* `App.js` is our first real component and the root of our app. Ignore the call to `configureStore()` for now, it's a Redux thing and we only care about React for the moment.
* Notice that the `<App />` component we imported in `index.js` is defined as a simple function. That's all a React component is in it's most basic form: A React component is simply a function that returns JSX, which is simply a JavaScript-compatible stand-in for html.
* If you're eagle-eyed you'll notice that our very first element inside of `App` is actually a strange one: `<>`. This is shorthand for `<React.Fragment>` and is a simple way to group components in React without having to create an unnecessary `div` for a parent. A React component can only return *one* element, so this is necessary if you want to return a list of elements.
* Our first element is `<Greeting>`. Click into the definition (VSCode is good for this) and you'll see the most basic React component we can create.

### `<Greeting>`
* The defintion for the `<Greeting>` component lives in the `components` folder, which is where we put most components (the exception to this is containers, which will be covered when we hit Redux).
* Note that this is a regular JavaScript function, so before we return our JSX we can do anything else we might want to do, like log to the console or create some data we can then use in out component.
* Notice the curly brackets `{...}`. We use this to escape JavaScript within our JSX.
* Note the one small difference between standard html and this jsx: we use `className` as a prop instead of the html attribute `class`. The reason for this is that JSX converts to JS, and 'class' is a reserved word in JS, so this avoids that possible ambiguity. Just note it works identically.
* With this simple example you should be able to see the basic usefulness of React as a template library. We can write out HTML directly in JS and reuse components with ease. Though to be fair, other templating languages do as much, so React hopefully (and does) bring more to the table.

### `<GreetingWithProps>`
* Props are how we pass unique data into a React component. 
* We pass props into a component like writing attributes in HTML, and we can access props within the component definition as it's one and only argument, `props`.
* In it's basic form this just gives us more component-reusability as props are essentially 'parameters' to our functional components.
* Note that when we create our `<GreetingWithProps>` component we escape the value `42`. This is so we pass it as a number, not as a string. React understands this and the value is accessible on the props.
* Also worth noting, `props` has some default props, even if you don't pass the component any. `props.children` for example contains the child node of the given component, so you can always access whatever a given component contains.

### `<GreetingWithState>`
* This is the canonical 'reactive' example - some basic output updating in response to typing into an input box
* We use React's built-in `useState` function for this. `useState` is a hook and is a relatively recent addition to React that allows one to, you guessed it, update and reference stateful variables within React. This was accomplished in the past with class components, but hooks allow us to stay with functional components, which tend to be neater (and don't require us to learn about the class component lifecycle methods).
* `useState` takes a default value as it's only parameter and returns a tuple (as a 2-ary array), typically named something like `value` and `setValue`
* Every time `setValue` is called, `value` is updated and the component rerenders.

### `<SimpleCounter>`
* Nothing really new here, just another example, but this will be one of our canonical examples when implementing Redux.
* Note that it uses a child component called `<CommonCounter>` which our Redux example also uses, demonstrating code reuse between the two approaches.

### `<FetchDogPicture>`
* This is our most complicated 'plain React component' yet and utilizes another built-in hook, `useEffect`
* `useEffect` takes two arguments, a callback function it runs synchronously and a list of dependencies. If a dependency's value changes, the useEffect hook is rerun. Without a list it reruns every rerender, with an empty array it runs only the first render.
* Note we need to do a little trickiness with useState to get the button to rerun the hook on command.

## Redux

* Redux was invented as a solution to the 'state management' problem of React. React rerenders a component whenever the props change, but doesn't provide a built-in method to update the props. This is intentional! React is just the view layer, it's agnostic about the state management layer.
* Technically this isn't true because of `useState` but it's not quite intended as a fully featured solution. Try to copy/paste the `<SimpleCounter>` component and see what happens when you click the button. That's right, state is local to the component in question! 
* What happens if you wan to *share* state between multiple components? We could lift the state up a level in the hierarchy. If we want to share state across the entire app we would need to lift all of our state up to the root.
* Additionally, if we wanted to pass state down the hierarchy, we'd need to pass it as props to *every intermediate component*. This problem is known as 'prop drilling' and get's really cumbersome if more than a few levels of hierarchy exist.
* One popular solution is the library `Redux`. `Redux` keeps out state at the root level and gives us access functions to pass the state down to any component we want (via the `react-redux` library). That's it really.
* Redux has some concepts like 'actions' and 'reducers' and the 'store', but it's all just a way of separating your state management from your view library, and then in this case integrating with the view library React.

![Redux visualization](/resources/redux-image.png)

### Concepts

* The `Store` is what it sounds like. It's where our data lives in Redux. You can see the definition of the store in `configureStore.js` and it is passed to the rest of the app using the `<Provider>` component from `react-redux`.
* `Actions` are just functions that return an object with a required 'type' field and any other data it wants (the 'payload'). That's it, they're POJO (plain old JS objects)
* the `Reducer` consumes actions. Base on the type of the action and the current state, it computes the next state. Note that the new state is always a brand new object, we don't modify the current state in-place. To make this more straightforward we use the `Immutable` library which is a common companion to `Redux`.
* `Containers` are Redux-aware components. They are ultimately regular React components but become 'aware' of the store using the `connect` function which takes two other functions as arguments: `mapStateToProps` and `mapDispatchToProps`. These two functions allow us to pluck what we want off the state, and privdes a way to dispatch new actions to the store, all passed to the connected component using props.
* `Sagas` are a `Redux-Sagas` specific idea, but essentially they provide a means to orchestrate anything that runs asynchronously, like interacting with an API.  
* This is really a lot simpler in practice, but Redux does get some flack for having a high conceptual bar of entry.

### `<CounterContainer>`
* a simple example using `mapStateToProps` and `mapDispatchToProps`. 
* you can explore what's happening more easily with the Redux Dev Tools Chrome Store app, which has been integrated into this project

### `<FetchDogPictureContainer>`
* This example uses Redux Sagas

