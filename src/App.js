import { Provider } from 'react-redux';
import configureStore from './configureStore';

import Greeting from './components/Greeting';
import GreetingWithProps from './components/GreetingWithProps';
import GreetingWithState from './components/GreetingWithState';
import SimpleCounter from './components/SimpleCounter';
import FetchDogPicture from './components/FetchDogPicture';

import CounterContainer from './containers/CounterContainer';
import FetchDogPictureContainer from './containers/FetchDogPictureContainer';

const store = configureStore();

export default function App() {
  return (
    <>
      <Greeting />
      <hr />
      <GreetingWithProps name="Ben" value={42} />
      <hr />
      <GreetingWithState />
      <hr />
      <SimpleCounter />
      <hr />
      <FetchDogPicture />
      <hr />
      <Provider store={store}>
        <CounterContainer />
        <hr />
        <FetchDogPictureContainer />
        <hr />
      </Provider>
    </>
  );
}

/* 
  Ideas to cover:

  * import a React component and then reference it in the JSX
  * can only return one element! This is where the React.Fragment element becomes useful
  * props can be passed to component just like attributes in html
  * double curly braces `{ ... }` is how you execute code within your JSX. In this case we want to pass 42 as a number, not a string, so we use curly brackets. 

  * Redux Provider
*/
