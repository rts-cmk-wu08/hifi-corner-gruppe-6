import ContactPageExternalLink from "../components/ContactPage/ContactPageExternalLink";
import ContactPageForm from "../components/ContactPage/ContactPageForm";
import ContactPageHeader from "../components/ContactPage/ContactPageHeader";
import "../components/ContactPage/ContactPage.css";

const ContactPage = () => {
  return (
    <div className="ContactPage">
      <ContactPageHeader />
      <ContactPageForm />
      <ContactPageExternalLink />
    </div>
  );
};

export default ContactPage;
