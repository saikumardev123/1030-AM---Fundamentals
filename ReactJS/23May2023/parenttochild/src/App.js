import logo from './logo.svg';
import './App.css';
import Users from './Users';

function App() {

  var gen_user = {
    name: "rajesh",
    address: "chennai",
    pincode: 757899
  }
  return (
    <div>
      <Users genUser={gen_user}></Users>
    </div>
  );
}

export default App;
