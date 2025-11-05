import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainSections from './components/MainSections';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased selection:bg-rose-200 selection:text-gray-900 dark:bg-black dark:text-white">
      <SplashScreen />
      <Navbar />
      <Hero />
      <MainSections />
    </div>
  );
}
