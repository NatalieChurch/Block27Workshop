import { useState } from 'react'

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

function SignUpForm ({setToken}) {
    
async function handleSubmit(event) {
    event.preventDefault();
    try {
        const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/signup",
            {
                method: "POST",
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })

            const result = await response.json()
            console.log(result);
            setToken(result.token);

    } catch (error){
        setError(error.message)
    }
}

return(
    <div>
        <h2>Sign up now!</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} >Username: </input>
            </label>
            <label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} >Password: </input>
            </label>
            <button>Submit!</button>
        </form>
    </div>);
}

export default SignUpForm