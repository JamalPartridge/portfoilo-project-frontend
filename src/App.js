// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import EditAgent from "./Pages/Edit";
import FourOhFour from "./Pages/FourOhFour"
import Index from "./Pages/Index";
import NewAgent from "./Pages/New";
import ShowAgent from "./Pages/Show";


// COMPONENTS
import NavBar from "./Components/NavBar";
import './App.css'
import { useState } from "react";
import WelcomeAlert from "./Components/WelcomeAlert";
import Wheelspin from "./Components/Wheelspin"

function App() {
  const [alert, setAlert] = useState(true)

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<WelcomeAlert funcNavi={setAlert} />} />
          <Route path="/agents" element={<Index />} />
          <Route path="/agents/new" element={<NewAgent />} />
          <Route exact path="/agents/:id" element={<ShowAgent />} />
          <Route path="/agents/:id/edit" element={<EditAgent />} />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
