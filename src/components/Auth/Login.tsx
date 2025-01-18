import { auth, googleProvider, appleProvider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';

const Login: React.FC = () => {
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };

  const handleAppleLogin = async () => {
    try {
      await signInWithPopup(auth, appleProvider);
    } catch (error) {
      console.error("Error during Apple sign-in:", error);
    }
  };

  return (
    <div className="login-container">
      <button className="login-button" onClick={handleGoogleLogin}>
        Sign in with Google
      </button>
      <button className="login-button apple" onClick={handleAppleLogin}>
        Sign in with Apple
      </button>
    </div>
  );
};

export default Login;