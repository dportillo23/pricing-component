import backgroundPattern from '../images/bg-pattern.svg';
import '../styles/style.css';
import Card from './Card';
import circlePattern from '../images/pattern-circles.svg'

function App() {
  const circleBackground = { 
    background: `no-repeat url(${circlePattern})`, 
    backgroundSize: 'contain',
    backgroundPosition: 'center'
  }

  return (
    <div className="App" style={{ background: `no-repeat url(${backgroundPattern})`, backgroundSize: '100% 50%'}}>
    <header style={circleBackground}>
      <h1>Simple, traffic-based pricing</h1>
      <div className="subtitle">
        <p>Sign-up for our 30-day trial.</p>
        <p>No credit card required</p>
      </div>
    </header>
      <Card/>
    </div>
  );
}

export default App;
