 
 
import { Routes,Route} from"react-router-dom"
import Prodect from './components/Prodect'
 import Search from "./components/search";
 
import './App.css';
import Home from './components/Home';
 
import JobDetails from './components/JobDetails';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/jop' element= {<Prodect/>}/>
        <Route path='/show' element= {<Search/>}/>
 
        <Route path='/jop/:id' element= { <JobDetails></JobDetails>}/>
      </Routes>
     
      
    </div>
  );
}

export default App;
