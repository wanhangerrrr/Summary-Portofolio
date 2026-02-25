import { ExternalLink, Github, MapPin, Briefcase, Zap, Globe } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const QUICK_FACTS = [
    { icon: Briefcase, label: t.hero.quick_facts.role, value: SITE_CONFIG.role },
    { icon: Zap, label: t.hero.quick_facts.focus, value: t.hero.focus_value },
    { icon: Globe, label: t.hero.quick_facts.availability, value: SITE_CONFIG.availability },
    { icon: MapPin, label: t.hero.quick_facts.location, value: SITE_CONFIG.location },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-white dark:bg-slate-950 pt-20"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 dark:bg-emerald-500/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyan-500/10 dark:bg-cyan-500/10 blur-[120px] rounded-full opacity-40" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in shadow-lg shadow-emerald-500/5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {t.hero.badge}
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[0.95] mb-8 animate-slide-up tracking-tighter">
            {t.hero.role_prefix}{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-[length:200%_auto] animate-gradient">
              {t.hero.role_span}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-500 dark:text-slate-400 font-light mb-10 leading-relaxed max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t.hero.description_prefix}{' '}
            <span className="text-slate-900 dark:text-slate-100 font-semibold border-b-2 border-emerald-500/30">{t.hero.description_de}</span>,{' '}
            <span className="text-slate-900 dark:text-slate-100 font-semibold border-b-2 border-cyan-500/30">{t.hero.description_ml}</span>, and{' '}
            <span className="text-slate-900 dark:text-slate-100 font-semibold border-b-2 border-emerald-500/30">{t.hero.description_web}</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a
              href={SITE_CONFIG.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-950 text-base font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-emerald-500/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <ExternalLink size={20} />
              {t.hero.view_portfolio}
            </a>
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:border-emerald-500/50"
            >
              <Github size={20} />
              {t.hero.explore_github}
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {QUICK_FACTS.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="glass-card flex flex-col gap-2 p-5 rounded-3xl"
              >
                <div className="flex items-center gap-2 text-emerald-500">
                  <Icon size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">{label}</span>
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white truncate">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
