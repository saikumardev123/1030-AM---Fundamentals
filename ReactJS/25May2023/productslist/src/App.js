import axios from 'axios';
import { useState } from 'react';
import Products from './Products';

function App() {

  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios.get("https://fakestoreapi.com/products").then(
      response => {
        console.log(response);
        console.log(response.data);
        setProducts(response.data);
      },
      error => {
        console.log(error);
      }
    )
  }
  return (
    <div className="App">
      <h1>I am  in App Component!</h1>
      <button onClick={fetchProducts}>Fetch Products</button>
      <h1> {products.length}</h1>
      <Products data={products}></Products>
    </div>
  );
}

export default App;
