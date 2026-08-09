export const profile = {
  name: 'Morris Lee',
  tagline: 'Data Scientist · Production ML & LLM Systems',
  location: 'Kuala Lumpur, Malaysia',
  email: 'info.leekahwin@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/morris-lee-917b6a14a/' },
    { label: 'GitHub', href: 'https://github.com/k-w-lee' },
    { label: 'Kaggle', href: 'https://www.kaggle.com/leekahwin' },
    { label: 'PyPI', href: 'https://pypi.org/user/morris_lee/' },
    { label: 'CV (PDF)', href: '/resume/MorrisLee_CV.pdf' },
  ],
  intro: [
    'I build and evaluate production ML and LLM systems, with an emphasis on reliability, measurable outcomes, and reproducible evidence.',
    'Data Scientist at Mercedes-Benz, working on EV data and AI systems across production environments. My work spans LLM systems, data pipelines, agentic workflows, recommender systems, and applied ML.',
  ],
  focus: 'LLM Systems · Agentic AI · Production ML · Spark/Databricks · Recommender Systems',
}

export const selectedWork = [
  {
    num: '01',
    title: 'Reliable Analytics Agent',
    year: '2026',
    type: 'Research + System',
    status: 'Completed',
    role: 'Sole author',
    artifacts: 'Paper · Code · Benchmark',
    desc: 'Rule-gated 7B analytics agent with deterministic post-execution verification, outperforming a 32B baseline on a pre-registered, one-shot benchmark. Cut false-success from 75% to 35%, with zero silent wrong answers on answerable tasks.',
    stats: [
      { value: '+24 pp', label: 'truth rate vs 32B baseline' },
      { value: '71%', label: 'lower cost / correct answer' },
      { value: '400', label: 'tasks, pre-registered benchmark' },
    ],
    links: [
      { label: 'Paper', href: null },
      { label: 'Code', href: null },
      { label: 'Benchmark', href: null },
    ],
  },
  {
    num: '02',
    title: 'EV Charging Intelligence',
    year: '2024 – Present',
    type: 'Production System',
    status: 'Live, 60+ countries',
    role: 'Builder, end-to-end',
    artifacts: 'Internal (Mercedes-Benz)',
    desc: 'Mercedes-Benz’s first production LLM system, resolving ambiguous charging-station matches. A companion ETL pipeline classifies DC chargers as 400V/800V from live charging-session telemetry via majority-vote consensus, live across EMEA.',
    meta: 'Azure · Databricks · Spark · Delta Lake · MongoDB',
    stats: [
      { value: '~1,200', label: 'pairs/min throughput' },
      { value: '60+', label: 'countries in production' },
    ],
    links: [],
  },
  {
    num: '03',
    title: 'BrowserUse',
    year: '2024 – 2025',
    type: 'Open Source',
    status: 'Contributions shipped',
    role: 'Core contributor (top 8)',
    artifacts: 'Code · GitHub',
    desc: 'Core contributor to the AI browser automation project. Was a top-8 contributor during a period when the repository grew from ~60K to over 100K stars.',
    stats: [
      { value: '100K+', label: 'GitHub stars' },
      { value: 'Top 8', label: 'contributor' },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/browser-use/browser-use' },
      { label: 'Proof', href: 'https://drive.google.com/file/d/1stCOYDV0EnjlwP7Z8AOLXmNaPPIWeklm/view?usp=drivesdk' },
    ],
  },
  {
    num: '04',
    title: 'EV Golden Dataset',
    year: '2024 – Present',
    type: 'Data Infrastructure',
    status: 'In production',
    role: 'Product Owner, led 3 engineers',
    artifacts: 'Internal (Mercedes-Benz)',
    desc: 'LLM pipeline converting 81 MongoDB collections into a confidence-scored data catalog for AI agents, enabling instant discovery of data metadata.',
    stats: [
      { value: '81', label: 'MongoDB collections catalogued' },
      { value: '3', label: 'engineers led' },
    ],
    links: [],
  },
  {
    num: '05',
    title: 'Code2Diagram',
    year: '2024',
    type: 'Internal Tool',
    status: 'Deployed',
    role: 'Tech lead, team of 4',
    artifacts: 'Internal (Mercedes-Benz)',
    desc: 'Azure OpenAI/Python system generating architecture diagrams and documentation from enterprise codebases.',
    stats: [
      { value: '~50', label: 'Mercedes-Benz engineers using it' },
    ],
    links: [],
  },
]

export const experience = [
  {
    company: 'Mercedes-Benz',
    place: 'Puchong, Malaysia',
    roles: [
      {
        title: 'Data Scientist — EV Team, working with MB AG and the Germany AI team',
        date: 'Jan 2024 – Present',
        summary:
          'Production LLM and ML systems for EV charging: station matching, 400V/800V telemetry classification, Golden Dataset catalog, Code2Diagram. Appointed Malaysia’s hub AI representative after co-organising AI-sharing initiatives across five countries.',
        meta: 'Azure · Databricks · Spark · Delta Lake · MongoDB',
        evidence: [
          { label: 'Game Changer Award 2024 (1/200+)', href: 'https://www.linkedin.com/posts/morris-lee-917b6a14a_mercedes-benz-mbtmy-activity-7230004086555729920-xDd2?utm_source=share&utm_medium=member_desktop' },
          { label: 'National HR innovation recognition', href: 'https://www.linkedin.com/posts/mercedes-benz-malaysia_mercedesbenzmalaysia-mercedesbenztechmalaysia-activity-7254412013831901184-eRAc?utm_source=share&utm_medium=member_desktop' },
          { label: 'Hub AI representative', href: 'https://www.linkedin.com/posts/mercedes-benz-malaysia_life-at-work-fuelling-innovation-mercedes-benz-activity-7460952030564761600-Ncfr?utm_source=share&utm_medium=member_desktop&rcm=ACoAACQfkqMBmf3ir040WSHydWO08OwxGwjwv1o' },
        ],
      },
    ],
  },
  {
    company: 'DeepDataFusion',
    place: 'Remote',
    roles: [
      {
        title: 'Founder (Part-Time)',
        date: 'Oct 2023 – Aug 2026',
        summary:
          'Built the Reliable Analytics Agent (see Selected Work) and an end-to-end AI platform identifying missed logistics charges and generating evidence-backed recovery claims. Paused after technical validation to avoid ongoing infrastructure costs.',
        meta: 'Python · LLM agents · Logistics domain',
        evidence: [
          { label: 'Demo: Claims Recovery', href: 'https://s3.ap-southeast-1.amazonaws.com/safe-ai.io/public/freight-recovery.mp4' },
          { label: 'Demo: Super Consolidator', href: 'https://s3.ap-southeast-1.amazonaws.com/safe-ai.io/public/deepdatafusion.mp4' },
        ],
      },
    ],
  },
  {
    company: 'Recommend.my',
    place: 'Petaling Jaya, Malaysia',
    roles: [
      {
        title: 'Data Scientist',
        date: 'Nov 2022 – Jan 2024',
        summary:
          'Owned 30+ production ML/AI systems end to end: LLM image-description enrichment for SEO, automated outbound sales, dynamic pricing, and an ML retention system (F1 > 90%). Drove 40% YoY revenue growth and the first profitable month in 9 years.',
        meta: 'Python · AWS EC2 · SQL · Slack API · Sheets API',
        evidence: [
          { label: 'Youngest Best Employee 2022', href: 'https://www.linkedin.com/posts/jes-min-lua-540993a_every-year-recommenders-nominate-their-colleagues-activity-7016040311030243328-NipA?utm_source=share&utm_medium=member_desktop' },
          { label: 'Best Employee 2023', href: 'https://drive.google.com/file/d/1OaMqlYAMGVO7AtZImI4kv3xJ2Ek4XclI/view?usp=sharing' },
          { label: 'CEO testimonial', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7016040311030243328/' },
        ],
      },
      {
        title: 'Data Analytics Executive',
        date: 'Mar 2022 – Oct 2022',
        summary: 'Automated 10+ reporting pipelines; built 14+ metric dashboards.',
        meta: 'MySQL · Python · Google Sheets · Slack',
        evidence: [],
      },
    ],
  },
]

export const community = [
  {
    title: 'Core contributor — BrowserUse',
    detail: 'AI browser automation. 100K+ stars.',
    date: 'Dec 2024 – Mar 2025',
    links: [
      { label: 'GitHub', href: 'https://github.com/browser-use/browser-use' },
      { label: 'Proof', href: 'https://drive.google.com/file/d/1stCOYDV0EnjlwP7Z8AOLXmNaPPIWeklm/view?usp=drivesdk' },
    ],
  },
  {
    title: 'Kaggle Master',
    detail: 'Ranked #228 over 60,000. Top 0.3%.',
    date: 'Sep 2020 – Nov 2023',
    links: [
      { label: 'Kaggle', href: 'https://www.kaggle.com/leekahwin' },
      { label: 'Kaggle testimonial', href: 'https://www.kaggle.com/code/mpwolke/ig-nobellians-winners' },
    ],
  },
  {
    title: 'Guest Speaker — Sunway University',
    detail: 'Analytics talks and workshops for students.',
    date: 'Sep 2025 – Jul 2026',
    links: [
      { label: 'Event announcement 1', href: 'https://www.linkedin.com/posts/sunway-analytics-society_sunwayanalyticssociety-sunwayuniversity-sunwaycollege-activity-7350373485866610690-4QC8?utm_source=share&utm_medium=member_desktop&rcm=ACoAACQfkqMBmf3ir040WSHydWO08OwxGwjwv1o' },
      { label: 'Event announcement 2', href: 'https://www.linkedin.com/posts/sunway-analytics-society_sunwayanalyticssociety-sunwayuniversity-sunwaycollege-ugcPost-7483145649962749953-IfiU/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACQfkqMBmf3ir040WSHydWO08OwxGwjwv1o' },
    ],
  },
  {
    title: 'PyPI package author',
    detail: 'Published 4 Python packages filling AI community gaps.',
    date: 'Jun 2022 – Jan 2024',
    links: [{ label: 'PyPI profile', href: 'https://pypi.org/user/morris_lee/' }],
  },
  {
    title: 'Vice President & Charter Member — MB Elevate (Toastmasters)',
    detail: '',
    date: 'Sep 2025 – Present',
    links: [{ label: 'Certificate', href: 'https://drive.google.com/file/d/18rElRfTuXbCvMZHIYckVkO6olNcyzrm_/view?usp=sharing' }],
  },
]

export const publications = [
  {
    cite: 'Lee, K. W., Keikhosrokiani, et al. (2024). Movie Recommendations with Market Basket Analysis and Advanced Algorithms. (pp. 319–364). IGI Global, doi: 10.4018/979-8-3693-1210-0.ch013.',
    href: 'https://doi.org/10.4018/979-8-3693-1210-0.ch013',
  },
  {
    cite: 'Lee, K. W., and G. K. Hoon (2022). Text Classification of Medical Transcriptions using N-Gram Machine Learning Approach (pp. 1–6). IICAIET, doi: 10.1109/IICAIET55139.2022.9936867.',
    href: 'https://ieeexplore.ieee.org/document/9936867',
  },
]

export const education = [
  {
    degree: 'Master of Science (Data Science and Analytics)',
    school: 'Universiti Sains Malaysia',
    date: 'Graduated: Jul 2022',
    detail: 'CGPA: 3.94/4.0 — Led 5 subject teams; 2 projects top scores in CDS501 & CDS504.',
    link: { label: 'Transcript', href: 'https://drive.google.com/file/d/1iL0vN-L-TAjVHp2TgG-FnflL7AX_GrBD/view?usp=sharing' },
  },
  {
    degree: 'Bachelor of International Business (Honours)',
    school: 'Universiti Tunku Abdul Rahman',
    date: 'Graduated: May 2019',
    detail: '',
    link: null,
  },
]

export const evidenceGallery = [
  {
    id: 'sunway',
    title: 'Guest speaking — Sunway University',
    caption: 'Analytics sharing sessions with Sunway Analytics Society, 2025 and 2026.',
    media: [
      { type: 'image', src: '/media/sunway_sharing/2026_poster.jpeg', caption: '2026 session poster' },
      { type: 'image', src: '/media/sunway_sharing/2026_group_photo.jpeg', caption: '2026 group photo' },
      { type: 'image', src: '/media/sunway_sharing/2026_souvenir.jpeg', caption: '2026 souvenir' },
      { type: 'image', src: '/media/sunway_sharing/2025.jpeg', caption: '2025 session' },
      { type: 'image', src: '/media/sunway_sharing/2025-2.jpeg', caption: '2025 session' },
      { type: 'video', src: '/media/sunway_sharing/2025_class_video.mp4', caption: '2025 class video' },
      { type: 'video', src: '/media/sunway_sharing/2026_sunway_insta_story.mp4', caption: '2026 Instagram story' },
    ],
  },
  {
    id: 'mercedes',
    title: 'Mercedes-Benz — AI community & recognition',
    caption: 'AI-sharing initiatives across Malaysia, Germany and Spain hubs; employee recognition.',
    media: [
      { type: 'image', src: '/media/mercedes_malaysia/employee_recognition.jpeg', caption: 'Employee recognition' },
      { type: 'image', src: '/media/mercedes_malaysia/sharing_poster.jpeg', caption: 'Sharing session poster' },
      { type: 'image', src: '/media/mercedes_malaysia/sharing_with_students.jpeg', caption: 'Sharing with students' },
      { type: 'image', src: '/media/mercedes_malaysia/group_photo_ai_camp.jpeg', caption: 'AI camp group photo' },
      { type: 'image', src: '/media/mercedes_germany/ev_team.jpeg', caption: 'EV team — Germany' },
      { type: 'image', src: '/media/mercedes_spain/ai_team.jpeg', caption: 'AI team — Spain' },
    ],
  },
  {
    id: 'browser-use',
    title: 'BrowserUse — open source contribution',
    caption: 'Core contributor to the 100K+ star AI browser automation project.',
    media: [
      { type: 'video', src: '/media/browser_use/story_proof_achievement.mp4', caption: 'Contribution proof' },
    ],
  },
]
