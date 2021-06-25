import './App.css';
import Header from './Components/Header'
import SearchSection from './Components/SearchSection'
import Hero from './Components/Hero'
import ResultsSection from './Components/ResultsSection'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SearchSection />
      <ResultsSection />
      <Footer />

    </div>
  );
}

export default App;

