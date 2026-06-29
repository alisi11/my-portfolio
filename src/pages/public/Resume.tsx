import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  LuBriefcase, LuGraduationCap, LuCpu, LuDownload,
  LuCircleCheck, LuSparkles, LuUser, LuCalendar,
  LuHeart, LuShield,
} from "react-icons/lu";

import CustomButton from "@/components/button";

const Resume: FC = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "fa";
  const [downloadClicked, setDownloadClicked] = useState(false);

  const bullets = t("resume.sepehr.bullets", { returnObjects: true }) as string[];
  const educationList = t("resume.eduList", { returnObjects: true }) as Array<{
    degree: string;
    school: string;
    date: string;
    gpa: string;
  }>;

  const skillsData = [
    { category: t("resume.skillsCat.core"), skills: ["JavaScript (ES6+)", "TypeScript", "React.js", "HTML5", "CSS3"], color: "emerald" },
    { category: t("resume.skillsCat.state"), skills: ["Redux", "Redux Toolkit", "TanStack Query"], color: "blue" },
    { category: t("resume.skillsCat.styling"), skills: ["Tailwind CSS", "Material UI", "Ant Design", "Bootstrap"], color: "violet" },
    { category: t("resume.skillsCat.frameworks"), skills: ["Next.js", "React Native", "PWA"], color: "amber" },
    { category: t("resume.skillsCat.tools"), skills: ["Git", "Figma", "Adobe XD"], color: "rose" },
  ];

  const colorMap: Record<string, { badge: string; dot: string }> = {
    emerald: { badge: "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border-emerald-200/50 dark:border-emerald-800/30", dot: "bg-emerald-500" },
    blue: { badge: "bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 border-blue-200/50 dark:border-blue-800/30", dot: "bg-blue-500" },
    violet: { badge: "bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300 border-violet-200/50 dark:border-violet-800/30", dot: "bg-violet-500" },
    amber: { badge: "bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 border-amber-200/50 dark:border-amber-800/30", dot: "bg-amber-500" },
    rose: { badge: "bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300 border-rose-200/50 dark:border-rose-800/30", dot: "bg-rose-500" },
  };

  const handleDownload = () => {
    setDownloadClicked(true);
    setTimeout(() => setDownloadClicked(false), 2500);
  };

  return (
    <div className="flex-1 flex flex-col justify-between relative">

      {/* Decorative blobs */}
      <div className="absolute top-0 end-0 w-72 h-72 bg-gradient-to-br from-emerald-400/8 to-teal-300/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 start-0 w-56 h-56 bg-gradient-to-tr from-blue-400/6 to-violet-300/4 rounded-full blur-3xl pointer-events-none" />

      {/* ── Header with inline download ── */}
      <div className="relative pb-8 mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <LuSparkles className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white">
              {t("resume.title")}
            </h2>
          </div>

          {/* Download CTA — lives in the header row */}
          <a
            href="/Ali_Sobouhi_Resume.pdf"
            download="Ali_Sobouhi_Resume.pdf"
            onClick={handleDownload}
          >
            <CustomButton
              type="primary"
              variant="solid"
              size="small"
              icon={downloadClicked ? <LuCircleCheck className="w-4 h-4" /> : <LuDownload className="w-4 h-4" />}
              iconPosition={isRtl ? "right" : "left"}
            >
              {downloadClicked ? "✓" : t("common.downloadResume")}
            </CustomButton>
          </a>
        </div>

        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-2 max-w-full leading-relaxed">
          {t("resume.subtitle")}
        </p>
        <div className="absolute bottom-0 start-0 h-px w-full bg-gradient-to-r from-emerald-500/40 via-slate-200/40 to-transparent dark:via-slate-800/30" />
      </div>

      {/* ── Main grid ── */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 relative z-10">

        {/* Left: Experience + Education */}
        <div className="xl:col-span-2 flex flex-col gap-12">

          {/* Work Experience */}
          <div>
            <h3 className="text-xl font-bold flex items-center gap-3 text-slate-800 dark:text-white mb-8">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 dark:from-emerald-500/20 dark:to-emerald-600/10 flex items-center justify-center border border-emerald-500/20">
                <LuBriefcase className="text-emerald-500 w-4 h-4" />
              </span>
              {t("resume.experience")}
            </h3>

            <div className="relative border-s-2 border-emerald-200/60 dark:border-emerald-900/40 ms-4 pe-2">
              <div className="mb-10 ms-8">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-950/60 dark:to-emerald-900/30 rounded-full -start-4 ring-4 ring-white dark:ring-slate-900 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 shadow-sm">
                  <LuBriefcase className="w-4 h-4" />
                </span>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-white/60 to-slate-50/30 dark:from-slate-800/30 dark:to-slate-900/20 border border-slate-200/40 dark:border-slate-800/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white">
                      {t("resume.sepehr.company")}
                    </h4>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/30 dark:border-emerald-800/20 text-emerald-600 dark:text-emerald-400">
                      {t("resume.sepehr.date")}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-5 flex items-center gap-2">
                    <span>{t("resume.sepehr.role")}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                      {t("resume.sepehr.location")} · {t("resume.fullTime")}
                    </span>
                  </div>

                  <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-3 items-start group">
                        <span className="mt-1.5 w-2 h-2 min-w-2 rounded-full bg-emerald-400/60 group-hover:bg-emerald-500 transition-colors duration-200" />
                        <span className="text-justify">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-bold flex items-center gap-3 text-slate-800 dark:text-white mb-8">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500/15 to-blue-600/10 dark:from-blue-500/20 dark:to-blue-600/10 flex items-center justify-center border border-blue-500/20">
                <LuGraduationCap className="text-blue-500 w-4 h-4" />
              </span>
              {t("resume.education")}
            </h3>

            <div className="relative border-s-2 border-blue-200/60 dark:border-blue-900/40 ms-4 pe-2">
              {educationList.map((edu, idx) => (
                <div key={idx} className="mb-8 ms-8 last:mb-0">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-950/60 dark:to-blue-900/30 rounded-full -start-4 ring-4 ring-white dark:ring-slate-900 border border-blue-300/30 dark:border-blue-800/30 text-blue-600 dark:text-blue-400 shadow-sm">
                    <LuGraduationCap className="w-4 h-4" />
                  </span>
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-white/60 to-slate-50/30 dark:from-slate-800/30 dark:to-slate-900/20 border border-slate-200/40 dark:border-slate-800/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-base font-bold text-slate-800 dark:text-white">{edu.degree}</h4>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200/30 dark:border-blue-800/20 text-blue-600 dark:text-blue-400">
                        {edu.date}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">{edu.school}</p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/20 dark:border-emerald-800/20">
                      <LuCircleCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        {t("resume.gpa")}: {edu.gpa}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Right Sidebar — 3 compact cards ── */}
        <div className="flex flex-col gap-6">

          {/* Technical Skills */}
          <div className="p-5 rounded-2xl border border-slate-200/40 dark:border-slate-800/30 bg-gradient-to-br from-white/60 to-slate-50/30 dark:from-slate-800/20 dark:to-slate-900/10">
            <h3 className="text-base font-bold flex items-center gap-2 text-slate-800 dark:text-white mb-5">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500/15 to-violet-600/10 dark:from-violet-500/20 dark:to-violet-600/10 flex items-center justify-center border border-violet-500/20">
                <LuCpu className="text-violet-500 w-3.5 h-3.5" />
              </span>
              {t("resume.skills")}
            </h3>

            <div className="space-y-4">
              {skillsData.map((cat, idx) => {
                const colors = colorMap[cat.color] || colorMap.emerald;
                return (
                  <div key={idx}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                      <h4 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider font-inter">
                        {cat.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2.5 py-1 text-[11px] font-semibold border rounded-lg transition-all duration-200 cursor-default font-inter ${colors.badge}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Languages + Personal Details — merged into one card */}
          <div className="p-5 rounded-2xl border border-slate-200/40 dark:border-slate-800/30 bg-gradient-to-br from-white/60 to-slate-50/30 dark:from-slate-800/20 dark:to-slate-900/10">

            {/* Languages mini-section */}
            <h3 className="text-base font-bold flex items-center gap-2 text-slate-800 dark:text-white mb-4">
              <span className="text-lg">🌐</span>
              {t("resume.languages")}
            </h3>
            <div className="flex gap-2 mb-6">
              <div className="flex-1 flex items-center gap-2 p-2.5 rounded-xl bg-slate-50/60 dark:bg-slate-900/20 border border-slate-200/30 dark:border-slate-800/20">
                <span className="text-base">🇮🇷</span>
                <div>
                  <p className="text-[11px] font-bold text-slate-700 dark:text-slate-200">فارسی</p>
                  <p className="text-[10px] text-slate-400">Native</p>
                </div>
              </div>
              <div className="flex-1 flex items-center gap-2 p-2.5 rounded-xl bg-slate-50/60 dark:bg-slate-900/20 border border-slate-200/30 dark:border-slate-800/20">
                <span className="text-base">🇬🇧</span>
                <div>
                  <p className="text-[11px] font-bold text-slate-700 dark:text-slate-200 font-inter">English</p>
                  <p className="text-[10px] text-slate-400 font-inter">Intermediate</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-100 dark:bg-slate-800/50 mb-5" />

            {/* Personal Details mini-section */}
            <h3 className="text-base font-bold flex items-center gap-2 text-slate-800 dark:text-white mb-4">
              <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500/15 to-blue-600/10 flex items-center justify-center border border-blue-500/20">
                <LuUser className="text-blue-500 w-3 h-3" />
              </span>
              {t("resume.personalInfo.title")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-rose-50 dark:bg-rose-950/20 border border-rose-200/30 flex items-center justify-center shrink-0">
                  <LuCalendar className="w-3.5 h-3.5 text-rose-500" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wide">{t("resume.personalInfo.birthday")}</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 text-xs leading-tight">{t("resume.personalInfo.birthdayVal")}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-pink-50 dark:bg-pink-950/20 border border-pink-200/30 flex items-center justify-center shrink-0">
                  <LuHeart className="w-3.5 h-3.5 text-pink-500" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wide">{t("resume.personalInfo.maritalStatus")}</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 text-xs">{t("resume.personalInfo.maritalStatusVal")}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/30 flex items-center justify-center shrink-0">
                  <LuShield className="w-3.5 h-3.5 text-emerald-600" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wide">{t("resume.personalInfo.militaryStatus")}</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 text-xs">{t("resume.personalInfo.militaryStatusVal")}</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="mt-16 pt-6 border-t border-slate-200/40 dark:border-slate-800/30 text-center text-xs text-slate-400 dark:text-slate-500">
        {t("common.copyright")}
      </footer>
    </div>
  );
};

export default Resume;
