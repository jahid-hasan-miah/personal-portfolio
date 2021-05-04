import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './compnents/Navbar'
import MyRoute from './compnents/MyRoute';
import { BrowserRouter } from 'react-router-dom';
 
function App() {
  return (
    <>
      <BrowserRouter>
      
      <MyRoute></MyRoute>
      </BrowserRouter>
    </>
  );
}

export default App;
