// react
import React, { useState, useEffect } from "react";
// react-redux
import { useDispatch, useSelector } from "react-redux";

// react-helmet
import { Helmet } from "react-helmet";

// component
import FetchedProject from "../../components/FetchedProject";

// creator functions
import { FetchVercelProjects } from "../../redux/Reducers/VercelReducer/actions";

// styles, icons
import styles from "./styles.module.css";

export default function Projects() {
  const dispatch = useDispatch();
  const { VercelProjects } = useSelector((state) => state.VercelReducer);
  const { NetlifyProjects } = useSelector((state) => state.NetlifyReducer);
  const VercelAndNetlifyProjects = [...VercelProjects, ...NetlifyProjects];
  const [searchValue, setSearchValue] = useState("");

  const searchedProject = VercelAndNetlifyProjects?.filter((project) =>
    project?.name
      .split("-")
      .map((word) => word?.charAt(0).toUpperCase() + word?.slice(1))
      .join(" ")
      .toLowerCase()
      .includes(searchValue?.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchValue(e);
  };

  useEffect(() => {
    dispatch(FetchVercelProjects());
  }, []);

  return (
    <div className={styles.projectsPage}>
      {/* Helmet */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Recent Projects</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className={styles.projectsCont}>
        {/* Projects page header */}
        <div className={styles.projectsHeader}>
          <h1>Projects</h1>
        </div>

        {/* Search felid */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search projects by names 🔎"
            onChange={(e) => handleSearch(e.target.value)}
          />{" "}
        </div>

        {/* Main projects */}
        <div className={styles.projectsContentsCont}>
          {searchedProject?.length > 0 ? (
            searchedProject?.map((project, index) => (
              <FetchedProject key={index} project={project} />
            ))
          ) : (
            <p className={styles.noProjects}>No projects</p>
          )}
        </div>
      </div>
    </div>
  );
}
