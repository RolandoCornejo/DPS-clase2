import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [unidad, setUnidad] = useState(0);
  const [decena, setDecena] = useState(0);
  const [centena, setCentena] = useState(0);
  const [umil, setUmil] = useState(0);
  const [dmil, setDmil] = useState(0);
  const [cmil, setCmil] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setUnidad((total / tipo) * 1);
    setDecena((total / tipo) * 7.74);
    setCentena((total / tipo) * 23.72);
    setUmil((total / tipo) * 619.60);
    setDmil((total / tipo) * (1/45914.20));
    setCmil((total / tipo) * 8.74);
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de divisas</h1>

      <p>Dolares: {unidad}</p>
      <p>Quetzales: {decena}</p>
      <p>Lempiras: {centena}</p>
      <p>Colones cr: {umil}</p>
      <p>Bitcoin: {dmil}</p>
      <p>Colones sv: {cmil}</p>

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Dolares</option>
        <option value={7.74}>Quetzales</option>
        <option value={23.72}>Lempiras</option>
        <option value={619.60}>Colones cr</option>
        <option value={1/45914.20}>Bitcoin</option>
        <option value={8.74}>Colones sv</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
