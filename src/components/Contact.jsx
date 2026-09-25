import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { profile } from '../data/portfolioData'

const initialForm = { name: '', email: '', subject: '', message: '', _gotcha: '' }

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID
const SUBMIT_ENDPOINT = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : ''

function validate(form) {
  const next = {}
  if (!form.name.trim()) next.name = 'Enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email.'
  if (!form.subject.trim()) next.subject = 'Enter a subject.'
  if (!form.message.trim()) {
    next.message = 'Enter a message.'
  } else if (form.message.trim().length < 10) {
    next.message = 'Message must be at least 10 characters.'
  }
  return next
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    if (status === 'submitting') return

    const next = validate(form)
    setErrors(next)
    if (Object.keys(next).length > 0) return

    if (!SUBMIT_ENDPOINT) {
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch(SUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          _subject: form.subject.trim(),
          message: form.message.trim(),
          _gotcha: form._gotcha,
        }),
      })
      const data = await res.json().catch(() => null)
      if (!res.ok || (data && data.success === false)) throw new Error('Submission rejected')

      setStatus('success')
      setForm(initialForm)
      setErrors({})
      setTimeout(() => setStatus('idle'), 6000)
    } catch (err) {
      setStatus('error')
    }
  }

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  return (
    <section id="contact" className="border-b border-ink-line bg-cream-surface/60">
      <div className="container-content py-20 sm:py-28">
        <div className="relative">
          <span
            className="pointer-events-none select-none absolute -top-10 right-0 font-display text-[7rem] leading-none text-ink/[0.05] hidden sm:block"
            aria-hidden="true"
          >
            09
          </span>
          <p className="eyebrow">
            <span className="text-primary">(09)</span>
            Contact
          </p>
          <h2 className="section-heading mt-5">Get in touch</h2>
          <p className="section-sub">
            Open to internships, entry-level roles, and anything Java or full stack related.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
          <div className="space-y-3">
            <ContactRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactRow icon={Phone} label="Phone" value={profile.phone} href={profile.phoneHref} />
            <ContactRow icon={MapPin} label="Location" value={profile.location} />
          </div>

          <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8 space-y-5">
            <input
              type="text"
              name="_gotcha"
              value={form._gotcha}
              onChange={update('_gotcha')}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="sr-only"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Name"
                id="name"
                value={form.name}
                onChange={update('name')}
                error={errors.name}
                autoComplete="name"
              />
              <Field
                label="Email"
                id="email"
                type="email"
                value={form.email}
                onChange={update('email')}
                error={errors.email}
                autoComplete="email"
              />
            </div>
            <Field
              label="Subject"
              id="subject"
              value={form.subject}
              onChange={update('subject')}
              error={errors.subject}
            />
            <Field
              label="Message"
              id="message"
              as="textarea"
              rows={5}
              value={form.message}
              onChange={update('message')}
              error={errors.message}
            />

            <button
              type="submit"
              disabled={status === 'submitting'}
              aria-busy={status === 'submitting'}
              className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <p
                role="status"
                className="flex items-center gap-2 text-[13px] text-emerald-700 font-medium"
              >
                <CheckCircle2 size={15} />
                Message sent successfully. I'll get back to you soon.
              </p>
            )}

            {status === 'error' && (
              <p role="alert" className="flex items-center gap-2 text-[13px] text-red-700 font-medium">
                <AlertCircle size={15} />
                {SUBMIT_ENDPOINT
                  ? 'Unable to send the message. Please try again or email me directly.'
                  : 'This contact form is not connected to an email service yet.'}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="card p-4 flex items-center gap-3.5 hover:-translate-y-0.5">
      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary shrink-0">
        <Icon size={16} />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">{label}</p>
        <p className="text-[14px] font-medium text-ink mt-0.5 truncate">{value}</p>
      </div>
    </div>
  )
  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  )
}

function Field({ label, id, error, as = 'input', ...props }) {
  const Comp = as
  const errorId = `${id}-error`
  return (
    <div>
      <label htmlFor={id} className="block text-[12.5px] font-semibold text-ink-soft mb-1.5">
        {label}
      </label>
      <Comp
        id={id}
        name={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`w-full rounded-lg border px-3.5 py-2.5 text-[13px] text-ink placeholder:text-ink-faint bg-white outline-none transition-colors ${
          error
            ? 'border-red-500 focus:border-red-600'
            : 'border-ink-line focus:border-primary'
        }`}
        {...props}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-[12px] text-red-700">
          {error}
        </p>
      )}
    </div>
  )
}