import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/projects';

const CATEGORY_COLORS: Record<string, string> = {
  ML: 'bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300 border-sky-200 dark:border-sky-800',
  AI: 'bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300 border-teal-200 dark:border-teal-800',
  Web: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800',
  Mobile: 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300 border-orange-200 dark:border-orange-800',
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col h-full p-5 rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/60 hover:border-sky-300 dark:hover:border-sky-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-slate-900/60 group">
      <div className="flex items-start justify-between gap-2 mb-3">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${CATEGORY_COLORS[project.category]}`}>
          {project.category}
        </span>
      </div>

      <h3 className="font-bold text-slate-900 dark:text-white text-base mb-3 leading-snug group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
        {project.title}
      </h3>

      <div className="flex-1 space-y-2 mb-4">
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          <span className="font-semibold text-slate-600 dark:text-slate-300">Problem: </span>
          {project.problem}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          <span className="font-semibold text-teal-600 dark:text-teal-400">Impact: </span>
          {project.solution}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-slate-100 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-2 pt-3 border-t border-slate-100 dark:border-slate-700/60">
        {project.caseStudyUrl && (
          <a
            href={project.caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold transition-all duration-200"
          >
            <ExternalLink size={12} />
            Case Study
          </a>
        )}
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:border-sky-400 dark:hover:border-sky-600 hover:text-sky-600 dark:hover:text-sky-400 transition-all duration-200 ${!project.caseStudyUrl ? 'flex-1' : ''}`}
        >
          <Github size={12} />
          Repo
        </a>
      </div>
    </article>
  );
}
