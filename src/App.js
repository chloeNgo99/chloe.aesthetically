import './App.css';
import Sidebar from './components/SideBar/Sidebar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Resume from './components/Resume/Resume'
import Porfolio from './components/Porfolio/Porfolio'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Experience />
        {/* <Resume /> */}
        <Porfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
