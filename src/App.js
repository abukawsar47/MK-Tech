import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='bg-gray-100'>
      <div className=' max-w-7xl mx-auto px-12'>
        <Navbar></Navbar>
        <Home></Home>
        <Footer></Footer>
      </div>
    </div>

  );
}

export default App;
