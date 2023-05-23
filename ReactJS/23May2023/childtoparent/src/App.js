import logo from './logo.svg';
import './App.css';
import Login from './Login';
function App() {
  return (
    <div>
      <Login submitToken={
        function (parameter) {
          console.log("parameter", parameter);
        }
      }></Login>
    </div>
  );
}
export default App;
