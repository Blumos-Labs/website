'use client';

import { useState } from 'react';
import { IconArrow } from './Icons';
import { EMAIL } from '@/lib/content';

const interests = ['Blumos Battery Platform (OEM app)', 'GPS Tracking', 'Battery Monitoring IoT (Blu-400)', 'Custom hardware / software', 'Something else'];

const field =
  'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#2D7AFD] focus:ring-2 focus:ring-[#2D7AFD]/25';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', interest: interests[0], message: '' });

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // No backend yet: the form opens the visitor's email app with the message filled in.
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Enquiry: ${form.interest}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || '-'}\nInterested in: ${form.interest}\n\n${form.message}`;
    setSent(true);
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={submit} className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 space-y-5 shadow-sm">
      <div className="grid sm:grid-cols-2 gap-[var(--s1)]">
        <label className="block text-sm font-medium text-gray-700">
          Name
          <input name="name" required value={form.name} onChange={update} placeholder="Your name" className={`${field} mt-2`} />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Email
          <input name="email" type="email" required value={form.email} onChange={update} placeholder="you@company.com" className={`${field} mt-2`} />
        </label>
      </div>
      <div className="grid sm:grid-cols-2 gap-[var(--s1)]">
        <label className="block text-sm font-medium text-gray-700">
          Company <span className="text-gray-500">(optional)</span>
          <input name="company" value={form.company} onChange={update} placeholder="Company name" className={`${field} mt-2`} />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Interested in
          <select name="interest" value={form.interest} onChange={update} className={`${field} mt-2`}>
            {interests.map((i) => <option key={i} value={i}>{i}</option>)}
          </select>
        </label>
      </div>
      <label className="block text-sm font-medium text-gray-700">
        Message
        <textarea name="message" required rows={5} value={form.message} onChange={update} placeholder="Tell us what you need" className={`${field} mt-2 resize-none`} />
      </label>
      <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1a68ee] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#004AAD]">
        Send message <IconArrow className="h-4 w-4" />
      </button>
      <p className="text-center text-xs text-gray-500" role="status">
        {sent ? (
          <>If your email app did not open, write to us at <a className="font-semibold text-[#1a68ee] underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</>
        ) : (
          'This opens your email app with the message ready to send.'
        )}
      </p>
    </form>
  );
}
