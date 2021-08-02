import { useEffect } from 'react';
import { connect } from 'react-redux';

import CommonFetchDogPicture from '../components/CommonFetchDogPicture';

import { fetchDogImage } from '../actions';

function FetchDogPictureContainer({ isLoading, url, fetchDogImage }) {
    // this is just for the initial fetch
    useEffect(() => fetchDogImage(), [fetchDogImage]);

    return (
        <div className="example">
            <h1>Interact With an API (With Redux and Redux Sagas)</h1>
            <CommonFetchDogPicture 
                isLoading={isLoading}
                url={url}
                loadNewImage={fetchDogImage}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.getIn(['dogImage', 'isLoading']),
        url: state.getIn(['dogImage', 'results', 'message'])
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDogImage: () => dispatch(fetchDogImage())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchDogPictureContainer);