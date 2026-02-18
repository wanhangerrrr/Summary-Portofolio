import { useState } from 'react';
import { PROJECTS, ProjectCategory } from '../data/projects';
import ProjectCard from './ProjectCard';

type FilterType = 'All' | ProjectCategory;
const FILTERS: FilterType[] = ['All', 'ML', 'AI', 'Web', 'Mobile'];

export default function Projects() {
  const [active, setActive] = useState<FilterType>('All');

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Top Projects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Real problems. Real solutions. Built end-to-end.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8" role="group" aria-label="Filter projects by category">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              aria-pressed={active === filter}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                active === filter
                  ? 'bg-sky-500 text-white border-sky-500 shadow-md shadow-sky-500/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-sky-300 dark:hover:border-sky-700 hover:text-sky-600 dark:hover:text-sky-400'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ minHeight: '400px' }}
        >
          {filtered.map((project) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDuration: '0.3s' }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-400 dark:text-slate-600">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  );
}
