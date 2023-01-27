//액션타입
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션생성함수 --> 액션을 리턴
export const increase = ()=>({type:INCREASE})
export const decrease = ()=>({type:DECREASE}) 
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