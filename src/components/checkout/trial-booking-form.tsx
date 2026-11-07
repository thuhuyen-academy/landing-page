// Biểu mẫu đăng ký học thử 1 giờ miễn phí tích hợp Auth0 (tự động điền tên & email khi học viên đăng nhập Google)
"use client";

import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  AUTH_UI_COPY,
  UserAuthButton,
} from "@/components/layout/user-auth-button";
import {
  CONTACT_FORM_COPY,
  PAGE_COPY,
  SUBMIT_COPY,
} from "@/lib/i18n/translations";
import {
  buildBackupMailtoUrl,
  submitTrialBooking,
} from "@/services/booking.service";
import { getCourseLevels } from "@/services/course.service";
import type {
  ContactMethodKey,
  LanguageCode,
  TrialBookingPayload,
} from "@/types";

const CONTACT_METHOD_KEYS: ContactMethodKey[] = [
  "Messenger",
  "WhatsApp",
  "Zalo",
  "Email",
  "Phone",
];

interface TrialBookingFormProps {
  language: LanguageCode;
}

export function TrialBookingForm({ language }: TrialBookingFormProps) {
  const { user } = useUser();
  const x = PAGE_COPY[language] || PAGE_COPY.en;
  const r = x.register;
  const cfCopy = CONTACT_FORM_COPY[language] || CONTACT_FORM_COPY.en;
  const sc = SUBMIT_COPY[language] || SUBMIT_COPY.en;
  const authCopy = AUTH_UI_COPY[language] || AUTH_UI_COPY.en;
  const levels = getCourseLevels(language);

  const [nameValue, setNameValue] = useState("");
  const [contactMethod, setContactMethod] =
    useState<ContactMethodKey>("WhatsApp");
  const [contactValue, setContactValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [statusOk, setStatusOk] = useState(false);

  // Tự động điền Họ tên và Email từ tài khoản Google (Auth0) khi học viên đã đăng nhập
  useEffect(() => {
    if (user) {
      if (user.name && !nameValue) {
        setNameValue(user.name);
      }
      if (user.email && !contactValue) {
        setContactMethod("Email");
        setContactValue(user.email);
      }
    }
  }, [user, nameValue, contactValue]);

  const activeMethodTuple =
    cfCopy.methods[contactMethod] || cfCopy.methods.WhatsApp;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const cMethod =
      (d.get("contact_method") as ContactMethodKey) || "WhatsApp";
    const cVal = String(d.get("contact_value") || "").trim();
    const contactCombined = `${cMethod}: ${cVal}`;

    const payload: TrialBookingPayload = {
      name: String(d.get("name") || ""),
      email: contactCombined,
      contactMethod: cMethod,
      contactValue: cVal,
      country: String(d.get("country") || ""),
      level: String(d.get("level") || ""),
      format: String(d.get("format") || ""),
      support: String(d.get("support") || ""),
      goal: String(d.get("goal") || ""),
      websiteLanguage: x.locale,
    };

    setIsSubmitting(true);
    setStatusOk(false);
    setStatusText(sc.sending);

    try {
      const customWebhook =
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.search).get("webhook")
          : null;
      await submitTrialBooking(payload, language, customWebhook);
      setStatusOk(true);
      setStatusText(sc.ok);
      form.reset();
      if (!user) {
        setNameValue("");
        setContactMethod("WhatsApp");
        setContactValue("");
      }
    } catch {
      setStatusOk(false);
      setStatusText(sc.err);
      if (typeof window !== "undefined") {
        window.location.href = buildBackupMailtoUrl(payload, language);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="card" id="booking" onSubmit={handleSubmit}>
      <h3>{r[3]}</h3>
      <p>{r[4]}</p>

      <div className="auth-form-banner">
        {!user && <span className="auth-form-hint">{authCopy.quickFillHint}</span>}
        <UserAuthButton language={language} returnTo="/#register" />
      </div>

      <div className="fields">
        <div className="field">
          <label htmlFor="name">{r[5]}</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="country">{r[7]}</label>
          <input id="country" name="country" autoComplete="country-name" />
        </div>

        <div className="field">
          <label htmlFor="contact-method">{cfCopy.how}</label>
          <select
            id="contact-method"
            name="contact_method"
            value={contactMethod}
            onChange={(e) =>
              setContactMethod(e.target.value as ContactMethodKey)
            }
          >
            {CONTACT_METHOD_KEYS.map((key) => (
              <option key={key} value={key}>
                {cfCopy.methods[key][0]}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="contact-value" id="contact-value-label">
            {activeMethodTuple[1]}
          </label>
          <input
            id="contact-value"
            name="contact_value"
            type={activeMethodTuple[3]}
            placeholder={activeMethodTuple[2]}
            value={contactValue}
            onChange={(e) => setContactValue(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="level">{r[8]}</label>
          <select id="level" name="level">
            <option>{r[13]}</option>
            <option>{r[14]}</option>
            {levels.map((lv) => (
              <option key={lv.code}>{`${lv.code} ${lv.title}`}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="format">{r[9]}</label>
          <select id="format" name="format">
            <option>{r[15]}</option>
            <option>{r[16]}</option>
            <option>{r[17]}</option>
          </select>
        </div>

        <div className="field full">
          <label htmlFor="support">{r[10]}</label>
          <select id="support" name="support">
            <option>{r[18]}</option>
            <option>{r[19]}</option>
            <option>{r[20]}</option>
          </select>
        </div>

        <div className="field full">
          <label htmlFor="goal">{r[11]}</label>
          <textarea id="goal" name="goal" placeholder={r[21]} />
        </div>
      </div>

      <label className="consent-row">
        <input type="checkbox" name="consent" required />
        <span>{cfCopy.consent}</span>
      </label>

      <button className="btn btn-yellow" type="submit" disabled={isSubmitting}>
        {r[22]}
      </button>

      <p className="privacy">{r[23]}</p>
      <p
        className={statusOk ? "status ok" : "status"}
        id="booking-status"
        aria-live="polite"
      >
        {statusText}
      </p>
    </form>
  );
}
