"use client";

import { useState, FormEvent, useId } from "react";
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
  const nameId = useId();
  const nameErrorId = useId();
  const emailId = useId();
  const emailErrorId = useId();
  const phoneId = useId();
  const phoneErrorId = useId();
  const messageId = useId();
  const messageErrorId = useId();

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
      console.log("Form Submitted Successfully:", formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    }
  };

  return (
    <>
      <section
        aria-labelledby="contact-heading"
        className="max-w-[1110px] mx-auto sm:px-6 lg:px-0 mb-30 sm:mb-40"
      >
        <div className="relative bg-peach text-white overflow-hidden sm:rounded-2xl px-6 py-18 sm:p-14 lg:p-[72px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-24 w-full">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[url('/assets/contact/desktop/bg-pattern-hero-desktop.svg')] bg-no-repeat bg-[position:-80px_-80px] sm:bg-[position:-120px_-160px] lg:bg-left-top pointer-events-none z-0"
          />

          <div className="relative z-10 flex flex-col gap-6 text-center sm:text-left max-w-[540px] shrink-0">
            <h1
              id="contact-heading"
              className="text-[32px] leading-[36px] sm:text-[48px] sm:leading-[48px] font-medium"
            >
              Contact Us
            </h1>
            <p className="text-body leading-relaxed">
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            aria-describedby="form-instructions"
            className="relative z-10 w-full lg:max-w-[380px] flex flex-col gap-6"
          >
            <span id="form-instructions" className="sr-only">
              All fields are required. Submit errors will be read automatically.
            </span>

            {/* Name Field */}
            <div className="relative border-b border-white flex items-center focus-within:border-b-2">
              <label htmlFor={nameId} className="sr-only">
                Name
              </label>
              <input
                type="text"
                id={nameId}
                placeholder="Name"
                value={formData.name}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? nameErrorId : undefined}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent py-3 pr-8 text-body text-white placeholder-white/60 focus:outline-none focus-visible:ring-0"
              />
              {errors.name && (
                <span
                  id={nameErrorId}
                  role="alert"
                  className="absolute right-0 flex items-center gap-2 text-xs italic text-white pointer-events-none"
                >
                  {errors.name}
                  <ErrorIcon />
                </span>
              )}
            </div>

            {/* Email Field */}
            <div className="relative border-b border-white flex items-center focus-within:border-b-2">
              <label htmlFor={emailId} className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id={emailId}
                placeholder="Email Address"
                value={formData.email}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? emailErrorId : undefined}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent py-3 pr-8 text-body text-white placeholder-white/60  focus:outline-none focus-visible:ring-0 focus-visible:ring-0"
              />
              {errors.email && (
                <span
                  id={emailErrorId}
                  role="alert"
                  className="absolute right-0 flex items-center gap-2 text-xs italic text-white pointer-events-none"
                >
                  {errors.email}
                  <ErrorIcon />
                </span>
              )}
            </div>

            {/* Phone Field */}
            <div className="relative border-b border-white flex items-center focus-within:border-b-2">
              <label htmlFor={phoneId} className="sr-only">
                Phone
              </label>
              <input
                type="tel"
                id={phoneId}
                placeholder="Phone"
                value={formData.phone}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? phoneErrorId : undefined}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full bg-transparent py-3 pr-8 text-body text-white placeholder-white/60 focus:outline-none focus-visible:ring-0"
              />
              {errors.phone && (
                <span
                  id={phoneErrorId}
                  role="alert"
                  className="absolute right-0 flex items-center gap-2 text-xs italic text-white pointer-events-none"
                >
                  {errors.phone}
                  <ErrorIcon />
                </span>
              )}
            </div>

            {/* Message Field */}
            <div className="relative border-b border-white flex items-start focus-within:border-b-2">
              <label htmlFor={messageId} className="sr-only">
                Your Message
              </label>
              <textarea
                id={messageId}
                rows={3}
                placeholder="Your Message"
                value={formData.message}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? messageErrorId : undefined}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent py-3 pr-8 text-body text-white placeholder-white/60 focus:outline-none focus-visible:ring-0 resize-none"
              />
              {errors.message && (
                <span
                  id={messageErrorId}
                  role="alert"
                  className="absolute right-0 top-3 flex items-center gap-2 text-xs italic text-white pointer-events-none"
                >
                  {errors.message}
                  <ErrorIcon />
                </span>
              )}
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="self-center sm:self-end bg-white text-dark-grey text-h3 px-12 py-4 rounded-lg font-medium uppercase tracking-widest hover:bg-light-peach hover:text-white transition-colors duration-200 mt-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Embedded Location List Component */}
      <LocationList />
    </>
  );
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
