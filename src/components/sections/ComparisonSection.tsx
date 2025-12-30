import { Check, Minus } from "lucide-react";

const Yes = () => <Check className="size-5 text-green-600 " />;

const No = () => <Minus className="size-5 text-neutral-400" />;

export default function ComparisonSection() {
  return (
    <section className="w-full py-24 poppins">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-12 space-y-3 text-center">
          <h2 className="font-bold text-5xl text-neutral-900 dark:text-white">
            Choosing the Right Backend Approach
          </h2>
          <p className="mt-3 italic text-gray-700  dark:text-neutral-400">
            Different approaches solve different problems. Here’s how DevKit
            compares.
          </p>
        </div>

        {/* ===== Desktop Table ===== */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
          <table className="w-full text-sm">
            <thead className="bg-neutral-100 dark:bg-neutral-900">
              <tr>
                <th className="px-6 py-4 text-left font-medium">Capability</th>
                <th className="px-6 py-4 text-left">Managed Platforms</th>
                <th className="px-6 py-4 text-left">DIY Full-Stack</th>
                <th className="px-6 py-4 text-left">ORM Backends</th>
                <th className="px-6 py-4 texlef text-secondary-my">DevKit</th>
              </tr>
            </thead>

            <tbody className="divide-y dark:divide-neutral-800">
              {[
                {
                  label: "Data Ownership",
                  values: [No, Yes, Yes, Yes],
                },
                {
                  label: "Backend Required",
                  values: [No, No, No, No],
                },
                {
                  label: "Safety Guardrails",
                  values: [Yes, No, No, Yes],
                },
                {
                  label: "API Generation",
                  values: [Yes, No, No, Yes],
                },
                {
                  label: "SDK Support",
                  values: [Yes, No, Yes, Yes],
                },
                {
                  label: "Vendor Lock-In",
                  values: [Yes, No, No, No],
                },
              ].map((row) => (
                <tr
                  key={row.label}
                  className="transition hover:bg-neutral-50 dark:hover:bg-neutral-900/50"
                >
                  <td className="px-6 py-4 font-medium">{row.label}</td>
                  {row.values.map((Icon, i) => (
                    <td key={i} className="px-6 py-4 text-center">
                      <Icon />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ===== Mobile Cards ===== */}
        <div className="md:hidden space-y-6">
          {[
            {
              title: "Managed Platforms",
              points: [
                "Quick setup",
                "Limited control",
                "Platform-managed data",
              ],
            },
            {
              title: "DIY Full-Stack",
              points: [
                "Full flexibility",
                "Manual security",
                "High maintenance",
              ],
            },
            {
              title: "ORM Backends",
              points: ["Strong modeling", "Backend required", "Partial safety"],
            },
            {
              title: "DevKit",
              points: [
                "You own the data",
                "Built-in safety",
                "No backend required",
              ],
              highlight: true,
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`rounded-xl border p-5 ${
                card.highlight
                  ? "border-sky-500 bg-sky-50 dark:bg-sky-900/20"
                  : "border-neutral-200 dark:border-neutral-800"
              }`}
            >
              <h3 className="font-semibold">{card.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                {card.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ===== Who This Is For ===== */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              DevKit is for you if…
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>• You want to own your data fully</li>
              <li>• You don’t want to run backend infrastructure</li>
              <li>• You need safe, production-ready APIs fast</li>
              <li>• You care about security and scalability</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              DevKit may not be for you if…
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>• You want a fully managed database</li>
              <li>• You prefer writing all backend code manually</li>
              <li>• You don’t need API or schema guardrails</li>
            </ul>
          </div>
        </div>

        {/* Closing Line */}
        <p className="mt-10 text-center text-sm text-neutral-600 dark:text-neutral-400">
          <span className="font-medium text-neutral-900 dark:text-white">
            DevKit
          </span>{" "}
          gives you full data ownership with platform-grade safety — without
          backend complexity.
        </p>
      </div>
    </section>
  );
}
