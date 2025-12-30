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
    <div className="space-y-7">
      <div
        className="flex items-center mx-auto justify-center rounded-full size-20 p-2 
         bg-gradient-to-r from-[#2cb4ff] via-[#2e75fd] to-[#3e61a6]"
      >
        <Icon className="size-14 text-white" />
      </div>
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-gray-700">{subtitle}</p>
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
    <section className="poppins px-16 pb-20">
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-bold">
          A Secure Execution Layer for Your Backend
        </h1>
        <p className="italic text-gray-700">
          DevKit sits between your application and MongoDB, handling the hard
          backend parts for you.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-16">
        {data.map(({ icon, subtitle, title }, index) => (
          <Card Icon={icon} subtitle={subtitle} title={title} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Solutions;
