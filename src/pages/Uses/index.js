// react
import React from "react";
// react-router-dom
import { Link } from "react-router-dom";

// react-helmet
import { Helmet } from "react-helmet";

// styles, icons
import styles from "./styles.module.css";

export default function Uses() {
  return (
    <div className={styles.usesPage}>
      {/* Helmet */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Uses, Titi</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className={styles.usesCont}>
        {/* Uses header */}
        <div className={styles.usesHeader}>
          <div className={styles.usesHeaderImage}>
            <img
              src={require("../../assets/images/office.jpg")}
              alt="office picture"
            />
          </div>
        </div>

        {/* Uses main content */}
        <div className={styles.usesContents}>
          <header>
            <h1>Desk Setup & Tools</h1>

            <p>
              In this page you can find the hardwares, tools, softwares,
              services and social platforms I use for my daily work.
            </p>
          </header>

          <div className={styles.usesSections}>
            {/* Desk & hardware */}
            <section>
              <h2>Desk & Hardware</h2>

              <ul>
                <Link
                  target="_blank"
                  to="https://www.hp.com/gb-en/shop/product.aspx?id=6T0Z9EA&opt=ABU&sel=NTB"
                >
                  <li>
                    HP EliteBook i7 Black & Grey with 8 GB RAM and 256 SSD
                  </li>
                </Link>

                <Link
                  target="_blank"
                  to="https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpade/thinkpad-e15-gen-4-(15-inch-amd)/21edcto1wwus1"
                >
                  <li>Lenovo ThinkPad i5 Black with 8 GB RAM and 256 SSD</li>
                </Link>

                <Link
                  target="_blank"
                  to="https://www.microsoft.com/en/accessories/products/mice/microsoft-bluetooth-mouse?activetab=pivot:overviewtab"
                >
                  <li>Microsoft Bluetooth Mouse</li>
                </Link>

                <Link
                  target="_blank"
                  to="https://www.amazon.com/Western-Digital-Elements-Portable-External/dp/B06VVS7S94"
                >
                  <li>WD 1TB Elements Portable External Hard Drive</li>
                </Link>

                <Link
                  target="_blank"
                  to="https://www.ikea.com/jo/en/p/malm-desk-black-brown-00214157/"
                >
                  <li>Solid Wood Brown Desk</li>
                </Link>
                <Link
                  target="_blank"
                  to="https://www.ikea.com/jo/en/p/styrspel-gaming-chair-blue-light-grey-10506693/"
                >
                  <li>Blue Gaming Chair</li>
                </Link>
              </ul>
            </section>

            {/* Coding */}
            <section>
              <h2>Coding</h2>

              <ul>
                <Link target="_blank" to="https://code.visualstudio.com/">
                  <li>Primary editor: VSCode</li>
                </Link>

                <Link target="_blank" to="https://www.sublimetext.com/">
                  <li>Secondary editor: Sublime Text</li>
                </Link>

                <Link target="_blank" to="#">
                  <li>VSCode extensions I use</li>
                </Link>
              </ul>
            </section>

            {/* Platform & Services */}
            <section>
              <h2>Platform & Services</h2>

              <ul>
                <Link target="_blank" to="https://github.com/">
                  <li>GitHub as version control system for code</li>
                </Link>

                <Link target="_blank" to="https://vercel.com/">
                  <li>Vercel for hosting my software projects</li>
                </Link>

                <Link target="_blank" to="https://www.netlify.com/">
                  <li>Netlify for hosting my software projects</li>
                </Link>

                <Link target="_blank" to="https://www.notion.so/">
                  <li>Notion for note taking and project management</li>
                </Link>

                <Link target="_blank" to="https://slack.com/">
                  <li>Slack for communication and collaboration</li>
                </Link>

                <Link target="_blank" to="https://unsplash.com/">
                  <li>Unsplash for stock photography and images</li>
                </Link>
              </ul>
            </section>

            {/* Software & Mac Apps */}
            <section>
              <h2>Software & Windows Apps</h2>

              <ul>
                <Link
                  target="_blank"
                  to="https://www.microsoft.com/en-us/software-download/windows10"
                >
                  <li>Windows 10 as an operating system</li>
                </Link>

                <Link
                  target="_blank"
                  to="https://www.microsoft.com/software-download/windows11"
                >
                  <li>Windows 11 as an operating system</li>
                </Link>

                <Link target="_blank" to="https://www.google.com/chrome/">
                  <li>Google Chrome as default browser</li>
                </Link>

                {/* <Link target="_blank" to="#">
                  <li>Chrome extensions I use</li>
                </Link> */}

                <Link target="_blank" to="https://bing.com/">
                  <li>Microsoft Bing as second browser</li>
                </Link>
              </ul>
            </section>

            {/* Design Tools */}
            <section>
              <h2>Design Tools</h2>

              <ul>
                <Link
                  target="_blank"
                  to="https://www.adobe.com/products/illustrator.html"
                >
                  <li>Adobe Illustrator for designing graphics</li>
                </Link>

                <Link
                  target="_blank"
                  to="https://www.adobe.com/products/photoshop.html"
                >
                  <li>Adobe Photoshop for designing graphics</li>
                </Link>

                <Link
                  target="_blank"
                  to="https://www.adobe.com/products/aftereffects.html"
                >
                  <li>Adobe AfterEffects for making big scenes</li>
                </Link>

                <Link
                  target="_blank"
                  to="https://www.adobe.com/products/premiere.html"
                >
                  <li>Adobe Premiere for editing big scenes</li>
                </Link>

                <Link
                  target="_blank"
                  to="https://helpx.adobe.com/support/xd.html"
                >
                  <li>Adobe XD for Prototyping & Product Design</li>
                </Link>
              </ul>
            </section>

            {/* Social Apps */}
            <section>
              <h2>Social Apps</h2>

              <ul>
                <Link target="_blank" to="https://twitter.com/">
                  <li>Twitter for thoughts</li>
                </Link>

                <Link target="_blank" to="https://linkedin.com/">
                  <li>LinkedIn for network and career</li>
                </Link>

                <Link target="_blank" to="https://www.whatsapp.com/">
                  <li>WhatsApp for messaging</li>
                </Link>

                <Link target="_blank" to="https://www.instagram.com">
                  <li>Instagram for posting some ugly pictures that I take</li>
                </Link>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
