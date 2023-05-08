// react
import React, { useState } from "react";

// component
import DoActionBtn from "../DoActionBtn";

// styles, icons
import styles from "./styles.module.css";
import { IoIosClose } from "react-icons/io";

export default function HireMeModal({ handleClose, show, colorMode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Select a project type");
  const [description, setDescription] = useState("");

  // prevent scrolling for the body when modal is opened
  if (show === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleProjectTypeChange = (event) => {
    setProjectType(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event, formData) => {
    event.preventDefault();

    const mailtoLink = `mailto:f09661ea08@fireboxmail.lol?subject=Hire Me Form Submission&body=Name: ${name}%0AEmail: ${email}%0AProjectType: ${projectType}%0AMessage: ${description}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className={`${show ? styles.modal : styles.hideModal}`}>
      <section className={styles.modalMain}>
        <header>
          <h3>What project are you looking for?</h3>
          <span
            className={`${
              colorMode === "dark"
                ? styles.closeIconCont
                : styles.closeIconContLight
            }`}
            onClick={handleClose}
          >
            <IoIosClose className={styles.closeIcon} />
          </span>
        </header>

        <form
          onSubmit={handleSubmit}
          action="mailto:huthaefaaltete094@gmail.com"
          method="post"
        >
          {/* <label htmlFor="name">Name:</label> */}
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Name"
          />

          {/* <label htmlFor="email">Email:</label> */}
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />

          {/* <label htmlFor="project-type">Project type:</label> */}
          <select
            id="project-type"
            value={projectType}
            onChange={handleProjectTypeChange}
          >
            <option value="" hidden>
              Select a project type
            </option>
            <option value="Web Application">Web Application</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Branding">Branding</option>
          </select>

          {/* <label htmlFor="description">Project description:</label> */}
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Description"
          />

          <button type="submit">Send Request</button>
        </form>
      </section>
    </div>
  );
}
