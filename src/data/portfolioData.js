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
    id: 'timetable-scheduler',
    title: 'Timetable Scheduler',
    overview:
      'An academic timetable management system that generates conflict-free weekly schedules using constraint-based solving engines, supporting role-based access for administrators, HODs, and faculty.',
    problem:
      'Manually creating timetables for multiple departments and sections is tedious and error-prone — faculty clashes, room double-bookings, and scheduling constraints are difficult to track by hand.',
    solution:
      'Built a full-stack application with a Spring Boot backend using two interchangeable scheduling engines (a custom greedy heuristic and Timefold constraint solver) backed by PostgreSQL, with a React + TypeScript frontend for managing departments, faculty, subjects, classrooms, and generating timetables.',
    features: [
      'Two scheduling engines — greedy heuristic for speed and Timefold constraint solver for optimized solutions',
      '12+ hard and soft constraints including faculty clashes, room capacity, availability, and consecutive teaching blocks',
      'Role-based access with JWT authentication — Super Admin, HOD, Faculty, and Exam Coordinator roles',
      'Department and section management with academic year tracking and faculty teaching permissions',
      'Interactive timetable view with slot locking and regeneration of unlocked entries',
      'PDF and Excel export for generated timetables',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Timefold Solver', 'Spring Security', 'JWT'],
    challenges:
      'The hardest part was designing a constraint system that handled real-world scheduling rules — faculty availability across departments, lab sessions requiring consecutive time blocks, and room type matching — without producing infeasible solutions on edge-case inputs.',
    lessons:
      'Gained hands-on experience with constraint satisfaction problems, learned the tradeoffs between greedy heuristics and solver-based approaches, and got a much deeper understanding of JWT-based authentication flows with session tracking.',
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
