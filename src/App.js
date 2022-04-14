import './App.scss';
import Navbar from './components/navbar/Navbar'
import Body from './components/body/Body'
import Footer  from './components/footer/Footer';
import './assets/background-origin.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
