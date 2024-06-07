import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import AddStud from './Components/AddStud';
import DeleteStud from './Components/DeleteStud';
import Navbar from './Components/Navbar';
import SearchStud from './Components/SearchStud';
import ViewAllStud from './Components/ViewAllStud';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddStud/>}/>
      <Route path='/Search' element={<SearchStud/>}/>
      <Route path='/Delete' element={<DeleteStud/>}/>
      <Route path='/View' element={<ViewAllStud/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
