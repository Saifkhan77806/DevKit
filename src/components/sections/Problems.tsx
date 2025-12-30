import Overlay from "../blocks/Overlay";

const Card = ({
  title,
  subtitle,
  image,
  index,
}: {
  title: string;
  subtitle: string;
  image: string;
  index: number;
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        index % 2 === 0 ? "lg:flex-row-reverse" : ""
      } mx-auto max-w-6xl items-center gap-8 lg:gap-24 px-4`}
    >
      {/* Image */}
      <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-[420px] aspect-square">
        <Overlay />
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{title}</h2>
        <p className="text-gray-700 max-w-md mx-auto lg:mx-0">{subtitle}</p>
      </div>
    </div>
  );
};

const Problems = () => {
  const data = [
    {
      title: "Backend Security Is a Time Sink",
      subtitle:
        "Building authentication, JWT handling, and API security takes weeks and constant maintenance.",
      image: "/images/landing/problem-1.jpg",
    },
    {
      title: "Managed Platforms Lock You In",
      subtitle:
        "Appwrite-style tools force proprietary databases and limit control as your product grows.",
      image: "/images/landing/problem-2.jpg",
    },
    {
      title: "DIY MERN Becomes Fragile at Scale",
      subtitle:
        "Hand-rolled stacks break under traffic, lack structure, and introduce subtle security risks.",
      image: "/images/landing/problem-3.jpg",
    },
    // TODO:// can add this (optional)
    // {
    //   title: "Too Much Boilerplate, Too Little Progress",
    //   subtitle:
    //     "Developers rewrite the same backend logic instead of shipping real product features.",
    //   image: "/images/landing/problem-3.jpg",
    // },
  ];
  return (
    <section className="py-16 lg:py-24 poppins space-y-16">
      {/* Section Header */}
      <div className="text-center space-y-3 px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          The Hidden Cost of Building Backends
        </h1>
        <p className="italic text-gray-700 max-w-2xl mx-auto">
          Most teams lose weeks reinventing infrastructure instead of shipping
          features.
        </p>
      </div>

      {/* Cards */}
      <div className="">
        {data.map(({ title, image, subtitle }, index) => (
          <Card
            key={index}
            title={title}
            subtitle={subtitle}
            image={image}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Problems;
