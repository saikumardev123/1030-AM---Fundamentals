import PreviligedUser from "./PreviligedUser"
import GenericUser from "./GenericUser"

function Users(props) {

    var prev_user = {
        name: "Kiran",
        address: "Hyderabad",
        pincode: 500765
    }
    return (
        <div>
            <h1>Users</h1>
            <PreviligedUser data={prev_user} ></PreviligedUser>
            <GenericUser data={props.genUser}></GenericUser>

        </div>
    )
}
export default Users;