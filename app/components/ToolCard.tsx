
import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function ToolCard({
  title,
  description,
  href,
}: ToolCardProps) {
  return (
    <div className="border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition">

      <h2 className="text-2xl font-semibold">
        {title}
      </h2>

      <p className="mt-4 text-gray-600">
        {description}
      </p>

      <Link
        href={href}
        className="inline-block mt-6 text-black font-medium"
      >
        Open Tool →
      </Link>

    </div>
  );
}

