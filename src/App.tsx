import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Projects from './components/Projects';
import ProofOfWork from './components/ProofOfWork';
import WhyHireMe from './components/WhyHireMe';
import Footer from './components/Footer';

export default function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <div className="min-h-screen font-sans antialiased bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <Navbar isDark={isDark} onToggle={toggle} />
      <main>
        <Hero />
        <Highlights />
        <Projects />
        <ProofOfWork />
        <WhyHireMe />
      </main>
      <Footer />
    </div>
  );
}
