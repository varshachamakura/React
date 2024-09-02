import  React from 'react'
 
function Condition(props) { return(
        <>
            {props.isloggedIn ? <button onClick={props.Logout} >Logout</button>
            : <button onClick={props.Login} >Login</button>
            }
        </>
    )

    // const isloggedIn = false;
    // const result = isloggedIn ? <h2>Logged in</h2> : <h2>PLease Log in</h2>
    // return result;

    // return(
    //     <div>
    //         {props.isLoggedIn ? <h2>Logged in</h2> : <h2>PLease Log in</h2>}
    //     </div>
    // );

}

export default Condition;

