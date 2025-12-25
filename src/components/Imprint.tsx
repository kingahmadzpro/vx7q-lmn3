import React from "react";
import { useLanguage } from "../context/language-context";
// import { Link } from "react-router-dom";

const Imprint = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "DE" ? (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h1>Impressum</h1>
          <h2>© 2026 Anees Ahmad - Alle Rechte vorbehalten.</h2>
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h1>Site Notice</h1>
          <p>© 2026 Anees Ahmad - All Rights Reserved.</p>
          <h2>Contact</h2>
          <p>
          <a href="mailto:contact@anees-ahmad.com">Email: contact@anees-ahmad.com</a>
          </p>
        </article>
      )}
    </React.Fragment>
  );
};

export default Imprint;
