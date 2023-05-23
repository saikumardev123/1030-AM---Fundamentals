function PreviligedUser(props) {
    console.log("props", props);
    return (
        <div>
            <h1>Previliged User</h1>
            {props.data.name} <br></br>
            {props.data.address} <br></br>
            {props.data.pincode}
        </div>
    )
}
export default PreviligedUser;