import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { LuMapPin, LuBriefcase, LuDownload, LuArrowRight, LuArrowLeft, LuExternalLink, LuSparkles } from "react-icons/lu";

import CustomButton from "@/components/button";
import * as pathRoute from "@/routes/pathRoutes";

const Home: FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n.language === "fa";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const selectedProjects = [
    {
      key: "salam",
      title: t("portfolio.projects.salam.title"),
      subtitle: t("portfolio.projects.salam.subtitle"),
      tech: ["React.js", "TypeScript", "Redux Toolkit", "TanStack Query", "Tailwind CSS"],
      gradient: "from-emerald-500/20 via-teal-500/10 to-emerald-400/5",
      darkGradient: "dark:from-emerald-500/10 dark:via-teal-500/5 dark:to-emerald-400/3",
      accentColor: "emerald",
      border: "hover:border-emerald-500/40",
      iconBg: "from-emerald-500 to-teal-600",
      site: "inhso.ir",
    },
    {
      key: "payesh",
      title: t("portfolio.projects.payesh.title"),
      subtitle: t("portfolio.projects.payesh.subtitle"),
      tech: ["React.js", "TypeScript", "Redux Toolkit", "TanStack Query", "Tailwind CSS"],
      gradient: "from-blue-500/20 via-indigo-500/10 to-blue-400/5",
      darkGradient: "dark:from-blue-500/10 dark:via-indigo-500/5 dark:to-blue-400/3",
      accentColor: "blue",
      border: "hover:border-blue-500/40",
      iconBg: "from-blue-500 to-indigo-600",
      site: "payesh.inhso.ir",
    },
    {
      key: "picopet",
      title: t("portfolio.projects.picopet.title"),
      subtitle: t("portfolio.projects.picopet.subtitle"),
      tech: ["React.js", "TypeScript", "Redux Toolkit", "TanStack Query", "Tailwind CSS", "Framer Motion"],
      gradient: "from-cyan-500/20 via-sky-500/10 to-cyan-400/5",
      darkGradient: "dark:from-cyan-500/10 dark:via-sky-500/5 dark:to-cyan-400/3",
      accentColor: "cyan",
      border: "hover:border-cyan-500/40",
      iconBg: "from-cyan-500 to-sky-600",
      site: "picopet.ir",
    },
    {
      key: "pharmacy",
      title: t("portfolio.projects.pharmacy.title"),
      subtitle: t("portfolio.projects.pharmacy.subtitle"),
      tech: ["React.js", "JavaScript", "Redux Toolkit", "TanStack Query", "Tailwind CSS", "Ant Design"],
      gradient: "from-violet-500/20 via-purple-500/10 to-violet-400/5",
      darkGradient: "dark:from-violet-500/10 dark:via-purple-500/5 dark:to-violet-400/3",
      accentColor: "violet",
      border: "hover:border-violet-500/40",
      iconBg: "from-violet-500 to-purple-600",
      site: "pharmacy.isikato.ir",
    },
  ];

  return (
    <div className="flex-1 flex flex-col justify-between relative">

      {/* Floating decorative blobs */}
      <div className="absolute -top-10 end-10 w-80 h-80 bg-gradient-to-br from-emerald-400/8 to-teal-300/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 start-0 w-64 h-64 bg-gradient-to-tr from-blue-400/6 to-violet-300/4 rounded-full blur-3xl pointer-events-none" />

      {/* Intro Section */}
      <div
        className={`max-w-full relative z-10 transition-all duration-700 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        {/* Badges */}
        <div className="flex flex-wrap gap-2.5 mb-7">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200/30 dark:border-emerald-800/20 shadow-sm">
            <span className="relative flex items-center justify-center w-2 h-2">
              <span className="absolute w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-75" />
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </span>
            {t("common.available")}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-200/30 dark:border-slate-800/20 shadow-sm">
            <LuMapPin className="w-3.5 h-3.5" />
            {t("common.status")}
          </span>
        </div>

        {/* Hero Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white leading-tight">
          {t("home.welcome")}
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold mt-3 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent leading-normal font-inter bg-[length:200%_auto] animate-shimmer">
          {t("common.role")}
        </h3>

        {/* Intro Description */}
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mt-7 leading-relaxed text-justify">
          {t("home.intro")}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-9">
          <CustomButton
            type="primary"
            variant="solid"
            size="large"
            icon={<LuSparkles className="w-4 h-4" />}
            iconPosition={isRtl ? "right" : "left"}
            onClick={() => handleNavigate(pathRoute.resumePagePath)}
          >
            {t("common.about")}
          </CustomButton>
          <a href="/Ali_Sobouhi_Resume.pdf" download="Ali_Sobouhi_Resume.pdf" className="inline-block">
            <CustomButton
              type="secondary"
              variant="solid"
              size="large"
              icon={<LuDownload className="w-4 h-4" />}
              iconPosition={isRtl ? "right" : "left"}
            >
              {t("common.downloadResume")}
            </CustomButton>
          </a>
        </div>
      </div>

      {/* Selected Work Grid */}
      <div
        className={`mt-16 relative z-10 transition-all duration-700 ease-out delay-200 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex items-center justify-between mb-8 pb-5 relative">
          <h4 className="text-xl font-bold flex items-center gap-3 text-slate-800 dark:text-white">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 dark:from-emerald-500/20 dark:to-emerald-600/10 flex items-center justify-center border border-emerald-500/20">
              <LuBriefcase className="text-emerald-500 w-4 h-4" />
            </span>
            {t("home.selectedWork")}
          </h4>
          <button
            onClick={() => handleNavigate(pathRoute.portfolioPagePath)}
            className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 cursor-pointer flex items-center gap-1.5 group transition-colors duration-200"
          >
            {t("common.readMore")}
            {isRtl ? (
              <LuArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            ) : (
              <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            )}
          </button>
          {/* Gradient underline */}
          <div className="absolute bottom-0 start-0 h-px w-full bg-gradient-to-r from-emerald-500/40 via-slate-200/40 to-transparent dark:via-slate-800/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {selectedProjects.map((proj, index) => (
            <div
              key={proj.key}
              onClick={() => handleNavigate(pathRoute.portfolioPagePath)}
              className={`group p-6 rounded-2xl border border-slate-200/40 dark:border-slate-800/30 bg-gradient-to-br ${proj.gradient} ${proj.darkGradient} ${proj.border} transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer flex flex-col justify-between relative overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-white/5 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-inter tracking-wider uppercase">
                    {proj.subtitle}
                  </span>
                  <LuExternalLink className="w-4 h-4 text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
                </div>
                <h5 className="text-lg font-bold text-slate-800 dark:text-white mb-3 leading-snug">
                  {proj.title}
                </h5>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4 relative z-10">
                {proj.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-white/60 dark:bg-slate-900/50 border border-slate-200/30 dark:border-slate-800/20 text-slate-600 dark:text-slate-400 font-inter shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
                {proj.tech.length > 4 && (
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-white/60 dark:bg-slate-900/50 border border-slate-200/30 dark:border-slate-800/20 text-slate-500 dark:text-slate-400 shadow-sm">
                    +{proj.tech.length - 4}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Text */}
      <footer className="mt-16 pt-6 border-t border-slate-200/40 dark:border-slate-800/30 text-center text-xs text-slate-400 dark:text-slate-500">
        {t("common.copyright")}
      </footer>
    </div>
  );
};

export default Home;
