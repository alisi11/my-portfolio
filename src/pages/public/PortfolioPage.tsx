import { FC } from "react";
import { useTranslation } from "react-i18next";
import { LuExternalLink, LuLayers, LuCalendar } from "react-icons/lu";

interface ProjectItem {
  key: string;
  title: string;
  subtitle: string;
  desc: string[];
  tech: string[];
  date: string;
  link: string;
  domain: string;
  gradient: string;
}

const PortfolioPage: FC = () => {
  const { t } = useTranslation();

  const projects: ProjectItem[] = [
    {
      key: "salam",
      title: t("portfolio.projects.salam.title"),
      subtitle: t("portfolio.projects.salam.subtitle"),
      desc: t("portfolio.projects.salam.desc", { returnObjects: true }) as string[],
      tech: ["React.js", "TypeScript", "Redux Toolkit", "TanStack Query", "Tailwind CSS"],
      date: "April 2025",
      link: "https://inhso.ir",
      domain: "inhso.ir",
      gradient: "from-emerald-500/25 to-teal-500/10 dark:from-emerald-500/15 dark:to-teal-500/5",
    },
    {
      key: "payesh",
      title: t("portfolio.projects.payesh.title"),
      subtitle: t("portfolio.projects.payesh.subtitle"),
      desc: t("portfolio.projects.payesh.desc", { returnObjects: true }) as string[],
      tech: ["React.js", "TypeScript", "Redux Toolkit", "TanStack Query", "Tailwind CSS"],
      date: "October 2025",
      link: "https://payesh.inhso.ir",
      domain: "payesh.inhso.ir",
      gradient: "from-blue-500/25 to-indigo-500/10 dark:from-blue-500/15 dark:to-indigo-500/5",
    },
    {
      key: "picopet",
      title: t("portfolio.projects.picopet.title"),
      subtitle: t("portfolio.projects.picopet.subtitle"),
      desc: t("portfolio.projects.picopet.desc", { returnObjects: true }) as string[],
      tech: ["React.js", "TypeScript", "Redux Toolkit", "TanStack Query", "Tailwind CSS", "Framer Motion"],
      date: "January 2026",
      link: "https://picopet.ir",
      domain: "picopet.ir",
      gradient: "from-cyan-500/25 to-sky-500/10 dark:from-cyan-500/15 dark:to-sky-500/5",
    },
    {
      key: "pharmacy",
      title: t("portfolio.projects.pharmacy.title"),
      subtitle: t("portfolio.projects.pharmacy.subtitle"),
      desc: t("portfolio.projects.pharmacy.desc", { returnObjects: true }) as string[],
      tech: ["React.js", "JavaScript", "Redux Toolkit", "TanStack Query", "Tailwind CSS", "Ant Design"],
      date: "July 2022",
      link: "https://pharmacy.isikato.ir",
      domain: "pharmacy.isikato.ir",
      gradient: "from-indigo-500/25 to-purple-500/10 dark:from-indigo-500/15 dark:to-purple-500/5",
    },
    {
      key: "salamat",
      title: t("portfolio.projects.salamat.title"),
      subtitle: t("portfolio.projects.salamat.subtitle"),
      desc: t("portfolio.projects.salamat.desc", { returnObjects: true }) as string[],
      tech: ["React.js", "JavaScript", "Redux Toolkit", "TanStack Query", "Tailwind CSS", "Ant Design"],
      date: "October 2021",
      link: "https://inhs.isikato.ir",
      domain: "inhs.isikato.ir",
      gradient: "from-rose-500/25 to-pink-500/10 dark:from-rose-500/15 dark:to-pink-500/5",
    }
  ];

  return (
    <div className="flex-1 flex flex-col justify-between">
      
      {/* Header */}
      <div className="border-b border-slate-200/40 dark:border-slate-800/30 pb-6 mb-8">
        <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white flex items-center gap-2">
          {t("portfolio.title")}
        </h2>
        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-2">
          {t("portfolio.subtitle")}
        </p>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-8">
        {projects.map((proj) => (
          <div
            key={proj.key}
            className={`p-6 md:p-8 rounded-3xl border border-slate-200/40 dark:border-slate-800/30 bg-gradient-to-br ${proj.gradient} shadow-xs hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row gap-6 items-stretch justify-between`}
          >
            {/* Project Copy */}
            <div className="flex-1 flex flex-col justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 block mb-2 font-inter tracking-wider uppercase">
                  {proj.subtitle}
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-800 dark:text-white mb-4">
                  {proj.title}
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                  {proj.desc.map((bullet: string, idx: number) => (
                    <li key={idx} className="flex gap-3 items-start group">
                      <span className="mt-2 w-1.5 h-1.5 min-w-1.5 rounded-full bg-emerald-400/60 group-hover:bg-emerald-500 transition-colors duration-200" />
                      <span className="text-justify">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Badges / Tech */}
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-white/70 dark:bg-slate-950/40 border border-slate-200/20 dark:border-slate-800/10 text-slate-600 dark:text-slate-400 font-inter"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar Meta Box */}
            <div className="lg:w-[240px] p-6 rounded-2xl bg-white/40 dark:bg-slate-900/10 border border-slate-200/30 dark:border-slate-800/10 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                  <LuLayers className="w-4 h-4 text-slate-400" />
                  <div className="text-xs">
                    <p className="font-semibold uppercase tracking-wider block text-[10px] text-slate-400 font-inter">Role</p>
                    <p className="font-bold text-slate-700 dark:text-slate-200">{t("portfolio.role")}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                  <LuCalendar className="w-4 h-4 text-slate-400" />
                  <div className="text-xs">
                    <p className="font-semibold uppercase tracking-wider block text-[10px] text-slate-400 font-inter">Release</p>
                    <p className="font-bold text-slate-700 dark:text-slate-200 font-inter">{proj.date}</p>
                  </div>
                </div>
              </div>

              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-semibold text-sm shadow-sm transition-all font-inter cursor-pointer"
              >
                <span>{proj.domain}</span>
                <LuExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* Footer Text */}
      <footer className="mt-16 pt-6 border-t border-slate-200/40 dark:border-slate-800/30 text-center text-xs text-slate-400 dark:text-slate-500">
        {t("common.copyright")}
      </footer>
    </div>
  );
};

export default PortfolioPage;
