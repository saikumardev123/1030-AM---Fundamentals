// ADMIN - RSA-TOKEN
import { useState } from 'react';
// CUSTOMER - Username / password

// // inside return statement
// function User() {
//     const [user, setUser] = useState('customer');
//     return (
//         <div>
//             <h1>E-Commerce App</h1>
//             {user == 'customer' ? <h1>Customer</h1> : ""}
//             {user == 'admin' ? <h1>Admin</h1> : ""}
//         </div>
//     )
// }
// export default User;
function User() {
    const [user, setUser] = useState('');
    const selectedType = (event) => {
        console.log(event.target.value);
        setUser(event.target.value);
    }
    if (user == "") {
        return (
            <div>
                <select onChange={selectedType}>
                    <option>select type</option>
                    <option value="admin">admin</option>
                    <option value="customer">customer</option>
                </select>
            </div>

        )
    }
    if (user == "admin") {
        return (
            <div>
                <input type="text" placeholder="RSA Token here"></input>
                <button>Submit</button>
            </div>
        )
    }
    else {
        return (
            <div>
                <input type="text" placeholder="username here"></input>
                <input type="text" placeholder="password here"></input>
                <button>Submit</button>
            </div>
        )
    }

}
export default User;
