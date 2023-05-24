import React from 'react';
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    updateUsername = (event) => {

        var value = event.target.value;
        console.log(value);
        this.setState({ username: value })
    }
    updatePassword = (event) => {
        var value = event.target.value;
        console.log(value);
        this.setState({ password: value })
    }

    login = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <form>
                    <input onChange={this.updateUsername} type="text" placeholder="username"></input> <br></br><br></br>
                    <input onChange={this.updatePassword} type="password" placeholder="password"></input><br></br><br></br>
                    <button onClick={this.login}>Login</button>
                </form>
            </div>
        )
    }
}
export default Login;