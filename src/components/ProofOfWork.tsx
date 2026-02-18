import { Rocket, GitBranch, Brain, Award, ExternalLink } from 'lucide-react';
import { PROOF_ITEMS, CERTIFICATIONS, SITE_CONFIG } from '../data/config';
import { LucideIcon } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Rocket,
  GitBranch,
  Brain,
};

export default function ProofOfWork() {
  return (
    <section id="proof" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-sky-500 mb-2">
            Proof, not promises
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Verified Track Record
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Qualitative proof of shipped work, not inflated numbers.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {PROOF_ITEMS.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div
                key={item.label}
                className="relative overflow-hidden p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/50 hover:border-sky-300 dark:hover:border-sky-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-slate-900/60 text-center group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="inline-flex p-3 rounded-xl bg-sky-100 dark:bg-sky-900/40 text-sky-500 mb-4">
                    <Icon size={22} />
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
                    {item.value}
                  </div>
                  <div className="font-semibold text-slate-700 dark:text-slate-200 text-sm mb-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{item.note}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-5">
            <Award size={18} className="text-teal-500" />
            <h3 className="font-bold text-slate-900 dark:text-white">Certifications & Learning</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-teal-300 dark:hover:border-teal-700 transition-all duration-200"
              >
                <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-500 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                    <path d="M8.5 2.5L4 7.5 1.5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">{cert.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{cert.issuer}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-5 border-t border-slate-200 dark:border-slate-700 flex flex-wrap gap-3">
            <a
              href={SITE_CONFIG.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 font-medium transition-colors"
            >
              <ExternalLink size={13} />
              View full portfolio for details
            </a>
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 font-medium transition-colors"
            >
              <ExternalLink size={13} />
              Browse GitHub repositories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
