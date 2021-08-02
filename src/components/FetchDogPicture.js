import { useState, useEffect } from 'react';

import CommonFetchDogPicture from './CommonFetchDogPicture'

export default function FetchDogPicture() {

  const [buttonClickedFlag, setButtonClickedFlag] = useState(false);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const post = await fetch('https://dog.ceo/api/breeds/image/random');
      const response = await post.json();
      if (response.status === "success") {
        setUrl(response.message);
      } else {
        console.error("something went wrong!", response);
      }
    }

    fetchData();

  }, [buttonClickedFlag])

  const loadNewImage = () => {
    setUrl(null);
    setButtonClickedFlag(!buttonClickedFlag);
  }

  return (
    <div className="example">
      <h1>Interact With an API</h1>
      <CommonFetchDogPicture 
        isLoading={url === null}
        url={url}
        loadNewImage={loadNewImage}
      />
    </div>
  );
}

/* 
  Ideas to cover:

  * useEffect is for doing async requests (and other imperative updates)
  * use in conjunction with useState to send requests and capture the response
  * whenever the second argument of useEffect changes, will retrigger the effect
  * Notice the ternary used for Loading, a common pattern

*/