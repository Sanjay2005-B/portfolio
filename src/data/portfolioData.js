export const profile = {
  name: 'Sanjay B',
  title: 'Java Full Stack Developer',
  subtitle: 'Final-Year Computer Science and Design Student',
  intro:
    'I am a final-year Computer Science and Design student with a strong interest in Java Full Stack Development. I enjoy building scalable web applications, learning modern technologies, and solving real-world software problems. My goal is to begin my career as a Software Engineer where I can contribute, learn continuously, and build impactful products.',
  email: 'b.sanjay3098@gmail.com',
  phone: '+91 7904888155',
  phoneHref: 'tel:+917904888155',
  location: 'Erode, Tamil Nadu, India',
  resumePath: '/Sanjay_B_Resume.pdf',
  github: 'https://github.com/Sanjay2005-B',
  linkedin: 'https://www.linkedin.com/in/sanjay2908/',
  leetcode: 'https://leetcode.com/u/Sanjay3098/',
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export const aboutPoints = [
  'Final-year engineering student focused on Computer Science and Design.',
  'Most interested in backend development — how systems stay reliable as they grow.',
  'Comfortable across the stack: Java and Spring Boot on the backend, React on the front.',
  'Spend a fair amount of time writing SQL and thinking through schema design in MySQL.',
  'Treat every project as a chance to close a gap — currently working through system design fundamentals.',
]

export const skillGroups = [
  {
    title: 'Programming',
    items: ['Java', 'SQL', 'JavaScript'],
  },
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Spring Boot', 'REST APIs'],
  },
  {
    title: 'Database',
    items: ['MySQL'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'IntelliJ IDEA', 'VS Code', 'Maven', 'Postman'],
  },
  {
    title: 'Concepts',
    items: ['OOP', 'Collections', 'Exception Handling', 'JDBC', 'MVC', 'Responsive Design'],
  },
]

export const projects = [
  {
    id: 'food-delivery',
    title: 'Food Delivery Application',
    overview:
      'A responsive food ordering platform covering the full flow — browsing a live menu, managing a cart, and tracking an order end to end.',
    problem:
      'Small restaurants needed a straightforward way to take orders online without paying commission to third-party delivery apps.',
    solution:
      'Built a full stack application with a Spring Boot REST API backing a React frontend, using MySQL to persist users, menus, and orders, with session-based authentication protecting checkout.',
    features: [
      'User registration and login with protected checkout routes',
      'Menu browsing with category filters and item search',
      'Persistent shopping cart with quantity and price updates',
      'Order placement and status tracking (placed, preparing, delivered)',
      'Admin-side menu and order management',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs'],
    challenges:
      'Keeping cart state consistent between the client and server after a page refresh was the trickiest part — I settled on persisting the cart server-side and rehydrating it on login rather than relying on local state.',
    lessons:
      'Learned to design REST endpoints around resources rather than actions, and got a much better feel for when to normalize a MySQL schema versus when a denormalized read model saves a join.',
    github: 'https://github.com/Sanjay2005-B',
    demo: '',
  },
  {
    id: 'static-hosting',
    title: 'Static Website Hosting Platform',
    overview:
      'A lightweight hosting platform where a user uploads a zipped site and gets a live, deployed URL back in seconds.',
    problem:
      'Deploying a simple static site (portfolio, landing page, class project) usually means dealing with a hosting dashboard that is overkill for the job.',
    solution:
      'Built a Spring Boot backend that accepts a ZIP upload, extracts it server-side, and serves the contents from a per-user project directory, with a React dashboard for managing deployments and a MySQL-backed auth system controlling access.',
    features: [
      'Secure sign-up and login with per-user project isolation',
      'Drag-and-drop ZIP upload with automatic extraction',
      'Project dashboard listing live sites with status and timestamps',
      'One-click redeploy and delete',
      'Clean, shareable URLs per deployed project',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'MySQL'],
    challenges:
      'Handling untrusted ZIP uploads safely took the most care — validating file paths to prevent directory traversal during extraction was something I had not had to think about before.',
    lessons:
      'Got hands-on experience with file I/O and multipart uploads in Spring Boot, and a clearer sense of why access control needs to be checked on the server for every request, not just the login step.',
    github: 'https://github.com/Sanjay2005-B',
    demo: '',
  },
]

export const education = {
  degree: 'Bachelor of Engineering',
  field: 'Computer Science and Design',
  institution: 'Erode Sengunthar Engineering College',
  status: 'Final Year',
}

export const certifications = [
  {
    title: 'Java Programming',
    issuer: 'Infosys Springboard',
  },
  {
    title: 'HTML & CSS Fundamentals',
    issuer: 'Infosys Springboard',
  },
]

export const codingProfiles = [
  {
    platform: 'GitHub',
    username: 'Sanjay2005-B',
    url: 'https://github.com/Sanjay2005-B',
  },
  {
    platform: 'LinkedIn',
    username: 'sanjay2908',
    url: 'https://www.linkedin.com/in/sanjay2908/',
  },
  {
    platform: 'LeetCode',
    username: 'Sanjay3098',
    url: 'https://leetcode.com/u/Sanjay3098/',
  },
]
