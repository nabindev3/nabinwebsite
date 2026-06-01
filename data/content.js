// Centralised portfolio content. Edit values here — components consume from this module.

export const NAV_LINKS = [
  { href: '/about',      label: 'About' },
  { href: '/skills',     label: 'Skills' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects',   label: 'Projects' },
  { href: '/research',   label: 'Research' },
  { href: '/education',  label: 'Education' },
  { href: '/photos',     label: 'Photos' }
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
    { key: 'Email',     val: 'hi@nabinpdev.com' },
    { key: 'Degree',    val: 'BTech CSE + PG AI/ML' },
    { key: 'Status',    val: 'Open to Work', valStyle: { color: '#3DBF82' } },
    { key: 'Languages', val: 'EN · NE · FR (learning)' }
  ]
};

export const SKILL_CATEGORIES = [
  {
    title: 'Mathematical & Numeric Foundations',
    items: [
      { name: 'Scientific Computing & Clean Python', w: 0.93 },
      { name: 'Statistical Modeling & Numerical Optimization', w: 0.85 },
      { name: 'Unix / Linux Systems Engineering', w: 0.72 }
    ]
  },
  {
    title: 'Deep Learning & Interpretability Systems',
    items: [
      { name: 'Mechanistic Interpretability (SAEs, Patching)', w: 0.88 },
      { name: 'Deep Learning & Representation Probing', w: 0.84 },
      { name: 'Time-Series Foundation Models (TSFMs)', w: 0.91 },
      { name: 'Mathematical Seismics & Regression', w: 0.92 }
    ]
  },
  {
    title: 'MLOps & Scale Infrastructure',
    items: [
      { name: 'Distributed Inference & Routing Cascades', w: 0.88 },
      { name: 'FAISS Semantic Vector Search & Cache', w: 0.68 },
      { name: 'FastAPI Systems & CI/CD Pipelines', w: 0.82 },
      { name: 'MLflow & Automated Metric-Floor CI/CD', w: 0.78 }
    ]
  },
  {
    title: 'Operations Systems & Decision Science',
    items: [
      { name: 'High-Stakes Operational Risk Auditing', w: 0.95 },
      { name: 'Data Modernization & Capacity Optimization', w: 0.89 },
      { name: 'Technical-to-Executive Policy Analysis', w: 0.82 }
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
    title: 'FM Difficulty Probe — One Pipeline, Two Foundation Models: A Universal Predictive Null and an LLM-Specific Causal Signal',
    hook: '"Run the same experiment twice, in two worlds that share no architecture. What replicates is a property of SAEs. What doesn\'t tells you where the signal actually lives."',
    problem: `Two separate studies, one on an autoregressive LM (Pythia), one on an encoder-based time-series FM (Chronos-T5) each asked whether TopK-SAE features encode a self-difficulty signal beyond a cheap baseline, and each found a negative result. But a single negative result invites the reviewer's reflex: "you just did it wrong." The unclaimed question in the 2026 literature isn't "does it fail on model X?" it's does the phenomenon generalize? That can only be answered by running the identical pipeline, with the identical metrics, across two unrelated modalities and seeing which findings survive the crossing and which are artifacts of one architecture.`,
    stack: `<strong>Backbones:</strong> Pythia-410M/2.8B (LLM) and Chronos-T5-small/base (TSFM), behind one interface.<br><strong>Shared core (modality-agnostic, zero model code):</strong> TopK SAE (configurable expansion/k, aux dead-feature revival) · five-rung probe ladder (cheap → cheap+raw → cheap+SAE, +2 diagnostic isolations) · paired bootstrap (B=2000) ΔAUROC · label-permutation test · reconstruction-patch ablation with a single-vs-all-position coverage knob · risk-coverage/AURC · Platt + isotonic 5-fold OOF recalibration · cheap↔expensive cascade. Unit-tested on synthetic arrays.<br><strong>Two thin adapters implementing one Modality Protocol:</strong> lexical stats vs classical TS stats; residual-stream vs encoder-block hooks (mid + late each); StratifiedKFold vs TimeSeriesSplit CV; Δnats vs ΔCRPS causal metric; binary-correctness vs continuous-CRPS error scale.<br><strong>One config-driven runner:</strong> <code>--modality {llm,tsfm} --experiment {probe,causal,selective,cascade,calibrate}</code> → uniform json + parquet + PNG artifacts. Guardrails (refuses missing/random-init SAE and single-class labels), MPS threading, one unattended <code>reproduce.sh</code>.`,
    solution: `A merge-not-staple refactor: extract everything genuinely modality-independent into one tested core, make each model a ~150-line adapter, and gate the whole thing behind a regression check — no new experiment was trusted until both legacy headline numbers reproduced exactly through the shared code (LLM SQuAD/L18 raw AUROC 0.716; TSFM Δ(SAE−cheap) −0.228). Only then were the three reconciliation experiments run: <strong>(1)</strong> promote the TSFM raw-activation middle rung to a first-class comparator so both modalities report the same three-rung ladder at both layers; <strong>(2)</strong> port the LLM's single-vs-all-position patching distinction to Chronos with the metric held fixed; <strong>(3)</strong> a SAE-expansion robustness sweep (4×↔8×). The entire results table — every number, figure, and parquet — regenerates from one command.`,
    pills: ['Python', 'PyTorch', 'Pythia', 'Chronos-T5', 'TopK SAE', 'scikit-learn', 'statsmodels', 'safetensors', 'Parquet', 'Matplotlib', 'LaTeX'],
    links: [
      { href: 'https://github.com/nabindev3/llm-sae-difficulty', label: 'View on GitHub →', primary: true },
      { href: 'https://github.com/nabindev3/llm-sae-difficulty/tree/main/paper', label: 'Workshop Report (LaTeX) →' }
    ],
    impactLabel: 'Impact & Academic Rigor',
    kpis: [
      { num: '2',        label: 'Modalities (autoregressive LM & encoder TSFM cross-modal replication)' },
      { num: 'Δ≤0 ×3',   label: 'Predictive null replicates in all 3 datasets, both layers' },
      { num: '5/5 vs 0/5', label: 'Causal signal is LLM-specific (silent on TSFM)' },
      { num: '30–41%',   label: 'AURC captured by Platt-recalibrated selective predictor' },
      { num: '4× ≡ 8×',  label: 'Null replicates across swapped SAE expansion widths' }
    ],
    result: `The contribution is the dissociation. Three legs of the original thesis were tested across modalities; two replicated and one split — and the split is the result, not a failure. The predictive null and the deployable selective predictor are universal; the causal contribution is specific to the autoregressive LM (where coverage-not-fidelity holds: single-position patching undershoots, all-position surfaces 5/5 features) and absent in the TSFM (predictively redundant and causally quiet, reproducing the legacy Chronos null exactly at full sample budget). A forced two-way replication would invite "you tuned it"; a universal null + a modality-specific positive is harder to dismiss and pinpoints where the signal lives. Engineered as a regression-gated, leakage-controlled, one-command-reproducible repo, <code>core/</code> carries zero model code and every function is unit-testable on synthetic arrays — so the cross-modal claim rests on the same code running in both worlds, by construction.`,
    tagline: `Not a third SAE benchmark, the experiment that turns two negative results into one falsifiable claim about where, and in which kind of foundation model, sparse features carry a causal difficulty signal.`
  },
  {
    type: '⭐ Featured · LLM Systems · Research',
    year: '2026',
    title: 'Cascade Engine — Multi-Tier LLM Inference Router',
    hook: '"Not every query needs GPT-4o. Knowing which ones do is the hard part."',
    problem: `Serving generative AI in production is incredibly expensive — frontier models like GPT-4o cost nearly <strong>100× more per token</strong> than small or local models. But blindly routing all traffic to a cheap model destroys quality. Deciding which queries actually need premium reasoning is a hard routing problem, and in production, it's a moving target: cloud-model latency and reliability drift hour-by-hour with load, deprecations, and silent re-snapshots.`,
    stack: `<strong>Routing:</strong> Frugal cascade logic · Contextual Discounted Thompson Sampling (CD-TS) · Adaptive CD-TS · V<sub>T</sub>-free drift tracking via two-sided CUSUM change-detection · Linear Thompson Sampling (LinTS) contextual bandit over prompt features/embeddings<br><strong>Intelligent Layers:</strong> Microsoft Presidio (PII) · FAISS (semantic cache) · DistilBERT + VADER (gatekeeper)<br><strong>Engines:</strong> Ollama — local llama3.2:3b · OpenAI — gpt-4o-mini / gpt-4o<br><strong>Gateway:</strong> TypeScript + Express API gateway (API-key auth · rate limiting · batch · core failover)<br><strong>Ops:</strong> pytest · vitest + supertest · GitHub Actions CI/CD (Python core and TS gateway) · LaTeX manuscript`,
    solution: `A deterministic + learned routing framework that triages every query through an intelligent pipeline before any expensive API call. <strong>PrivacyFilter</strong> (Presidio) redacts PII before it leaves the local network; <strong>SemanticCache</strong> (FAISS) returns highly-rated past answers via vector similarity, bypassing inference entirely; <strong>Gatekeeper</strong> (DistilBERT + VADER) scores syntactic complexity and intent to preemptively assign the cheapest capable tier; then <strong>Multi-Tier Routing</strong> dispatches to Tier 1 (local llama3.2:3b), Tier 2 (gpt-4o-mini), or Tier 3 (gpt-4o) only when warranted.<br><br>The learned router doesn't just split traffic, it adapts online as engine reliability drifts: <strong>CD-TS</strong> discounts stale evidence under a known variation budget, and <strong>Adaptive CD-TS</strong> detects abrupt breaks (outages, deprecations) via two-sided CUSUM and restarts the affected arm with no prior knowledge of the drift rate. A hardened <strong>TypeScript gateway</strong> fronts the Python core with auth, rate-limiting, and transparent failover.`,
    pills: ['Python', 'PyTorch', 'DistilBERT', 'FAISS', 'Presidio', 'Ollama', 'OpenAI', 'VADER', 'TypeScript', 'Express', 'pytest', 'vitest', 'GitHub Actions', 'LaTeX'],
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
      { num: 'CD-TS', label: 'No-Regret Learned Router' }
    ],
    result: `Full evaluation pipeline on <strong>Alpaca-Eval</strong> generating statistically rigorous <strong>Pareto frontiers</strong> (Cost vs. Quality), benchmarked against <strong>RouteLLM</strong> and <strong>FrugalGPT</strong>.<br><br>The learned core is provably no-regret under non-stationary drift: <strong>CD-TS</strong> attains a sublinear pseudo-regret rate that matches the Besbes–Gur–Zeevi lower bound up to log factors, with a measured cross-horizon regret exponent of <strong>0.20–0.55</strong> versus a frozen offline-optimal baseline that degrades <strong>25–33×</strong> under drift. The <strong>Adaptive CD-TS</strong> variant matches or beats the oracle-tuned discount without ever observing the drift budget V<sub>T</sub>, and <strong>LinTS</strong> generalizes routing decisions across semantically similar prompts rather than fixed complexity bins. All formalized into a <strong>LaTeX academic manuscript</strong> with dual-language CI prepared for submission to top-tier ML/Systems venues (e.g. <strong>MLSys</strong>).`,
    tagline: `Not an LLM wrapper — the infrastructure that makes LLMs cheap enough, and reliable enough under real-world drift, for enterprises to actually deploy.`
  },
  {
    type: '⭐ Featured · MLOps · Hospitality AI',
    year: '2025 / 2026',
    title: 'Hotel Revenue ML Platform',
    hook: '"7 years working in hotels showed me exactly what data was being wasted."',
    problem: `Hotel management relies heavily on static, backward-looking reports. Critical revenue decisions — like overbooking limits and dynamic pricing — are often made via intuition rather than predictive data, resulting in lost revenue and operational inefficiencies.`,
    stack: `<strong>Backend:</strong> FastAPI · Python 3.11 · GZip + CORS middleware<br><strong>ML Models:</strong> XGBoost (classification) · N-BEATS &amp; Prophet (time-series forecasting) · KNN (recommender) · SHAP (explainability)<br><strong>NLP:</strong> 3-tier sentiment pipeline — HuggingFace Inference API / Anthropic Claude / TextBlob<br><strong>Ops & UI:</strong> Docker Compose · Streamlit · MLflow · GitHub Actions CI/CD (with automated metric-floor tests)`,
    solution: `A production-grade MLOps system featuring robust FastAPI endpoints. The core forecasting engine pits <strong>Prophet</strong> against a deep-learning <strong>N-BEATS</strong> baseline to predict ADR, Occupancy, and Revenue.<br><br>A rigorously evaluated <strong>XGBoost</strong> cancellation classifier drives an LP-based overbooking optimizer and a dynamic pricing engine. To ensure production viability, the model is evaluated exclusively on a temporal holdout set using <strong>walk-forward TimeSeriesSplit</strong>, and notorious target-leakage features (like <code>booking_changes</code>) from the public dataset were strictly removed.<br><br>The entire platform is containerized via Docker and heavily monitored with MLflow and nightly CI/CD API health checks. Built entirely from operational domain expertise earned at <strong>Nobu Hotel Toronto</strong> and <strong>Marriott</strong>.`,
    pills: ['Python 3.11', 'FastAPI', 'XGBoost', 'NeuralForecast (N-BEATS)', 'Prophet', 'SHAP', 'PuLP', 'Streamlit', 'MLflow', 'Docker', 'GitHub Actions', 'HuggingFace'],
    links: [
      { href: 'https://github.com/nabindev3/Smart-Hotel-Analytics-', label: 'View on GitHub →', primary: true },
      { href: 'https://smart-hotel-analytics-platform-6ziv.onrender.com/', label: 'Live Demo ↗' }
    ],
    impactLabel: 'Measurable Outcomes',
    kpis: [
      { num: '81.4%', label: 'Honest AUC — leak-free, temporal walk-forward evaluation' },
      { num: '15.0%', label: 'Occupancy MAPE' },
      { num: '7.4%',  label: 'ADR Forecast MAPE' },
      { num: '18%',   label: 'Scheduling Savings (projected)' },
      { num: '3×',    label: 'Faster Reporting' }
    ],
    result: `<strong>179,390</strong> booking records ingested · Calibrated Brier Score <strong>0.163</strong> · Data quality grade <strong>B</strong> — models trained on real, messy operational data (not a clean toy set).`,
    tagline: `Hospitality domain expertise + ML engineering = solving problems most AI engineers don't even know to ask about.`
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
  email: 'hi@nabinpdev.com',
  links: [
    { href: 'mailto:hi@nabinpdev.com', label: 'Email',   icon: 'mail' },
    { href: 'https://www.linkedin.com/in/nabin-prasad-dev-a9a3121b7', label: 'LinkedIn', icon: 'linkedin' },
    { href: 'https://github.com/nabindev3', label: 'GitHub', icon: 'github' }
  ]
};
