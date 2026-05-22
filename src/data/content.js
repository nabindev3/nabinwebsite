// Centralised portfolio content. Edit values here — components consume from this module.

export const NAV_LINKS = [
  { href: '#about',      label: 'About' },
  { href: '#skills',     label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects' },
  { href: '#research',   label: 'Research' },
  { href: '#education',  label: 'Education' },
  { href: '#photos',     label: 'Photos' }
];

export const HERO = {
  status: 'Available for Work',
  name: 'Nabin Prasad Dev',
  role: 'AI/ML Engineer.',
  desc: '<strong>Bridging Data Intelligence with Premium User Experience</strong>, an AI/ML Engineer with 7+ years of operational leadership, building models that solve real problems in urban systems, hospitality, and public safety.',
  tags: [
    'Python · TensorFlow · PyTorch',
    'Computer Vision · NLP',
    'Urban Policy',
    'Civic Technology'
  ]
};

export const MARQUEE = [
  'Machine Learning', 'Computer Vision', 'Deep Learning', 'Urban Policy',
  'Civic Technology', 'TensorFlow', 'PyTorch', 'Data Engineering',
  'NLP', 'Smart Cities', 'Python', 'MLOps', 'FastAPI', 'Docker'
];

export const ABOUT = {
  paragraphs: [
    `I am an <strong>AI/ML specialist</strong> with a Computer Science background and a somewhat unconventional "secret weapon": seven years in luxury hospitality. While I'm deeply technical, focusing my expertise on <strong>Computer Vision and NLP</strong> with Python, TensorFlow, and PyTorch, my time in operations taught me something code alone cannot: how to build for people under pressure.`,
    `My work has always been about <strong>high-stakes, real-world impact</strong>. Whether I was developing earthquake early warning systems for the <strong>Nepal Academy of Science and Technology</strong>, researching open space governance in Kathmandu, or architecting data infrastructure for major investment conglomerates, I've stayed grounded in the belief that AI should solve <em>human</em> problems, not just technical ones.`
  ],
  blockquote: `"I don't just build models; I ask the domain-specific questions that ensure those models actually work when the stakes are high."`,
  badges: [
    '🍁 Legally entitled to work in Canada',
    '🇳🇵 Nepali origin',
    '🇮🇳 KIIT University alumni'
  ],
  stats: [
    { num: '7+',    desc: 'Years professional experience across 3 countries' },
    { num: 'AI/ML', desc: 'Postgrad certificate — Lambton College Toronto, 2024' },
    { num: '3+',    desc: 'Years luxury hospitality (Nobu, Marriott)' },
    { num: '30%',   desc: 'Operational efficiency gain — legacy DB modernization' }
  ],
  info: [
    { key: 'Email',     val: 'nabinprasaddev33@gmail.com' },
    { key: 'Degree',    val: 'BTech CSE + PG AI/ML' },
    { key: 'Status',    val: 'Open to Work', valStyle: { color: '#3DBF82' } },
    { key: 'Languages', val: 'EN · NE · FR (learning)' }
  ]
};

export const SKILL_CATEGORIES = [
  {
    title: 'Languages & Core',
    items: [
      { name: 'Python',      w: 0.93 },
      { name: 'SQL',         w: 0.85 },
      { name: 'Bash / Linux', w: 0.72 }
    ]
  },
  {
    title: 'ML / AI Frameworks',
    items: [
      { name: 'TensorFlow / Keras', w: 0.88 },
      { name: 'PyTorch',            w: 0.84 },
      { name: 'Scikit-Learn',       w: 0.91 },
      { name: 'Pandas / NumPy',     w: 0.92 }
    ]
  },
  {
    title: 'DevOps & Tooling',
    items: [
      { name: 'Git / GitHub',   w: 0.88 },
      { name: 'Docker',         w: 0.68 },
      { name: 'FastAPI',        w: 0.82 },
      { name: 'MLflow / CI/CD', w: 0.78 }
    ]
  },
  {
    title: 'Domain & Leadership',
    items: [
      { name: 'Stakeholder Communication', w: 0.95 },
      { name: 'Team Leadership',            w: 0.89 },
      { name: 'Policy Research & Analysis', w: 0.82 }
    ]
  }
];

export const WORKFLOW = [
  { num: '01', label: ['Data', 'Collection'],     sub: ['Acquisition, cleaning,', 'validation pipelines'] },
  { num: '02', label: ['Feature', 'Engineering'], sub: ['Domain-driven', 'transformations'] },
  { num: '03', label: ['Model', 'Training'],      sub: ['Experiment tracking', 'via MLflow'] },
  { num: '04', label: ['Evaluation', '& Tuning'], sub: ['SHAP explainability', '+ hyperparameter search'] },
  { num: '05', label: ['Deployment', 'Pipeline'], sub: ['Docker + FastAPI', '+ GitHub Actions CI/CD'] },
  { num: '06', label: ['Monitoring', '& Iteration'], sub: ['Nightly drift detection', '+ A/B testing'] }
];

export const EXPERIENCE = {
  tech: [
    {
      date: 'Jun 2021 – Sep 2021',
      loc:  'Lalitpur, Nepal',
      role: 'Assistant Research Fellow',
      company: 'Nepal Academy of Science & Technology (NAST)',
      bullets: [
        'Designed ML/GAN models for Earthquake Early Warning Systems — directly informing national safety infrastructure policy',
        'Authored technical reports adapted for non-technical government stakeholders, bridging research and actionable policy',
        'Collaborated with senior scientists to validate model outputs against seismic datasets'
      ],
      tags: ['Public Safety', 'ML Research', 'GAN Models', 'Policy Reporting']
    },
    {
      date: 'Oct 2021 – Aug 2022',
      loc:  'Lalitpur, Nepal',
      role: 'Python Developer — Data Systems',
      company: 'Shailung Investment Group',
      bullets: [
        'Architected data analysis pipelines extracting actionable insights from large-scale infrastructure datasets',
        'Reprogrammed legacy databases, achieving a <strong>30% increase in operational efficiency</strong>',
        'Integrated cross-departmental data storage solutions across a multi-entity organizational structure',
        'Designed automated reporting dashboards used by executive leadership for investment decisions'
      ],
      tags: ['Python', 'SQL', 'Data Engineering', 'Legacy Modernization']
    }
  ],
  ops: [
    {
      date: 'May 2025 – Present',
      loc:  'Toronto, ON',
      role: 'Guest Experience Specialist',
      company: 'Nobu Hotel Toronto',
      bullets: [
        'Directed complex pre-opening operational workstreams; designed administrative workflows and document control standards from the ground up',
        'Managed high-priority stakeholder inquiries and confidential matters with full professional discretion',
        'Maintained 100% audit compliance across all financial reconciliations in a nightly reporting environment',
        'Applied systems thinking to optimize cross-departmental coordination between executive leadership and front-line staff'
      ],
      tags: ['Operational Leadership', 'Audit Compliance', 'Stakeholder Management']
    }
  ]
};

export const FEATURED_PROJECTS = [
  {
    type: '⭐ Featured · Interpretability · Research',
    year: '2026',
    title: 'TSFM Routing Probe — Label-Free Forecast-Difficulty Signals for Time-Series Foundation Models',
    hook: '"Not every forecast deserves equal trust. The hard part is knowing which ones don\'t."',
    problem: `Time-series foundation models like Chronos, TimesFM and Moirai give strong zero-shot forecasts on unseen series — but they ship without a native abstention or uncertainty signal. In production, every forecast is treated equally: same compute, same trust, same downstream commitment. Some windows are <strong>5× harder</strong> than others, and there's no built-in way to know which. The open question, unclaimed in the published 2026 literature: do a TSFM's internal representations encode a self-difficulty signal that a cheap classical baseline doesn't already capture?`,
    stack: `<strong>Backbone:</strong> Chronos-T5-small (60 M, T5 encoder-decoder, LM-style training on quantized numeric tokens)<br><strong>Interpretability:</strong> TopK Sparse Autoencoder (8× expansion, d_hidden=4096, k=32, aux-revival) · Encoder block hooks (mid + late)<br><strong>Probing:</strong> L1 logistic · TimeSeriesSplit cross-validation · Paired bootstrap (2 000 iterations) for ΔAUROC CIs<br><strong>Selective prediction:</strong> Risk-coverage curves · AURC · Oracle/random baselines<br><strong>Storage:</strong> safetensors (per-token fp16) · Parquet (train-only-normalized labels) · seasonal-naive MASE (m = 24)<br><strong>Ops:</strong> Hard guardrails (probe refuses on unlabeled data or random-init SAE) · One-command reproduce.sh · pinned env`,
    solution: `A leakage-controlled, paired-bootstrap-rigorous pipeline that hooks Chronos-T5 encoder activations, trains an 8× TopK SAE only on train-split tokens, and runs five probes in parallel — input-stats baseline, +raw activations, +SAE features, plus two diagnostic isolation probes to decide whether internal representations add predictive power beyond eight classical context-window statistics. Reframes the strongest probe as an abstention signal: sort test windows ascending by predicted P(hard), retain the predicted-easy coverage fraction, and measure mean CRPS on retained against an oracle (sort by true CRPS) and a 2 000-permutation random baseline. Cross-layer robustness check re-runs the full probe on the late-encoder (block 5) via a fast <code>--skip_predict</code> activation-only extraction that reuses cached CRPS labels.<br><br>Methodological scaffolding the project enforces in code: temporal train/test split with purge gap ≥ context + horizon (kills the overlapping-sliding-window leakage that inflates AUROC in most published probes), train-only CRPS normalization, seasonal-naive MASE, and an inner CV that uses TimeSeriesSplit instead of shuffled K-fold so consecutive overlapping windows don't leak across folds when picking L1 regularization.`,
    pills: ['Python', 'PyTorch', 'Chronos-T5', 'TopK SAE', 'scikit-learn', 'statsmodels', 'safetensors', 'Parquet', 'Matplotlib', 'LaTeX'],
    links: [
      { href: 'https://github.com/nabindev3/TSFM-Routing-Probe', label: 'View on GitHub →', primary: true },
      { href: 'https://github.com/nabindev3/TSFM-Routing-Probe/tree/main/paper', label: 'Workshop Report (LaTeX) →' }
    ],
    impactLabel: 'Impact & Academic Rigor',
    kpis: [
      { num: '30%',   label: 'Oracle Ranking Captured (AURC 1.22 vs 0.85)' },
      { num: '−8.1%', label: 'Mean CRPS @ 50% Coverage' },
      { num: '701',   label: 'Forecast Windows (483 / 167 / 51 purge)' },
      { num: '2×',    label: 'Encoder Layers Tested (mid + late) — null is layer-robust' },
      { num: '2 000', label: 'Paired-Bootstrap Iterations' },
      { num: 'Null',  label: 'Δ(SAE − stats) = −0.228, 95% CI [−0.366, −0.092]' }
    ],
    result: `Two findings from one pipeline, neither reframed post-hoc. (1) A rigorous <strong>null</strong> for the SAE-features-add-incremental-difficulty-signal hypothesis at both the mid- and late-encoder of chronos-t5-small, with paired-bootstrap CIs that don't cross zero on Δ(internal − stats). (2) A positive <strong>selective-prediction</strong> result on the same data: the input-statistics probe captures 30% of the oracle's available AURC improvement. The novelty wedge — label-free, inference-time difficulty prediction for routing/abstention — remains unclaimed in the 2026 literature: Mishra (arXiv:2603.10071) did causal ablation, TimeSAE (arXiv:2601.09776) did post-hoc black-box explanation, neither did this. Workshop-formatted manuscript, one-command reproducible pipeline, hard methodology guardrails in code.`,
    tagline: `Not another SAE benchmark — a leakage-controlled test of whether a TSFM's internals know what its CRPS distribution doesn't yet.`
  },
  {
    type: '⭐ Featured · LLM Systems · Research',
    year: '2026',
    title: 'Cascade Engine — Multi-Tier LLM Inference Router',
    hook: '"Not every query needs GPT-4o. Knowing which ones do is the hard part."',
    problem: `Serving generative AI in production is incredibly expensive — frontier models like GPT-4o cost nearly <strong>100× more per token</strong> than small or local models. But blindly routing all traffic to a cheap model destroys quality. Deciding <em>which</em> queries actually need premium reasoning is a hard routing problem.`,
    stack: `<strong>Routing:</strong> Frugal cascade logic · Contextual Discounted Thompson Sampling (CD-TS)<br><strong>Intelligent Layers:</strong> Microsoft Presidio (PII) · FAISS (semantic cache) · DistilBERT + VADER (gatekeeper)<br><strong>Engines:</strong> Ollama — local llama3.2:3b · OpenAI — gpt-4o-mini / gpt-4o<br><strong>Ops:</strong> pytest · GitHub Actions CI/CD · LaTeX manuscript`,
    solution: `A deterministic + learned routing framework that triages every query through an intelligent pipeline before any expensive API call. <strong>PrivacyFilter</strong> (Presidio) redacts PII before it leaves the local network; <strong>SemanticCache</strong> (FAISS) returns highly-rated past answers via vector similarity, bypassing inference entirely; <strong>Gatekeeper</strong> (DistilBERT + VADER) scores syntactic complexity and intent to preemptively assign the cheapest capable tier; then <strong>Multi-Tier Routing</strong> dispatches to Tier 1 (local llama3.2:3b), Tier 2 (gpt-4o-mini), or Tier 3 (gpt-4o) only when warranted.`,
    pills: ['Python', 'PyTorch', 'DistilBERT', 'FAISS', 'Presidio', 'Ollama', 'OpenAI', 'VADER', 'pytest', 'GitHub Actions', 'LaTeX'],
    links: [
      { href: 'https://github.com/nabindev3/Cascade-Engine', label: 'View on GitHub →', primary: true },
      { href: 'https://github.com/nabindev3/Cascade-Engine/tree/main/paper', label: 'Manuscript (LaTeX) →' }
    ],
    impactLabel: 'Impact & Academic Rigor',
    kpis: [
      { num: '60%',  label: 'Cost Reduction' },
      { num: '95%+', label: 'Quality Parity' },
      { num: '100×', label: 'Frontier Cost Delta' },
      { num: '3',    label: 'Model Tiers' },
      { num: 'CD-TS', label: 'Learned Router' }
    ],
    result: `Full evaluation pipeline on <strong>Alpaca-Eval</strong> generating statistically rigorous <strong>Pareto frontiers</strong> (Cost vs. Quality), benchmarked against RouteLLM. Formalized into a LaTeX academic manuscript with CI/CD — prepared for submission to top-tier ML/Systems venues (e.g. <strong>MLSys</strong>).`,
    tagline: `Not an LLM wrapper — the infrastructure that makes LLMs cheap enough for enterprises to actually deploy.`
  },
  {
    type: '⭐ Featured · MLOps · Hospitality AI',
    year: '2025',
    title: 'Smart Hotel Analytics Platform',
    hook: '"7 years working in hotels showed me exactly what data was being wasted."',
    problem: `Hotel management relies heavily on static, backward-looking reports. Critical revenue decisions — like overbooking limits and dynamic pricing — are often made via intuition rather than predictive data, resulting in lost revenue and operational inefficiencies.`,
    stack: `<strong>Backend:</strong> FastAPI · Python 3.11 · GZip + CORS middleware<br><strong>ML Models:</strong> Prophet (time-series) · LightGBM + SMOTE (classification) · KNN (recommender) · SHAP (explainability)<br><strong>NLP:</strong> 3-tier sentiment pipeline — HuggingFace / Anthropic Claude / TextBlob<br><strong>Ops & UI:</strong> Docker Compose · Streamlit · MLflow · GitHub Actions CI/CD`,
    solution: `A production-grade MLOps system featuring 9 FastAPI endpoints. Three time-series models forecast ADR, Occupancy, and Revenue — incorporating external regressors like weather and holidays. A gradient-boosting cancellation classifier, an LP-based overbooking optimizer, and a dynamic pricing engine round out the core. The entire platform is containerized via Docker and heavily monitored with MLflow and nightly CI/CD drift detection. Built entirely from operational domain expertise earned at <strong>Nobu Hotel Toronto</strong> and <strong>Marriott</strong>.`,
    pills: ['Python 3.11', 'FastAPI', 'Prophet', 'LightGBM', 'SHAP', 'PuLP', 'Streamlit', 'MLflow', 'Docker', 'GitHub Actions', 'HuggingFace', 'Anthropic Claude', 'SMOTE'],
    links: [
      { href: 'https://github.com/nabindev3/Smart-Hotel-Analytics-', label: 'View on GitHub →', primary: true },
      { href: 'https://smart-hotel-analytics-platform-6ziv.onrender.com/', label: 'Live Demo ↗' }
    ],
    impactLabel: 'Measurable Outcomes',
    kpis: [
      { num: '7.4%',  label: 'ADR Forecast MAPE' },
      { num: '15.1%', label: 'Occupancy MAPE' },
      { num: '86.4%', label: 'Cancellation ROC-AUC' },
      { num: '18%',   label: 'Scheduling Savings (proj.)' },
      { num: '3×',    label: 'Faster Reporting' }
    ],
    result: `<strong>179,390</strong> booking records ingested · GBM accuracy <strong>77.6%</strong> · Data quality grade <strong>B</strong> — models trained on real, messy operational data (not a clean toy set)`,
    tagline: `Hospitality domain expertise + ML engineering = problems most AI engineers don't even know to ask about.`
  }
];

export const PROJECTS = [
  {
    type: 'Computer Vision · Group',
    year: '2024',
    title: 'Sign Language Translation',
    hook: '"Communication should never be a barrier."',
    desc: 'Real-time ASL gesture classification using CNN + MediaPipe landmark extraction. Bridges communication gaps for the Deaf and hard-of-hearing community with multi-sign vocabulary support.',
    result: 'Real-time gesture classification · Multi-sign vocabulary support',
    pills: ['Python', 'OpenCV', 'CNN', 'MediaPipe', 'TensorFlow'],
    links: [{ href: 'https://github.com/Ismail-Sohail/Sign-Language-Translation', label: 'Group Repo →', primary: true }]
  },
  {
    type: 'AI / GANs · Research',
    year: '2021',
    title: 'Earthquake Early Warning System',
    hook: '"National safety infrastructure, powered by ML."',
    desc: `GAN-based ML models developed at Nepal's national science institute to improve seismic infrastructure response modelling. Technical reports translated for government stakeholders to inform national safety protocols.`,
    result: 'Presented to government officials · Informed national safety policy',
    pills: ['TensorFlow', 'GANs', 'Scikit-Learn', 'NumPy']
  },
  {
    type: 'Smart City · IoT',
    year: '2024',
    title: 'IoT Traffic Signal System',
    hook: '"Vision Zero starts with smarter roads."',
    desc: `Computer Vision system predicting traffic signals and road hazards in real-time. Directly applicable to Toronto's Smart City initiatives, Vision Zero program, and congestion management infrastructure.`,
    result: 'Real-time hazard detection · Vision Zero applicable',
    pills: ['OpenCV', 'YOLO', 'IoT', 'Predictive ML']
  },
  {
    type: 'Urban Policy · Research',
    year: '2024',
    title: 'Urban Green Open Space Policy',
    hook: '"Governance gaps cost cities their lungs."',
    desc: `Analyzed unplanned urbanization in Kathmandu Valley, mapping governance gaps between national and municipal authorities. Proposed a unified framework with direct applicability to Toronto's open space strategies.`,
    result: 'Policy framework with Toronto comparative analysis',
    pills: ['Spatial Mapping', 'Policy Analysis', 'Comparative Gov']
  },
  {
    type: 'Data Engineering',
    year: '2022',
    title: 'Infrastructure Data Platform',
    hook: '"Legacy systems were costing 30% of operational capacity."',
    desc: 'Built end-to-end data analysis systems for a large investment conglomerate. Legacy database modernization and integrated cross-departmental data storage achieved a measurable 30% efficiency gain.',
    result: '30% efficiency gain · Cross-departmental data integration',
    pills: ['Pandas', 'NumPy', 'SQL', 'PostgreSQL']
  }
];

export const RESEARCH = [
  {
    type: 'Research Paper',
    title: 'GAN-Based Earthquake Early Warning: A Case Study for Developing Nations',
    abstract: `Technical report on applying Generative Adversarial Networks to seismic response modelling at Nepal's national science institute. Authored for non-technical government stakeholders.`,
    tags: ['GANs', 'Public Safety', 'Nepal']
  },
  {
    type: 'Policy Analysis',
    title: 'Governance Gaps in Urban Green Space: Kathmandu Valley & Lessons for Toronto',
    abstract: 'Comparative governance analysis mapping the disconnect between national and municipal urban planning authorities. Proposes a unified framework applicable to Canadian cities.',
    tags: ['Urban Planning', 'Comparative Policy', 'Toronto']
  },
  {
    type: 'Essay / Whitepaper',
    title: 'How AI Can Transform the Luxury Guest Experience',
    abstract: 'Exploring the practical applications of ML in luxury hospitality: predictive maintenance, hyper-personalization, and the ethical boundaries of data-driven guest profiling.',
    tags: ['AI in Hospitality', 'Ethics', 'NLP']
  },
  {
    type: 'Book Application',
    title: 'Harari\'s "Homo Deus" & The Future of Work in AI-Augmented Cities',
    abstract: `Applying Yuval Noah Harari's analysis of algorithmic decision-making to the specific context of Toronto's municipal workforce and civic technology programmes.`,
    tags: ['Future of Work', 'Civic Tech', 'Toronto']
  }
];

export const EDUCATION = {
  degrees: [
    {
      year: '2024',
      degree: 'Postgraduate Certificate',
      field: 'Artificial Intelligence & Machine Learning',
      school: 'Lambton College · Toronto, ON'
    },
    {
      year: '2021',
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      school: 'KIIT University · India'
    }
  ],
  certs: [
    'Deep Learning Specialization (9-course) — Coursera / DeepLearning.AI',
    'AI Workshop — IIT Kharagpur',
    'AWS Machine Learning — In Progress',
    'Google Data Analytics — Professional Certificate'
  ],
  languages: [
    { flag: '🇨🇦', name: 'English', level: 'Native / Full Professional' },
    { flag: '🇳🇵', name: 'Nepali',  level: 'Native' },
    { flag: '🇫🇷', name: 'French',  level: 'Elementary — Actively Learning' }
  ],
  langNote: 'I am actively developing my French proficiency to better contribute to Canadian public sector initiatives, municipal frameworks, and bilingual engineering teams.'
};

export const PHOTOS = [
  { alt: 'Mount Royal Lookout, Montréal',        caption: 'Mount Royal',           location: 'Montréal, QC',     objectPosition: 'center' },
  { alt: 'Toronto skyline at sunset',            caption: 'Sunset Skyline',        location: 'Toronto, ON',      objectPosition: 'top' },
  { alt: 'Downtown Toronto',                     caption: 'Downtown',              location: 'Toronto, ON',      objectPosition: 'center' },
  { alt: 'Machhapuchhre — Fishtail Peak',        caption: 'Machhapuchhre',         location: 'Mardi Himal, Nepal', objectPosition: 'center' },
  { alt: 'Patan Durbar Square, Kathmandu Valley', caption: 'Patan Durbar',          location: 'Lalitpur, Nepal',  objectPosition: 'center' },
  { alt: 'Himalayan vista from Nagarkot',        caption: 'Himalayan Vista',       location: 'Nagarkot, Nepal',  objectPosition: 'center' },
  { alt: 'Snowy Toronto street',                 caption: 'First Snow',            location: 'Toronto, ON',      objectPosition: 'center' },
  { alt: 'Castle Frank TTC station',             caption: 'Castle Frank Station',  location: 'Toronto, ON',      objectPosition: 'center' },
  { alt: 'Mardi Himal Base Camp',                caption: 'Mardi Himal Base Camp', location: 'Annapurna, Nepal', objectPosition: 'center' }
];

export const CONTACT = {
  blurb: `Whether it's an AI/ML role, civic tech project, urban research collaboration, or just a conversation — I'd love to hear from you.`,
  email: 'nabinprasaddev33@gmail.com',
  links: [
    { href: 'mailto:nabinprasaddev33@gmail.com', label: 'Email',   icon: 'mail' },
    { href: 'https://www.linkedin.com/in/nabin-prasad-dev-a9a3121b7', label: 'LinkedIn', icon: 'linkedin' },
    { href: 'https://github.com/nabindev3', label: 'GitHub', icon: 'github' }
  ]
};
