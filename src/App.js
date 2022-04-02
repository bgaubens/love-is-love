import Title from './components/title'
import Menu from './components/menu'
import Back from './components/back'
import Borne1 from './components/borne1'
import Borne2 from './components/borne2'
import Borne3 from './components/borne3'
import Borne4 from './components/borne4'
import Borne5 from './components/borne5'
import './App.css';
import react, {useState, useEffect} from 'react'; // Importing the React functions


function App() {

  const [activeBorne, setActiveBorne] =  useState(""); // Set the active borne

  const handleClickedBorne = (borne) => {
    setActiveBorne(borne)
  }

  return (
    <div className="app">
      <Title></Title>
      <Back
        handleClickedBorne={handleClickedBorne}
        activeBorne={activeBorne}
      ></Back>
      <Menu
        handleClickedBorne={handleClickedBorne}
        activeBorne={activeBorne}
      ></Menu>
      <Borne1
        activeBorne={activeBorne}
      ></Borne1>
      <Borne2
        activeBorne={activeBorne}
      ></Borne2>
      <Borne3
        activeBorne={activeBorne}
      ></Borne3>
      <Borne4
        activeBorne={activeBorne}
      ></Borne4>
      <Borne5
        activeBorne={activeBorne}
      ></Borne5>
    </div>
  );
}

export default App;
