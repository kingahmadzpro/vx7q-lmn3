import React from "react";
import { useLanguage } from "../context/language-context";
// import { Link } from "react-router-dom";

const Privacy = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "DE" ? (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
          <h1>Datenschutz&shy;erkl&auml;rung</h1>
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
          <h1>Privacy Policy</h1>
          <h2>General information</h2>
          <p>The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit this website. The term “personal data” comprises all data that can be used to personally identify you. For detailed information about the subject matter of data protection, please consult our Data Protection Declaration, which we have included beneath this copy.</p>
          <h2>How do we record your data?</h2>
          <p>We collect your data as a result of your sharing of your data with us. This may, for instance be information you enter into our contact form.</p>
          <p>Other data shall be recorded by our IT systems automatically or after you consent to its recording during your website visit. This data comprises primarily technical information (e.g., web browser, operating system, or time the site was accessed). This information is recorded automatically when you access this website.</p>
          <h2>What are the purposes we use your data for?</h2>
          <p>A portion of the information is generated to guarantee the error free provision of the website. Other data may be used to analyze your user patterns.</p>
          <h2>What rights do you have as far as your information is concerned?</h2>
          <p>You have the right to receive information about the source, recipients, and purposes of your archived personal data at any time without having to pay a fee for such disclosures. You also have the right to demand that your data are rectified or eradicated. If you have consented to data processing, you have the option to revoke this consent at any time, which shall affect all future data processing. Moreover, you have the right to demand that the processing of your data be restricted under certain circumstances. Furthermore, you have the right to log a complaint with the competent supervising agency.</p>
          <p>Please do not hesitate to contact us at any time if you have questions about this or any other data protection related issues.</p>
        </article>
      )}
    </React.Fragment>
  );
};

export default Privacy;
