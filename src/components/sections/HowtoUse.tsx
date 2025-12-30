import { Timeline } from "../ui/timeline";

const HowtoUse = () => {
  const data = [
    {
      title: "Connect",
      content: (
        <div className="space-y-3 flex flex-row-reverse justify-between">
          <img
            src="/images/landing/problem-1.jpg"
            alt="Connect MongoDB"
            className="size-72 rounded-lg -mt-10"
          />
          <p className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
            Securely connect your own MongoDB database using encrypted
            credentials. You retain full data ownership at all times.
          </p>
        </div>
      ),
    },
    {
      title: "Design",
      content: (
        <div className="space-y-3 flex justify-between flex-row-reverse">
          <img
            src="/images/landing/problem-1.jpg"
            alt="Design schema"
            className="size-72 -mt-10"
          />
          <p className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
            Define collections and schema rules visually to enforce validation
            and query safety automatically.
          </p>
        </div>
      ),
    },
    {
      title: "Generate",
      content: (
        <div className="space-y-3 flex flex-row-reverse">
          <img
            src="/images/landing/problem-1.jpg"
            alt="Generate APIs"
            className="size-72 rounded-lg -mt-10"
          />
          <p className="text-xl text-neutral-700 font-semibold dark:text-neutral-300">
            Instantly generate REST APIs and SDKs without writing repetitive
            backend logic.
          </p>
        </div>
      ),
    },
    {
      title: "Query",
      content: (
        <div className="space-y-3 flex gap-x-10 h-96 flex-row-reverse">
          <img
            src="/images/landing/problem-1.jpg"
            alt="Query data"
            className="size-72 rounded-lg -mt-10"
          />
          <p className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
            Query data safely from frontend or Node.js using scoped API keys and
            isolated execution.
          </p>
        </div>
      ),
    },
  ];

  return (
    // <div className="">
      <Timeline data={data} />
      
    // </div>
  );
};

export default HowtoUse;
