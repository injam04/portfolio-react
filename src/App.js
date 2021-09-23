import { ThemeProvider } from './context/ThemeContext';
import LandingPage from './Pages/LandingPage';

const App = () => {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
};

export default App;
