import logo from './logo.svg';
import './App.css';
import Products from './Products';
import { useState } from 'react';
function App() {

  const [prodcs, setProdcs] = useState([]);

  const renderList = () => {
    let newArray = prodcs.map(function (product) {

      return <li key={product.id}>{product.id} {product.title}</li>

    })
    return newArray;
  }
  return (
    <div className="App">
      <h1>AppComponent</h1>
      <Products sendProducts={
        function (productsParameter) {
          console.log("productsParameter", productsParameter);
          setProdcs(productsParameter);
        }
      }></Products>
      <ul>
        {renderList()}
      </ul>
    </div>
  );
}

export default App;
