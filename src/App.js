import {
  Router,
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";

function App() {
  

  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
    </Routes>
    
  );
}
export default App;
