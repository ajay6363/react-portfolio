
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Resume from './components/Resume';
import About from './components/about';
import Projects from './components/projects';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <About/>
      <Projects/>
      <Resume/>
      <Footer/>
    </div>
  );
}

export default App;
