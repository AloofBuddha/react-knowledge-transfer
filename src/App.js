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
