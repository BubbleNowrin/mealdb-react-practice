import logo from './logo.svg';
import './App.css';
import Meals from './Components/Meals/Meals';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Meals></Meals>
    </div>
  );
}

export default App;
