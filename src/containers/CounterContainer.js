import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions';
import CommonCounter from '../components/CommonCounter';

function CounterContainer({ counterValue, decrement, increment }) {
    return (
        <div className="example">
            <h1>A Simple Counter (Implemented in Redux)</h1>
            <CommonCounter 
                value={counterValue} 
                decrement={decrement} 
                increment={increment}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counterValue: state.get('counterValue')
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(incrementCounter()),
        decrement: () => dispatch(decrementCounter()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);