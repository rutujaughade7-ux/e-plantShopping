import { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      {showProductList ? (
        <ProductList onHomeClick={handleHomeClick} />
      ) : (
        <div className="landing-page background-image">
          <div className="landing-content">
            <h1>Welcome To Paradise Nursery</h1>
            <p className="tagline">Where Green Meets Serenity</p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <AboutUs />
        </div>
      )}
    </div>
  );
}

export default App;
