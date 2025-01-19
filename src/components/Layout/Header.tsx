// src/components/Layout/Header.tsx
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Logout from '../Auth/Logout';
import styles from './Header.module.css';
import DarkModeToggle from '../DarkModeToggle'; // Import the component

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const { currentUser } = useAuth();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          {/* ... other navigation links */}
          <li>
            <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;