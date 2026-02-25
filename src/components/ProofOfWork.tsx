import { Rocket, GitBranch, Brain, Award, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';
import { LucideIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ICON_MAP: Record<string, LucideIcon> = {
  Rocket,
  GitBranch,
  Brain,
};

export default function ProofOfWork() {
  const { t } = useLanguage();

  return (
    <section id="proof" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-900/30 text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-4 border border-sky-200 dark:border-sky-800">
            {t.proof.section_label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            {t.proof.title}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            {t.proof.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {t.proof.items.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div
                key={item.label}
                className="relative overflow-hidden p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900 hover:border-sky-300 dark:hover:border-sky-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-slate-900/60 text-center group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="inline-flex p-4 rounded-2xl bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                    {item.value}
                  </div>
                  <div className="font-bold text-slate-700 dark:text-slate-200 text-sm mb-2 uppercase tracking-wide">
                    {item.label}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 leading-snug">{item.note}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30 p-8 sm:p-10 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <Award size={20} className="text-teal-500" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t.proof.certifications.title}</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {t.proof.certifications.items.map((cert) => (
              <div
                key={cert.name}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-teal-300 dark:hover:border-teal-700 transition-all duration-200 hover:shadow-md"
              >
                <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-500 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                    <path d="M8.5 2.5L4 7.5 1.5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">{cert.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{cert.issuer}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-wrap gap-4">
            <a
              href={SITE_CONFIG.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 font-semibold transition-colors group"
            >
              <ExternalLink size={14} className="group-hover:scale-110 transition-transform" />
              {t.proof.view_full}
            </a>
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 font-semibold transition-colors group"
            >
              <ExternalLink size={14} className="group-hover:scale-110 transition-transform" />
              {t.proof.browse_github}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
