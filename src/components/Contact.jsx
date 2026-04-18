import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaWhatsapp, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { IoSchool } from 'react-icons/io5'

const socials = [
  { icon: HiMail, label: 'Gmail', value: 'obognonlisette@gmail.com', href: 'mailto:obognonlisette@gmail.com', color: '#EA4335' },
  { icon: FaWhatsapp, label: 'WhatsApp', value: '+229 01 54 30 66 99', href: 'https://wa.me/2290154306699', color: '#25D366' },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'Lisette Obognon', href: 'https://www.linkedin.com/in/lisette-obognon-04a468332', color: '#0A66C2' },
  { icon: FaFacebook, label: 'Facebook', value: 'Lisette cth', href: 'https://www.facebook.com/gwladys.akpo.18', color: '#1877F2' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

function Contact() {
  const { i18n } = useTranslation()
  const lang = i18n.language
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSent(true)
  }

  return (
    <section id="contact" className="relative bg-[#0D0D0D] py-24 overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-[#5E0006]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">

        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="text-[#C0001A] text-sm font-medium tracking-widest uppercase">
            {lang === 'fr' ? 'Me contacter' : 'Contact me'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mt-3">
            {lang === 'fr' ? 'Travaillons ensemble' : "Let's work together"}
          </h2>
          <p className="text-[#F5F5F5]/50 text-sm mt-3 max-w-md mx-auto">
            {lang === 'fr' ? 'Un projet en tête ? Une question ? N\'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.' : 'Have a project in mind? A question? Feel free to reach out, I will get back to you as soon as possible.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          <motion.div {...fadeUp(0.1)} className="flex flex-col gap-8">
            <div>
              <h3 className="text-[#F5F5F5] font-semibold text-lg mb-6">
                {lang === 'fr' ? 'Informations de contact' : 'Contact information'}
              </h3>
              <div className="flex flex-col gap-4">
                {socials.map((s) => {
                  const Icon = s.icon
                  return (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                      <div className="w-11 h-11 rounded-xl bg-[#161616] border border-[#5E0006]/30 group-hover:border-[#C0001A]/50 flex items-center justify-center transition-colors duration-200">
                        <Icon style={{ color: s.color }} className="text-lg" />
                      </div>
                      <div>
                        <p className="text-[#F5F5F5]/40 text-xs">{s.label}</p>
                        <p className="text-[#F5F5F5]/80 text-sm group-hover:text-[#C0001A] transition-colors duration-200">{s.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-[#5E0006]/20">
              <div className="flex items-center gap-3">
                <HiLocationMarker className="text-[#C0001A] text-lg shrink-0" />
                <span className="text-[#F5F5F5]/60 text-sm">Parakou, Bénin</span>
              </div>
             
            </div>

            <div className="bg-[#161616] border border-[#5E0006]/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#C0001A] animate-pulse" />
                <span className="text-[#F5F5F5] text-sm font-medium">
                  {lang === 'fr' ? 'Disponible pour de nouveaux projets' : 'Available for new projects'}
                </span>
              </div>
              <p className="text-[#F5F5F5]/50 text-xs leading-relaxed">
                {lang === 'fr' ? 'Je suis actuellement ouverte aux collaborations et opportunités freelance.' : 'I am currently open to collaborations and freelance opportunities.'}
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.2)}>
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#161616] border border-[#C0001A]/30 rounded-2xl p-10 flex flex-col items-center gap-4 text-center">
                <div className="w-14 h-14 rounded-full bg-[#C0001A]/10 border border-[#C0001A]/30 flex items-center justify-center">
                  <span className="text-[#C0001A] text-2xl">✓</span>
                </div>
                <h3 className="text-[#F5F5F5] font-semibold text-lg">
                  {lang === 'fr' ? 'Message envoyé !' : 'Message sent!'}
                </h3>
                <p className="text-[#F5F5F5]/50 text-sm">
                  {lang === 'fr' ? 'Merci pour votre message. Je vous répondrai très bientôt.' : 'Thank you for your message. I will get back to you very soon.'}
                </p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }} className="mt-2 text-sm text-[#C0001A] hover:text-[#FF1F3A] transition-colors duration-200">
                  {lang === 'fr' ? 'Envoyer un autre message' : 'Send another message'}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#161616] border border-[#5E0006]/30 rounded-2xl p-8 flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[#F5F5F5]/60 text-xs font-medium uppercase tracking-wider">
                      {lang === 'fr' ? 'Nom complet' : 'Full name'}
                    </label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder={lang === 'fr' ? 'Votre nom' : 'Your name'} className="bg-[#0D0D0D] border border-[#5E0006]/30 focus:border-[#C0001A]/60 text-[#F5F5F5] text-sm rounded-xl px-4 py-3 outline-none transition-colors duration-200 placeholder:text-[#F5F5F5]/20" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#F5F5F5]/60 text-xs font-medium uppercase tracking-wider">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder={lang === 'fr' ? 'Votre email' : 'Your email'} className="bg-[#0D0D0D] border border-[#5E0006]/30 focus:border-[#C0001A]/60 text-[#F5F5F5] text-sm rounded-xl px-4 py-3 outline-none transition-colors duration-200 placeholder:text-[#F5F5F5]/20" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#F5F5F5]/60 text-xs font-medium uppercase tracking-wider">
                    {lang === 'fr' ? 'Sujet' : 'Subject'}
                  </label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder={lang === 'fr' ? 'Sujet de votre message' : 'Subject of your message'} className="bg-[#0D0D0D] border border-[#5E0006]/30 focus:border-[#C0001A]/60 text-[#F5F5F5] text-sm rounded-xl px-4 py-3 outline-none transition-colors duration-200 placeholder:text-[#F5F5F5]/20" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#F5F5F5]/60 text-xs font-medium uppercase tracking-wider">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder={lang === 'fr' ? 'Décrivez votre projet ou votre demande...' : 'Describe your project or request...'} className="bg-[#0D0D0D] border border-[#5E0006]/30 focus:border-[#C0001A]/60 text-[#F5F5F5] text-sm rounded-xl px-4 py-3 outline-none transition-colors duration-200 placeholder:text-[#F5F5F5]/20 resize-none" />
                </div>
                <button type="submit" disabled={loading} className="w-full bg-[#C0001A] hover:bg-[#FF1F3A] disabled:opacity-60 text-white font-medium py-3.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2">
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    lang === 'fr' ? 'Envoyer le message' : 'Send message'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
