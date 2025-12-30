import { Timeline } from "../ui/timeline";

const StepContent = ({
  image,
  alt,
  text,
}: {
  image: string;
  alt: string;
  text: string;
}) => {
  return (
    <div
      className="
      flex flex-col md:flex-row-reverse
      items-center md:items-start
      gap-6 md:gap-10
    "
    >
      {/* Image */}
      <img
        src={image}
        alt={alt}
        className="
          w-full max-w-xs sm:max-w-sm
          rounded-lg
          md:-mt-10
        "
      />

      {/* Text */}
      <p
        className="
        text-base sm:text-lg lg:text-xl
        font-semibold
        text-neutral-700 dark:text-neutral-300
        text-center md:text-left
        max-w-md
      "
      >
        {text}
      </p>
    </div>
  );
};

const HowtoUse = () => {
  const data = [
    {
      title: "Connect",
      content: (
        <StepContent
          image="/images/landing/problem-1.jpg"
          alt="Connect MongoDB"
          text="Securely connect your own MongoDB database using encrypted credentials. You retain full data ownership at all times."
        />
      ),
    },
    {
      title: "Design",
      content: (
        <StepContent
          image="/images/landing/problem-1.jpg"
          alt="Design schema"
          text="Define collections and schema rules visually to enforce validation and query safety automatically."
        />
      ),
    },
    {
      title: "Generate",
      content: (
        <StepContent
          image="/images/landing/problem-1.jpg"
          alt="Generate APIs"
          text="Instantly generate REST APIs and SDKs without writing repetitive backend logic."
        />
      ),
    },
    {
      title: "Query",
      content: (
        <StepContent
          image="/images/landing/problem-1.jpg"
          alt="Query data"
          text="Query data safely from frontend or Node.js using scoped API keys and isolated execution."
        />
      ),
    },
  ];

  return <Timeline data={data} />;
};

export default HowtoUse;
