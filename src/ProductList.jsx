import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import { plantImage } from './plantImage';
import CartItem from './CartItem';
import './ProductList.css';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', cost: 15, image: plantImage('spiky', '#3f7d4f'), description: 'Produces oxygen at night and removes indoor toxins.' },
      { name: 'Spider Plant', cost: 12, image: plantImage('fern', '#6fbf73'), description: 'Filters formaldehyde and xylene from the air.' },
      { name: 'Peace Lily', cost: 18, image: plantImage('flower', '#2f7a46', '#c2703d', '#ffffff'), description: 'Elegant white blooms that remove mold spores.' },
      { name: 'Boston Fern', cost: 14, image: plantImage('fern', '#2e8b57'), description: 'A natural humidifier that removes airborne pollutants.' },
      { name: 'Rubber Plant', cost: 20, image: plantImage('tall', '#1f5d3a'), description: 'Large glossy leaves that absorb airborne chemicals.' },
      { name: 'Aloe Vera', cost: 10, image: plantImage('spiky', '#8bc58f', '#b8860b'), description: 'Purifies air and its gel soothes minor burns.' },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', cost: 16, image: plantImage('flower', '#5b8f5a', '#a0522d', '#9b7fd1'), description: 'Calming scent that promotes relaxation and sleep.' },
      { name: 'Jasmine', cost: 18, image: plantImage('flower', '#3a7d4a', '#c2703d', '#fffaf0'), description: 'Sweet-smelling flowers that lift the mood.' },
      { name: 'Rosemary', cost: 13, image: plantImage('bushy', '#4a7c59'), description: 'A fragrant herb that sharpens focus and flavours food.' },
      { name: 'Mint', cost: 9, image: plantImage('round', '#5cc16f'), description: 'Refreshing aroma that is also great for teas.' },
      { name: 'Lemon Balm', cost: 11, image: plantImage('round', '#9acd5b', '#b8860b'), description: 'Lemon-scented leaves known to reduce stress.' },
      { name: 'Basil', cost: 8, image: plantImage('bushy', '#2faa55', '#a0522d'), description: 'A sweet, peppery herb that repels flies and mosquitoes.' },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      { name: 'ZZ Plant', cost: 22, image: plantImage('tall', '#2a6b45', '#4a4a4a'), description: 'Thrives on neglect and tolerates very low light.' },
      { name: 'Pothos', cost: 12, image: plantImage('round', '#3e9b5b', '#4a4a4a'), description: 'A hardy trailing vine that is nearly impossible to kill.' },
      { name: 'Jade Plant', cost: 17, image: plantImage('round', '#1f7a4d', '#c2703d'), description: 'A long-living succulent that stores water in its leaves.' },
      { name: 'Cast Iron Plant', cost: 19, image: plantImage('spiky', '#1d5a38', '#4a4a4a'), description: 'Tough dark leaves that survive almost any conditions.' },
      { name: 'Haworthia', cost: 10, image: plantImage('spiky', '#5aa36b', '#c9a227'), description: 'A compact succulent that needs very little water.' },
      { name: 'Echeveria', cost: 11, image: plantImage('round', '#7fb7a4', '#c9a227'), description: 'A rosette-shaped succulent that loves bright light.' },
    ],
  },
];

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState(() =>
    Object.fromEntries(cartItems.map((item) => [item.name, true]))
  );

  // Keep the disabled state in step with the cart (e.g. after an item is deleted).
  useEffect(() => {
    setAddedToCart(Object.fromEntries(cartItems.map((item) => [item.name, true])));
  }, [cartItems]);

  const calculateTotalQuantity = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem({ name: plant.name, image: plant.image, cost: plant.cost }));
    setAddedToCart((prevState) => ({ ...prevState, [plant.name]: true }));
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-brand" onClick={handleHomeClick}>
          <span role="img" aria-label="plant">🌿</span> Paradise Nursery
        </div>
        <div className="navbar-links">
          <a href="#" onClick={handleHomeClick}>Home</a>
          <a href="#" onClick={handlePlantsClick}>Plants</a>
          <a
            href="#"
            className="cart-link"
            aria-label={`Cart with ${calculateTotalQuantity()} items`}
            onClick={handleCartClick}
          >
            <svg viewBox="0 0 256 256" width="34" height="34" aria-hidden="true">
              <rect width="256" height="256" fill="none" />
              <circle cx="80" cy="216" r="12" fill="currentColor" />
              <circle cx="184" cy="216" r="12" fill="currentColor" />
              <path
                d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
            <span className="cart_quantity_count">{calculateTotalQuantity()}</span>
          </a>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((group) => (
            <section key={group.category} className="category">
              <h2 className="category-title">{group.category}</h2>
              <div className="product-list">
                {group.plants.map((plant) => (
                  <div className="product-card" key={plant.name}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <h3 className="product-title">{plant.name}</h3>
                    <p className="product-description">{plant.description}</p>
                    <div className="product-price">${plant.cost}</div>
                    <button
                      className="product-button"
                      disabled={addedToCart[plant.name]}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
