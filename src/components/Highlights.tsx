import { Layers, ShieldCheck, Wrench, LucideIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ICON_MAP: Record<string, LucideIcon> = {
  Layers,
  ShieldCheck,
  Wrench,
};

const COLOR_MAP: Record<string, string> = {
  sky: 'bg-emerald-500/5 border-emerald-500/10 hover:border-emerald-500/40',
  teal: 'bg-cyan-500/5 border-cyan-500/10 hover:border-cyan-500/40',
  cyan: 'bg-emerald-500/5 border-emerald-500/10 hover:border-emerald-500/40',
};

const ICON_COLOR_MAP: Record<string, string> = {
  sky: 'text-emerald-500 bg-emerald-500/10',
  teal: 'text-cyan-500 bg-cyan-500/10',
  cyan: 'text-emerald-500 bg-emerald-500/10',
};

const DOT_COLOR_MAP: Record<string, string> = {
  sky: 'bg-emerald-400',
  teal: 'bg-cyan-400',
  cyan: 'bg-emerald-400',
};

export default function Highlights() {
  const { t } = useLanguage();

  return (
    <section id="highlights" className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Subtle Background Detail */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter leading-none">
            {t.highlights.title}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg sm:text-xl leading-relaxed font-light">
            {t.highlights.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.highlights.items.map((item, idx) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div
                key={item.title}
                className={`glass-card relative p-8 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-3 group ${COLOR_MAP[item.color]} ${idx === 1 ? 'md:scale-105 z-10' : ''}`}
              >
                <div className={`inline-flex p-4 rounded-2xl mb-8 ${ICON_COLOR_MAP[item.color]} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">{item.title}</h3>
                <ul className="space-y-4">
                  {item.items.map((point) => (
                    <li key={point} className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-400">
                      <span className={`flex-shrink-0 w-2 h-2 rounded-full ${DOT_COLOR_MAP[item.color]} group-hover:scale-150 transition-transform`} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
