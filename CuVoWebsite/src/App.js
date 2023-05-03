import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import { default as Routes } from './component/router';

function App() {
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
