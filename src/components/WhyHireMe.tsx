import { GitMerge, ShieldCheck, Cpu, MessageSquare, LucideIcon } from 'lucide-react';
import { WHY_HIRE_ME, BEST_FIT_ROLES } from '../data/config';

const ICON_MAP: Record<string, LucideIcon> = {
  GitMerge,
  ShieldCheck,
  Cpu,
  MessageSquare,
};

export default function WhyHireMe() {
  return (
    <section id="why" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-500 mb-2">
            Value Proposition
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Why Work With Hafiz?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Beyond the code — the mindset and skills that make the difference.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {WHY_HIRE_ME.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 hover:border-teal-300 dark:hover:border-teal-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-slate-900/60 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Icon size={18} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold text-teal-500 uppercase tracking-wide">
                      0{i + 1}
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-3">
            Best fit for roles in:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {BEST_FIT_ROLES.map((role) => (
              <span
                key={role}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/50 transition-colors"
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
