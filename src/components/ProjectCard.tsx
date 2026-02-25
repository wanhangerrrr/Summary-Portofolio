import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="glass-card flex flex-col h-full p-8 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-3 group overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full translate-x-16 -translate-y-16 group-hover:bg-emerald-500/10 transition-colors" />

      <div className="flex items-center justify-between mb-8">
        <span className={`px-4 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400`}>
          {project.category}
        </span>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </div>

      <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight group-hover:text-emerald-500 transition-colors">
        {project.title}
      </h3>

      <div className="flex-1 space-y-6 mb-8">
        <div>
          <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 dark:text-slate-500 mb-2">Problem</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
            {project.problem}
          </p>
        </div>
        <div>
          <p className="text-[10px] uppercase font-black tracking-widest text-emerald-500 mb-2">Solution & Impact</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
            {project.solution}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-[10px] font-bold rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-6 border-t border-slate-100 dark:border-white/5">
        {project.caseStudyUrl && (
          <a
            href={project.caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-950 text-xs font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-emerald-500/10"
          >
            <ExternalLink size={14} />
            Case Study
          </a>
        )}
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white text-xs font-black uppercase tracking-widest hover:border-emerald-500/50 hover:text-emerald-500 transition-all duration-300 ${!project.caseStudyUrl ? 'flex-1' : ''}`}
        >
          <Github size={14} />
          Repo
        </a>
      </div>
    </article>
  );
}
