import { FC, useEffect, useState } from "react";
import { Link, useLocation, Outlet } from "react-router";
import { useTranslation } from "react-i18next";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaHome,
  FaFileAlt,
  FaBriefcase,
  FaPhone,
} from "react-icons/fa";
import {
  LuSun,
  LuMoon,
  LuMenu,
  LuX,
} from "react-icons/lu";


import Avatar from "@/components/avatar";
import * as pathRoute from "@/routes/pathRoutes";


const PublicLayout: FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isRtl = i18n.language === "fa";

  // Handle dark mode state
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  // Handle direction based on language
  useEffect(() => {
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [isRtl, i18n.language]);

  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(nextLang);
  };

  const menuItems = [
    {
      path: pathRoute.homePagePath,
      label: t("nav.home"),
      icon: <FaHome className="w-5 h-5" />,
    },
    {
      path: pathRoute.resumePagePath,
      label: t("nav.resume"),
      icon: <FaFileAlt className="w-5 h-5" />,
    },
    {
      path: pathRoute.portfolioPagePath,
      label: t("nav.portfolio"),
      icon: <FaBriefcase className="w-5 h-5" />,
    },
    {
      path: pathRoute.contactPagePath,
      label: t("nav.contact"),
      icon: <FaPhone className="w-5 h-5" />,
    },
  ];

  // Dynamic document title update based on current route/page
  useEffect(() => {
    const currentMenuItem = menuItems.find(item => item.path === location.pathname);
    const pageTitle = currentMenuItem ? currentMenuItem.label : t("nav.home");
    document.title = `${t("common.name")} | ${pageTitle}`;
  }, [location.pathname, i18n.language, t]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-800 dark:text-slate-100 flex flex-col md:flex-row transition-all duration-300">
      
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md sticky top-0 z-30 border-b border-slate-200 dark:border-slate-800">
        <span className="font-bold text-lg text-emerald-600 dark:text-emerald-500 font-inter">
          {t("common.name")}
        </span>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar - Desktop & Mobile Overlay */}
      <aside
        className={`fixed md:sticky top-0 z-50 h-screen w-[280px] flex flex-col justify-between p-6 bg-slate-50/50 dark:bg-slate-950/50 border-e border-slate-200/50 dark:border-slate-900/50 backdrop-blur-md md:backdrop-blur-none transition-transform duration-300 md:translate-x-0 start-0 ${
          isMobileMenuOpen
            ? "translate-x-0"
            : isRtl
            ? "translate-x-full md:translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* User Card */}
        <div className="flex flex-col items-center text-center mt-6">
          <Avatar
            src="/src/assets/images/ali_sobouhi_avatar.jpg"
            name={t("common.name")}
            size="xl"
            rounded="lg"
            className="shadow-md border border-slate-200 dark:border-slate-800"
          />
          <h1 className="text-xl font-bold mt-4 mb-1 text-slate-800 dark:text-white">
            {t("common.name")}
          </h1>
          <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-500 font-inter tracking-wide uppercase px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/20">
            {t("common.role")}
          </p>

          {/* Social Row */}
          <div className="flex gap-4 mt-5 text-slate-500 dark:text-slate-400">
            <a
              href="https://linkedin.com/in/ali-sobouhi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="mailto:alisoftware1133@gmail.com"
              className="hover:text-emerald-500 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Sidebar Nav */}
        <nav className="flex-1 my-10 flex flex-col gap-1.5 justify-center">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-4 px-4 py-3 rounded-2xl font-medium transition-all duration-200 group ${
                  isActive
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                    : "hover:bg-slate-200/50 dark:hover:bg-slate-900/50 text-slate-600 dark:text-slate-300"
                }`}
              >
                <span
                  className={`${
                    isActive
                      ? "text-white"
                      : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors"
                  }`}
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200/50 dark:border-slate-900/50">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-xl hover:bg-slate-200/50 dark:hover:bg-slate-900/50 text-slate-600 dark:text-slate-300 cursor-pointer"
            aria-label="Toggle language"
          >
            <span className="font-bold tracking-wider">
              {i18n.language === "en" ? "FA" : "EN"}
            </span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-900/50 rounded-xl cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <LuSun className="w-5 h-5" /> : <LuMoon className="w-5 h-5" />}
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay Click Blocker */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/20 dark:bg-black/50 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 flex items-stretch">
        <div className="w-full bg-glass border border-white/20 dark:border-slate-900/40 rounded-3xl shadow-xl flex flex-col p-6 md:p-10 relative overflow-hidden transition-all duration-300">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default PublicLayout;
