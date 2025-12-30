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
      className={`flex poppins ${
        index % 2 === 0 ? "flex-row-reverse" : "flex-row"
      } w-fit mx-auto gap-x-24`}
    >
      <div className="size-96 relative">
        <Overlay />
        <img src={image} alt="" className="object-cover size-full" />
      </div>
      <div className="my-auto space-y-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="w-3/4 text-gray-800">{subtitle}</p>
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
    <section className="pb-20 poppins">
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-bold">
          Backend Security Is a Time Sink
        </h1>
        <p className="italic text-gray-700">
          Building authentication, JWT handling, and API security takes weeks
          and constant maintenance.
        </p>
      </div>
      {data.map(({ title, image, subtitle }, index) => (
        <Card
          key={index}
          title={title}
          subtitle={subtitle}
          image={image}
          index={index + 1}
        />
      ))}
    </section>
  );
};

export default Problems;
