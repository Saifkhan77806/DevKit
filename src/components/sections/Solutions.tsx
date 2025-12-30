import {
  Box,
  Database,
  Plug,
  Shield,
  Toolbox,
  Zap,
  type LucideIcon,
} from "lucide-react";

const Card = ({
  Icon,
  title,
  subtitle,
}: {
  Icon: LucideIcon;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="space-y-6 max-w-sm mx-auto">
      {/* Icon */}
      <div
        className="flex items-center justify-center mx-auto rounded-full 
        h-16 w-16 sm:h-18 sm:w-18 lg:h-20 lg:w-20
        bg-gradient-to-r from-[#2cb4ff] via-[#2e75fd] to-[#3e61a6]"
      >
        <Icon className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-white" />
      </div>

      {/* Text */}
      <div className="text-center space-y-3">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-700">{subtitle}</p>
      </div>
    </div>
  );
};

const Solutions = () => {
  const data = [
    {
      title: "Data Ownership",
      subtitle:
        "You connect your own MongoDB. Your data stays fully under your control, without lock-in.",
      icon: Database,
    },
    {
      title: "Connection Management",
      subtitle:
        "We handle pooling and lifecycle to keep your database stable under load.",
      icon: Plug,
    },
    {
      title: "Request Isolation",
      subtitle:
        "Every request runs in an isolated execution context for safety and reliability.",
      icon: Box,
    },
    {
      title: "Query Safety",
      subtitle:
        "Schemas and validation prevent unsafe or malformed queries from reaching your database.",
      icon: Shield,
    },
    {
      title: "Instant APIs",
      subtitle:
        "Generate secure, structured APIs instantly without repetitive backend boilerplate.",
      icon: Zap,
    },
    {
      title: "Developer SDKs",
      subtitle:
        "Use clean SDKs to interact with your backend from frontend or server code easily.",
      icon: Toolbox,
    },
  ];

  return (
    <section className="poppins py-16 lg:py-24 px-4 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            A Secure Execution Layer for Your Backend
          </h2>
          <p className="italic text-gray-700 max-w-2xl mx-auto">
            DevKit sits between your application and MongoDB, handling the hard
            backend parts for you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-14 mt-14">
          {data.map(({ icon, subtitle, title }, index) => (
            <Card key={index} Icon={icon} title={title} subtitle={subtitle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
