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
import './app.css'
import WelcomeAlert from "./Components/WelcomeAlert";

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <WelcomeAlert />
        <Routes>
          <Route path="/" />
          <Route path="/agents" element={<Index />} />
          <Route path="/agents/new" element={<NewAgent />} />
          <Route path="/agents/:id" element={<ShowAgent />} />
          <Route path="/agents/:id/edit" element={<EditAgent />} />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
