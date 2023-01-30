//액션타입
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션생성함수 --> 액션을 리턴
export const increase = ()=>({type:INCREASE})
export const decrease = ()=>({type:DECREASE}) 


//thunk함수 사용
export const increaseAsync = () => dispatch => { //액션객체 대신 함수를 리턴해준다.
    setTimeout(()=>{
        dispatch(increase())
    },1000)
}
export const decreaseAsync = () => dispatch => { //액션객체 대신 함수를 리턴해준다.
    setTimeout(()=>{
        dispatch(decrease())
    },1000)
}


//초기값
const initialState = 0

//리듀서
export default function counter(state=initialState,action){
    switch(action.type){
        case INCREASE:
            return state+1;
        case DECREASE:
            return state-1;
        default:
            return state;
    }
}