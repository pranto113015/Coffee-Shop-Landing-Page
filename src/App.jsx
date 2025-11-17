import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from './redux/themeSlice';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    dispatch(setTheme(savedTheme));
  }, [dispatch]);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <Hero />
        <MenuSection />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;