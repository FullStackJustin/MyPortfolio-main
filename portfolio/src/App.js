import './styles/App.css';
import {BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import { Projects } from "./pages/projects";
import {Home} from "./pages/home";
// import FullPage from "./fullpagescroll";


function App() {
  return (
    <Router>      
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        {/* <Route exact path="/" element={< />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
