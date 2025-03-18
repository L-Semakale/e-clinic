import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Launchscreen from './components/Launchscreen';
import SignupScreen from './components/SignupScreen';
import LoginScreen from './components/LoginScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Launchscreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
