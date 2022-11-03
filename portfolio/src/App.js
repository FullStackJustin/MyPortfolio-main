import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/home";
import { Projects } from "./pages/projects";
// import {Footer} from "./pages/footer.js";


function App() {
  const logo = document.getElementById("preloadLogo");
  const [loading, setLoading] = React.useState(true);
  if (logo) {
    setTimeout(() => {
      logo.style.display = "none";
      setLoading(false);
    }, 2000)
  }
  return (
    !loading && (
      <Router basename="/">
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
