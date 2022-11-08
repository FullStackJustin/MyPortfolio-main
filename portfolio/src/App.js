import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/home";
import { Projects } from "./pages/projects";
// import {Footer} from "./pages/footer.js";
import {Navbar} from "./pages/navbar.js";


function App() {
  const logo = document.getElementById("preloadLogo");
  const [loading, setLoading] = React.useState(true);
  if (logo) {
      setTimeout(() => {
        logo.style.display = "none";
        setLoading(false);
      }, 3000)
  } 
  setTimeout(() =>{
    logo.classlist.remove("animate__flipInX");
    logo.classlist.add("animate__bounceOut");
  },1500)
  
  return (
    !loading && (
      <Router basename="/">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/MYPORTFOLIO-MAIN" element={<Home />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/MYPORTFOLIO-MAIN/projects" element={<Projects />}></Route>
          {/* <Route exact path="/" element={</>}></Route> */}
        </Routes>
      </Router>)
  );
}

export default App;
