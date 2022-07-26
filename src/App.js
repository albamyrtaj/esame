import "./App.css";
import BeerGrid from "./BeerGrid";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className='container'>
      <Header />
      <BeerGrid />
      <Footer/>
    </div>
  );
}

export default App;
