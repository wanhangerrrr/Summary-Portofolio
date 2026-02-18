export type ProjectCategory = 'ML' | 'AI' | 'Web' | 'Mobile';

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  problem: string;
  solution: string;
  stack: string[];
  caseStudyUrl?: string;
  repoUrl: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Fraud Detection — Mobile Banking',
    category: 'ML',
    problem: 'Financial transactions are vulnerable to fraud, making real-time detection critical for digital banking.',
    solution: 'Built an XGBoost classifier with feature engineering achieving high-accuracy fraud prediction on imbalanced datasets.',
    stack: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'SMOTE'],
    repoUrl: 'https://github.com/wanhangerrrr',
  },
  {
    id: 2,
    title: 'AI-Powered Mobile Notebook',
    category: 'AI',
    problem: 'Students and professionals need smart note-taking tools that can summarize and organize content intelligently.',
    solution: 'Developed a Flutter mobile app with integrated AI text processing for smart note organization and summarization.',
    stack: ['Flutter', 'Dart', 'AI API', 'Firebase'],
    repoUrl: 'https://github.com/wanhangerrrr',
  },
  {
    id: 3,
    title: 'Tomato Leaf Classification (Mobile)',
    category: 'Mobile',
    problem: 'Farmers struggle to identify plant diseases early, leading to significant crop losses.',
    solution: 'Deployed a TensorFlow Lite CNN model in a Flutter app enabling real-time leaf disease detection from camera.',
    stack: ['Flutter', 'TensorFlow Lite', 'CNN', 'Dart'],
    repoUrl: 'https://github.com/wanhangerrrr',
  },
  {
    id: 4,
    title: 'UMKM Management App',
    category: 'Web',
    problem: 'Small Indonesian businesses (UMKM) lack affordable digital tools for inventory and financial management.',
    solution: 'Built a full-stack web app for UMKM owners to manage products, sales, and generate financial reports.',
    stack: ['React', 'Node.js', 'Supabase', 'Tailwind CSS'],
    repoUrl: 'https://github.com/wanhangerrrr',
  },
  {
    id: 5,
    title: 'Tomato Leaf Classification (Web)',
    category: 'Web',
    problem: 'Agricultural extension workers need an accessible browser-based tool for plant disease diagnosis.',
    solution: 'Created a React web app that runs a TensorFlow.js model to classify tomato leaf diseases from uploaded images.',
    stack: ['React', 'TensorFlow.js', 'Python', 'Flask'],
    repoUrl: 'https://github.com/wanhangerrrr',
  },
  {
    id: 6,
    title: 'Portfolio Analytics Dashboard',
    category: 'Web',
    problem: 'Recruiters and collaborators need a fast, data-driven summary of a developer\'s skills and project history.',
    solution: 'Designed an interactive analytics dashboard visualizing skills, project categories, and activity with clean charts.',
    stack: ['React', 'Recharts', 'Tailwind CSS', 'GitHub API'],
    caseStudyUrl: 'https://wanhangerrrr.github.io/Portofolio-MuhammadHafizFassya/',
    repoUrl: 'https://github.com/wanhangerrrr',
  },
];
