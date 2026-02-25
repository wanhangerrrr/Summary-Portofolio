import { GitMerge, ShieldCheck, Cpu, MessageSquare, LucideIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ICON_MAP: Record<string, LucideIcon> = {
  GitMerge,
  ShieldCheck,
  Cpu,
  MessageSquare,
};

export default function WhyHireMe() {
  const { t } = useLanguage();

  return (
    <section id="why" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-4 border border-teal-200 dark:border-teal-800">
            {t.why_me.section_label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            {t.why_me.title}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            {t.why_me.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {t.why_me.items.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div
                key={item.title}
                className="flex gap-5 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-teal-300 dark:hover:border-teal-700 transition-all duration-300 hover:shadow-xl dark:hover:shadow-slate-900/60 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <Icon size={24} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-teal-500 uppercase tracking-wide bg-teal-50 dark:bg-teal-900/20 px-2 py-0.5 rounded-md">
                      0{i + 1}
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">{item.title}</h3>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wide">
            {t.why_me.best_fit}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {t.why_me.roles.map((role) => (
              <span
                key={role}
                className="px-5 py-2 rounded-full text-sm font-semibold bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800/50 hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
