import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase,increaseAsync,decreaseAsync } from '../modules/counter';


const CounterContainer = () => {
    const number = useSelector(state=>state.counter)
    const dispatch = useDispatch()
    const onIncrease=()=>{
        dispatch(increase()) //increaseAsync가 함수를 리턴 thunk로 넘어감
    }
    const onDecrease=()=>{
        dispatch(decrease())
    }
    return (
        <div>
            <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease}/>
        </div>
    );
};

export default CounterContainer;