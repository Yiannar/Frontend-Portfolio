import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Edit from './pages/Edit'
import FourOFour from "./pages/FourOFour";
import Home from "./pages/Home";
import Show from "./pages/Show";
import NavBar from "./components/NavBar";
import New from "./pages/New";
import Index from "./pages/Index";
import AboutDev from "./pages/AboutDev";
import Info from "./pages/Info";
import '../src/App.css'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diamonds" element={<Index/>} />
          <Route path="/diamonds/new" element={<New />} />
          <Route path="/diamonds/:id" element={<Show />} />
          <Route path="/diamonds/:id/edit" element={<Edit />} />
          <Route path="/diamonds/Info" element={<Info/>}/>
          <Route path="/diamonds/AboutDev" element={<AboutDev/>}/>
          <Route path="*" elememt={<FourOFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;