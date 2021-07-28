import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { GlobalStyle } from './GlobalStyles';
import HeroSection from './components/HeroSection/HeroSection';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Router>
        <Navigation />
        <Homepage />
        {/* <Switch></Switch> */}
      </Router>
    </div>
  );
}

export default App;
