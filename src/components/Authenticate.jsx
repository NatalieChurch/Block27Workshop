import {useState} from 'react'

function Authenticate ({token}) {
   
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
   

    async function handleClick(){
        try{
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        const result = await response.json();
        setSuccessMessage(result.message);
    

    } catch (error) {
        setError(error.message);
    }

}
    
    ;
    
    return (
    <div>
        <h2>Authenticate!</h2>

        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}

        <button onClick={handleClick}>Authenticate Token</button>
        {successMessage ?
        <div>
            <h2> Your token is {token}</h2>
            <h2> Your username is {successMessage.username}</h2>
        </div>
        :
        <div>
            <h2>You are not signed in!</h2>
        </div>
        }
    </div>
)}

export default Authenticate