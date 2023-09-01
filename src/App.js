import './App.css';
import Header from './Components/Header';
import Home from './Components/pages/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div style={{padding: '15px 40px 35px 40px'}}>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
