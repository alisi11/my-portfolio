import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { LuPhone, LuCopy, LuCheck, LuExternalLink, LuSend } from "react-icons/lu";

const EMAIL = "alisoftware1133@gmail.com";
const PHONE = "(+98) 912 331 1527";
const PHONE_HREF = "tel:+989123311527";
const LINKEDIN_URL = "https://linkedin.com/in/ali-sobouhi";

const Contact: FC = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex-1 flex flex-col">

      {/* Header */}
      <div className="border-b border-slate-200/40 dark:border-slate-800/30 pb-6 mb-8">
        <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white">
          {t("contact.title")}
        </h2>
        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-2 max-w-full">
          {t("contact.subtitle")}
        </p>
      </div>

      {/* Hero CTA Banner — email lives here only */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700 p-8 md:p-10 mb-8 text-white">
        <div className="absolute top-0 end-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 start-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
            {t("contact.letsConnect")}
          </h3>
          <p className="text-sm md:text-base text-emerald-100 leading-relaxed">
            {t("contact.letsConnectSub")}
          </p>

          {/* Email row: mailto link + copy button side by side */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-emerald-700 font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm"
            >
              <LuSend className="w-4 h-4" />
              {EMAIL}
            </a>
            <button
              onClick={handleCopyEmail}
              title={t("common.copyEmail")}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                copied
                  ? "bg-white/20 text-white border-white/30"
                  : "bg-white/10 text-white border-white/20 hover:bg-white/20"
              }`}
            >
              {copied ? <LuCheck className="w-4 h-4" /> : <LuCopy className="w-4 h-4" />}
              {copied ? t("contact.copied") : t("common.copyEmail")}
            </button>
          </div>
        </div>
      </div>

      {/* Contact Channel Cards — Phone + LinkedIn only (email is above) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Phone Card */}
        <div className="group relative p-6 rounded-2xl border-2 border-blue-200/50 dark:border-blue-800/30 bg-blue-50/30 dark:bg-blue-950/10 hover:border-blue-400/60 dark:hover:border-blue-700/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/5 border border-blue-500/20 flex items-center justify-center text-blue-500">
              <LuPhone className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-bold text-blue-600/60 dark:text-blue-400/50 uppercase tracking-widest block">
                {t("contact.phoneLabel")}
              </span>
              <p className="text-base font-bold text-slate-800 dark:text-white mt-1 select-all font-inter" dir="ltr">
                {PHONE}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {t("contact.phoneSub")}
              </p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-all"
            >
              <LuPhone className="w-4 h-4" />
              {t("contact.callNow")}
            </a>
            <a
              href="https://wa.me/989123311527"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/30 transition-all"
            >
              <FaWhatsapp className="w-4 h-4" />
              {t("contact.whatsappLabel")}
            </a>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="group relative p-6 rounded-2xl border-2 border-sky-200/50 dark:border-sky-800/30 bg-sky-50/30 dark:bg-sky-950/10 hover:border-sky-400/60 dark:hover:border-sky-700/40 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-2xl bg-sky-500/10 dark:bg-sky-500/5 border border-sky-500/20 flex items-center justify-center text-sky-600">
              <FaLinkedin className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-bold text-sky-600/60 dark:text-sky-400/50 uppercase tracking-widest block">
                {t("contact.linkedinLabel")}
              </span>
              <p className="text-base font-bold text-slate-800 dark:text-white mt-1 font-inter">
                ali-sobouhi
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {t("contact.linkedinSub")}
              </p>
            </div>
          </div>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-sky-100 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 hover:bg-sky-200 dark:hover:bg-sky-900/30 transition-all"
          >
            <LuExternalLink className="w-4 h-4" />
            {t("contact.viewProfile")}
          </a>
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-16 pt-6 border-t border-slate-200/40 dark:border-slate-800/30 text-center text-xs text-slate-400 dark:text-slate-500">
        {t("common.copyright")}
      </footer>
    </div>
  );
};

export default Contact;
