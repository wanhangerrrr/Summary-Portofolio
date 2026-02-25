import { useDarkMode } from './hooks/useDarkMode';
import { LanguageProvider } from './context/LanguageContext';
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
    <LanguageProvider>
      <div className="min-h-screen font-sans antialiased bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white selection:bg-sky-500/30">
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
    </LanguageProvider>
  );
}
