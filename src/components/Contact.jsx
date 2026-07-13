import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { profile } from '../data/portfolioData'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email.'
    if (!form.subject.trim()) next.subject = 'Enter a subject.'
    if (!form.message.trim()) next.message = 'Enter a message.'
    return next
  }

  function handleSubmit(e) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    // No backend is wired up yet — this opens the visitor's mail client
    // with the message pre-filled. Swap this for a real endpoint
    // (e.g. Formspree, EmailJS, or your own API route) when ready.
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`
    window.location.href = mailto

    setSent(true)
    setForm(initialForm)
    setTimeout(() => setSent(false), 5000)
  }

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  return (
    <section id="contact" className="border-b border-line dark:border-dark-line">
      <div className="container-content py-20">
        <p className="eyebrow">contact</p>
        <h2 className="section-title">Let's talk</h2>
        <p className="mt-3 text-[15px] text-muted dark:text-slate-400 max-w-xl">
          Open to internships, entry-level roles, and anything Java or full stack related.
        </p>

        <div className="mt-10 grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
          <div className="space-y-4">
            <ContactRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactRow icon={Phone} label="Phone" value={profile.phone} href={profile.phoneHref} />
            <ContactRow icon={MapPin} label="Location" value={profile.location} />
          </div>

          <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
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

            <button type="submit" className="btn-primary w-full sm:w-auto">
              <Send size={16} />
              Send Message
            </button>

            {sent && (
              <p className="flex items-center gap-2 text-[13.5px] text-primary font-medium">
                <CheckCircle2 size={16} />
                Opening your mail client — thanks for reaching out.
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
    <div className="card p-5 flex items-center gap-4">
      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 dark:bg-accent/15 text-primary dark:text-accent shrink-0">
        <Icon size={18} />
      </span>
      <div>
        <p className="font-mono text-[12px] uppercase tracking-wide text-muted dark:text-slate-500">
          {label}
        </p>
        <p className="text-[14.5px] font-medium text-ink dark:text-white mt-0.5">{value}</p>
      </div>
    </div>
  )
  return href ? (
    <a href={href} className="block hover:-translate-y-0.5 transition-transform duration-200">
      {content}
    </a>
  ) : (
    content
  )
}

function Field({ label, id, error, as = 'input', ...props }) {
  const Comp = as
  return (
    <div>
      <label htmlFor={id} className="block text-[13.5px] font-medium text-secondary dark:text-slate-300 mb-1.5">
        {label}
      </label>
      <Comp
        id={id}
        name={id}
        className={`w-full rounded-lg border bg-white dark:bg-dark-bg px-3.5 py-2.5 text-[14.5px] text-ink dark:text-white placeholder:text-muted/60 outline-none transition-colors ${
          error
            ? 'border-red-400 focus:border-red-500'
            : 'border-line dark:border-dark-line focus:border-primary'
        }`}
        {...props}
      />
      {error && <p className="mt-1.5 text-[12.5px] text-red-500">{error}</p>}
    </div>
  )
}
