import ComparisonSection from "../sections/ComparisonSection";
import ContactUs from "../sections/ContactUs";
import Hero from "../sections/Hero";
import HowtoUse from "../sections/HowtoUse";
import Problems from "../sections/Problems";
import Solutions from "../sections/Solutions";

const Landing = () => {
  return (
    <>
      <Hero />
      <Problems />
      <Solutions />
      <HowtoUse />
      <ComparisonSection />
      <ContactUs />
    </>
  );
};

export default Landing;
