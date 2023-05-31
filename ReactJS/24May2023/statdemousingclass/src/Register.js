import { useState } from "react";

function Register() {
    var [registerFormData, setRegisterForm] = useState({
        username: '',
        password: '',
        email: ''
    })
    const updateState = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        setRegisterForm({ ...registerFormData, [name]: value });
    }
    const register = (event) => {
        event.preventDefault();
        console.log("registerFormData", registerFormData);
    }
    return (
        <div>
            <form>
                <input onChange={updateState} type="text" name="username" placeholder="username here"></input> <br></br><br></br>
                <input onChange={updateState} type="text" name="password" placeholder="password here"></input><br></br><br></br>
                <input onChange={updateState} type="text" name="email" placeholder="email here"></input><br></br><br></br>
                <button onClick={register}>Register</button>
            </form>
        </div>
    )
}
export default Register;


