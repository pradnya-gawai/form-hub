import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Forms from './components/Forms';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import FeedbackForm from './components/FeedbackForm';

const Home =()=>{
  return(
    <div>Home</div>
  )
}
const About =()=>{
  return(
    <div>About </div>
  )
}

const Contact =()=>{
  return(
    <div>Concat</div>
  )
}


function App() {
  return (
    <Router>
      <div className="container mt-5">
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Log In </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registration">Registration</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback">Feedback</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/feedback" element={<FeedbackForm />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
