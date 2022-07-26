import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home'
import LoanRequest from './routes/LoanRequest'
import MortgageCalculator from './routes/MortgageCalculator'
import PersonalLoanCalculator from './routes/PersonalLoanCalculator'
import Navbar from './components/Navbar';


function App() {
  return (
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loan-request" element={<LoanRequest />} />
          <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
          <Route path="/personal-loan-calculator" element={<PersonalLoanCalculator />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
