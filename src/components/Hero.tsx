import { ExternalLink, Github, MapPin, Briefcase, Zap, Globe } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';

const BADGES = ['Data Engineering', 'ML', 'Web', 'Mobile'];

const QUICK_FACTS = [
  { icon: Briefcase, label: 'Role', value: SITE_CONFIG.role },
  { icon: Zap, label: 'Focus', value: 'Data · ML · Web' },
  { icon: Globe, label: 'Availability', value: SITE_CONFIG.availability },
  { icon: MapPin, label: 'Location', value: SITE_CONFIG.location },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 text-xs font-medium mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            Summary Portfolio Project
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4 animate-slide-up">
            Muhammad{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-teal-500">
              Hafiz Fassya
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 font-light mb-6 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            A 60-second overview of Hafiz's work in{' '}
            <span className="text-slate-700 dark:text-slate-200 font-medium">Data Engineering</span>,{' '}
            <span className="text-slate-700 dark:text-slate-200 font-medium">Machine Learning</span>, and{' '}
            <span className="text-slate-700 dark:text-slate-200 font-medium">Web Systems</span>.
          </p>

          <div className="flex flex-wrap gap-2 mb-8 animate-slide-up" style={{ animationDelay: '0.15s' }}>
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a
              href={SITE_CONFIG.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5"
            >
              <ExternalLink size={15} />
              View Full Portfolio
            </a>
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:border-sky-400 dark:hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Github size={15} />
              Explore GitHub
            </a>
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-sm font-medium hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200"
            >
              See Projects ↓
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-slide-up" style={{ animationDelay: '0.25s' }}>
            {QUICK_FACTS.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex flex-col gap-1 p-3 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 backdrop-blur-sm"
              >
                <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
                  <Icon size={12} />
                  <span className="text-[10px] font-medium uppercase tracking-wide">{label}</span>
                </div>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-600 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <span>Scroll to explore</span>
          <div className="w-6 h-9 border-2 border-slate-300 dark:border-slate-700 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-slate-400 dark:border-slate-600 rounded-full animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
}
