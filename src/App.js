import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigations/Navigation.jsx';
import HomePage from './customer/Pages/HomePage/HomePage.jsx';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
