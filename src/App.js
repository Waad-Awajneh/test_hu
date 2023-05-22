// react
import { lazy, Suspense } from "react";
// react-router-dom
import { Routes, Route } from "react-router-dom";

// components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import GoToTopBtn from "./components/GoToTopBtn/index";
import Spinner from "./components/Spinner";

// styles
import "./App.css";
import { SkeletonTheme } from "react-loading-skeleton";

// pages
const Home = lazy(() => import("./pages/Home/index.js"));
const Projects = lazy(() => import("./pages/Projects/index.js"));
const Certificates = lazy(() => import("./pages/Certificates/index.js"));
const SingleCertificate = lazy(() =>
  import("./pages/SingleCertificate/index.js")
);
const Repos = lazy(() => import("./pages/Repos/index.js"));
const Uses = lazy(() => import("./pages/Uses/index.js"));
const Articles = lazy(() => import("./pages/Articles/index.js"));
const ArticleTags = lazy(() => import("./pages/ArticleTags/index.js"));
const ArticlePage = lazy(() => import("./pages/ArticlePage/index.js"));
const AboutMe = lazy(() => import("./pages/AboutMe/index"));
const Contact = lazy(() => import("./pages/Contact/index.js"));
const NotFound = lazy(() => import("./pages/NotFound/index.js"));

function App() {
  // return true && <Spinner />;
  return (
    <div className="App">
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <Suspense>
          <NavBar />

          <Routes>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/certificates/:id" element={<SingleCertificate />} />
            <Route path="/repos" element={<Repos />} />
            <Route path="/uses" element={<Uses />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<ArticlePage />} />
            <Route path="/tags/:id" element={<ArticleTags />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </Suspense>
      </SkeletonTheme>

      {/* GoToTop button */}
      <span className="goToTopBtn">
        <GoToTopBtn />
      </span>
    </div>
  );
}

export default App;
