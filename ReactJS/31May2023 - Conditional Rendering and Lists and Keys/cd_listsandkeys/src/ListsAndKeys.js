import { useEffect, useState } from "react";
import axios from 'axios';

function ListsAndKeys() {
    const renderList = () => {
        let results = users.map(user => {
            return <tr key={user.id}><td>{user.name}</td><td>{user.username}</td><td>{user.website}</td></tr>
        })
        return results;
    }
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            response => {
                console.log(response.data);
                setUsers(response.data);
            }
        )
    }, [])
    if (users.length == 0) {
        return (
            <div>
                <h1>loading....</h1>
            </div>
        )
    }
    else {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>WebSite</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderList()}
                    </tbody>
                </table>
            </div>
        )
    }

    // return (
    //     <div>
    //         <h1>Users</h1>



    //         {users.length == 0 ? <h1>Users Loading</h1> : <ul>{renderList()}</ul>}

    //     </div>
    // )

}
export default ListsAndKeys;