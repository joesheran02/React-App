import './App.css';
import AddStud from './Components/AddStud';
import DeleteStud from './Components/DeleteStud';
import Navbar from './Components/Navbar';
import SearchStud from './Components/SearchStud';
import ViewAllStud from './Components/ViewAllStud';

function App() {
  return (
    <div>
      <Navbar/>
      <AddStud/>
      <SearchStud/>
      <DeleteStud/>
      <ViewAllStud/>
    </div>
  );
}

export default App;
