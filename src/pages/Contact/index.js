// react
import React from "react";

// react-helmet
import { Helmet } from "react-helmet";

// component
import DoActionBtn from "../../components/DoActionBtn";

// styles, icons
import styles from "./styles.module.css";
import { MdLocationPin, MdEmail, MdCall } from "react-icons/md";

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      {/* Helmet */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Meet Huthaifa</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className={styles.contactCont}>
        <div className={styles.contactLeftCont}>
          <h2>Contact Details</h2>

          {/* location sector */}
          <div className={`${styles.contactSector} ${styles.locationDetails} `}>
            <span>
              <MdLocationPin className={styles.contactIcon} />
            </span>

            <p>Amman, Jordan</p>
          </div>

          {/* email sector */}
          <div className={`${styles.locationDetails} ${styles.contactSector}`}>
            <span>
              <MdEmail className={styles.contactIcon} />
            </span>

            <p>
              <a href="mailto:huthaefaaltete@rocketmail.com">
                huthaefaaltete@rocketmail.com
              </a>
            </p>
          </div>

          {/* tel sector */}
          <div className={`${styles.locationDetails} ${styles.contactSector}`}>
            <span>
              <MdCall className={styles.contactIcon} />
            </span>

            <p>
              <a href="tel:+962797662401">+962 797 66 2401</a>
            </p>
          </div>
        </div>

        <div className={styles.contactRightCont}>
          <h2>Contact Form</h2>

          <form action="mailto:huthaefaaltete@rocketmail.com" method="post">
            <div>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Subject" />
            </div>

            <div>
              <label htmlFor="Message">Message</label>
              <textarea
                cols={14}
                rows={6}
                id="Message"
                placeholder="Your Message"
              />
            </div>

            <div>
              <DoActionBtn BtnTextContent={"Send Message"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
