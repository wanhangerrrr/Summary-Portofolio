import { SITE_CONFIG } from './config';

export type Language = 'en' | 'id';

export interface TranslationData {
    nav: {
        home: string;
        about: string;
        projects: string;
        skills: string;
        contact: string;
        highlights: string;
        proof: string;
        whyMe: string;
    };
    hero: {
        badge: string;
        role_prefix: string;
        role_span: string;
        description_prefix: string;
        description_de: string;
        description_ml: string;
        description_web: string;
        view_portfolio: string;
        explore_github: string;
        see_projects: string;
        scroll: string;
        badges: string[];
        focus_value: string;
        quick_facts: {
            role: string;
            focus: string;
            availability: string;
            location: string;
        };
    };
    highlights: {
        title: string;
        subtitle: string;
        items: {
            icon: string;
            title: string;
            color: string;
            items: string[];
        }[];
    };
    projects: {
        title: string;
        subtitle: string;
        filter_all: string;
        empty: string;
        items: {
            id: number;
            title: string;
            category: string;
            problem: string;
            solution: string;
            stack: string[];
            repoUrl: string;
            caseStudyUrl?: string;
        }[];
    };
    proof: {
        section_label: string;
        title: string;
        subtitle: string;
        items: {
            icon: string;
            label: string;
            value: string;
            note: string;
        }[];
        certifications: {
            title: string;
            items: { name: string; issuer: string; }[];
        };
        view_full: string;
        browse_github: string;
    };
    why_me: {
        section_label: string;
        title: string;
        subtitle: string;
        items: {
            icon: string;
            title: string;
            desc: string;
        }[];
        best_fit: string;
        roles: string[];
    };
    footer: {
        ready_title: string;
        ready_subtitle: string;
        contact_links: { label: string; href: string }[];
        open_portfolio: string;
        note_summary: string;
        copyright: string;
    };
}

export const translations: Record<Language, TranslationData> = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact',
            highlights: 'Highlights',
            proof: 'Proof of Work',
            whyMe: 'Why Me',
        },
        hero: {
            badge: 'Summary Portfolio Project',
            role_prefix: 'Muhammad',
            role_span: 'Hafiz Fassya',
            description_prefix: "A 60-second overview of Hafiz's work in",
            description_de: 'Data Engineering',
            description_ml: 'Machine Learning',
            description_web: 'Web Systems',
            view_portfolio: 'View Full Portfolio',
            explore_github: 'Explore GitHub',
            see_projects: 'See Projects ↓',
            scroll: 'Scroll to explore',
            badges: ['Data Engineering', 'ML', 'Web', 'Mobile'],
            focus_value: 'Data · ML · Web',
            quick_facts: {
                role: 'Role',
                focus: 'Focus',
                availability: 'Availability',
                location: 'Location',
            },
        },
        highlights: {
            title: 'What Makes Hafiz Tick',
            subtitle: 'Three pillars that define how he approaches every project.',
            items: [
                {
                    icon: 'Layers',
                    title: 'What I Build',
                    color: 'sky',
                    items: ['End-to-end data pipelines', 'ML model deployment', 'Dashboards & analytics apps', 'Mobile & web applications'],
                },
                {
                    icon: 'ShieldCheck',
                    title: 'How I Work',
                    color: 'teal',
                    items: ['Observability-first mindset', 'Data validation at every step', 'Reliability over shortcuts', 'Clean, documented code'],
                },
                {
                    icon: 'Wrench',
                    title: 'Tools I Use',
                    color: 'cyan',
                    items: ['Python · SQL · Git', 'Scikit-learn · TensorFlow', 'React · Flutter', 'Docker · Supabase'],
                },
            ],
        },
        projects: {
            title: 'Top Projects',
            subtitle: 'Real problems. Real solutions. Built end-to-end.',
            filter_all: 'All',
            empty: 'No projects in this category yet.',
            items: [
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
            ],
        },
        proof: {
            section_label: 'Proof, not promises',
            title: 'Verified Track Record',
            subtitle: 'Qualitative proof of shipped work, not inflated numbers.',
            items: [
                { icon: 'Rocket', label: 'Deployed Projects', value: '6+', note: 'Live on GitHub Pages & app stores' },
                { icon: 'GitBranch', label: 'End-to-End Pipelines', value: '4+', note: 'Simulated & production-ready' },
                { icon: 'Brain', label: 'ML Deployments', value: '3+', note: 'Classification & prediction models' },
            ],
            certifications: {
                title: 'Certifications & Learning',
                items: [
                    { name: 'Google Data Analytics', issuer: 'Google / Coursera' },
                    { name: 'Machine Learning Specialization', issuer: 'DeepLearning.AI' },
                    { name: 'Flutter Development', issuer: 'Dicoding Indonesia' },
                    { name: 'Python for Data Science', issuer: 'IBM / Coursera' },
                ],
            },
            view_full: 'View full portfolio for details',
            browse_github: 'Browse GitHub repositories',
        },
        why_me: {
            section_label: 'Value Proposition',
            title: 'Why Work With Hafiz?',
            subtitle: 'Beyond the code — the mindset and skills that make the difference.',
            items: [
                { icon: 'GitMerge', title: 'Data Pipeline Thinking', desc: 'Designs systems end-to-end — from ingestion to insight delivery — with reliability built in.' },
                { icon: 'ShieldCheck', title: 'Reliability Mindset', desc: 'Validates data at every layer, writes tested code, and ships things that actually work.' },
                { icon: 'Cpu', title: 'Practical ML Deployment', desc: 'Bridges the gap from notebook experiments to production-ready model serving.' },
                { icon: 'MessageSquare', title: 'Clear Communication', desc: 'Translates technical complexity into simple dashboards and reports stakeholders understand.' },
            ],
            best_fit: 'Best fit for roles in:',
            roles: ['Data Engineer', 'ML Engineer', 'Backend Engineer', 'Full-Stack Developer', 'Data Analyst'],
        },
        footer: {
            ready_title: 'Ready to Build Something Great?',
            ready_subtitle: 'Open to data engineering, ML engineering, and full-stack opportunities. Let\'s connect.',
            contact_links: [
                { label: 'Email', href: SITE_CONFIG.emailUrl },
                { label: 'LinkedIn', href: SITE_CONFIG.linkedinUrl },
                { label: 'WhatsApp', href: SITE_CONFIG.whatsappUrl },
                { label: 'GitHub', href: SITE_CONFIG.githubUrl },
            ],
            open_portfolio: 'Open Full Portfolio',
            note_summary: 'This is a summary site. For full details, open the main portfolio.',
            copyright: `© ${new Date().getFullYear()} Muhammad Hafiz Fassya`,
        },
    },
    id: {
        nav: {
            home: 'Beranda',
            about: 'Tentang',
            projects: 'Proyek',
            skills: 'Keahlian',
            contact: 'Kontak',
            highlights: 'Sorotan',
            proof: 'Bukti Karya',
            whyMe: 'Kenapa Saya',
        },
        hero: {
            badge: 'Proyek Ringkasan Portofolio',
            role_prefix: 'Muhammad',
            role_span: 'Hafiz Fassya',
            description_prefix: 'Gambaran 60 detik karya Hafiz di bidang',
            description_de: 'Rekayasa Data',
            description_ml: 'Machine Learning',
            description_web: 'Sistem Web',
            view_portfolio: 'Lihat Portofolio Lengkap',
            explore_github: 'Jelajahi GitHub',
            see_projects: 'Lihat Proyek ↓',
            scroll: 'Gulir untuk menjelajahi',
            badges: ['Rekayasa Data', 'ML', 'Web', 'Mobile'],
            focus_value: 'Data · ML · Web',
            quick_facts: {
                role: 'Peran',
                focus: 'Fokus',
                availability: 'Ketersediaan',
                location: 'Lokasi',
            },
        },
        highlights: {
            title: 'Apa yang Membuat Hafiz Berbeda',
            subtitle: 'Tiga pilar yang mendefinisikan pendekatannya dalam setiap proyek.',
            items: [
                {
                    icon: 'Layers',
                    title: 'Apa yang Saya Bangun',
                    color: 'sky',
                    items: ['Pipeline data end-to-end', 'Deployment model ML', 'Dashboard & aplikasi analitik', 'Aplikasi mobile & web'],
                },
                {
                    icon: 'ShieldCheck',
                    title: 'Cara Saya Bekerja',
                    color: 'teal',
                    items: ['Pola pikir observabilitas', 'Validasi data di setiap langkah', 'Keandalan di atas jalan pintas', 'Kode yang bersih & terdokumentasi'],
                },
                {
                    icon: 'Wrench',
                    title: 'Alat yang Saya Gunakan',
                    color: 'cyan',
                    items: ['Python · SQL · Git', 'Scikit-learn · TensorFlow', 'React · Flutter', 'Docker · Supabase'],
                },
            ],
        },
        projects: {
            title: 'Proyek Unggulan',
            subtitle: 'Masalah nyata. Solusi nyata. Dibangun dari hulu ke hilir.',
            filter_all: 'Semua',
            empty: 'Belum ada proyek di kategori ini.',
            items: [
                {
                    id: 1,
                    title: 'Deteksi Penipuan — Mobile Banking',
                    category: 'ML',
                    problem: 'Transaksi keuangan rentan terhadap penipuan, membuat deteksi real-time sangat penting bagi bank digital.',
                    solution: 'Membangun klasifikasi XGBoost dengan rekayasa fitur yang mencapai akurasi tinggi pada dataset yang tidak seimbang.',
                    stack: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'SMOTE'],
                    repoUrl: 'https://github.com/wanhangerrrr',
                },
                {
                    id: 2,
                    title: 'Buku Catatan Mobile Bertenaga AI',
                    category: 'AI',
                    problem: 'Pelajar dan profesional membutuhkan alat pencatatan cerdas yang dapat meringkas dan mengatur konten secara otomatis.',
                    solution: 'Mengembangkan aplikasi mobile Flutter dengan pemrosesan teks AI terintegrasi untuk pengorganisasian dan peringkasan cerdas.',
                    stack: ['Flutter', 'Dart', 'AI API', 'Firebase'],
                    repoUrl: 'https://github.com/wanhangerrrr',
                },
                {
                    id: 3,
                    title: 'Klasifikasi Daun Tomat (Mobile)',
                    category: 'Mobile',
                    problem: 'Petani kesulitan mengidentifikasi penyakit tanaman secara dini, yang menyebabkan kerugian panen signifikan.',
                    solution: 'Menerapkan model CNN TensorFlow Lite di aplikasi Flutter yang memungkinkan deteksi penyakit daun real-time dari kamera.',
                    stack: ['Flutter', 'TensorFlow Lite', 'CNN', 'Dart'],
                    repoUrl: 'https://github.com/wanhangerrrr',
                },
                {
                    id: 4,
                    title: 'Aplikasi Manajemen UMKM',
                    category: 'Web',
                    problem: 'UMKM di Indonesia kekurangan alat digital yang terjangkau untuk manajemen inventaris dan keuangan.',
                    solution: 'Membangun web app full-stack bagi pemilik UMKM untuk mengelola produk, penjualan, dan laporan keuangan.',
                    stack: ['React', 'Node.js', 'Supabase', 'Tailwind CSS'],
                    repoUrl: 'https://github.com/wanhangerrrr',
                },
                {
                    id: 5,
                    title: 'Klasifikasi Daun Tomat (Web)',
                    category: 'Web',
                    problem: 'Penyuluh pertanian membutuhkan alat berbasis browser yang mudah diakses untuk diagnosis penyakit tanaman.',
                    solution: 'Membuat web app React yang menjalankan model TensorFlow.js untuk mengklasifikasikan penyakit daun tomat dari gambar yang diunggah.',
                    stack: ['React', 'TensorFlow.js', 'Python', 'Flask'],
                    repoUrl: 'https://github.com/wanhangerrrr',
                },
                {
                    id: 6,
                    title: 'Dashboard Analitik Portofolio',
                    category: 'Web',
                    problem: 'Perekrut dan kolaborator membutuhkan ringkasan cepat berbasis data tentang keterampilan dan riwayat proyek pengembang.',
                    solution: 'Merancang dashboard analitik interaktif yang memvisualisasikan keterampilan, kategori proyek, dan aktivitas dengan grafik bersih.',
                    stack: ['React', 'Recharts', 'Tailwind CSS', 'GitHub API'],
                    caseStudyUrl: 'https://wanhangerrrr.github.io/Portofolio-MuhammadHafizFassya/',
                    repoUrl: 'https://github.com/wanhangerrrr',
                },
            ],
        },
        proof: {
            section_label: 'Bukti, bukan janji',
            title: 'Rekam Jejak Terverifikasi',
            subtitle: 'Bukti kualitatif dari karya yang dikirimkan, bukan angka yang dibesar-besarkan.',
            items: [
                { icon: 'Rocket', label: 'Proyek Terdeploy', value: '6+', note: 'Live di GitHub Pages & app stores' },
                { icon: 'GitBranch', label: 'Pipeline End-to-End', value: '4+', note: 'Tersimulasi & siap produksi' },
                { icon: 'Brain', label: 'Deployment ML', value: '3+', note: 'Model klasifikasi & prediksi' },
            ],
            certifications: {
                title: 'Sertifikasi & Pembelajaran',
                items: [
                    { name: 'Google Data Analytics', issuer: 'Google / Coursera' },
                    { name: 'Machine Learning Specialization', issuer: 'DeepLearning.AI' },
                    { name: 'Flutter Development', issuer: 'Dicoding Indonesia' },
                    { name: 'Python for Data Science', issuer: 'IBM / Coursera' },
                ],
            },
            view_full: 'Lihat portofolio lengkap untuk detailnya',
            browse_github: 'Jelajahi repositori GitHub',
        },
        why_me: {
            section_label: 'Proposisi Nilai',
            title: 'Mengapa Bekerja Dengan Hafiz?',
            subtitle: 'Di luar kode — pola pikir dan keterampilan yang membuat perbedaan.',
            items: [
                { icon: 'GitMerge', title: 'Pemikiran Pipeline Data', desc: 'Merancang sistem dari hulu ke hilir — dari ingest hingga pengiriman insight — dengan keandalan bawaan.' },
                { icon: 'ShieldCheck', title: 'Pola Pikir Keandalan', desc: 'Memvalidasi data di setiap lapisan, menulis kode yang teruji, dan mengirimkan hal-hal yang benar-benar berfungsi.' },
                { icon: 'Cpu', title: 'Deployment ML Praktis', desc: 'Menjembatani kesenjangan dari eksperimen notebook ke layanan model siap produksi.' },
                { icon: 'MessageSquare', title: 'Komunikasi Jelas', desc: 'Menerjemahkan kerumitan teknis menjadi dashboard sederhana dan laporan yang dipahami pemangku kepentingan.' },
            ],
            best_fit: 'Paling cocok untuk peran:',
            roles: ['Data Engineer', 'ML Engineer', 'Backend Engineer', 'Full-Stack Developer', 'Data Analyst'],
        },
        footer: {
            ready_title: 'Siap Membangun Sesuatu yang Hebat?',
            ready_subtitle: 'Terbuka untuk peluang data engineering, ML engineering, dan full-stack. Mari terhubung.',
            contact_links: [
                { label: 'Email', href: SITE_CONFIG.emailUrl },
                { label: 'LinkedIn', href: SITE_CONFIG.linkedinUrl },
                { label: 'WhatsApp', href: SITE_CONFIG.whatsappUrl },
                { label: 'GitHub', href: SITE_CONFIG.githubUrl },
            ],
            open_portfolio: 'Buka Portofolio Lengkap',
            note_summary: 'Ini adalah situs ringkasan. Untuk detail lengkap, buka portofolio utama.',
            copyright: `© ${new Date().getFullYear()} Muhammad Hafiz Fassya`,
        },
    },
};
