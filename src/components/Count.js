import React, { useState } from 'react'

function Count(){
    const[count,setCount] = useState(0);
    return(
        <div class = "btn-group" >
            <button type='button' class = 'btn btn-primary' onClick={() => setCount(count - 1)} >-</button>
            
            <button type="button" className="bg-white border-0"> {count}</button>

            <button type='button' class = 'btn btn-primary' onClick={() => setCount(count + 1)} >+</button>
        </div>
    )
}
export default Count;