import { useState } from 'react';
import axios from 'axios';
function Products(props) {
    const [products, setProducts] = useState([]);
    const fetchProducts = () => {
        axios.get("https://fakestoreapi.com/products").then(
            response => {
                console.log(response);
                console.log(response.data);
                setProducts(response.data);
                //console.log("products-->", products);
                props.sendProducts(response.data);
            },
            error => {
                console.log(error);
            }
        )
    }
    return (
        <div className="App">
            <h1>I am  in Products Component!</h1>
            <button onClick={fetchProducts}>Fetch Products</button>
            {products.length}
        </div>
    );
}
export default Products;
