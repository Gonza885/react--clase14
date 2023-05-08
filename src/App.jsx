import './App.css';
import Formulario from './components/Formulario/Formulario';
import Productos from './components/Productos/Productos';

function App() {
  return (
    <>
      <h1 className='titulos'>EL ÚNICO GRANDE</h1>
      <Formulario/>
      <h2 className='titulos'>Mis Productos</h2>
      <Productos/>
    </>
  );
}

export default App;
