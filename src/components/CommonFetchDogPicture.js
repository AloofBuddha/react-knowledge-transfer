export default function CommonFetchDogPicture({ isLoading, url, loadNewImage }) {

  return (
    <>
      <div>
      { !isLoading ? 
        <img src={url} alt="doggie pic" /> : 
        <p>Loading...</p> 
      }
      </div>
      <button onClick={() => loadNewImage()}>Load New Image</button>
    </>
  );
}