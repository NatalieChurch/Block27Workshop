import { useState } from 'react'


function SignUpForm ({setToken}) {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const maxCharacters = 8;


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
                <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username here" maxLength={8} />
            </label>
            <label>
                <p>Password: </p>
                <input value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button>Submit!</button>
        </form>
    </div>);
}

export default SignUpForm