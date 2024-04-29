import './App.css';
import logo from './image/freecodecamp-logo.png';
import Tarea from './components/Tarea';

function App() {
  return (
    <div className="App">
      <div className='logo-container'>
        <img 
          src={logo}
          alt=''
          className='logo'
          />
      </div>
      <div className='tareas-app'>
        <h1>Mis Tareas</h1>
      </div>
    </div>
  );
}

export default App;
