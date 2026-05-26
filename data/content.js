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
    title: 'TSFM Routing Probe — Label-Free Difficulty Signals & Recalibrated Selective Forecasting for Chronos-T5',
    hook: '"Not every forecast deserves equal trust. The hard part is knowing which ones don\'t."',
    problem: `TSFMs like Chronos and TimesFM give strong zero-shot forecasts but ship without a native abstention or uncertainty signal. In production, every forecast is treated equally — same compute, same trust — even though some windows are <strong>5× harder</strong> than others. The open question, unclaimed in the 2026 literature: do a TSFM's internal representations encode a self-difficulty signal that a cheap classical baseline doesn't already capture? And if not, can we still recover a deployable abstention signal from the cheap baseline?`,
    stack: `<strong>Backbones:</strong> Chronos-T5-small (60 M) for the headline study; Chronos-T5-base (200 M) for the cost-quality cascade<br><strong>Interpretability:</strong> TopK Sparse Autoencoder (8× expansion, d_hidden=4096, k=32, aux-revival + dead-feature kept under 30% via tuned aux_k) · Encoder block hooks at both mid (block 3 of 6) and late (block 5) encoders<br><strong>Probing:</strong> L1 logistic · TimeSeriesSplit inner CV · Paired bootstrap (2 000 iter.) for ΔAUROC CIs · Five probes including diagnostic isolations<br><strong>Causal:</strong> Mishra-style ablation — forward hook replaces hidden state with SAE reconstruction, top-5 features zeroed individually, ΔCRPS bootstrapped on 167 test windows<br><strong>Cascade:</strong> Small ↔ Base routing with random + oracle baselines + linear interp reference<br><strong>Selective prediction &amp; calibration:</strong> Risk-coverage curves · AURC · Platt + isotonic recalibration on 5-fold OOF<br><strong>Ops:</strong> Hard guardrails (probe refuses on unlabeled data or random-init SAE) · <code>--skip_predict</code> activation-only extraction · One-command reproduce.sh · pinned env · .vscode/settings.json interpreter lock`,
    solution: `A leakage-controlled, paired-bootstrap-rigorous pipeline that asks four questions of the same data on the same windows. <strong>(1)</strong> Do internal representations of a TSFM add predictive power for forecast difficulty beyond classical input statistics? (Five-probe ΔAUROC with paired bootstrap.) <strong>(2)</strong> Are the features the probe ranks "predictive" actually causal? (Forward-hook ablation, 167 test windows × top-5 features.) <strong>(3)</strong> Even if internal representations don't beat the classical baseline, can the baseline itself be turned into a deployment-grade abstention signal? (Risk-coverage curves; Platt-recalibrated probabilities.) <strong>(4)</strong> Does a feature-routed cascade between two backbone scales actually find Pareto-dominating cost-quality points? (Real Chronos-T5-base extraction.)<br><br>Methodological scaffolding the project enforces in code: temporal train/test split with purge gap ≥ context + horizon (kills the overlapping-sliding-window leakage that inflates AUROC in most published probes), train-only CRPS normalization, seasonal-naive MASE, and a TimeSeriesSplit inner CV that respects temporal order when picking L1 regularization.`,
    pills: ['Python', 'PyTorch', 'Chronos-T5 small + base', 'TopK SAE', 'scikit-learn', 'statsmodels', 'safetensors', 'Parquet', 'Matplotlib', 'LaTeX'],
    links: [
      { href: 'https://github.com/nabindev3/SAE-framework-or-time-series-analysis', label: 'View on GitHub →', primary: true },
      { href: 'https://github.com/nabindev3/SAE-framework-or-time-series-analysis/tree/main/paper', label: 'Workshop Report (LaTeX) →' }
    ],
    impactLabel: 'Impact & Academic Rigor',
    kpis: [
      { num: '5',      label: 'Pareto-Dominating Points (real small ↔ base cascade beats always-cheap, always-base, and random)' },
      { num: '−80%',   label: 'ECE via Platt Recalibration (5-fold OOF) — P1 0.482 → 0.097, AUROC preserved exactly' },
      { num: '+0.043', label: 'ΔCRPS, 95% CI [−0.008, +0.095] — near-significant causal contribution of top-5 SAE features on hard windows' },
      { num: '30%',    label: 'Oracle Ranking Captured — input stats give −8.1% mean CRPS @ 50% coverage on test' },
      { num: '701',    label: 'Forecast Windows · 2× layers · 2× scales · 2 000 bootstrap iter. · 167 causal predictions/feature' }
    ],
    result: `Four findings from one pipeline, none reframed post-hoc. <strong>(1)</strong> A rigorous <strong>null</strong> for the SAE-features-add-incremental-difficulty-signal hypothesis at both mid- and late-encoder of chronos-t5-small (Δ(SAE − stats) = −0.228, CI [−0.366, −0.092]). <strong>(2)</strong> A near-significant <strong>causal</strong> contribution of those same features on hard windows — the predictive null doesn't extend to the causal direction (an important refinement). <strong>(3)</strong> A positive <strong>selective-prediction</strong> result on the same data — the input-stats probe captures 30% of the oracle's available AURC improvement. <strong>(4)</strong> A real feature-routed <strong>cascade</strong> demonstrated, not proposed, with five Pareto-dominating points. Platt recalibration closes the gap from "good ranker" to "deployment-grade probabilities." The novelty wedge — label-free, inference-time difficulty prediction for routing/abstention — remains unclaimed in the 2026 literature: Mishra (arXiv:2603.10071) did causal ablation, TimeSAE (arXiv:2601.09776) did post-hoc black-box explanation, neither did this.`,
    tagline: `Not another SAE benchmark — an end-to-end leakage-controlled test of whether a TSFM's internals know what its CRPS distribution doesn't yet, with a recalibrated selective forecaster as the deployable artifact when the answer is "no, but we can still do this."`
  },
  {
    type: '⭐ Featured · Interpretability · Research',
    year: '2026',
    title: 'LLM Routing Probe — Label-Free Difficulty Signals & Recalibrated Selective QA for Pythia',
    hook: '"Not every prompt deserves expensive compute. The hard part is knowing which ones do."',
    problem: `Autoregressive LLMs are deployed as black boxes — they generate answers but ship without native confidence, calibration, or escalation metrics. In production, every query consumes the same expensive compute even though some prompt contexts are <strong>5× harder</strong> than others. An open question, unclaimed in the 2026 literature: do an LLM's internal sparse-autoencoder (SAE) feature spaces encode a self-difficulty routing signal that raw activations and prompt-level lexical statistics don't already reveal? And when binary multiple-choice correct-answer boundaries obscure this signal, can continuous gold-target perplexities recover a deployable selective-QA and routing cascade?`,
    stack: `<strong>Backbones:</strong> EleutherAI/pythia-410m (d_model=1024) for the cheap baseline; EleutherAI/pythia-2.8b for the cost-quality cascade<br><strong>Interpretability:</strong> TopK Sparse Autoencoder (4× expansion, d_hidden=4096, k=32, tuned aux-k dead-feature revival keeping dead features &lt; 3% on macOS MPS) · Hooked at Layer 12 mid-residual stream (<code>layers[11]</code>) and Layer 18 late-residual stream (<code>layers[17]</code>)<br><strong>Probing:</strong> L1-regularized logistic regression · Stratified category-aware CV · Paired bootstrap (B=2 000) for point AUROC and ΔAUROC CIs<br><strong>Causal:</strong> Mishra-style residual patching — forward hook intercepts activations, reconstructs via SAE, zero-outs target feature f_j, measures shift in target answer and perplexity over 1 500 test-split prompts<br><strong>Cascade:</strong> Real Pythia-410M ↔ Pythia-2.8B routing engine, sweeping τ ∈ [0, 1] against Oracle and Random baselines<br><strong>Selective QA &amp; Calibration:</strong> Risk-coverage curves · AURC · Platt (sigmoid) + Isotonic OOF recalibration over 5 folds<br><strong>Ops:</strong> Block-buffering bypass and macOS thread-based parallel CV (<code>joblib.parallel_backend("threading")</code> with <code>n_jobs=-1</code> to prevent Apple Silicon forks deadlocking) · Collinearity-free sequence pooling for boundary tokens (speeds up L1 coordinate-descent fits 200×) · Direct reproducer script`,
    solution: `A leakage-controlled, paired-bootstrap-rigorous pipeline that evaluates internal representations across two benchmark modalities: <strong>HellaSwag</strong> (binary multiple-choice correctness) and <strong>SQuAD</strong> (continuous perplexity-based generative difficulty).<br><br>The pipeline enforces hard methodological safeguards: <strong>(1) Pile pretraining-contamination purge</strong> — drops validation prompts with pretraining-Pile exposure (prompt perplexity ≤ 1.5) to prevent memorized-internal leaks. <strong>(2) Lexical deduplication</strong> — TF-IDF cosine-similarity prompt-cluster filter at ≥ 0.7 between train and test splits. <strong>(3) Train-split-only SAE fitting</strong> — SAE is trained exclusively on train-split residual-stream activations, eliminating validation leakage. <strong>(4) Group-stratified CV</strong> — hyperparameter sweeps stratified strictly by category keys to prevent topic leakage.`,
    pills: ['Python', 'PyTorch', 'Pythia-410M / 2.8B', 'TopK SAE', 'scikit-learn', 'Transformers', 'safetensors', 'Parquet', 'Matplotlib', 'LaTeX'],
    links: [
      { href: 'https://github.com/nabindev3', label: 'View on GitHub →', primary: true },
      { href: 'https://github.com/nabindev3', label: 'Workshop Report (LaTeX) →' }
    ],
    impactLabel: 'Impact & Academic Rigor',
    kpis: [
      { num: '31',     label: 'Pareto-Dominating Points (continuous SQuAD cascade strictly dominates cheap / base / random)' },
      { num: '−70%',   label: 'ECE via Platt Recalibration (5-fold OOF) — SAE probes 0.265 → 0.092' },
      { num: '±0.0%',  label: 'ΔError, 95% CI [−1.6%, +1.5%] — boundary-token SAE reconstruction is causally faithful on HellaSwag (training-distribution-matched patching)' },
      { num: '31%',    label: 'Oracle AURC Captured — lexical stats + raw activations on SQuAD selective answering' },
      { num: '5 000',  label: 'Validation Prompts · 2× layers · 2× backbone scales · 2 000 bootstrap · 1 500 causal predictions' }
    ],
    result: `Four findings from one pipeline. <strong>(1) HellaSwag difficulty is undetectable at chance</strong> — every probe family (lexical, raw activations, SAE) lands at chance AUROC on Layer 12 (P1 = 0.509, P2 = 0.472, P3 = 0.504), and the incremental SAE-over-raw delta is null (Δ(P3 − P2) = +0.032, 95% CI [−0.006, +0.071]). The signal isn't hidden by coarse labels — it isn't there in the residual stream at this scale. <strong>(2) SAE features underperform raw activations on SQuAD</strong> — swapping multiple-choice for continuous gold-target perplexities surfaces a real difficulty signal: raw residual activations predict perplexity difficulty at AUROC <strong>0.668</strong> (CI [0.635, 0.700]) vs lexical stats 0.626, capturing 31% of Oracle AURC. But augmenting raw with SAE features <em>decreases</em> AUROC (Δ(SAE − raw) = <strong>−0.083</strong>, CI [−0.122, −0.045]) and SAE-only (0.578) underperforms raw-only (0.667). The signal is in the residual stream; the SAE compresses it without adding routable structure. <strong>(3) ECE recovery via Platt</strong> — high-dimensional L1 probes are severely miscalibrated, but 5-fold OOF Platt drops ECE 65–70% (Input-Stats 0.309 → 0.085, SAE 0.265 → 0.092), delivering deployment-grade selective QA. <strong>(4) Boundary-faithful reconstruction, below-resolution single-feature effects</strong> — patching Layer 12 with TopK-32 SAE reconstructions <em>at the prompt-boundary token only</em> (the position the SAE was trained on) is causally faithful: HellaSwag ΔError = +0.000 [−0.016, +0.015] and SQuAD Δ(hard rate) = +0.001 [−0.007, +0.007]. Individual top-5 feature ablations are below the resolution of the binary metric at single-token granularity (Δ = 0 for all). An earlier all-position patching variant produced spurious reconstruction penalties (+0.136 / +0.823) but reflected a train/inference distribution mismatch — the SAE never saw mid-context, question, or target tokens during training — rather than genuine causal evidence. Continuous-metric ablation (Δ log-prob of gold answer) is the natural next step for surfacing per-feature effects.`,
    tagline: `An end-to-end, leakage-controlled study with a clean negative result: on Pythia-410M residual streams, TopK-32 SAE features add no incremental difficulty signal over raw activations (on SQuAD they actively hurt, CI excludes zero), and individual SAE features show no measurable causal effect on the discrete difficulty label. The deployable contribution is calibration-recovered raw-activation selective QA — continuous perplexity targets and 5-fold Platt recalibration are what unlock the cascade, not the SAE.`
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
