// src/App.test.tsx
import { useState, useEffect } from 'react';
// Make sure to import your CSS file
import './App.css'; 
import { render, screen } from '@testing-library/react';
import AppComponent from './App';

test('renders App component without crashing', () => {
  render(<AppComponent />);
  // You can add assertions here to check for specific elements if needed.
  // For example:
  // const headerElement = screen.getByRole('heading');
  // expect(headerElement).toBeInTheDocument();
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedPreference = localStorage.getItem('darkMode');
    if (storedPreference) {
      setIsDarkMode(JSON.parse(storedPreference));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', String(isDarkMode)); 
  }, [isDarkMode]);
  

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App"> 
      <button onClick={handleToggle}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>

      {/* Rest of your app content */} 
    </div>
  );
}

export default App;