"use client";

import { useState, FormEvent } from "react";
import LocationList from "../_components/out-company/location-list";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Can't be empty";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Can't be empty";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please use a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Can't be empty";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Can't be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Process submission
      console.log("Form Submitted Successfully:", formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    }
  };

  return (
    <main>
      {/* Hero Contact Card */}
      <section
        aria-labelledby="contact-heading"
        className="relative bg-peach text-white overflow-hidden sm:rounded-2xl max-w-7xl mx-auto px-6 py-18 sm:px-14 sm:py-18 lg:px-24 lg:py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10"
      >
        {/* Background Pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[url('/assets/contact/desktop/bg-pattern-hero-desktop.svg')] bg-no-repeat bg-left-top sm:-left-20 lg:left-0 bg-cover pointer-events-none -z-0"
        />

        {/* Text Column */}
        <div className="relative z-10 flex flex-col gap-6 text-center sm:text-left max-w-[540px]">
          <h1
            id="contact-heading"
            className="text-[32px] leading-[36px] sm:text-[48px] sm:leading-[48px] font-medium"
          >
            Contact Us
          </h1>
          <p className="text-body leading-relaxed">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>

        {/* Form Column */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="relative z-10 w-full lg:max-w-[380px] flex flex-col gap-6"
        >
          {/* Name Field */}
          <div className="relative border-b border-white flex items-center">
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-transparent py-3 pr-8 text-body text-white placeholder-white/60 focus:outline-none"
            />
            {errors.name && (
              <span className="absolute right-0 flex items-center gap-2 text-xs italic text-white pointer-events-none">
                {errors.name}
                <ErrorIcon />
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="relative border-b border-white flex items-center">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-transparent py-3 pr-8 text-body text-white placeholder-white/60 focus:outline-none"
            />
            {errors.email && (
              <span className="absolute right-0 flex items-center gap-2 text-xs italic text-white pointer-events-none">
                {errors.email}
                <ErrorIcon />
              </span>
            )}
          </div>

          {/* Phone Field */}
          <div className="relative border-b border-white flex items-center">
            <input
              type="tel"
              id="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full bg-transparent py-3 pr-8 text-body text-white placeholder-white/60 focus:outline-none"
            />
            {errors.phone && (
              <span className="absolute right-0 flex items-center gap-2 text-xs italic text-white pointer-events-none">
                {errors.phone}
                <ErrorIcon />
              </span>
            )}
          </div>

          {/* Message Field */}
          <div className="relative border-b border-white flex items-start">
            <textarea
              id="message"
              rows={3}
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-transparent py-3 pr-8 text-body text-white placeholder-white/60 focus:outline-none resize-none"
            />
            {errors.message && (
              <span className="absolute right-0 top-3 flex items-center gap-2 text-xs italic text-white pointer-events-none">
                {errors.message}
                <ErrorIcon />
              </span>
            )}
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            className="self-center sm:self-end bg-white text-dark-grey text-h3 px-12 py-4 rounded-lg font-medium uppercase tracking-widest hover:bg-light-peach hover:text-white transition-colors duration-200 mt-2 focus-visible:outline-2 focus-visible:outline-white"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Embedded Location Component */}
      <LocationList />
    </main>
  );
}

{
  /* Validation Warning Icon SVG */
}
function ErrorIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 5C10.5523 5 11 5.44772 11 6V11C11 11.5523 10.5523 12 10 12C9.44772 12 9 11.5523 9 11V6C9 5.44772 9.44772 5 10 5ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15Z"
        fill="#E7816B"
      />
    </svg>
  );
}
