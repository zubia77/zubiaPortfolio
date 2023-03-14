import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LandingPage from "./pages/Landingpage";
import Skills from "./pages/Skills";
import Construction from "./components/Construction";
import "flip-card-wc"

function App() {
  return (
    <div className="App w-screen h-100vh bg-color-10">
     
      <div>    <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<Construction />} />
                    <Route path="about" element={<Construction />}></Route>
                    <Route path="skills" element={<Construction />}></Route>
                    <Route path="projects" element={<Construction />}></Route>
                    <Route path="contact" element={<Construction />}></Route>
                </Routes></div>
    </div>
  );
}

export default App;
