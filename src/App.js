import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Hero from './components/Hero';
import AppMain from './components/AppMain';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <AppMain />
    </div>
  );
}

export default App;
