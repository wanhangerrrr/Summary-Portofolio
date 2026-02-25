import { Mail, Linkedin, Github, MessageCircle, ExternalLink, Code2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/config';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const CONTACT_LINKS = [
    {
      icon: Mail,
      label: t.footer.contact_links[0].label,
      href: SITE_CONFIG.emailUrl,
      color: 'hover:text-sky-500 hover:border-sky-300 dark:hover:border-sky-700',
    },
    {
      icon: Linkedin,
      label: t.footer.contact_links[1].label,
      href: SITE_CONFIG.linkedinUrl,
      color: 'hover:text-blue-500 hover:border-blue-300 dark:hover:border-blue-700',
    },
    {
      icon: MessageCircle,
      label: t.footer.contact_links[2].label,
      href: SITE_CONFIG.whatsappUrl,
      color: 'hover:text-green-500 hover:border-green-300 dark:hover:border-green-700',
    },
    {
      icon: Github,
      label: t.footer.contact_links[3].label,
      href: SITE_CONFIG.githubUrl,
      color: 'hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-400',
    },
  ];

  return (
    <footer id="contact" className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <Code2 size={24} className="text-sky-500" />
            <span className="font-bold text-slate-900 dark:text-white text-lg">Muhammad Hafiz Fassya</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
            {t.footer.ready_title}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto text-base mb-8 leading-relaxed">
            {t.footer.ready_subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {CONTACT_LINKS.map(({ icon: Icon, label, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${color}`}
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>

          <a
            href={SITE_CONFIG.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white text-sm font-bold transition-all duration-200 shadow-xl shadow-sky-500/20 hover:shadow-sky-500/30 hover:-translate-y-0.5"
          >
            <ExternalLink size={16} />
            {t.footer.open_portfolio}
          </a>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
            {t.footer.note_summary}
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
