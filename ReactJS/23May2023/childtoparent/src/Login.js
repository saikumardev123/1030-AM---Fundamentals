function Login(props) {
    var token = "fxtfycufigbksmv1276r3873";
    console.log(props);

    props.submitToken(token);

    return (
        <div>
            <h1>I am in Login</h1>
        </div>
    )
}
export default Login;

