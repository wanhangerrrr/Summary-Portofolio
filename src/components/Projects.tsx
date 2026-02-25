import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProjectCard from './ProjectCard';

type FilterType = 'All' | 'ML' | 'AI' | 'Web' | 'Mobile';
const FILTERS: FilterType[] = ['All', 'ML', 'AI', 'Web', 'Mobile'];

export default function Projects() {
  const [active, setActive] = useState<FilterType>('All');
  const { t } = useLanguage();

  const filtered = active === 'All'
    ? t.projects.items
    : t.projects.items.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-32 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter leading-none">
            {t.projects.title}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg sm:text-xl font-light leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-16" role="group" aria-label="Filter projects by category">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              aria-pressed={active === filter}
              className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 border-2 ${active === filter
                ? 'bg-emerald-500 text-slate-950 border-emerald-500 shadow-xl shadow-emerald-500/20'
                : 'bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:text-emerald-500'
                }`}
            >
              {filter === 'All' ? t.projects.filter_all : filter}
            </button>
          ))}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ minHeight: '600px' }}
        >
          {filtered.map((project, idx) => (
            <div
              key={project.id}
              className="animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* @ts-ignore - Project type mapping */}
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-40 glass-card rounded-[3rem]">
            <p className="text-xl font-black uppercase tracking-widest text-slate-400 dark:text-slate-600">
              {t.projects.empty}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
