import React, {useReducer} from 'react'

const initialState = {count : 0};
const reducer =(state,action)=>{
    switch(action.type){
        case 'increment' : return{
            count:state.count + 1
        };
        case 'decrement' : return{
            count:state.count - 1
        };
        case 'reset': return{count : 0};
        default : return initialState;
    }
}
const Reducer = () =>{
    const  [state ,dispatch] = useReducer(reducer,initialState);
    return (
        <div>
            <h2>count: {state.count}</h2>
            <button onClick={()=> dispatch({type: 'increment'})}>+</button>
            
            <button onClick={()=> dispatch({type: 'decrement'})}>-</button>
            <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>

        </div>
    )
}

export default Reducer;