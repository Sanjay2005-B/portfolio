import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="font-mono text-primary text-sm">404</p>
      <h1 className="mt-2 text-2xl font-bold text-ink dark:text-white">Page not found</h1>
      <p className="mt-2 text-secondary dark:text-slate-400">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn-primary mt-6">
        Back to home
      </Link>
    </div>
  )
}
