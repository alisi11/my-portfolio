import { FC, lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router";
import * as pathRoute from "@/routes/pathRoutes";
import PublicLayout from "@/layouts/publicLayout";
import Loading from "@/components/Loading";

const Home = lazy(() => import("@/pages/public/Home"));
const Resume = lazy(() => import("@/pages/public/Resume"));
const PortfolioPage = lazy(() => import("@/pages/public/PortfolioPage"));
const Contact = lazy(() => import("@/pages/public/Contact"));

export const AppRoutes: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path={pathRoute.homePagePath} element={<Home />} />
          <Route path={pathRoute.resumePagePath} element={<Resume />} />
          <Route path={pathRoute.portfolioPagePath} element={<PortfolioPage />} />
          <Route path={pathRoute.contactPagePath} element={<Contact />} />
          {/* Fallback to Home */}
          <Route path={pathRoute.othersPagePath} element={<Navigate to={pathRoute.homePagePath} replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
