import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-cream">
      <p className="font-display text-[7rem] leading-none text-primary">404</p>
      <h1 className="mt-2 font-display text-2xl uppercase tracking-wide text-ink">Page not found</h1>
      <p className="mt-2 text-ink-soft">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn-primary mt-6">
        Back to home
      </Link>
    </div>
  )
}