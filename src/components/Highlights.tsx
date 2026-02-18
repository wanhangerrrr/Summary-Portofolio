import { Layers, ShieldCheck, Wrench, LucideIcon } from 'lucide-react';
import { HIGHLIGHTS } from '../data/config';

const ICON_MAP: Record<string, LucideIcon> = {
  Layers,
  ShieldCheck,
  Wrench,
};

const COLOR_MAP: Record<string, string> = {
  sky: 'from-sky-500/10 to-sky-500/5 border-sky-200/60 dark:border-sky-800/60 dark:from-sky-500/10 dark:to-sky-900/20',
  teal: 'from-teal-500/10 to-teal-500/5 border-teal-200/60 dark:border-teal-800/60 dark:from-teal-500/10 dark:to-teal-900/20',
  cyan: 'from-cyan-500/10 to-cyan-500/5 border-cyan-200/60 dark:border-cyan-800/60 dark:from-cyan-500/10 dark:to-cyan-900/20',
};

const ICON_COLOR_MAP: Record<string, string> = {
  sky: 'text-sky-500 bg-sky-100 dark:bg-sky-900/40',
  teal: 'text-teal-500 bg-teal-100 dark:bg-teal-900/40',
  cyan: 'text-cyan-500 bg-cyan-100 dark:bg-cyan-900/40',
};

const DOT_COLOR_MAP: Record<string, string> = {
  sky: 'bg-sky-400',
  teal: 'bg-teal-400',
  cyan: 'bg-cyan-400',
};

export default function Highlights() {
  return (
    <section id="highlights" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            What Makes Hafiz Tick
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Three pillars that define how he approaches every project.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {HIGHLIGHTS.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div
                key={item.title}
                className={`relative p-6 rounded-2xl border bg-gradient-to-br ${COLOR_MAP[item.color]} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-slate-900/50 group`}
              >
                <div className={`inline-flex p-2.5 rounded-xl mb-4 ${ICON_COLOR_MAP[item.color]}`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                <ul className="space-y-1.5">
                  {item.items.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${DOT_COLOR_MAP[item.color]}`} />
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
