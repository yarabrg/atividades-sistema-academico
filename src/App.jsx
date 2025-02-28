import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddActivity from "./pages/AddActivity";
import ActivityInfo from "./pages/ActivityInfo";
import EditActivity from "./pages/EditActivity";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      {/* Espaço para não ficar por baixo do header e footer */}
      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddActivity />} />
          <Route path="/edit/:id" element={<EditActivity/>} />
          <Route path="/activity/:id" element={<ActivityInfo />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
