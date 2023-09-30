import './App.css';
import Create from './components/Create';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Read from './components/Read';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
       <Routes>
        <Route exact path='/' element={<Create/>} />
        <Route exact path='/read' element={<Read/>} />
        <Route exact path='/update/:id' element={<UpdateUser/>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
