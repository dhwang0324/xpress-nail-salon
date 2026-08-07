"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-charcoal/10 bg-cream p-8 text-center">
        <p className="font-serif text-xl italic">Thank you.</p>
        <p className="mt-2 text-sm font-light text-charcoal/55">
          We&rsquo;ve received your message and will reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs uppercase tracking-wide2 text-charcoal/45">Name</span>
          <input
            required
            type="text"
            name="name"
            className="mt-2 w-full border-b border-charcoal/25 bg-transparent pb-2 text-sm focus:border-charcoal focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-wide2 text-charcoal/45">Phone</span>
          <input
            type="tel"
            name="phone"
            className="mt-2 w-full border-b border-charcoal/25 bg-transparent pb-2 text-sm focus:border-charcoal focus:outline-none"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-xs uppercase tracking-wide2 text-charcoal/45">Email</span>
        <input
          required
          type="email"
          name="email"
          className="mt-2 w-full border-b border-charcoal/25 bg-transparent pb-2 text-sm focus:border-charcoal focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="text-xs uppercase tracking-wide2 text-charcoal/45">Preferred Service</span>
        <input
          type="text"
          name="service"
          placeholder="e.g. Signature Manicure"
          className="mt-2 w-full border-b border-charcoal/25 bg-transparent pb-2 text-sm placeholder:text-charcoal/25 focus:border-charcoal focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="text-xs uppercase tracking-wide2 text-charcoal/45">Message</span>
        <textarea
          name="message"
          rows={4}
          className="mt-2 w-full resize-none border-b border-charcoal/25 bg-transparent pb-2 text-sm focus:border-charcoal focus:outline-none"
        />
      </label>

      <button
        type="submit"
        className="group inline-flex items-center gap-3 rounded-full bg-charcoal px-8 py-3.5 text-xs uppercase tracking-wide2 text-warm-white transition-colors hover:bg-black-soft"
      >
        <span>Send Request</span>
        <span className="transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
      </button>
    </form>
  );
}
