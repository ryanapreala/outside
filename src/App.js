import {
  Router,
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  

  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
    
  );
}
export default App;
