// src/components/Auth/Logout.tsx
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';



const Logout: React.FC = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;